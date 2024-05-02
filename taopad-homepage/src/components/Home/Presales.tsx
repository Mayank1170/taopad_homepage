import Image from "next/image"

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
                <div className="w-full h-full py-[20px] rounded-[8px] px-[24px] border-[1px] border-[#1A1A1A] bg-no-repeat bg-cover bg-[url('/images/presale_card_bg.svg')]">
                    <div className="relative">
                        <div className="flex justify-between gap-[16px] border-b-[1px] border-[#1A1A1A] py-[21px]">
                            <div className="flex gap-[16px]">
                                <Image src={"./images/taotrade-logo.svg"} alt="Taotrade" width={40} height={30} />
                                <div className="flex flex-col gap-[6px]">
                                    <h1>TaoTrade</h1>
                                    <div className="flex flex-row gap-[2px] items-center"><Image src={"./images/ethereum_logo.svg"} alt="Taotrade" width={10} height={100} /><p className="text-[#D1DBE08C]">Ethereum</p></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 border-[1px] border-[#1A1A1A] rounded-[100px] px-[12px] py-[7px]">
                                <div className="w-[6px] h-[6px] flex flex-col rounded-full bg-[#2EEA90] border-[1px] border-[#2EEA90]" />
                                <p className="text-[14px] font-[400]">Active</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-row justify-between mt-[17px] ">
                                <p><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[21px]">Raised </span><span className="text-gray-300 text-sm font-normal font-['Inter'] leading-[21px]">(60%)</span></p>
                                <div className="text-right">
                                    <span className="text-gray-300 text-base font-normal font-['Inter'] leading-tight">9 239 935.795</span><span className="text-gray-300 text-xl font-normal font-['Inter'] leading-normal"> </span><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[16.80px]">$TTRADE</span>
                                </div>
                            </div>
                            <div className="h-[16px]"></div>
                            <div className="w-full flex flex-row justify-between mt-[17px] border-b-[1px] border-[#1A1A1A] pb-[18px]">
                                <p><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[21px]">Raised </span><span className="text-gray-300 text-sm font-normal font-['Inter'] leading-[21px]">(60%)</span></p>
                                <div className="text-right">
                                    <span className="text-gray-300 text-base font-normal font-['Inter'] leading-tight">9 239 935.795</span><span className="text-gray-300 text-xl font-normal font-['Inter'] leading-normal"> </span><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[16.80px]">$TTRADE</span>
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
                <div className="w-full h-full py-[20px] rounded-[8px] px-[24px] border-[1px] border-[#1A1A1A] bg-no-repeat bg-cover bg-[url('/images/presale_card_bg.svg')]">
                    <div className="relative">
                        <div className="flex justify-between gap-[16px] border-b-[1px] border-[#1A1A1A] py-[21px]">
                            <div className="flex gap-[16px]">
                                <Image src={"./images/taotrade-logo.svg"} alt="Taotrade" width={40} height={30} />
                                <div className="flex flex-col gap-[6px]">
                                    <h1>TaoTrade</h1>
                                    <div className="flex flex-row gap-[2px] items-center"><Image src={"./images/ethereum_logo.svg"} alt="Taotrade" width={10} height={100} /><p className="text-[#D1DBE08C]">Ethereum</p></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 border-[1px] border-[#1A1A1A] rounded-[100px] px-[12px] py-[7px]">
                                <div className="w-[6px] h-[6px] flex flex-col rounded-full bg-[#2EEA90] border-[1px] border-[#2EEA90]" />
                                <p className="text-[14px] font-[400]">Active</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-row justify-between mt-[17px] ">
                                <p><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[21px]">Raised </span><span className="text-gray-300 text-sm font-normal font-['Inter'] leading-[21px]">(60%)</span></p>
                                <div className="text-right">
                                    <span className="text-gray-300 text-base font-normal font-['Inter'] leading-tight">9 239 935.795</span><span className="text-gray-300 text-xl font-normal font-['Inter'] leading-normal"> </span><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[16.80px]">$TTRADE</span>
                                </div>
                            </div>
                            <div className="h-[16px]"></div>
                            <div className="w-full flex flex-row justify-between mt-[17px] border-b-[1px] border-[#1A1A1A] pb-[18px]">
                                <p><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[21px]">Raised </span><span className="text-gray-300 text-sm font-normal font-['Inter'] leading-[21px]">(60%)</span></p>
                                <div className="text-right">
                                    <span className="text-gray-300 text-base font-normal font-['Inter'] leading-tight">9 239 935.795</span><span className="text-gray-300 text-xl font-normal font-['Inter'] leading-normal"> </span><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[16.80px]">$TTRADE</span>
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
                <div className="w-full h-full py-[20px] rounded-[8px] px-[24px] border-[1px] border-[#1A1A1A] bg-no-repeat bg-cover bg-[url('/images/presale_card_bg.svg')]">
                    <div className="relative">
                        <div className="flex justify-between gap-[16px] border-b-[1px] border-[#1A1A1A] py-[21px]">
                            <div className="flex gap-[16px]">
                                <Image src={"./images/taotrade-logo.svg"} alt="Taotrade" width={40} height={30} />
                                <div className="flex flex-col gap-[6px]">
                                    <h1>TaoTrade</h1>
                                    <div className="flex flex-row gap-[2px] items-center"><Image src={"./images/ethereum_logo.svg"} alt="Taotrade" width={10} height={100} /><p className="text-[#D1DBE08C]">Ethereum</p></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 border-[1px] border-[#1A1A1A] rounded-[100px] px-[12px] py-[7px]">
                                <div className="w-[6px] h-[6px] flex flex-col rounded-full bg-[#2EEA90] border-[1px] border-[#2EEA90]" />
                                <p className="text-[14px] font-[400]">Active</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-row justify-between mt-[17px] ">
                                <p><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[21px]">Raised </span><span className="text-gray-300 text-sm font-normal font-['Inter'] leading-[21px]">(60%)</span></p>
                                <div className="text-right">
                                    <span className="text-gray-300 text-base font-normal font-['Inter'] leading-tight">9 239 935.795</span><span className="text-gray-300 text-xl font-normal font-['Inter'] leading-normal"> </span><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[16.80px]">$TTRADE</span>
                                </div>
                            </div>
                            <div className="h-[16px]"></div>
                            <div className="w-full flex flex-row justify-between mt-[17px] border-b-[1px] border-[#1A1A1A] pb-[18px]">
                                <p><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[21px]">Raised </span><span className="text-gray-300 text-sm font-normal font-['Inter'] leading-[21px]">(60%)</span></p>
                                <div className="text-right">
                                    <span className="text-gray-300 text-base font-normal font-['Inter'] leading-tight">9 239 935.795</span><span className="text-gray-300 text-xl font-normal font-['Inter'] leading-normal"> </span><span className="text-gray-300 text-opacity-60 text-sm font-normal font-['Inter'] leading-[16.80px]">$TTRADE</span>
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
            </div>
            <div className="relative flex gap-[17.46px] justify-center">
            <Image className="md:flex hidden" src={"./images/Group_extrude_logo.svg"} alt="Taotrade" width={400} height={30} />
            <Image src={"./images/Group_eth_logo.svg"} alt="Taotrade" width={300} height={30} />
            <Image className="md:flex hidden" src={"./images/Group_taopad_logo.svg"} alt="Taotrade" width={400} height={30} />
            {/* <div className="border-[40px] border-transparent border-solid border-b-green-500 border-r-green-500  " style={{ filter: 'blur(40px)'}}></div> */}
            {/* <div style={{width: "144px", height: "62px", position: "absolute", top: "100px", background: ' linear-gradient(0deg, rgba(46, 234, 144, 0.80) 0%, rgba(46, 234, 144, 0.00) 100%)', boxShadow: '0px 0px 10px 0px', filter: 'blur(0px)'}}></div> */}
            </div>
        </div>
    )
}