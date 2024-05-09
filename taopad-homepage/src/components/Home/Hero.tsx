
// import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";
// import Offers from "./Offers";
import Header from "./Header";
import Link from "next/link";
import ButtonLink from "../common/buttonLink";
import { Content } from "./Content";

export const Hero: React.FC = () => {
    return (
        <div className=" bg-auto flex flex-col min-h-screen relative w-full flex  items-center overflow-x-hidden text-white bg-[url(/images/heroBgBlur.svg)] bg-cover bg-no-repeat"
            style={{
                backgroundSize: "cover",
            }}>
            <div className=" flex flex-col relative w-full">
                <Header />
            </div>
            <div className="flex flex-row w-full h-[calc(100vh-204px)]">
                <div className="relative w-[80%] h-full flex flex-row mt-[100px] pl-[30px]">
                    <div>
                        <div className="w-fit p-2 h-[28px] relative flex items-center justify-between">
                            <div className="absolute w-full h-full"
                                style={{
                                    background: "linear-gradient(0deg, #0D0D0D 0%, #0D0D0D 100%) padding-box, radial-gradient(circle at right, #1A1A1A 60%, #15D176 80%, #B9F8DA 100%) border-box",
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderColor: "transparent",
                                    borderRadius: "100px",
                                }} />
                            <div className="w-[22px] flex justify-center items-center z-[95] p-[7px] m-[3px]">
                                <div className="w-[8px] h-[8px] bg-[#2EEA90] rounded-full border-[0.5px] border-white/opacity-50 z-[99]" />
                            </div>
                            <div
                                className="w-[80px] top-0 absolute h-7 rounded-[100px] border-[1px] border-[transparent] blur-sm"
                                style={{ background: "linear-gradient(270deg, #0D0D0D 60%, #2EEA90 150%) padding-box, radial-gradient(circle at right, #2F2A2F 60%, #15D176 80%, #B9F8DA 100%) border-box", }} />
                            <div className="w-full z-[96] text-[#D1DBE0] text-[12px] font-[400]">New Things Soon</div>
                            <div className="w-[22px] h-[22px] left-[4px] top-[3px] absolute bg-emerald-400 rounded-full blur-[50px]" />
                        </div>
                        <div>
                            <div className="flex gap-3 ">
                                <p className="md:text-[60px] text-[25px] sm:text-[40px] leading-[36px] sm:leading-[72px]">Building</p>
                                <p className="md:text-[60px] text-[25px] sm:text-[40px] leading-[36px] sm:leading-[72px] text-[#2EEA90]"> Launchpad,</p>
                            </div>
                            <p className="md:text-[60px] text-[25px] sm:text-[40px] leading-[36px] md:leading-[72px]">   for Tao ecosystem</p>
                            <p className="text-[#D1DBE08C] text-[10px] md:text-[20px] ">Search for the best presales from tao ecosystem on <br />
                                our launchpad, and start journey with newest projects</p>
                            <div className="flex flex-row gap-4 mt-9">
                                <Link href={"/"} className="w-full max-w-[185px] h-[36px] flex justify-center bg-black/50 ">
                                    <button className={`w-full flex border-[1px] items-center justify-center  bg-[#2EEA90] rounded-[6px] border-[#2EEA90]`}>
                                        <p className="w-full text-[10px] md:text-[14px] font-[500] text-black">
                                            Check Launchpad
                                        </p>
                                    </button>
                                </Link>
                                <Link href={"/"} className="w-full max-w-[185px] h-[36px] flex justify-center bg-black/50 mr-[40px]">
                                    <button className={`w-full flex border-[1px] items-center justify-center  bg-[#0D0D0D] rounded-[6px] border-[#1A1A1A]`}>
                                        <p className="text-[10px] md:text-[14px] font-[500] text-[#D1DBE0]">
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
                <div className="w-[20%] h-full justify-between flex flex-col border-l-[1px] border-[#121212] text-center">
                    <div className="w-full h-full flex flex-col justify-center items-center border-b-[1px] border-[#121212] p-2">
                        <p className="text-[9px] sm:text-[12px] md:text-[24px] font-[400]">43x</p>
                        <p className="text-[7px] sm:text-[10px] md:text-[14px] text-[#D1DBE08C] font-[400]">Project Biggest ATH</p>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center border-b-[1px] border-[#121212]">
                        <p className="text-[9px] sm:text-[12px] md:text-[24px]  font-[400]">500,000+ <span className="text-[6px] sm:text-[9px] md:text-[16px] text-[#D1DBE099]">USD</span></p>
                        <p className="text-[7px] sm:text-[10px]  md:text-[14px] text-[#D1DBE08C] font-[400]">Money Made In Presales</p>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center border-b-[1px] border-[#121212]">
                        <p className="text-[9px] sm:text-[12px] md:text-[24px]  font-[400]">+4300</p>
                        <p className="text-[7px] sm:text-[10px]  md:text-[14px] text-[#D1DBE08C] font-[400]">People That Invested</p>
                    </div>
                    <div className="w-full h-full flex flex-col justify-center items-center ">
                        <p className="text-[9px] sm:text-[12px] md:text-[24px] font-[400]">0x5483...2ECB5</p>
                        <p className="text-[7px] sm:text-[10px] md:text-[14px] text-[#D1DBE08C] font-[400]">Official Contract Address</p>
                    </div>
                </div>
            </div>
            <div className="h-[89px] w-full flex justify-end items-end border-b-[1px] border-[#121212] relative">
                {/* <div className="w-full h-full bg-[#0A0A0A] z-[99]"></div> */}
                <div className="w-fit relative h-full flex items-center gap-[16px] border-t-[1px] border-[#121212] pr-[40px]">
                    <p className="w-fit h-full flex justify-center items-center text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] z-[90] bg-[#0A0A0A] p-2">Partners:</p>
                    <div className="flex gap-[21.04px] BottomToTop2 z-[50]">
                        <Image src={"./images/layerzero-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/bittensor-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/athena-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/vault-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/camelot-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/taoinu-logo.svg"} alt="" width={100} height={100} />
                        <div className="flex sm:hidden ">
                        <Image src={"./images/layerzero-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/bittensor-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/athena-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/vault-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/camelot-logo.svg"} alt="" width={100} height={100} />
                        <Image src={"./images/taoinu-logo.svg"} alt="" width={100} height={100} />
                        </div>
                    </div>
                    <div className="absolute left-[-39px] top-[-14px] h-[115px] bg-transparent border-l-2 border-[#121212] transform rotate-[40deg] z-[9999]"></div>
                </div>
            </div>
        </div>
    )
}