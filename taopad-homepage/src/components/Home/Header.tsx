import Link from "next/link";
import Logo from "../icons/Logo";
// import ArrowRight from "../icons/ArrowRight";
import Image from "next/image";
import ButtonLink from "../common/buttonLink";

const Header: React.FC = () => {
    return (
        <nav className="w-full h-[84px] flex items-center  border-b-[1px] border-[#121212] ">
            <div id="nav-links" className="w-[20%] flex justify-center gap-12">
                <Image src={"./logo.svg"} width={150} height={150} alt="logo" />
                <div className="flex flex-row gap-8">
                    <Image src={"./images/x_logo.svg"} width={13} height={13} alt="Twitter" />
                    <Image src={"./images/Telegram_logo.svg"} width={13} height={13} alt="Twitter" />
                </div>
            </div>
            <div className="w-[60%] flex justify-center items-center ">
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
            <div className="h-full w-[20%] flex justify-center items-center border-l-[1px] border-[#121212]">
                <Link href={"/"} className="w-full max-w-[185px] h-[36px] flex justify-center bg-black/50 mr-[40px]">
                    <button className={`w-full flex border-[1px] items-center justify-center  bg-[#2EEA90] rounded-[6px] border-[#2EEA90]`}>
                        <p className="text-[14px] font-[500] text-black">
                            Launch App
                        </p>
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
