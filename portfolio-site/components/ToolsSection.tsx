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
    return (
        <section id="projects" className="flex  flex-col items-center  justify-items-center py-16  gap-10 bg-gray-950 w-full">
            <SectionTitle id="tools" title="Stuff I Use" />

            <Card title="<Code/>" children={codeContent} />
            <Card title="<Tools/>" children={toolsContent} />
        </section>
    )
}