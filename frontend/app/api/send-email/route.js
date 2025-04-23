import { sendAppointmentEmail } from "@/lib/mailer";
import { users } from "@clerk/clerk-sdk-node";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { date, time, note } = await req.json();

  const newDate = new Date(date).toLocaleDateString("en-CA", {
    timeZone: "Asia/Kolkata", // Use "Asia/Kolkata" if you want local India time
  });
  

  try {
    const user = await users.getUser(userId);
    const email = user.emailAddresses[0].emailAddress;

    if (!email) throw new Error("User email not found");

    await sendAppointmentEmail({
      toCustomer: true,
      customerEmail: email,
      date: newDate,
      time,
      note,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Send Email Error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
