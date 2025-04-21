import AnimatedContent from "@/reactbits/AnimatedContent/AnimatedContent";
import CircularGallery from "@/reactbits/CircularGallery/CircularGallery";
import SplitText from "@/reactbits/SplitText/SplitText";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full max-w-dvw">
      <div className="w-full max-h-[70vh] overflow-hidden">
        <img src="/about2.jpg" alt="about" className="w-full object-cover" />
      </div>

      <div className="w-full flex items-center justify-center pt-10 px-8">
        <SplitText
          text='" The Heart Behind the Glam "'
          className="text-[30px] text-center md:text-6xl lg:text-[5rem] text-[#5B3728] font-medium italic"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>

      {/* Section 1 - Left */}
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
        <div className="flex flex-col lg:flex-row items-center px-8 md:px-20 pt-20 gap-8">
          <div className="lg:w-1/2 text-left space-y-6 text-[#5B3728]">
            <h2 className="text-[28px] md:text-5xl text-[#e1b75c] font-medium">
              Where Beauty Meets Experience
            </h2>
            <p className="text-xl md:text-3xl">
              At Pooja Salon, we believe that beauty is not just a service –
              it's an experience. With over 20 years of excellence in the beauty
              and wellness industry, our salon has been a sanctuary for women
              seeking elegance, relaxation, and transformation.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/a1.jpeg"
              alt="Experience"
              className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </AnimatedContent>

      {/* Section 2 - Right */}
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
        <div className="flex flex-col lg:flex-row-reverse items-center px-8 md:px-20 pt-20 gap-8">
          <div className="lg:w-1/2 text-left space-y-6 text-[#5B3728]">
            <h2 className="text-[28px] md:text-5xl text-[#e1b75c] font-medium">
              Our Story
            </h2>
            <p className="text-xl md:text-3xl">
              Founded by Pooja Palav, a passionate beauty expert and stylist,
              our journey began with a simple goal – to empower every woman to
              feel confident and radiant in her own skin. What started as a
              modest salon has today become a trusted destination for thousands
              of women who value both quality and care.
            </p>
            <p className="text-xl md:text-3xl">
              Our commitment to <strong>personalized beauty</strong> and
              continuous learning has kept us ahead in trends while never losing
              the warmth of traditional service.
            </p>
          </div>
          <div className="lg:w-1/3">
            <img
              src="/owner.webp"
              alt="Our Story"
              className="rounded-2xl shadow-lg object-contain h-[400px]"
            />
          </div>
        </div>
      </AnimatedContent>

      {/* Section 3 - Left */}
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
        <div className="flex flex-col lg:flex-row items-center px-8 md:px-20 pt-20 gap-8 md:gap-30">
          <div className="lg:w-1/2 text-left space-y-6 text-[#5B3728]">
            <h2 className="text-[28px] md:text-5xl text-[#e1b75c] font-medium">
              What Makes Us Special?
            </h2>
            <ul className="space-y-4 text-xl md:text-3xl list-none">
              <li>• 🌸 20+ Years of Experience in Ladies Beauty Care</li>
              <li>• 💇‍♀️ Certified Experts in Hair, Skin, and Bridal Styling</li>
              <li>• 🌿 Hygienic, Peaceful & Luxurious Ambience</li>
              <li>• 💞 One-on-One Consultations Tailored to Your Needs</li>
              <li>
                • 🏆 Trusted by Brides, Celebrities & Everyday Women Alike
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3">
            <img
              src="/a3.jpeg"
              alt="Experience"
              className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </AnimatedContent>

      {/* Section 4 - Right */}
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
        <div className="flex flex-col lg:flex-row-reverse items-center px-8 md:px-20 pt-20 gap-8">
          <div className="lg:w-1/2 text-left space-y-6 text-[#5B3728]">
            <h2 className="text-[28px] md:text-5xl text-[#e1b75c] font-medium">
              Our Philosophy
            </h2>
            <p className="text-xl md:text-3xl">
              We believe that true beauty lies in confidence and comfort. That's
              why every service we offer is tailored to enhance your natural
              beauty — not change it. Whether you're here for a quick refresh or
              a bridal makeover, we take pride in creating a calming and
              rejuvenating experience for you.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/hero_img2.webp"
              alt="Experience"
              className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </AnimatedContent>

      {/* Section 5 - Left */}
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
        <div className="flex flex-col lg:flex-row items-center justify-center px-8 md:px-20 pt-20 gap-8">
          <div className="lg:w-full text-left space-y-6 text-[#5B3728]">
            <h2 className="text-[28px] md:text-5xl text-[#e1b75c] font-medium text-center">
              Visit Us
            </h2>
            <p className="text-xl md:text-3xl">
              Come, be a part of our journey and let us be a part of yours. At
              Pooja Salon, you're not just a client — you're family.
            </p>
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
};

export default page;