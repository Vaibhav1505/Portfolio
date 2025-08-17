import transporter from "@/config/nodemailerConfig";
import path from "path";
import fs from "fs";
import { createObjectCsvWriter } from "csv-writer";
import { NextRequest } from "next/server";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  timestamp?: string;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, message } = body as ContactFormData;

  if (!firstName || !lastName || !email || !message) {
    return new Response(
      JSON.stringify({ message: "Please enter the missing value" }),
      { status: 400 }
    );
  }

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_USER,
      subject: "New Contact from portfolio",
      text: `
            Name:${firstName} ${lastName},
            Email:${email},
            Message:${message}
            `,
    });

    const filePath = path.join(process.cwd(), "contact.csv");
    const fileExists = fs.existsSync(filePath);

    const csvWriter = createObjectCsvWriter({
      path: filePath,
      header: [
        { id: "firstName", title: "First Name" },
        { id: "lastName", title: "Last Name" },
        { id: "email", title: "Email" },
        { id: "message", title: "Message" },
        { id: "timestamp", title: "Timestamp" },
      ],
      append: true,
    });

    if (!fileExists) {
      fs.writeFileSync(
        filePath,
        "First Name,Last Name,Email,Message,TimeStamp\n"
      );
    }

    await csvWriter.writeRecords([
      {
        firstName,
        lastName,
        email,
        message,
        timestamp: new Date().toISOString(),
      },
    ]);

    return new Response(
      JSON.stringify({
        message: "Data send",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in sending email:", error);
    return new Response(JSON.stringify({ message: error }), { status: 500 });
  }
}
