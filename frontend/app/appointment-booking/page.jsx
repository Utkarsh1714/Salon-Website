"use client";

import AnimatedContent from "@/reactbits/AnimatedContent/AnimatedContent";
import BlurText from "@/reactbits/BlurText/BlurText";
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
    <div className="w-full h-screen flex items-center justify-center px-10">
      <div className="flex items-center justify-center gap-20">
        <div className="p-4 md:w-1/2 max-w-md mx-auto space-y-4">
          {/* <h1 className="text-xl md:text-4xl text-center text-[#5B3728] font-medium">Book Appointment</h1> */}
          <BlurText
            text="Book Your Appointment"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-4xl text-center text-[#5B3728] font-medium"
          />
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <p className="text-[#5B3728]">
              Schedule a time that works best for you. Once booked, you&apos;ll
              receive a confirmation email, and you can view your appointment
              details anytime in your account portal.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <input
                placeholder="Your Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border"
                required
              />
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
          </AnimatedContent>
        </div>
        <div className="w-1/2 rounded-tl-2xl rounded-br-2xl hidden md:block items-center justify-center mx-auto">
          <img
            src="/appointment1.jpeg"
            alt="addmission"
            className="w-full lg:w-[400px] rounded-tl-[70px] rounded-br-[70px]"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
