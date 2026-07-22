import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const form = await request.formData()
    const name = form.get('name')?.toString() || 'Anonymous'
    const email = form.get('email')?.toString() || ''
    const phone = form.get('phone')?.toString() || ''
    const subject = form.get('subject')?.toString() || 'Contact form submission'
    const message = form.get('message')?.toString() || ''

    const emailSubject = `Website Contact: ${subject} — ${name}`
    const emailText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`

    // Transporter configured via environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send mail
    await transporter.sendMail({
      from: `"Tambe Guest House" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: emailSubject,
      text: emailText,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <hr/>
             <p>${(message || '').replace(/\n/g, '<br/>')}</p>`,
    })

    return NextResponse.json({ ok: true, message: 'Message sent' })
  } catch (err: any) {
    console.error('Contact form error:', err)
    return NextResponse.json({ ok: false, error: err?.message || 'Failed to send message' }, { status: 500 })
  }
}
