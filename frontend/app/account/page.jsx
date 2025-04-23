"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getTimeSlotLabel = (slot) => {
    switch (slot) {
      case "12-3":
        return "12:00 PM – 3:00 PM";
      case "3-6":
        return "3:00 PM – 6:00 PM";
      case "6-10":
        return "6:00 PM – 10:00 PM";
      default:
        return slot;
    }
  };

  const getStatusInfo = (dateString) => {
    const today = new Date();
    const apptDate = new Date(dateString);

    // Compare only date portion
    const todayStr = today.toDateString();
    const apptStr = apptDate.toDateString();

    if (apptDate < today && apptStr !== todayStr) {
      return {
        bg: "bg-gray-100",
        badge: "Expired",
        badgeStyle: "bg-gray-300 text-gray-700",
      };
    }

    if (apptStr === todayStr) {
      return {
        bg: "bg-blue-100",
        badge: "Today",
        badgeStyle: "bg-blue-500 text-white",
      };
    }

    return {
      bg: "bg-green-100",
      badge: "Upcoming",
      badgeStyle: "bg-green-500 text-white",
    };
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("/api/appointments");
        const data = await res.json();
        console.log(data);

        if (res.ok) {
          setAppointments(data);
        } else {
          setError(data.error || "Failed to fetch appointments");
        }
      } catch (error) {
        setError("Failed to fetch appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="max-w-4xl h-screen mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        📅 Your Appointments
      </h2>

      {loading ? (
        <div className="text-gray-600">Loading...</div>
      ) : error ? (
        <div className="text-red-600 font-medium">{error}</div>
      ) : appointments.length === 0 ? (
        <div className="text-gray-500">You haven't booked any appointments yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {appointments.map((appt) => {
            const { bg, badge, badgeStyle } = getStatusInfo(appt.date);
            return (
              <div
                key={appt._id}
                className={`${bg} border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition-shadow duration-200 relative`}
              >
                <span
                  className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-semibold ${badgeStyle}`}
                >
                  {badge}
                </span>
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Date:</span> {formatDate(appt.date)}
                </p>
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Time:</span> {getTimeSlotLabel(appt.time)}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Note:</span>{" "}
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                      appt.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : appt.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {appt.note || "No notes"}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default page;
