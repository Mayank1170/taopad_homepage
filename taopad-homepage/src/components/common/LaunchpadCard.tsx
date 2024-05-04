import React from "react";

interface LaunchPadCardDetailsProps {
    imagePath: string;
    heading: string;
    content: string;
}

export const LaunchpadCard: React.FC<LaunchPadCardDetailsProps> = ({ imagePath, heading, content }) => {
    return (
        <div className="relative z-[3] w-full h-full py-[20px] overflow-hidden rounded-[8px] px-[24px] border-[1px] border-[#1A1A1A] bg-no-repeat bg-cover bg-[url('/images/presale_card_bg.svg')]">
            <div className="h-full w-full" >
                <div className={`absolute top-[0px] left-[-2px] h-full w-full z-[-5]  bg-no-repeat bg-contain`} style={{backgroundImage: `url(${imagePath})`}} />
                <div className="mt-[146px] bg-[transparent] z-[99]">
                    <h1 className=" text-[16px] text-[#D1DBE0]">{heading}</h1>
                    <CustomComponent content={content} />
                </div>
            </div>
        </div>
    );
};

interface CustomComponentProps {
    content: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({ content }) => {
    return (
        <div
            className="w-[] text-[#D1DBE08C]"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};
