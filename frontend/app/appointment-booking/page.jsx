"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        body: JSON.stringify({
          name,
          date,
          note,
          email: user?.primaryEmailAddress.emailAddress,
        }),
      });

      if (res.ok) {
        alert("Appointment booked successfully!");
        router.push("/");
      } else {
        alert("Error booking appointment!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while booking the appointment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <h1>Book Appointment</h1>
      <input placeholder="Your Name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border" required />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border"
        required
      />
      <textarea
        placeholder="Optional Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full p-2 border"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Book Appointment"
        )}
      </button>
    </form>
  );
};

export default page;
