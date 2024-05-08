import Image from "next/image"

export const Tokonomics: React.FC = () => {
    return (
        <div className="relative w-full flex flex-col justify-center items-center mt-[100px]">
            <div className="w-full text-center flex flex-col gap-[16px] items-center justify-center">
                <h1 className="text-[#D1DBE0] text-3xl sm:text-4xl md:text-[48px]  font-[400]"><span className="text-[#2EEA90]">$TPAD</span> Tokenomics</h1>
                <p className="w-[50%] md:w-[40%] flex text-[#D1DBE08C] text-[11px] md:text-[16px]">We started our launch with 1,000,000 tokens, approximately 350,000 of
                    which were blacklisted from early sniping events – even less with our locked
                    LP. A simple 5/5 tax is applied to buys and sells respectively, which has been
                    used for token buybacks, liquidity additions, accumulation of launch tokens
                    post-release, as well as increasing liquidity, all decided by
                    the community viavoting periods.</p>
            </div>
            <div className="relative flex flex-col justify-center items-center w-full h-full z-[99] ">
                <Image className="" src="/images/TokonomicsBgSVG.svg" width={"150000"} height={800} alt="" />
                <Image className="absolute top-[10%] left-[30%] w-[35%]" src="/images/TokonomicsCenterSVG.png" width={"400"} height={800} alt="" />
                <div className="">
                    <div className="flex flex-col gap-[-5px] absolute top-[28%] left-[11%] sm:left-[14%] md:left-[10%] lg:[14%] text-right">
                        <h1 className="text-[#D1DBE0]  text-[10px] md:text-[20px]">1 000 000</h1>
                        <p className="text-[#D1DBE08C] text-[6px] md:text-[14px]">Total Supply $TPAD</p>
                    </div>
                    <div className="flex flex-col gap-[-5px] absolute top-[28%]  right-[15%] md:right-[19%] text-left">
                    <h1 className="text-[#D1DBE0]  text-[10px] md:text-[20px]">5%</h1>
                        <p className="text-[#D1DBE08C] text-[50%] md:text-[14px]">Buy Tax</p>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col gap-[-5px] absolute top-[45.6%] left-[3%] sm:left-[8%] md:left-[1%] lg:left-[6%] text-right">
                        <h1 className="text-[#D1DBE0]  text-[10px] md:text-[20px]">350 000</h1>
                        <p className="text-[#D1DBE08C] text-[6px] md:text-[14px]">Blacklisted From Sniping</p>
                    </div>
                    <div className="flex flex-col gap-[-5px] absolute top-[45.6%] right-[1%] sm:right-[6%] md:right-[4%] xl:right-[8%] text-left">
                        <h1 className="text-[#D1DBE0]  text-[10px] md:text-[20px]">Task Of Taxes</h1>
                        <p className="text-[#D1DBE08C] text-[6px] md:text-[14px]">For buybacks, liquidity etc. </p>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col gap-[-5px] absolute bottom-[30%] left-[11%] sm:left-[14%] md:left-[10%] lg:[14%] text-right">
                        <h1 className="text-[#D1DBE0]  text-[10px] md:text-[20px]">650 000</h1>
                        <p className="text-[#D1DBE08C] text-[6px] md:text-[14px]">Circulating Supply</p>
                    </div>
                    <div className="flex flex-col gap-[-5px] absolute bottom-[30%] right-[15%] md:right-[19%] text-left">
                        <h1 className="text-[#D1DBE0]  text-[10px] md:text-[20px]">5%</h1>
                        <p className="text-[#D1DBE08C] text-[50%] md:text-[14px]">Sell Tax</p>
                    </div>
                </div>
                <div className="absolute bottom-[10%] flex justify-center text-center">
                    <p className="text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px]">On a weekly basis <span className="text-[#2EEA90]"> $TPAD </span> holders are able<br />
                        to claim rewards including <span className="text-[#2EEA90]">$wTAO</span>,<br />
                        as well as all <span className="text-[#2EEA90]">past launchpad tokens.</span>
                    </p>
                </div>
            </div>

        </div>
    )
}


// top-[40px] sm:top-[0px] md:top-[60px] lg:top-[90px]2EEA90