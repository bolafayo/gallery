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
    img: "/img1.jpg",
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
    img: "/img7.jpg",
    btn: "Create",
  },
  {
    id: 5,
    title: "Video Magic",
    subtitle: "Turn text prompts into video clips.",
    img: "/img6.jpg",
    btn: "Render",
  },
  {
    id: 6,
    title: "AI Avatars",
    subtitle: "Custom avatars trained with your face.",
    img: "/img4.jpg",
    btn: "Start",
  },
  {
    id: 7,
    title: "3D Models",
    subtitle: "Generate 3D models from text prompts.",
    img: "/img5.jpg",
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
        style={{ transform: `translateX(-${index * 50}%)` }}
      >
        {slides.map((s) => (
          <div
            key={s.id}
            className="relative w-[95%] md:w-[60%] lg:w-[55%] h-[400px] md:h-[400px] flex-shrink-0 rounded-xl overflow-hidden "
          >
            <Image
              src={s.img}
              alt={s.title}
              fill
              className="object-cover object-center"
              priority
            />
         
            <div className="p-6 absolute left-4 bottom-4 text-white max-w-[60%]">
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-2 ">
                  {s.title}
                </h2>
                <p className="max-w-md mb-6 text-sm md:text-base">
                  {s.subtitle}
                </p>
                <button className="bg-white text-black font-medium px-5 py-2 rounded-3xl hover:bg-gray-200 transition">
                  {s.btn}
                </button>
              </div>
            
           
              <div className="absolute   bottom-4  flex items-end gap-2 justify-between px-4">
          <button
            onClick={prevSlide}
            className="bg-white/80 dark:bg-black/60 p-2 rounded-full shadow hover:scale-105 transition"
            title="previous"
          >
            <ChevronLeft className="w-5 h-5 text-black dark:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/80 dark:bg-black/60 p-2 rounded-full shadow hover:scale-105 transition"
            title="next"
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
          title="button"
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-white" : "bg-white/50"
              
            }`}
          ></button>
        ))}
        <div className="absolute button-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-black" : "bg-gray-200 hover:bg-black"
            }`}
          />
        ))}
      </div>
      </div>
      
    </section>
  );
}
