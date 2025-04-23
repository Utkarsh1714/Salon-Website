"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

const page = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Your Appointments</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : appointments.length === 0 ? (
        <p>You haven't booked any appointments yet.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appt) => (
            <li key={appt._id} className="p-4 border rounded-md">
              <p>
                <strong>Date:</strong> {new Date(appt.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {appt.time}
              </p>
              <p>
                <strong>Status:</strong> {appt.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default page;
