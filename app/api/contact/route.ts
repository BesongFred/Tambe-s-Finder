// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Missing SENDGRID_API_KEY" }, { status: 500 });
    }

    const form = await request.formData();
    const name = form.get("name")?.toString() || "Anonymous";
    const email = form.get("email")?.toString() || "";
    const phone = form.get("phone")?.toString() || "";
    const subject = form.get("subject")?.toString() || "Contact form submission";
    const message = form.get("message")?.toString() || "";

    const emailTo = process.env.EMAIL_TO;
    if (!emailTo) {
      return NextResponse.json({ ok: false, error: "Missing EMAIL_TO" }, { status: 500 });
    }

    const payload = {
      personalizations: [{ to: [{ email: emailTo }], subject: `Website Contact: ${subject} — ${name}` }],
      from: { email: process.env.FROM_EMAIL || "no-reply@tambe-guesthouse.com", name: "Tambe Guest House" },
      content: [
        {
          type: "text/html",
          value: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Subject:</strong> ${subject}</p><hr/><p>${(message || "").replace(/\n/g, "<br/>")}</p>`,
        },
      ],
    };

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("SendGrid error:", text);
      return NextResponse.json({ ok: false, error: "SendGrid failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, message: "Message sent" });
  } catch (err: any) {
    console.error("Contact form error:", err);
    return NextResponse.json({ ok: false, error: err?.message || "Failed to send message" }, { status: 500 });
  }
}
