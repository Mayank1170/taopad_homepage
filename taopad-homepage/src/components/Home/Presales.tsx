import Image from "next/image"
import Link from "next/link"
import ButtonLink from "../common/buttonLink"
import { PresaleCard } from "./PresalesCard"
import { LaunchpadCard } from "../common/LaunchpadCard"


export const Presales: React.FC = () => {
    return (
        <div>
            <div className="h-full flex p-[30px]">
                <div className="h-full flex flex-row items-center justify-between gap-2">
                    <p className="text-gray-300 text-lg font-normal">All Presales </p>
                    <p className="text-gray-300 text-opacity-60 text-sm font-normal">(3)</p>
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-[15px] px-[36px]">
                <PresaleCard imageSrc="./images/taotrade-logo.svg" heading="TaoPad" chain="Ethereum" chainLogo="./images/ethereum_logo.svg" blurryBackground="#2EEA90" statusBackgroundColor="#2EEA90" statusBorderColor="#2EEA90" status="Active" raisedPercentage="60%" raisedValue="9 239 935.795" raisePercentage="100%" raiseValue="11 920 000.000" />
                <PresaleCard imageSrc="./images/taopad.svg" heading="TaoTrade" chain="Ethereum" chainLogo="./images/ethereum_logo.svg" blurryBackground="#D1A815" statusBackgroundColor="#D1A815" statusBorderColor="#D1A815" status="Upcoming" raisedPercentage="0%" raisedValue="0" raisePercentage="100%" raiseValue="5 310 000.000 " />
                <PresaleCard imageSrc="./images/taobank-logo.svg" heading="TaoBank" chain="BSC" chainLogo="./images/binancedex.svg" blurryBackground="#FFF" statusBackgroundColor="#FFFFFF" statusBorderColor="#FFF" status="Ended" raisedPercentage="99.95%" raisedValue="1 499 999.994 " raisePercentage="100%" raiseValue="1 500 000.000" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="relative flex gap-[17.46px] justify-center mt-[68px]">
                    <Image className="md:flex hidden" src={"./images/Group_extrude_logo.svg"} alt="Taotrade" width={400} height={30} />
                    <Image src={"./images/Group_eth_logo.svg"} alt="Taotrade" width={300} height={30} />
                    <Image className="md:flex hidden" src={"./images/Group_taopad_logo.svg"} alt="Taotrade" width={400} height={30} />
                    <Image className="absolute top-[150px] md:flex hidden" src={"./images/blurryTriangle.svg"} alt="Taotrade" width={400} height={30} />
                </div>
                <div className="w-[145px] h-[28px] relative flex items-center justify-between mt-16">
                    <div className="absolute w-full h-full"
                        style={{
                            background: "linear-gradient(0deg, #0D0D0D 0%, #0D0D0D 100%) padding-box, radial-gradient(circle at right, #1A1A1A 60%, #15D176 80%, #B9F8DA 100%) border-box",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "transparent",
                            borderRadius: "100px",
                        }} />
                    <div className="w-[22px] flex justify-center items-center z-[99] p-[7px] m-[3px]">
                        <div className="w-[8px] h-[8px] bg-[#2EEA90] rounded-full border-[0.5px] border-white/opacity-50 z-[99]" />
                    </div>
                    <div
                        className="w-[145px] top-0 absolute h-7 rounded-[100px] border-[1px] border-[transparent] blur-sm"
                        style={{ background: "linear-gradient(270deg, #0D0D0D 60%, #2EEA90 150%) padding-box, radial-gradient(circle at right, #2F2A2F 60%, #15D176 80%, #B9F8DA 100%) border-box", }} />
                    <div className="w-full z-[99] text-[#D1DBE0] text-[12px] font-[400]">Easier Launchpads</div>
                    <div className="w-[22px] h-[22px] left-[4px] top-[3px] absolute bg-emerald-400 rounded-full blur-[50px]" />
                </div>
                <div className="flex flex-col justify-center items-center gap-[16px]">
                    <div className="w-[80%] md:w-[55%] text-center mt-[20px] text-3xl md:text-5xl font-[400] leading-[30zpx] md:leading-[57.60px]">
                        <span className="text-gray-300">Bringing use cases on </span>
                        <span className="text-emerald-400 ">Ethereum</span>
                        <span className="text-gray-300 "> for </span>
                        <span className="text-emerald-400 ">$TAO</span>
                        <span className="text-gray-300 ">, powered by </span>
                        <span className="text-emerald-400 ">$TPAD’s</span>
                        <span className="text-gray-300 "> unique publicly held launchpad approach</span>
                    </div>
                    <div className="w-[50%] md:w-[30%] text-center text-[#D1DBE0]/55 text-sm md:text-base font-normal font-['Inter'] leading-normal">TaoPad offers holder benefits for all launchpad offerings through continued, retroactive rewards to all holders</div>
                </div>
                <div className="mt-[24px]">
                    <Link href={"/"} className="w-full max-w-[185px] h-[36px] flex justify-center bg-black/50 mr-[40px]">
                        <button className={`w-full flex border-[1px] items-center justify-center  bg-[#2EEA90] rounded-[6px] border-[#2EEA90]`}>
                            <p className="text-[14px] font-[500] text-black">
                                Check Launchpad
                            </p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-[20px] mt-[100px]">
                <div className="flex lg:flex-row flex-col gap-[15px] px-[36px]">
                    <LaunchpadCard imagePath="/images/DecentralizedSVG.svg" heading={"Decentralized"} content={'Our <span style="color: #2EEA90;">launchpad</span> allows for all holders to participate    with <span style="color: #2EEA90;">no need to stake</span> or log in to join. Simply holding tokens <span style="color: #2EEA90;">guarantees</span> allocations.'} />
                    <LaunchpadCard imagePath="/images/TransparencyPNG.png" heading={"Transparency"} content={'As all operations on behalf of the team <span style="color: #2EEA90;">(tax use)</span> entrant projects <span style="color: #2EEA90;">(launch details)</span>, and users are performed on the <span style="color: #2EEA90;">EVM</span> , all actions are <span style="color: #2EEA90;">verifiable</span>.'} />
                    <LaunchpadCard imagePath="/images/BridgeSVG.svg" heading={"Bridge"} content={'Powered <span style="color: #2EEA90;">by LayerZero</span>, TaoPad established itself as the<span style="color: #2EEA90;"> first bridge for TAO on Ethereum</span> to other chains, such as <span style="color: #2EEA90;">Arbitrum</span>.'} />

                </div>
                <div className="flex lg:flex-row flex-col gap-[15px] px-[36px]">
                    <LaunchpadCard imagePath="/images/SynergySVG.svg" heading={"Synergy"} content={'With<span style="color: #2EEA90;"> use-case </span> in mind, <span style="color: #2EEA90; "> TaoPad’s </span> primary goal is creating value opportunities for <span style="color: #2EEA90; "> $TAO </span> on <span style="color: #2EEA90; "> Ethereum </span> to entrench itself in <span style="color: #2EEA90; "> DeFi</span>, hitting the ground running with <span style="color: #2EEA90; "> tangential opportunities </span> for crypto’s<span style="color: #2EEA90; "> leading AI project</span>.'} />
                    <LaunchpadCard imagePath="/images/LaunchpadSVG.svg" heading={"Launchpad"} content={'<span style="color: #2EEA90;"> Our launchpad  </span>has evolved over time to cater <span style="color: #2EEA90; "> to all </span> of the<span style="color: #2EEA90; "> $TPAD community</span>, with the next steps in our evolution to become  <span style="color: #2EEA90; "> a fully permissionless </span> launchpad, powered <span style="color: #2EEA90; "> by community jurors </span> in a <span style="color: #2EEA90; "> DAO-like fashion</span>.'} />
                    <LaunchpadCard imagePath="/images/GovernanceSVG.svg" heading={"Governance"} content={'The <span style="color: #2EEA90; ">$TPAD token </span>is particularly <span style="color: #2EEA90;">powerful </span>in that votes are held regularly to allow for <span style="color: #2EEA90;">tax revenues </span>to be nimbly applied to  <span style="color: #2EEA90;">making </span>the <span style="color: #2EEA90;">protocol and token stronger</span>, such as accumulation of tokens for <span style="color: #2EEA90;">airdrops</span>.'} />
                </div>
            </div>
        </div>
    )
}

