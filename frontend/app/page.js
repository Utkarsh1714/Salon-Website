"use client";

import Navbar from "@/ui/Navbar/Navbar";
import ScrollVelocity from "../reactbits/ScrollVelocity/ScrollVelocity";
import AnimatedContent from "@/reactbits/AnimatedContent/AnimatedContent";
import FlowingMenu from "@/reactbits/FlowingMenu/FlowingMenu";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  // const items = [
  //   {
  //     link: "#",
  //     text: "Mojave",
  //     image: "https://picsum.photos/600/400?random=1",
  //   },
  //   {
  //     link: "#",
  //     text: "Sonoma",
  //     image: "https://picsum.photos/600/400?random=2",
  //   },
  //   {
  //     link: "#",
  //     text: "Monterey",
  //     image: "https://picsum.photos/600/400?random=3",
  //   },
  //   {
  //     link: "#",
  //     text: "Sequoia",
  //     image: "https://picsum.photos/600/400?random=4",
  //   },
  // ];

  const services = [
    { name: "Hair Care", image: "/services/Haircare.jpeg" },
    { name: "Nail Care", image: "/services/NailCare.jpeg" },
    { name: "Skin & Face", image: "/services/SkinFace.jpeg" },
    { name: "Massage and Relaxation", image: "/services/Massage.jpeg" },
    { name: "Makeups", image: "/services/Makeup.jpeg" },
  ];

  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="w-full max-w-dvw overflow-x-hidden">
      <div className="w-full bg-[#F2E9DF]">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-0 py-10 md:py-0">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:-mt-20 md:px-4 md:pl-20">
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
            <div className="flex items-center justify-center flex-col gap-8">
              <div className="w-full max-w-sm md:max-w-md flex flex-col items-center justify-center">
                <img
                  src="/logo2.png"
                  alt="logo"
                  className="w-[200px] md:w-[300px]"
                />
              </div>
              <div className="flex flex-col items-center text-center gap-6 px-4 md:px-1">
                <h1 className="text-[#5B3728] text-xl md:text-2xl font-medium">
                  “Elegance Perfected – 20+ Years of Beauty Expertise”
                </h1>
                <h1 className="text-[#5B3728] text-xl md:text-2xl font-medium">
                  “Where Beauty Meets Expertise – Your Ultimate Destination for
                  Pampering and Style”
                </h1>
                <button className="px-6 py-2 text-lg bg-[#C46842] text-white rounded-md">
                  Book Appointment
                </button>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center pt-6">
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
            <img
              src="/interior_img1.jpg"
              alt="hero"
              className="w-[90%] md:w-[500px] h-auto rounded-tl-[100px] rounded-br-[100px] object-cover"
            />
          </AnimatedContent>
        </div>
      </div>

      {/* Introduction Section */}

      <div className="px-4 md:px-20 py-10 md:py-20 flex items-center justify-center">
        <div className="bg-[#F2E9DF] w-full rounded-4xl flex flex-col md:flex-row items-center justify-center p-6 md:py-20">
          {/* Owner Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <img
              src="/hero_img1.jpg"
              alt="owner"
              className="w-[300px] md:w-[450px] h-auto rounded-tl-[80px] rounded-br-[80px]"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-[#5B3728] flex flex-col items-center md:items-center px-4 md:pr-10 space-y-4 md:-mt-20">
            <img
              src="/Introduction2.png"
              alt="img"
              className="w-[200px] md:w-[350px] mix-blend-color-burn"
            />
            <div className="text-base md:text-xl space-y-4">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                cum, dolorem veritatis reiciendis quaerat ullam est dolor harum
                corporis necessitatibus itaque sed, soluta facilis quia
                exercitationem! Minima, ab sunt dolor provident ullam nemo
                libero blanditiis illo voluptatibus voluptatem voluptate
                obcaecati, voluptatum amet repellat voluptates tenetur nesciunt
                quas quos iure aperiam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                suscipit?
              </p>
              <div className="flex flex-col items-start justify-center pt-5 text-lg font-semibold">
                <h4>Pooja Palav</h4>
                <p>Bhayandar, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Velocity Section */}
      <ScrollVelocity
        texts={["Slay. Style. Shine.", "Where beauty meets artistry."]}
        velocity={100}
        className="custom-scroll-text text-[#5B3728] px-20"
      />

      {/* Services Section */}
      <div className="py-10 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div>
            <img src="/Services.png" alt="Services" width={300} height={300} />
          </div>
          <div
            className="flex flex-col md:flex-row items-center justify-center w-full relative"
            onMouseMove={handleMouseMove}
          >
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center z-50 px-10 md:px-16">
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
                {services.map((service, index) => (
                  <Link className="w-full" key={index} href={"/services"}>
                    <div className="w-full">
                      <h1
                        className="text-3xl text-[#5B3728] font-semibold w-full text-center cursor-pointer"
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        {service.name}
                      </h1>
                      <hr className="border-2 border-[#E5C682] w-full my-5" />
                    </div>
                  </Link>
                ))}
              </AnimatedContent>
            </div>
            {hovered !== null && (
              <img
                src={services[hovered].image}
                alt="Preview"
                className="fixed object-cover pointer-events-none rounded-lg shadow-lg transition-all duration-200 ease-out z-40"
                style={{
                  top: mousePos.y + 20,
                  left: mousePos.x + 20,
                  width: "250px",
                  height: "160px",
                }}
              />
            )}
            <div className="w-full md:w-1/2 absolute md:relative z-0 pt-16 md:pt-0 opacity-35 md:opacity-100">
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
                <img src="/Service-logo.png" alt="" />
              </AnimatedContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
