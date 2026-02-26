import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface ContactNotificationProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactNotification({
    name = "John Doe",
    email = "john@example.com",
    subject = "Freelance Project",
    message = "Hello, I need a website designed.",
}: ContactNotificationProps) {
    return (
        <Html>
            <Head />
            <Preview>New Contact Form Submission from {name}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>New Contact Inquiry</Heading>
                    <Text style={text}>
                        <strong>Name:</strong> {name}
                    </Text>
                    <Text style={text}>
                        <strong>Email:</strong> {email}
                    </Text>
                    <Text style={text}>
                        <strong>Subject:</strong> {subject}
                    </Text>

                    <Section style={messageSection}>
                        <Text style={text}>
                            <strong>Message:</strong>
                        </Text>
                        <Text style={messageText}>{message}</Text>
                    </Section>
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
    padding: "20px 0 48px",
    marginBottom: "64px",
};

const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "17px 0 0",
    margin: "0",
    textAlign: "center" as const,
};

const text = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "26px",
    margin: "16px 20px",
};

const messageSection = {
    backgroundColor: "#f9f9f9",
    borderRadius: "5px",
    margin: "20px",
    padding: "10px",
};

const messageText = {
    color: "#333",
    fontSize: "14px",
    lineHeight: "24px",
    margin: "0 10px",
    whiteSpace: "pre-wrap" as const,
};
