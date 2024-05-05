import Image from "next/image";
import Link from "next/link";

const FAQsData = [
    {
        id: 1,
        question: "What is $TPAD?",
        answer: "$TPAD is the token associated with TaoPad, allowing for users to collect weekly rewards as well as take part in launchpad sales. No staking is required, simply holding your tokens in a Web3 wallet (such as Metamask) allows for your balance to be whitelisted."
    },
    {
        id: 2,
        question: "How does TaoPad work?",
        answer: "$TPAD is the token associated with TaoPad, allowing for users to collect weekly rewards as well as take part in launchpad sales. No staking is required, simply holding your tokens in a Web3 wallet (such as Metamask) allows for your balance to be whitelisted."
    },
    {
        id: 3,
        question: "What is the total supply of $TPAD?",
        answer: "$TPAD is the token associated with TaoPad, allowing for users to collect weekly rewards as well as take part in launchpad sales. No staking is required, simply holding your tokens in a Web3 wallet (such as Metamask) allows for your balance to be whitelisted."
    },
    {
        id: 4,
        question: "How can I participate in TaoPad launchpads?",
        answer: "$TPAD is the token associated with TaoPad, allowing for users to collect weekly rewards as well as take part in launchpad sales. No staking is required, simply holding your tokens in a Web3 wallet (such as Metamask) allows for your balance to be whitelisted."
    },
    {
        id: 5,
        question: "How can I be a part of the TaoPad community?",
        answer: "$TPAD is the token associated with TaoPad, allowing for users to collect weekly rewards as well as take part in launchpad sales. No staking is required, simply holding your tokens in a Web3 wallet (such as Metamask) allows for your balance to be whitelisted."
    },
]

export const FAQs: React.FC = () => {
    return (
        <div className="mt-[67px] bg-[url(/images/FAQsBgSVG.svg)] bg-no-repeat bg-auto">
            <div className="w-full flex flex-row items-center justify-around mx-auto  mt-[50px]">
                <div className="text-[27px] h-full">
                    <p className="text-[#D1DBE0] text-[48px] leading-[120%]"><span className="text-[#2EEA90]">Frequently<br /></span> Asked Questions</p>
                    <p className="text-[#D1DBE08C] text-[16px]">You want to ask about more things?</p>
                    <div className="mt-[24px]">
                        <Link href={"/"} className="w-full max-w-[148px] h-[36px] flex justify-center bg-black/50 mr-[40px]">
                            <button className={`w-full flex border-[1px] items-center justify-center gap-[8px] bg-[#2EEA90] rounded-[6px] border-[#2EEA90]`}>
                                <Image src={"./images/Telegram_logo.svg"} width={13} height={13} alt="Twitter" />
                                <p className="text-[14px] font-[500] text-black">
                                    Join Telegram
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-[40%] flex flex-col gap-[24px]">
                    {FAQsData.map((item) => (
                        <details key={item.id} className="w-full group border-[1px] border-[#1A1A1A] rounded-[8px] bg-[url('/images/FAQsCardBg.svg')]">
                            <summary
                                className="w-full flex cursor-pointer items-center justify-between text-[16px] text-secondary-900">
                                <div className="w-full flex">
                                    <p className="w-[57px] py-[20px] flex justify-center items-center text-[14px] text-[#D1DBE0]">{item.id}</p>
                                    <p className="w-[100%] pt-[20px] px-[20px] text-[16px] border-x-[1px] border-[#1A1A1A]">{item.question}</p>
                                </div>
                                <div className="w-[56px] flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </div>
                            </summary>
                            <div className="w-full flex">
                                <div className="w-full flex">
                                    <p className="w-[57px] py-[20px] flex justify-center items-center text-[14px] text-[#D1DBE0]"></p>
                                    <p className="w-[100%] pb-[20px] px-[20px] border-x-[1px] border-[#1A1A1A] leading-[150%] font-[14px] text-[#D1DBE08C]">
                                        {item.answer}
                                    </p>
                                </div>
                                <div className="w-[56px] flex justify-center">

                                </div>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};