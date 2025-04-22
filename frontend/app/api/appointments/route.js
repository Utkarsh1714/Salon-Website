import { clerkClient } from "@clerk/clerk-sdk-node";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, date, note, email } = body;

  try {
    const users = await clerkClient.users.getUserList({
      emailAddress: [email],
    });
    const user = users[0];

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update public metadata
    await clerkClient.users.updateUser(user.id, {
      publicMetadata: {
        appointment: {
          scheduled: true,
          name,
          date,
          note,
        },
      },
    });

    // Email config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailText = `
🎉 Your Appointment is Confirmed!

Thank you for booking with us at Pooja Salon 💖

📅 Date: ${date}
📝 Note: ${note || "N/A"}
📧 Email: ${email}

We can't wait to pamper you! ✨  
If you have any questions or need to reschedule, feel free to contact us.

With love,  
The Pooja Salon Team 💅
`;

    // Email to customer
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Appointment Confirmation",
        text: emailText,
    })

    // Email to owner
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.OWNER_EMAIL,
        subject: "New Appointment Booked",
        text: `
                New appointment booked for ${name}!

                📅 Date: ${date}
                📝 Note: ${note || "N/A"}
                📧 Email: ${email}
               `,
    });

    return NextResponse.json({ success: true, });
  } catch (error) {
    console.error("Error booking appointment:", error);
    return new Response("Error booking appointment", { status: 500 });
  }
}
