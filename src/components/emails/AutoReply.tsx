import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
} from "@react-email/components";
import * as React from "react";

interface AutoReplyProps {
    name: string;
}

export default function AutoReply({ name = "John" }: AutoReplyProps) {
    return (
        <Html>
            <Head />
            <Preview>Thanks for reaching out to AcostaLabs!</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Message Received ✅</Heading>
                    <Text style={text}>Hi {name},</Text>
                    <Text style={text}>
                        Thanks for reaching out! This is an automated confirmation to let you know that I've received your message.
                    </Text>
                    <Text style={text}>
                        I read every inquiry and will get back to you as soon as possible (usually within 24 hours). If you need to add any additional context, feel free to reply directly to this email.
                    </Text>
                    <Text style={text}>
                        Talk soon,
                        <br />
                        <strong>Juan Pablo Acosta</strong>
                        <br />
                        Software Engineer | AcostaLabs
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
