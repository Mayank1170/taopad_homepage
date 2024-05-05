import Image from "next/image";
import { Inter } from "next/font/google";
import { FAQs, Hero, Strategy } from "@/components/Home";
import { Presales } from "@/components/Home"
import { Tokonomics } from "@/components/Home";
import { Footer } from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] overflow-x-hidden">
      <div className=""><Hero /></div>
      <div className=""><Presales /></div>
      <div><Tokonomics/></div>
    </div>
  );
}
