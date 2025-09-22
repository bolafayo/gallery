  
"use client";

import {
  Image as ImageIcon,
  Video,
  Mic,
  Edit3,
  Sparkles,
  PlaySquare,
  Move,
  Cpu,
} from "lucide-react";

const tools = [
  {
    name: "Image",
    desc: "Generate images with text prompts.",
    btn: "Open",
    icon: ImageIcon,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300",
  },
  {
    name: "Video",
    desc: "Animate your ideas into motion.",
    btn: "Open",
    icon: Video,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300",
  },
  {
    name: "Realtime",
    desc: "AI streaming in real-time.",
    btn: "Try",
    icon: Mic,
    color: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300",
  },
  {
    name: "Edit",
    desc: "Edit generated images seamlessly.",
    btn: "Open",
    icon: Edit3,
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
  {
    name: "Enhancer",
    desc: "Enhance details & upscale.",
    btn: "Open",
    icon: Sparkles,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300",
  },
  {
    name: "Video Lipsync",
    desc: "Sync lips with voices.",
    btn: "Open",
    icon: PlaySquare,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    name: "Motion Transfer",
    desc: "Transfer motion between videos.",
    btn: "Open",
    icon: Move,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    name: "Train",
    desc: "Train your own AI model.",
    btn: "Open",
    icon: Cpu,
    color: "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300",
  },
];

export default function Generate() {
  return (
    <section className="px-6 md:px-12 py-6">
   
      <h3 className="text-2xl md:text-3xl font-bold mb-10">Generate</h3>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="flex  justify-between p-6   bg-white dark:bg-neutral-900 dark:border-neutral-800 shadow-sm hover:shadow-md transition"
          >
            <div>
              
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 flex items-center justify-center  ${tool.color}`}
                >
                  <tool.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold">{tool.name}</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {tool.desc}
              </p>
            </div>

          
            <button className="mt-8-fit px-4 py-2 text-sm font-medium border  dark:text-black hover:opacity-90 transition cursor-pointer hover:shadow-md rounded-2xl  ">
              {tool.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
