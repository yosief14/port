import Image from 'next/image'
import { Magic } from '../Magic'
interface ProjectCardProps {
    title: string;
    description: string;
    img: string;
    githubLink: string;
    liveLink?: string;
    position?: number;

}

const toolsUsed =
    <>
        <Magic size={"small"} img={"/pixelArt/jsPixelArt.png"} iconTitle='JavaScript' ></Magic>
        <Magic size={"small"} img={"/pixelArt/cssPixelArt.png"} iconTitle="CSS"></Magic>
        <Magic size={"small"} img={"/pixelArt/htmlPixelArt.png"} iconTitle='HTML' ></Magic>
        <Magic size={"small"} img='/pixelArt/nextjs.svg' iconTitle='Next.js'></Magic>
    </>



export default function ProjectCard(props: ProjectCardProps) {
    const hasLiveLink = props.liveLink ? true : false;
    return (

        <div

            className='bg-black font-pixel flex  w-[290px] sm:w-fit sm:px-6 sm:py-2 flex-col sm:gap-3 sm:max-w-[500px] items-center  rounded-2xl border-2 border-[#27272a] '>
            <div className=" relative w-[280px] h-[200px] sm:w-[480px] sm:h-[300px]">
                <Image src={props.img} alt={"NO name badge"} fill className='rounded-2xl border-black border-2 object-cover'></Image>
            </div>
            <h1 className='underline  text-base sm:text-xl font-bold'>{props.title}</h1>
            <p className=' text-sm sm:text-base text-gray-300 text-center w-[90%]'>{props.description}</p>
            <div className='flex flex-row w-full justify-evenly mt-6'>
                {toolsUsed}
            </div>
            <div className='self-start flex flex-row bg-rbed-500 w-full items-center justify-between '>
                <a target='_blank' href={props.githubLink} className='group self-start'>
                    <button className='p-2 flex flex-row items-center  group-hover:opacity-100 rounded-lg opacity-50 text-base' >
                        <Image src="/pixelArt/github.svg" alt="Github" className='m-4 size-6 sm:size-7 fill-white' width={30} height={30} />
                        Github
                    </button>
                </a>
                <div className={` relative right-10 flex  flex-row items-center gap-2 ${!hasLiveLink ? 'hidden' : null}`}>

                    <div className='bg-red-500 animate-pulse top-1 relative size-2 rounded-full'></div>
                    <a target='_blank' href={props.liveLink} className=' text-center opacity-70 hover:opacity-100 hover:cursor-pointer'> Live Demo</a>
                </div>
            </div>


        </div >)
}