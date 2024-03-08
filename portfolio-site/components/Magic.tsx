import * as React from 'react';
import Image from 'next/image';

export interface MagicProps {
    img?: string;
    iconTitle: string;
    className?: string;
    sparkles?: string;
    size?: 1 | 2 | 3
}

export const Magic: React.FC<MagicProps> = (props: MagicProps) => {
    const IconSizes = ["h-10 w-10", "h-14 w-14", "h-20 w-20"]
    const textSizes = ["text-sm", "text-xl", "text-2xl"]

    const imageSize = props.size ? IconSizes[props.size - 1] : "h-20 w-20"
    const textSize = props.size ? textSizes[props.size - 1] : "text-2xl"
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
            <span className={` ${textSize} font-pixel group-hover:animate-float text-center `}>{props.iconTitle}</span>
            <div className={`${imageSize} relative items-center group space-y-8`}>


                {/* <div className=' h-20 w-20 relative overflow-hidden'>
                <Image src={iconTitle}
                    alt={"No iconTitle"}
                    fill
                    className={`top-[110px] relative group-hover:animate-scroll`}
                />
                <Image
                    src={iconTitle}
                    alt={"No iconTitle"}
                    fill
                    className={`relative group-hover:animate-scroll`}
                    style={{ animationDelay: '1s' }}

                />

            </div> */}

                <Image fill src={imgSrc} alt={"No Magic"} className=' group-hover:animate-float '></Image>


            </div>
        </div >
    );
}