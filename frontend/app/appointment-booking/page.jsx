"use client";

import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import AnimatedContent from "@/reactbits/AnimatedContent/AnimatedContent";
import BlurText from "@/reactbits/BlurText/BlurText";
import CircularText from "@/reactbits/CircularText/CircularText";
import SplitText from "@/reactbits/SplitText/SplitText";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { date } from "zod";

const page = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const [form, setForm] = useState({ date: null, time: "", note: "" });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form.date)
  console.log(form.time);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //const res = await axios.post("/api/appointments", form);
      const res = await axios.post("/api/appointments", {
        ...form,
        date: form.date?.toLocaleDateString("en-CA"), // Format: YYYY-MM-DD
      });

      toast.success("Appointment booked successfully!");

      // Send email in background
      axios.post("/api/send-email", form).catch((err) => {
        toast.error("Failed to send confirmation email.");
        console.warn("Email error:", err?.response?.data || err.message);
      });

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
          <div className="flex items-center justify-center">
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
            <CircularText
  text="SLAY*STYLE*SHINE*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class text-[#E5C682]"
/>
          </div>
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
            <p className="text-[#5B3728] pt-5">
              Schedule a time that works best for you. Once booked, you&apos;ll
              receive a confirmation email, and you can view your appointment
              details anytime in your account portal.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div>
                <p className="text-[#5B3728] font-medium mb-2">
                  Select Appointment Date 📅
                </p>
                <Calendar
                  mode="single"
                  selected={form.date}
                  onSelect={(date) => setForm({ ...form, date })}
                  className="rounded-md w-fit border shadow"
                />
              </div>
              <div className="w-full">
                <p className="text-[#5B3728] font-medium mb-2">
                  Choose Time Slot ⌛
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: "12:00 PM – 3:00 PM", value: "12-3" },
                    { label: "3:00 PM – 6:00 PM", value: "3-6" },
                    { label: "6:00 PM – 10:00 PM", value: "6-10" },
                  ].map((slot) => (
                    <label
                      key={slot.value}
                      htmlFor={slot.value}
                      className={`group p-4 rounded-lg border transition-all cursor-pointer hover:border-[#C46842] hover:shadow-md 
          ${
            form.time === slot.value
              ? "bg-[#C46842] text-white border-[#C46842]"
              : "bg-white text-[#5B3728]"
          }`}
                    >
                      <input
                        type="radio"
                        id={slot.value}
                        name="time"
                        value={slot.value}
                        checked={form.time === slot.value}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <span className="text-center block font-semibold">
                        {slot.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <Textarea
                placeholder="Optional Note"
                name="note"
                value={form.note}
                onChange={handleChange}
                className="w-full p-2 border"
              />
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
        <div className="w-1/2 rounded-tl-2xl rounded-br-2xl hidden md:block items-center justify-center mx-auto -mt-72">
          <img
            src="/appointment1.jpeg"
            alt="addmission"
            className="w-full lg:w-[400px] rounded-tl-[70px] rounded-br-[70px] "
          />
        </div>
      </div>
    </div>
  );
};

export default page;
