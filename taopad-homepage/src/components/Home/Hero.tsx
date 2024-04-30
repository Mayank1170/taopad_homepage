
// import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";
// import Offers from "./Offers";
import Header from "./Header";
import Link from "next/link";
import ButtonLink from "../common/buttonLink";
import { Content } from "./Content";

export const Hero: React.FC = () => {
    return (
        <div className=" bg-auto flex flex-col min-h-screen relative w-full flex  items-center overflow-x-hidden text-white"
            style={{
                // backgroundPositionX: "10%%",
                // backgroundPositionY: "-5%",
                backgroundSize: "cover",
            }}>
            <div className=" flex flex-col  relative w-screen">
                <Header />
            </div>
            <div className="w-full">
                <div className="w-fit flex items-center gap-[8px] p-[12px] border-[1px] border-[#0F0F0F] rounded-[100px]" style={{
            
                }}>
                    <div className="w-[6px] h-[6px] rounded-full bg-[#2EEA90] border-[1px] border-[#2EEA90]" />
                    <p className="text-[12px]">New Things Soon</p>
                </div>
            </div>
        </div>
    )
}