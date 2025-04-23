"use client";

import AnimatedContent from "@/reactbits/AnimatedContent/AnimatedContent";
import BlurText from "@/reactbits/BlurText/BlurText";
import SplitText from "@/reactbits/SplitText/SplitText";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { date } from "zod";

const page = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [form, setForm] = useState({ date: "", time: "", note: "" });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/api/appointments", form);
      alert("Appointment booked successfully!");
      setForm({ date: "", time: "", note: "" });
      router.push("/account");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while booking the appointment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-15 flex items-center justify-center px-10">
      <div className="flex items-center justify-center gap-20">
        <div className="p-4 md:w-1/2 max-w-md space-y-4">
          <SplitText
            text="Book Your Appointment"
            className="text-xl md:text-4xl text-center text-[#5B3728] font-medium"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
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
              placeholder="Select Date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-2 border"
                required
              />
              <input
              placeholder="Select Time"
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full p-2 border"
                required
              />
              <textarea
                placeholder="Optional Note"
                name="note"
                value={form.note}
                onChange={handleChange}
                className="w-full p-2 border"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 text-lg bg-[#C46842] text-white rounded-md hover:bg-[#E5C682] hover:text-[#5B3728] cursor-pointer"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Confirm Appointment"
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
