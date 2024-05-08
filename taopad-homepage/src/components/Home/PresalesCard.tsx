import { stat } from "fs"
import Image from "next/image"

interface PresaleCardProps {
    heading: string,
    imageSrc: string,
    chain: string,
    chainLogo: string,
    status: string,
    raisedPercentage: string,
    raisedValue: string,
    raisePercentage: string,
    raiseValue: string,

}

export const PresaleCard: React.FC<PresaleCardProps> = ({ heading, imageSrc, chain, chainLogo, status, raisePercentage, raiseValue, raisedPercentage, raisedValue }) => {
    return (
        <div className="w-full h-full rounded-[8px] px-[24px] border-[1px] border-[#1A1A1A] bg-no-repeat bg-cover bg-[url('/images/presale_card_bg.svg')]">
            <div className="relative">
                <div className="flex flex-row justify-between items-center gap-[16px] border-b-[1px] border-[#1A1A1A] py-[21px]">
                    <div className="flex gap-[16px]">
                        <Image src={`${imageSrc}`} alt={`${heading}`} width={40} height={30} />
                        <div className="flex flex-col gap-[6px]">
                            <h1>{heading}</h1>
                            <div className="flex flex-row gap-[2px] items-center"><Image src={"./images/ethereum_logo.svg"} alt="Taotrade" width={10} height={100} /><p className="text-[#D1DBE08C]">{chain}</p></div>
                        </div>
                    </div>
                    <div className="w-fit p-2 h-[28px] relative flex items-center justify-between">
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
                            className="w-[80px] top-0 absolute h-7 rounded-[100px] border-[1px] border-[transparent] blur-sm"
                            style={{ background: "linear-gradient(270deg, #0D0D0D 60%, #2EEA90 150%) padding-box, radial-gradient(circle at right, #2F2A2F 60%, #15D176 80%, #B9F8DA 100%) border-box", }} />
                        <div className="w-full z-[99] text-[#D1DBE0] text-[12px] font-[400]">{status}</div>
                        <div className="w-[22px] h-[22px] left-[4px] top-[3px] absolute bg-emerald-400 rounded-full blur-[50px]" />
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="w-full flex flex-row justify-between mt-[17px] ">
                        <p><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[21px]">Raised </span><span className="text-gray-300 text-sm font-normal font-['Inter'] leading-[21px]">({raisedPercentage})</span></p>
                        <div className="text-right">
                            <span className="text-gray-300 text-base font-normal font-['Inter'] leading-tight">{raisedValue}</span><span className="text-gray-300 text-xl font-normal font-['Inter'] leading-normal"> </span><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[16.80px]">$TTRADE</span>
                        </div>
                    </div>
                    <div className="mt-[14px]">
                        <div className="w-full h-[16px] bg-[#F8FAFC0D] relative">
                            <div className="h-full bg-[#2EEA90] absolute left-0 top-0" id="progress" style={{ width: `${raisedPercentage}` }}></div>
                            <div className="h-full absolute left-0 top-0" style={{ width: `${100}%`, backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 1px, #0D0D0D 5px, #0D0D0D 5px)' }}></div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-between mt-[17px] border-b-[1px] border-[#1A1A1A] pb-[18px]">
                        <p><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[21px]">Raised </span><span className="text-gray-300 text-sm font-normal font-['Inter'] leading-[21px]">({raisePercentage})</span></p>
                        <div className="text-right">
                            <span className="text-gray-300 text-base font-normal font-['Inter'] leading-tight">{raiseValue}</span><span className="text-gray-300 text-xl font-normal font-['Inter'] leading-normal"> </span><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[16.80px]">$TTRADE</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between mt-[17px] pb-[18px]">
                    <p><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[21px]">Ending In: </span><span className="text-gray-300 text-sm font-normal font-['Inter'] leading-[21px]">3D : 15H : 32M : 17S</span></p>
                    <div className="text-right">
                        <span className="text-gray-300 text-base font-normal font-['Inter'] leading-tight">show</span><span className="text-gray-300 text-xl font-normal font-['Inter'] leading-normal"> </span><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[16.80px]"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}