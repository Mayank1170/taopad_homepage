
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
                backgroundSize: "cover",
            }}>
            <div className=" flex flex-col relative w-full">
                <Header />
            </div>
            <div className="flex flex-row w-full h-[calc(100vh-204px)]">
                <div className="relative w-[80%] h-full flex flex-row mt-[100px] pl-[30px]">
                    <div>
                        <div className="w-fit flex items-center gap-2 border-[1px] border-[#0F0F0F] rounded-[100px] px-2 py-1">
                            <div className="w-[6px] h-[6px] flex flex-col rounded-full bg-[#2EEA90] border-[1px] border-[#2EEA90]" />
                            <p className="text-[12px] font-[400]">New Things Soon</p>
                        </div>
                        <div>
                            <div className="flex gap-3 ">
                                <p className="md:text-[60px] text-[30px] leading-[72px]">Building</p>
                                <p className="md:text-[60px] text-[30px] leading-[72px] text-[#2EEA90]"> Launchpad,</p>
                            </div>
                            <p className="md:text-[60px] text-[30px] leading-[72px]">   for Tao ecosystem</p>
                            <p className="text-[#D1DBE08C] text-[10px] md:text-[20px] ">Search for the best presales from tao ecosystem on <br />
                                our launchpad, and start journey with newest projects</p>
                            <div className="flex flex-row gap-4 mt-9">
                                <Link href={"/"} className="w-full max-w-[185px] h-[36px] flex justify-center bg-black/50 ">
                                    <button className={`w-full flex border-[1px] items-center justify-center  bg-[#2EEA90] rounded-[6px] border-[#2EEA90]`}>
                                        <p className="w-full text-[14px] font-[500] text-black">
                                            Check Launchpad
                                        </p>
                                    </button>
                                </Link>
                                <Link href={"/"} className="w-full max-w-[185px] h-[36px] flex justify-center bg-black/50 mr-[40px]">
                                    <button className={`w-full flex border-[1px] items-center justify-center  bg-[#0D0D0D] rounded-[6px] border-[#1A1A1A]`}>
                                        <p className="text-[14px] font-[500] text-[#D1DBE0]">
                                            Reedeem Rewards
                                        </p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex hidden absolute  right-[-70px] top-5">
                        <Image src={"./images/hero_bg.svg"} alt="background" width={800} height={800} />
                    </div>
                </div>
                <div className="w-[20%] h-full justify-between flex flex-col border-l-[1px] border-[#121212]">
                    <div className="w-full h-full flex flex-col justify-center items-center border-b-[1px] border-[#121212] p-2">
                        <p className="text-[12px] md:text-[24px] font-[400]">43x</p>
                        <p className="text-[10px] md:text-[14px] font-[400]">Project Biggest ATH</p>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center border-b-[1px] border-[#121212]">
                        <p className="text-[12px] md:text-[24px]  font-[400]">500,000+ <span className="text-[16px]">USD</span></p>
                        <p className="text-[10px] md:text-[14px] font-[400]">Money Made In Presales</p>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center border-b-[1px] border-[#121212]">
                        <p className="text-[12px] md:text-[24px]  font-[400]">+4300</p>
                        <p className="text-[10px] md:text-[14px] font-[400]">People That Invested</p>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center ">
                        <p className="text-[12px] md:text-[24px]  font-[400]">0x5483...2ECB5</p>
                        <p className="text-[10px] md:text-[14px] font-[400]">Official Contract Address</p>
                    </div>
                </div>
            </div>
            <div className="h-[89px] w-full flex justify-end border-b-[1px] border-[#121212] ">
                <div className="w-full lg:w-[50%] h-full flex items-center gap-[16px] border-t-[1px] border-[#121212] pr-[40px]">
                    <p className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter']">Partners:</p>
                    <div className="flex gap-[21.04px]">
                        <Image src={"./images/layerzero-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/bittensor-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/athena-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/vault-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/camelot-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/taoinu-logo.svg"} alt="" width={100} height={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}