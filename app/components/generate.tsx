  
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
  ChevronDown,
} from "lucide-react";


const tools = [
  {
    name: "Image",
    title: "new",
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
    btn: "Open",
    icon: Mic,
    color: "bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-300",
  },
  {
    name: "Edit",
    title: "new",
    desc: "Edit generated images seamlessly.",
    btn: "Open",
    icon: Edit3,
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-300",
  },
  {
    name: "Enhancer",
    title: "new",
    desc: "Enhance details & upscale.",
    btn: "Open",
    icon: Sparkles,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300",
  },
  {
    name: "Video Lipsync",
    title: "new",
    desc: "Sync lips with voices.",
    btn: "Open",
    icon: PlaySquare,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300",
  },
  {
    name: "Motion Transfer",
    title: "new",
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
    <section className="px-6 md:px-10 py-6">
         <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl md:text-3xl font-bold">Generate</h3>
        <button className="text-sm font-medium text-blue-600 cursor-pointer flex gap-2">
          <ChevronDown className="w-4 "></ChevronDown> Show all
        </button>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool, i) => (
          <div
            key={i}
            className="flex  justify-between mt-8   "
          >
            <div>
              
              <div className="flex items-start  gap-3 ">
                <div
                  className={`w-11 h-12  flex items-center justify-center  ${tool.color}`}
                >
                  <tool.icon className="w-6 h-6 " />
                </div>
                <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-semibold">{tool.name}</h4>
                  {tool.title && (
                    <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                      {tool.title}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400   ">
                {tool.desc}
              </p>
              
                </div>
               
               
                <button className="mb-7 self-end px-2 py-1.5 text-sm font-normal rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white ">
                  
              {tool.btn}
            </button>
              </div>
            
            </div>

          
          
          </div>
        ))}
      </div>
    </section>
  );
}
