"use client"

import { useAuth, useClerk } from "@clerk/nextjs";
import { Facebook, Instagram, MessageCircleMore, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const salonPhoneNumber = "7208606130"; // Replace with your salon's phone number
  const message = "Hello, I would like to book an appointment."; // Pre-filled message

  // WhatsApp URL
  const whatsappURL = `https://wa.me/${salonPhoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const clerk = useClerk();
  const { isSignedIn } = useAuth();

  const handleSignIn = (e) => {
    if (!isSignedIn) {
      e.preventDefault();
      return clerk.openSignIn();
    }
  };
  return (
    <footer className="bg-[#F2E9DF] text-[#5B3728] px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-2xl font-semibold mb-2">Pooja Salon</h2>
          <p className="text-sm">Your beauty, our passion.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link onClick={handleSignIn} href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link onClick={handleSignIn} href="/packages">
                Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">Email: poojasalon@gmail.com</p>
          <p className="text-sm">Phone: +91 93266 69474</p>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/PoojaPalav05/"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a
              href="https://www.instagram.com/poojapalav_05/"
              aria-label="Instagram"
            >
              {/* <Instagram className="w-5 h-5 hover:text-" /> */}
              <Instagram className="w-5 h-5 hover:text-red-600" />
            </a>
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircleMore className=" w-5 h-5 hover:text-green-500" />{" "}
              {/* Font Awesome icon */}
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm border-t border-[#5B3728] pt-4">
        © {new Date().getFullYear()} Pooja Salon. All rights reserved. <br /><span>Developed by Utkarsh Palav</span>
      </div>
    </footer>
  );
};

export default Footer;
