import { motion } from "framer-motion";
import { Magic } from "../Magic";

export default function LinkSection() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-[80%] right-14 gap-10  flex flex-col ">
            <a href="https://github.com/yosief14" target="_blank">
                <img src="/pixelArt/github.svg" className="size-10 opacity-80 hover:opacity-100" ></img>
            </a>
            <a href="https://www.linkedin.com/in/yosiefg/" target="_blank">
                <img src="/pixelArt/linkedInPixelArt.png" className="size-10 opacity-80 hover:opacity-100"></img>
            </a>
        </motion.div>
    )
}