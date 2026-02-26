import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import pool from "@/lib/db";
import ContactNotification from "@/components/emails/ContactNotification";
import AutoReply from "@/components/emails/AutoReply";
import { checkRateLimit } from "@/lib/rate-limit";

// Initialize Resend
// In a real app, RESEND_API_KEY should be set in .env.local
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_fallback");

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { name, email, subject, message } = data;

        // 1. Basic Validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Capture IP for basic tracking/rate-limiting
        const ip = req.headers.get("x-forwarded-for") || "unknown";

        // Check Rate Limit (Max 3 per hour per IP)
        const { success } = checkRateLimit(ip);
        if (!success) {
            return NextResponse.json(
                { error: "Too many requests. Please wait an hour before sending another message." },
                { status: 429 }
            );
        }

        // 2. Save to PostgreSQL
        await pool.query(
            `INSERT INTO contacts (name, email, subject, message, ip)
             VALUES ($1, $2, $3, $4, $5)`,
            [name, email, subject, message, ip]
        );

        // 3. Send Emails via Resend (only if API key is present)
        if (process.env.RESEND_API_KEY) {
            // Don't await these so the user's request returns faster
            // Email 1: Notification to Admin
            resend.emails.send({
                from: "AcostaLabs <jp@acostalabs.com>",
                to: "jp@acostalabs.com", // This forwards to your personal email via Cloudflare
                replyTo: email, // If you hit reply, it goes to the user
                subject: `New Lead: ${subject} from ${name}`,
                react: ContactNotification({ name, email, subject, message }),
            }).catch(console.error);

            // Email 2: Auto-reply to the User
            resend.emails.send({
                from: "Juan Pablo Acosta <jp@acostalabs.com>",
                to: email, // The user's email
                subject: "Message Received — AcostaLabs",
                react: AutoReply({ name }),
            }).catch(console.error);
        }

        // 4. Return Success
        return NextResponse.json(
            { success: true, message: "Contact saved and emails queued" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing contact form:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
