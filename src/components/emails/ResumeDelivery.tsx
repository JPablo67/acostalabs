import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface ResumeDeliveryProps {
    email: string;
    isAdminCopy?: boolean;
}

const RESUME_URL = "https://acostalabs.com/resume.pdf";

export default function ResumeDelivery({
    email,
    isAdminCopy = false,
}: ResumeDeliveryProps) {
    if (isAdminCopy) {
        return (
            <Html>
                <Head />
                <Preview>📄 Resume requested by {email}</Preview>
                <Body style={main}>
                    <Container style={container}>
                        <Heading style={h1}>📄 New Resume Request</Heading>
                        <Text style={text}>
                            Someone just requested your resume.
                        </Text>
                        <Text style={text}>
                            <strong>Email:</strong> {email}
                        </Text>
                        <Text style={text}>
                            They have <strong>not</strong> been sent the resume automatically. You will need to review this request and email them manually.
                        </Text>
                    </Container>
                </Body>
            </Html>
        );
    }

    return (
        <Html>
            <Head />
            <Preview>Your copy of Juan Pablo Acosta's resume is ready to download.</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Here's Your Resume ✅</Heading>
                    <Text style={text}>
                        Thanks for your interest! You can download Juan Pablo Acosta's resume using the button below.
                    </Text>
                    <Section style={{ textAlign: "center" as const, margin: "32px 0" }}>
                        <Button
                            href={RESUME_URL}
                            style={button}
                        >
                            Download Resume
                        </Button>
                    </Section>
                    <Text style={text}>
                        If the button doesn't work, copy and paste this link into your browser:
                    </Text>
                    <Text style={{ ...text, wordBreak: "break-all" as const, color: "#6366f1" }}>
                        {RESUME_URL}
                    </Text>
                    <Text style={footer}>
                        Juan Pablo Acosta — Software Engineer | AcostaLabs
                        <br />
                        <a href="https://acostalabs.com" style={{ color: "#6366f1" }}>
                            acostalabs.com
                        </a>
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "32px 48px 48px",
    maxWidth: "560px",
    borderRadius: "8px",
};

const h1 = {
    color: "#1a1a2e",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center" as const,
    margin: "0 0 24px",
};

const text = {
    color: "#444",
    fontSize: "16px",
    lineHeight: "26px",
    margin: "0 0 16px",
};

const footer = {
    color: "#888",
    fontSize: "13px",
    lineHeight: "20px",
    marginTop: "32px",
    paddingTop: "16px",
    borderTop: "1px solid #eee",
};

const button = {
    backgroundColor: "#6366f1",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "14px 32px",
};
