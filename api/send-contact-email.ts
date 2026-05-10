import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  projectType?: string;
  preferredDate?: string;
  preferredTime?: string;
  meetingReason?: string;
};

function normalize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parseBody(body: unknown): ContactRequestBody {
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as ContactRequestBody;
    } catch {
      return {};
    }
  }

  if (body && typeof body === "object") {
    return body as ContactRequestBody;
  }

  return {};
}

function asLines(payload: {
  name: string;
  email: string;
  message: string;
  company: string;
  projectType: string;
  preferredDate: string;
  preferredTime: string;
  meetingReason: string;
}): string {
  return [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.company ? `Company: ${payload.company}` : "",
    payload.projectType ? `Project Type: ${payload.projectType}` : "",
    payload.preferredDate ? `Preferred Date: ${payload.preferredDate}` : "",
    payload.preferredTime ? `Preferred Time: ${payload.preferredTime}` : "",
    payload.meetingReason ? `Meeting Reason: ${payload.meetingReason}` : "",
    "",
    "Message:",
    payload.message,
    "",
    "Source: Personal Website",
  ]
    .filter(Boolean)
    .join("\n");
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method Not Allowed",
    });
  }

  const body = parseBody(req.body);

  const name = normalize(body.name);
  const email = normalize(body.email);
  const message = normalize(body.message);
  const company = normalize(body.company);
  const projectType = normalize(body.projectType);
  const preferredDate = normalize(body.preferredDate);
  const preferredTime = normalize(body.preferredTime);
  const meetingReason = normalize(body.meetingReason);

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Please provide name, email, and message.",
    });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({
      success: false,
      error: "Please provide a valid email address.",
    });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail =
    process.env.CONTACT_TO_EMAIL || "lazarbukejlovic@icloud.com";

  // Phase 1 fallback: allow frontend behavior testing before credentials are configured.
  if (!resendApiKey) {
    return res.status(200).json({
      success: true,
      mocked: true,
      message: "Email service is not configured yet.",
    });
  }

  const resend = new Resend(resendApiKey);
  const from = "Lazar Bukejlovic <onboarding@resend.dev>";

  const ownerSubject = `New meeting request from ${name}`;
  const ownerText = asLines({
    name,
    email,
    message,
    company,
    projectType,
    preferredDate,
    preferredTime,
    meetingReason,
  });

  const senderSubject = "Thanks for reaching out — Lazar Bukejlovic";
  const senderText = [
    `Hi ${name},`,
    "",
    "Thanks for reaching out through my website. I received your message and will review the details shortly.",
    "",
    "If your message is about a project, collaboration, or interview, I'll get back to you as soon as possible with the next step.",
    "",
    "Best,",
    "Lazar Bukejlovic",
  ].join("\n");

  try {
    await Promise.all([
      resend.emails.send({
        from,
        to: contactToEmail,
        replyTo: email,
        subject: ownerSubject,
        text: ownerText,
      }),
      resend.emails.send({
        from,
        to: email,
        subject: senderSubject,
        text: senderText,
      }),
    ]);

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Failed to send contact emails", error);
    return res.status(500).json({
      success: false,
      error: "We couldn't send your message right now. Please try again shortly.",
    });
  }
}
