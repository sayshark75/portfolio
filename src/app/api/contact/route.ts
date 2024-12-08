import getCurrentDateInTimeZone from "@/utils/getCurrentDatetime";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  // use nodemailer to send a mail using name email and message

  const { name, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"${process.env.USER}" <${process.env.APP_EMAIL}>`,
      to: `${process.env.APP_EMAIL}`,
      subject: `Message From: ${name}`,
      text: `From:\nUser - ${name}, \nEmail - ${email},\n\nMessage - ${message}\n\n${getCurrentDateInTimeZone("Asia/Kolkata")}`,
      html: "",
    });
    return NextResponse.json({ message: "mail sent successfully", status: true, data: info });
  } catch (error) {
    return NextResponse.json({ message: "mail not sent", status: false, data: null });
  }
}
