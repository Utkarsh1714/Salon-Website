import { sendAppointmentEmail } from "@/lib/mailer";
import clientPromise from "@/lib/mongodb";
import appointment from "@/models/appointment";
import { auth } from "@clerk/nextjs/server";
import { getAuth } from "@clerk/nextjs/server";
import { users } from "@clerk/clerk-sdk-node";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { date, time, note } = await req.json();

  try {
    const client = await clientPromise;
    const db = client.db("appointmentsDB");

    // Start inserting the appointment
    const result = await db.collection("appointments").insertOne({
      userId,
      date,
      time,
      note,
      createdAt: new Date(),
    });

    const res = NextResponse.json(
      { success: true, appointmentId: result.insertedId },
      { status: 200 }
    );

    // Send email async without blocking response
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, date, time, note }),
    }).catch((err) => console.error("Background email error:", err));

    return res;
  } catch (error) {
    console.error("Appointment Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET(req) {
    const { userId } = await auth();
  
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  
    try {
      const client = await clientPromise;
      const db = client.db("appointmentsDB");
      const appointments = await db
        .collection("appointments")
        .find({ userId })
        .sort({ date: -1 })
        .toArray();
  
      return NextResponse.json(appointments, { status: 200 });
    } catch (error) {
      console.error("Get Appointments Error:", error);
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
  }