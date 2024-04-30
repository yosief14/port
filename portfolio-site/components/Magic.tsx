import * as React from 'react';
import Image from 'next/image';

export interface MagicProps {
    img?: string;
    iconTitle: string;
    className?: string;
    sparkles?: string;
    size?: string;
}

export const Magic: React.FC<MagicProps> = (props: MagicProps) => {
    const IconSizes = ["h-10 w-10", "h-14 w-14", "h-20 w-20"]
    const textSizes = ["text-sm", "text-xl", "text-2xl"]
    let defaultSize = "h-14 w-14"
    if (props.size && props.size == "small") {
        defaultSize = "h-10 w-10"
    }
    const defualtImages = {
        "JavaScript": "/pixelArt/jsPixelArt.png",
        "CSS": "/pixelArt/cssPixelArt.png",
        "HTML": "/pixelArt/htmlPixelArt.png",
        "Next.js": "/pixelArt/nextjs.svg",
        "React": "/pixelArt/reactLogo.png",
    }

    const imgSrc = props.img ? props.img : defualtImages[props.iconTitle as keyof typeof defualtImages]

    return (
        <div className={`flex flex-col {${props.className} group  items-center gap-2 `}>
            <span className={` text-sm relative md:text-lg font-pixel group-hover:animate-float text-center `}>{props.iconTitle}</span>
            <div className={`${defaultSize} lg:size-14 relative items-center group space-y-8`}>



                <Image fill src={imgSrc} alt={"No Magic"} className=' group-hover:animate-float '></Image>


            </div>
        </div >
    );
}