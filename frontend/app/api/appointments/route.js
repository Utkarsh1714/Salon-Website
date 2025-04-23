import { sendAppointmentEmail } from "@/lib/mailer";
import clientPromise from "@/lib/mongodb";
import appointment from "@/models/appointment";
import { auth } from "@clerk/nextjs/server";
import { getAuth } from "@clerk/nextjs/server";
import { users } from "@clerk/clerk-sdk-node";
import { NextResponse } from "next/server";

// export async function POST(req) {
//   const { userId } = await auth();

//   if (!userId) {
//     return new Response(JSON.stringify({ error: "Unauthorized" }), {
//       status: 401,
//     });
//   }

//   try {
//       const { date, time, note } = await req.json();
//     const client = await clientPromise;
//     const db = client.db("appointmentsDB");

//     const user = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
//         "Content-Type": "application/json",
//       },
//     }).then((res) => res.json());

//     const customerEmail = user.email_addresses?.[0]?.email_address;
//     console.log(customerEmail);

//     const result = await db.collection("appointments").insertOne({
//       userId,
//       date,
//       time,
//       note,
//       createdAt: new Date(),
//     });

//     await sendAppointmentEmail({
//       toCustomer: true,
//       customerEmail,
//       date,
//       time,
//       note,
//     });

//     return new Response(
//       JSON.stringify({ success: true, appointmentId: result.insertedId }),
//       {
//         status: 200,
//       }
//     );
//   } catch (error) {
//     console.error("Mongo Error:", error);
//     return new Response(JSON.stringify({ error: "Database error" }), {
//       status: 500,
//     });
//   }
// }

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

// export async function GET(req) {
//   try {
//     const { userId } = await auth();

//     if (!userId) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     try {
//       const client = await clientPromise;
//       const db = client.db("appointmentsDB");
//       const appointmentsCollection = await db.collection("appointments");

//       // Find all appointments for the logged-in user
//       const appointments = await appointmentsCollection
//         .find({ userId })
//         .sort({ date: -1 })
//         .toArray();

//       return new Response(JSON.stringify(appointments), {
//         status: 200,
//       });
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//       return new Response(
//         JSON.stringify({ message: "Internal Server Error" }),
//         {
//           status: 500,
//         }
//       );
//     }
//   } catch (error) {
//     console.error("Error fetching appointments:", error);
//     return NextResponse.json({ error: "Server Error" }, { status: 500 });
//   }
// }

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