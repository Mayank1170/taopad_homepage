
interface TelegramLogoProps {
    fillColor: string
}

const TelegramLogo: React.FC<TelegramLogoProps> = ({fillColor}) => {
    return (
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.651878 4.95405L13.0676 0.0598993C13.6439 -0.152937 14.1471 0.203619 13.9604 1.09446L13.9615 1.09336L11.8475 11.2755C11.6908 11.9974 11.2712 12.1729 10.6843 11.8328L7.46497 9.40716L5.9122 10.9365C5.7405 11.1121 5.59563 11.2602 5.26297 11.2602L5.49154 7.91072L11.458 2.40001C11.7176 2.16632 11.4 2.03467 11.0577 2.26726L3.68445 7.0133L0.505936 5.99958C-0.184065 5.77577 -0.199088 5.29415 0.651878 4.95405Z" fill={`${fillColor}`} />
        </svg>

    );
};

export default TelegramLogo;
