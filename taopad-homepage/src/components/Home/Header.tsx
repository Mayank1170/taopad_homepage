import Link from "next/link";
import Logo from "../icons/Logo";
// import ArrowRight from "../icons/ArrowRight";
import Image from "next/image";
import ButtonLink from "../common/buttonLink";

const Header: React.FC = () => {
    return (
        <nav className="w-full flex items-center justify-center border-b-[1px] border-[#121212] py-3">
            <div id="nav-links" className="w-full flex justify-start gap-12">
                <Image src={"./logo.svg"} width={150} height={150} alt="logo" />
                <div className="flex flex-row gap-8">
                    <Image src={"./images/x_logo.svg"} width={13} height={13} alt="Twitter" />
                    <Image src={"./images/telegram_logo.svg"} width={13} height={13} alt="Twitter" />
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="flex flex-row justify-between items-center w-full h-[54px]  border-[1px] text-[14px] font-[500] rounded-[6px] border-[#1A1A1A] ">
                    <Link
                        href="/"
                        className="w-full h-full flex items-center justify-center text-[#2EEA90] bg-[#2EEA900D]/5"
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
            <div className="h-full w-[100%] flex justify-end items-center ">
                <div className="h-full bg-[#121212] w-[1px] mr-[5vh]"/>
                <Link href={"/"} className="w-full max-w-[185px] h-[36px] flex justify-center bg-black/50 mr-[40px]">
                    <button className={`w-full flex border-[1px] items-center justify-center  bg-[#2EEA90] rounded-[6px] border-[#8C8C8C]`}>
                        <p className="text-[14px] font-[500] text-black whitespace-nowrap">
                            Launch App
                        </p>
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
