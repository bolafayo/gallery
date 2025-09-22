"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "WAN 2.2 Image generation",
    subtitle:
      "Generate complex images with the brand new and powerful WAN 2.2 model.",
    img: "/img.jpg",
    btn: "Try WAN 2.2",
  },
  {
    id: 2,
    title: "FLUX.1 Krea",
    subtitle:
      "Download and run our model insights, read the technical report, or generate inside Krea Image.",
    img: "/mg1.jpg",
    btn: "Open Source",
  },
  {
    id: 3,
    title: "More coming soon",
    subtitle: "Stay tuned for new AI features and updates.",
    img: "/img2.jpg",
    btn: "Explore",
  },
  {
    id: 4,
    title: "AI Portraits",
    subtitle: "Generate high-quality portraits with ease.",
    img: "/img3.jpg",
    btn: "Create",
  },
  {
    id: 5,
    title: "Video Magic",
    subtitle: "Turn text prompts into video clips.",
    img: "/img4.jpg",
    btn: "Render",
  },
  {
    id: 6,
    title: "AI Avatars",
    subtitle: "Custom avatars trained with your face.",
    img: "/img5.jpg",
    btn: "Start",
  },
  {
    id: 7,
    title: "3D Models",
    subtitle: "Generate 3D models from text prompts.",
    img: "/img6.jpg",
    btn: "View",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full relative overflow-hidden py-10 bg-background dark:bg-dark">
     
      <div
        className="flex gap-4 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <div
            key={s.id}
            className="relative w-[95%] md:w-[60%] lg:w-[57%] h-[400px] md:h-[400px] flex-shrink-0  rounded-xl overflow-hidden  "
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              className="object-cover object-center"
              priority
            />
         
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-between px-6 md:px-10 text-white py-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
                  {s.title}
                </h2>
                <p className="max-w-md mb-6 text-sm md:text-base">
                  {s.subtitle}
                </p>
                <button className="bg-white text-black font-medium px-5 py-2 rounded-lg hover:bg-gray-200 transition">
                  {s.btn}
                </button>
              </div>

           
              <div className="flex justify-end gap-2">
                <button
                  onClick={prevSlide}
                  className="bg-white/80 dark:bg-black/60 p-2 rounded-full shadow hover:scale-105 transition"
                >
                  <ChevronLeft className="w-5 h-5 text-black dark:text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white/80 dark:bg-black/60 p-2 rounded-full shadow hover:scale-105 transition"
                >
                  <ChevronRight className="w-5 h-5 text-black dark:text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      <div className="flex justify-center mt-6 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
