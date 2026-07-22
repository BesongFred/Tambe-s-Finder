import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Validate required env vars early to provide clear errors
    const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'EMAIL_TO']
    const missing = required.filter(k => !process.env[k])
    if (missing.length) {
      console.error('Missing required SMTP env vars:', missing)
      return NextResponse.json({ ok: false, error: `Missing env vars: ${missing.join(', ')}` }, { status: 500 })
    }

    // Dynamic import to avoid Next.js bundling server-only modules at build time
    const nodemailerMod = await import('nodemailer')
    const nodemailer = nodemailerMod?.default ?? nodemailerMod

    const form = await request.formData()
    const name = form.get('name')?.toString() || 'Anonymous'
    const email = form.get('email')?.toString() || ''
    const phone = form.get('phone')?.toString() || ''
    const subject = form.get('subject')?.toString() || 'Contact form submission'
    const message = form.get('message')?.toString() || ''

    // Masked logging for privacy
    console.log('Contact request received', { from: name, email, subject })
    console.log('Using SMTP host:', process.env.SMTP_HOST?.replace(/([^.])/g, '*').slice(0, 8))

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || 'true') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const emailSubject = `Website Contact: ${subject} — ${name}`
    const emailText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`

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
    const msg = err?.message || 'Failed to send message'
    return NextResponse.json({ ok: false, error: msg }, { status: 500 })
  }
}
