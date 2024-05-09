import Link from "next/link";
import Logo from "../icons/Logo";
import { useState } from "react";
// import ArrowRight from "../icons/ArrowRight";
import Image from "next/image";
import ButtonLink from "../common/buttonLink";
import { RxHamburgerMenu } from "react-icons/rx";


const Header: React.FC = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full h-[84px] flex items-center  border-b-[1px] border-[#121212] gap-4 px-3">
            <div id="nav-links" className="w-full h-full lg:w-[20%] flex justify-between lg:justify-center">
                <div className="mx-3 flex justify-center items-center">
                    <Image src={"./images/TaopadLogoSVG.svg"} width={150} height={150} alt="logo" />
                </div>
                <div className="w-fit flex flex-row gap-8 px-10 justify-center border-x-[1px] border-[#121212]">
                    <Image src={"./images/x_logo.svg"} width={13} height={13} alt="Twitter" />
                    <div className="h-full border-r-[1px] border-[#121212]"></div>
                    <Image src={"./images/Telegram_logo.svg"} width={13} height={13} alt="Telegram" />
                </div>
            </div>
            <div className="w-[60%] hidden lg:flex justify-center items-center ">
                <div className="flex flex-row justify-between items-center w-[50%] h-[40px] p-1 border-[1px] text-[14px] font-[500] rounded-[6px] border-[#1A1A1A] ">
                    <Link
                        href="/"
                        className="w-full h-full flex items-center justify-center text-[#2EEA90] bg-[#2EEA900D]/5 rounded-[6px]"
                    >
                        Home
                    </Link>
                    <Link
                        href="/"
                        className="w-full px-2 flex justify-center text-[#949494] duration-200 "
                    >
                        Documentation
                    </Link>
                    <Link
                        href="/"
                        className="w-full flex justify-center text-[#949494]  duration-200"
                    >
                        Rewards
                    </Link>
                    <Link
                        href="/"
                        className="w-full flex justify-center text-[#949494] duration-200"
                    >
                        Roadmap
                    </Link>
                    <Link
                        href="/"
                        className="w-full flex justify-center text-[#949494] duration-200"
                    >
                        Bridge
                    </Link>
                </div>
            </div>
            <div className="h-full w-[20%] hidden lg:flex justify-center items-center border-l-[1px] border-[#121212]">
                <Link href={"/"} className="w-full max-w-[185px] h-[36px] flex justify-center bg-black/50 mr-[5%]">
                    <button className={`w-full flex border-[1px] items-center justify-center  bg-[#2EEA90] rounded-[6px] border-[#2EEA90]`}>
                        <p className="text-[14px] font-[500] text-black">
                            Launch App
                        </p>
                    </button>
                </Link>
            </div>
            <button className="flex lg:hidden z-[999]" onClick={toggleMenu}>
                <RxHamburgerMenu />
            </button>
            {isMenuOpen && (
                <div className="flex flex-col justify-center items-center gap-[2px] border-b-[1px] border-[#121212] top-0 backdrop-blur-md z-[990] py-[20px] w-full h-[250px] absolute">
                    <Link
                        href="/"
                        className="h-full flex items-center justify-center text-[#2EEA90] rounded-[6px]"
                    >
                        Home
                    </Link>
                    <Link
                        href="/"
                        className="w-full  h-full px-2 flex justify-center text-[#949494]"
                    >
                        Documentation
                    </Link>
                    <Link
                        href="/"
                        className="w-full h-full flex justify-center text-[#949494]"
                    >
                        Rewards
                    </Link>
                    <Link
                        href="/"
                        className="w-full h-full flex justify-center text-[#949494]"
                    >
                        Roadmap
                    </Link>
                    <Link
                        href="/"
                        className="w-full h-full flex justify-center text-[#949494]"
                    >
                        Bridge
                    </Link>
                    <div className="h-full w-full lg:hidden flex justify-center items-center border-l-[1px] border-[#121212]">
                        <Link href={"/"} className=" h-[36px] flex justify-center bg-black/50">
                            <button className={`w-full flex border-[1px] items-center px-3 justify-center  bg-[#2EEA90] rounded-[6px] border-[#2EEA90]`}>
                                <p className="text-[14px] font-[500] text-black">
                                    Launch App
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
