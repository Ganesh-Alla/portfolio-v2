import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Email template
    const htmlTemplate = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #4a4a4a;">New Message from Your Portfolio</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3 style="color: #4a4a4a;">Message:</h3>
          <p style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
        </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: 'allaganesh03@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `From: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: htmlTemplate,
    });

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error in send-message:', error);
    return NextResponse.json({ message: 'An error occurred while sending the message' }, { status: 500 });
  }
}

