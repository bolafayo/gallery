import React from 'react'

export default function footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-2 rounded-1xl m-2">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
    <div className="flex items-center gap-4">
        <img src="/kr-white.webp" alt=""
        className='  bg-black text-gray-500 flex items-center justify-center font-bold w-12 h-12'
        />
    <div className="font-semibold">Krea AI</div>
   
    
    </div>
    <div className='flex justify-center items-center gap-1'>
      Curated by
      <span>
      <img src="/mo.webp" alt="" />
      </span>
      Mobbin
    </div>
   
    </div>
    </footer>
  )
}
