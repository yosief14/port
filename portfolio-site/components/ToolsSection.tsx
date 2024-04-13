import Card from "./projects/Card";
import SectionTitle from "./SectionTitle";
import { Magic } from "./Magic";
import { motion } from "framer-motion"

export default function ToolsSection() {
    const codeContent =
        <>
            <Magic img={"/pixelArt/jsPixelArt.png"} iconTitle='JavaScript' ></Magic>
            <Magic img={"/pixelArt/cssPixelArt.png"} iconTitle="CSS"></Magic>
            <Magic img={"/pixelArt/htmlPixelArt.png"} iconTitle='HTML' ></Magic>
            <Magic img={"/pixelArt/python.png"} iconTitle='Python'></Magic>
        </>

    const toolsContent = <>
        <Magic img={"/pixelArt/vsCosePixelArt.png"} iconTitle='VS' ></Magic>
        <Magic img={"pixelArt/nextjs.svg"} iconTitle='Next.js' className="bg-white" ></Magic>
        <Magic img={"/pixelArt/reactLogo.png"} iconTitle='React.js' ></Magic>
        <Magic img={"/pixelArt/LlamaIndex.png"} iconTitle='Llama' ></Magic>

    </>
    //TODO add mobile view
    //bg-[linear-gradient(to_right_bottom,#0a1114,#0a0e12,#0a0b0e,#08070a,#050405,#050305,#050104,#060003,#090006,#0b010a,#0c020e,#0c0312)]
    return (

        <div id="tools" className="flex flex-col sm:mb-40  items-center sm:h-[95%] min-h[500px] gap-10">
            <SectionTitle title="Stuff I Use" />
            <motion.section className="flex  bg-transparent flex-col items-center  gap-5   w-full"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}


            >

                <Card title="<Code/>">
                    {codeContent}
                </Card>
                <Card title="<Tools/>"  >
                    {toolsContent}
                </Card>
            </motion.section>
        </div>

    )
}