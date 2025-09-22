// import Image from "next/image";
import Generate from "./components/generate";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return ( 
     <main className="bg-light dark:bg-dark min-h-screen text-black dark:text-white">
      <Navbar />
      <Hero />
      <Generate/>
     
     </main>

  );
}
