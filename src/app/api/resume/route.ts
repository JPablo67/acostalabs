import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rate-limit";
import ResumeDelivery from "@/components/emails/ResumeDelivery";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_fallback");

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        // Basic validation
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: "A valid email address is required." },
                { status: 400 }
            );
        }

        // Rate limit by IP
        const ip = req.headers.get("x-forwarded-for") || "unknown";
        const { success } = checkRateLimit(ip, "resume");
        if (!success) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        // Lead notification to owner
        await resend.emails.send({
            from: "AcostaLabs <jp@acostalabs.com>",
            to: "jp@acostalabs.com",
            replyTo: email,
            subject: `📄 Resume Requested by ${email}`,
            react: ResumeDelivery({ email, isAdminCopy: true }),
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Resume request error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
