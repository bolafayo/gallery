"use client";

import {
  Bell,
  ChevronDown,
  Edit3,
  Folder,
  Headphones,
  Home,
  Image as ImageIcon,
  Menu,
  Mic,
  Moon,
  Sparkles,
  Sun,
  Video,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  
  return (
    <nav className="sticky top-0 z-40 bg-white/60 backdrop-blur-sm dark:bg-slate-900/60 border-b border-transparent dark:border-slate-800 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image src="/imgk.webp" alt="Logo" width={60} height={60} />
            <div className="flex items-center gap-2">
              <span className="block h-4 w-4 rounded-full bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-300"></span>
              <span className="font-medium text-sm">benevolentminibeast</span>
              <ChevronDown size={14} />
            </div>
          </div>

        
          <div className="bg-slate-100 dark:bg-slate-800 rounded-xl px-14 py-3 flex gap-7 items-center shadow-sm">
            <Home size={18} />
            <ImageIcon size={18} />
            <Video size={18} />
            <Mic size={18} />
            <Edit3 size={18} />
            <Sparkles size={18} />
            <Folder size={18} />
          </div>

        
          <div className="flex items-center gap-4">
            <Link href="" className="hidden md:flex items-center gap-1 text-sm hover:bg-slate-200 rounded-2xl p-2">
              <ImageIcon size={14} />
              Gallery
            </Link>
            <Link href="" className="hidden md:flex items-center gap-1 text-sm hover:bg-slate-200 rounded-2xl p-2">
              <Headphones size={14} />
              Support
            </Link>

            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md hover:bg-slate-100 "
              >
                {theme === "dark" ? (
                <Moon size={16} className="text-black" />
                ) : (
                 
                  <Sun size={16} className="text-yellow-500" />
                )}
              </button>
            )}

            <button className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">
              <Bell size={16} />
            </button>
            <span className="block h-5 w-5 rounded-full bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-300"></span>
            <div className="md:hidden">
              <button className="p-2 rounded-md" aria-label="open menu">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
