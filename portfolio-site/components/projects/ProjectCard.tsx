import Image from 'next/image'
import { Magic } from '../Magic'
interface ProjectCardProps {
    title: string;
    description: string;
    img: string;
    link: string;
    position?: number;

}


import { Button } from "@/components/ui/button"
import { SERVER_PROPS_GET_INIT_PROPS_CONFLICT } from 'next/dist/lib/constants';



const toolsUsed =
    <>
        <Magic size={1} img={"/pixelArt/jsPixelArt.png"} iconTitle='JavaScript' ></Magic>
        <Magic size={1} img={"/pixelArt/cssPixelArt.png"} iconTitle="CSS"></Magic>
        <Magic size={1} img={"/pixelArt/htmlPixelArt.png"} iconTitle='HTML' ></Magic>
        <Magic size={1} img='/pixelArt/nextjs.svg' iconTitle='Next.js'></Magic>
    </>



export default function ProjectCard(props: ProjectCardProps) {

    return (

        <div

            className='bg-black flex  px-6 py-2 flex-col gap-6 max-w-[500px] items-center  rounded-2xl border-2 border-[#27272a] '>
            <div className=" relative w-[480px] h-[300px]">
                <Image src={props.img} alt={"NO name badge"} fill className='rounded-2xl border-black border-2 object-cover'></Image>
            </div>
            <h1 className='font-pixel text-2xl font-bold'>{props.title}</h1>
            <p className='font-pixel text-lg text-gray-300 text-center w-[90%]'>{props.description}</p>
            <div className='flex flex-row w-full justify-evenly mt-6'>
                {toolsUsed}
            </div>
            <div className='self-start flex flex-row'>
                <div className='group self-start'>
                    <button className='p-2 flex flex-row items-center group-hover:opacity-100 rounded-lg opacity-50 font-pixel text-xl' >
                        <div className=' mr-4 relative w-[50px] h-[25px] top-[10px]'>
                            <Image src="/pixelArt/fingerCursor.webp" alt={"NO name badge"} fill className='hidden group-hover:block group-hover:animate-point'></Image>
                        </div>
                        <Image src="/pixelArt/github.svg" alt="Github" className='m-4 fill-white' width={30} height={30} />
                        Github
                    </button>
                </div>
                <div className=' relative w-[50px] h-[25px] group'>
                </div>
            </div>


        </div >)
}