import Card from "./projects/Card";
import SectionTitle from "./SectionTitle";
import { Magic } from "./Magic";

export default function ToolsSection() {

    const codeContent =
        <>
            <Magic img={"/pixelArt/jsPixelArt.png"} iconTitle='JavaScript' ></Magic>
            <Magic img={"/pixelArt/cssPixelArt.png"} iconTitle="CSS"></Magic>
            <Magic img={"/pixelArt/htmlPixelArt.png"} iconTitle='HTML' ></Magic>
            <Magic img={"/pixelArt/python.png"} iconTitle='Python'></Magic>
        </>

    const toolsContent = <>
        <Magic img={"/pixelArt/vsCosePixelArt.png"} iconTitle='VS Code' ></Magic>
        <Magic img={"pixelArt/nextjs.svg"} iconTitle='Next.js' className="bg-white" ></Magic>
        <Magic img={"/pixelArt/reactLogo.png"} iconTitle='React.js' ></Magic>
        <Magic img={"/pixelArt/LlamaIndex.png"} iconTitle='LlamaIndex' ></Magic>

    </>
    //bg-[linear-gradient(to_right_bottom,#0a1114,#0a0e12,#0a0b0e,#08070a,#050405,#050305,#050104,#060003,#090006,#0b010a,#0c020e,#0c0312)]
    return (
        <section id="projects" className="flex  bg-transparent flex-col items-center  justify-items-center py-16  gap-10  w-full">
            <SectionTitle id="tools" title="Stuff I Use" />

            <Card title="<Code/>" children={codeContent} />
            <Card title="<Tools/>" children={toolsContent} />
        </section>
    )
}