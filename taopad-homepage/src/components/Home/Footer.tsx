import Link from "next/link";
import Logo from "../icons/Logo";
import Image from "next/image";

export const Footer: React.FC = () => {
    return (
        <footer className="w-full flex flex-row md:flex-col justify-between md:justify-center  border-t-[1px] border-[#121212] mt-[68px] pt-[40px] px-[40px]">
            <div className="max-w-[1200px] w-full flex flex-col gap-[24px] md:flex-row items-center justify-between">
                <div id="about" className="h-full flex flex-col justify-between max-w-[340px] w-full">
                    <div className="w-full flex flex-row justify-between items- md:flex-col gap-[12px]">
                        <div className="w-full flex flex-col gap-[12px]">
                            <p className="text-[12px]]md:text-[24px] text-[#D1DBE0]">Best Presale For Projects</p>
                            <p className="text-[10px] md:text-[14px] text-[#D1DBE08C]">Get access to new tokens before<br />
                                everyone else can get it on market</p>
                        </div>
                        <Link href={"/"} className="w-full max-w-[76px] md:max-w-[153px] h-[18px] md:h-[36px] flex justify-center bg-black/50 mr-[40px]">
                            <button className={`w-full flex border-[1px] items-center justify-center gap-[8px] bg-[#2EEA90] rounded-[3px] md:rounded-[6px] border-[#2EEA90]`}>
                                <p className=" text-[8px] md:text-[14px] font-[500] text-black">
                                    Check Launchpad
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div id="links" className="w-full md:w-fit grid grid-cols-4">
                    <div className="gap-y-3 flex flex-col">
                        <p className="text-[12px] md:text-[16px]">Discover</p>
                        <div className="flex flex-col text-[10px] md:text-[14px] gap-[12px]">
                            <Link href="/" className="opacity-50">
                                Dapp
                            </Link>
                            <Link href="/" className="opacity-50">
                                Docs
                            </Link>
                            <Link href="/" className="opacity-50">
                                Bridge
                            </Link>
                        </div>
                    </div>
                    <div className="gap-y-3 flex flex-col">
                        <p className="text-[12px] md:text-[16px]">About</p>
                        <div className="flex flex-col text-[10px] md:text-[14px] gap-[12px]">
                            <Link href="/" className="opacity-50">
                                Docs
                            </Link>
                            <Link href="/" className="opacity-50">
                                Mission
                            </Link>
                        </div>
                    </div>
                    <div className="gap-y-3 flex flex-col">
                        <p className="text-[12px] md:text-[16px]">$TPAD</p>
                        <div className="flex flex-col text-[10px] md:text-[14px] gap-[12px]">
                            <Link href="/" className="opacity-50">
                                Etherscan
                            </Link>
                            <Link href="/" className="opacity-50">
                                Uniswap
                            </Link>
                            <Link href="/" className="opacity-50">
                                Chart
                            </Link>
                            <Link href="/" className="opacity-50">
                                Tokenomics
                            </Link>
                        </div>
                        <div />
                    </div>
                    <div className="gap-y-3 flex flex-col">
                        <p className="text-[12px] md:text-[16px]">Community</p>
                        <div className="flex flex-col text-[10px] md:text-[14px] gap-[12px]">
                            <Link href="/" className="opacity-50">
                                Telegram
                            </Link>
                        </div>
                        <div />
                    </div>
                </div>
            </div>
            <div className="hidden w-full md:flex flex-row items-end justify-between mt-[-20px]">
                <p className="text-[11px] ml-[25px] my-[20px]">info@taopad.io</p>
                <div className="absolute md:static">
                    <Image src={"/images/TaopadFooterSVG.svg"} width={1000} height={1000} alt={""} />
                </div>
            </div>
        </footer>
    );
};
