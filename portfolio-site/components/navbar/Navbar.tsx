"use client"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion"
import ContactSheet from "@/components/contact/ContactSheet"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { DialogPortal } from "@radix-ui/react-dialog"
export const MenuTitle = ({ className = '' }: { className: string }) => {
    return (
        <div className={`flex  px-3 sm:px-8 ${className} h-[80px] flex-row justify-center left-[30%] items-center absolute  bottom-[86.5%]`}>
            {/* For SVG's to scale the viewbox attribute must be set for it to be scalable*/}
            <Image src="/Vector 1.svg" alt={"NO name badge"} width={300} height={200} className='absolute'></Image>
            <p className='font-pixel text-lg sm:text-2xl relative' >
                PAUSE
            </p>
        </div>)
}

interface NavbarProps {
    containerRef: React.MutableRefObject<null>
}

const links = ['about', 'tools', 'projects', 'timeline'];

export default function Navbar(props: NavbarProps) {
    const [open, setOpen] = useState(false)
    const [contactOpen, setContactOpen] = useState(false)
    const [collapsed, setCollapsed] = useState(false)
    const { scrollYProgress } = useScroll(
        {
            layoutEffect: false,
            container: props.containerRef
        }
    )

    useMotionValueEvent(scrollYProgress, "change", (value) => {
        if (value > 0.01 &&
            window.matchMedia("(min-width: 1024px)").matches
        ) {
            setCollapsed(true)
        } else {
            setCollapsed(false)
        }

    })

    const handlDialogOpen = () => {
        if (collapsed) {
            setOpen(true)
        }

    }
    return (
        <>
            <AnimatePresence>

                <ContactSheet setOpen={setContactOpen} open={contactOpen} showModels={setOpen} />
                <Dialog key='PauseDia' open={open} onOpenChange={setOpen} >
                    <DialogPortal >
                        <DialogContent className="sm:max-w-[425px] bg-black font-pixel">
                            <motion.div
                                key="dialog"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <DialogHeader>
                                    <DialogTitle><MenuTitle className=""></MenuTitle></DialogTitle>

                                </DialogHeader>

                                <div className="grid grid-cols-1 items-center gap-4 w-28 relative mt-7" >
                                    {links.map((link, index) => {
                                        return (
                                            <a className=" hover:bg-slate-800 px-4 py-1 rounded-md"
                                                key={index}
                                                onClick={() => {
                                                    const scrollEnd = link === 'timeline' ? 'start' : 'center'
                                                    document.getElementById(link)?.scrollIntoView({ behavior: 'smooth', block: scrollEnd })
                                                    setOpen(false)
                                                }}
                                            >{link.toUpperCase()}</a>
                                        )
                                    })}
                                    <Button className=" hover:bg-slate-800 px-4 text-base py-1 rounded-md" onClick={() => {
                                        setContactOpen(true)
                                    }}>CONTACT</Button>
                                </div>
                                <div className=" items-center gap-4">

                                </div>

                                <DialogFooter className=" right-4 relative">
                                </DialogFooter>
                            </motion.div>
                        </DialogContent>
                    </DialogPortal>
                </Dialog >
            </AnimatePresence >

            <motion.div
                className={`w-full lg:top-[5%] z-10 fixed lg:fixed lg:flex lg:justify-center bg-[#210b24] lg:bg-transparent `}
                key="text-mobile"
            >
                <motion.div className="  py-3 font-pixel text-base flex flex-row items-center justify-between md:py-0 md:gap-9 md:justify-center lg:justify-start relative   overflow-hidden sm:text-2xl lg:w-[900px] "
                    animate={{ x: !collapsed ? 0 : -80, transition: { duration: 0.2 } }}
                >
                    <motion.img src="/pixelArt/bottle.png" alt="bottle" className="h-10 w-auto relative z-30 lg: sm:h-16 left-5 md:left-9"
                        animate={!collapsed ? { rotate: 90, transition: { delay: 0.2 } } : { rotate: 0, transition: { delay: 0.2 } }}
                        onClick={handlDialogOpen}

                    />
                    <AnimatePresence>
                        {!collapsed &&
                            <motion.div className="flex flex-row sm:gap-4 origin-left relative  items-center mx-auto"
                                key="navBar"
                                initial={{ x: -700, opacity: 0 }}
                                animate={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
                                exit={{ x: -700, opacity: 0, transition: { duration: 0.3, delay: 0.1 } }}
                            >
                                {links.map((link, index) => {
                                    return (

                                        <a className="hover:bg-slate-800 px-[1.5vw] py-1  text-[2.5vw] md:text-xl md:px-3 rounded-md cursor-pointer"
                                            key={index}
                                            onClick={() => {
                                                const scrollEnd = link === 'timeline' ? 'start' : 'center'
                                                document.getElementById(link)?.scrollIntoView({ behavior: 'smooth', block: scrollEnd })
                                            }}
                                        > {link.toUpperCase()}

                                        </a>

                                    )
                                })}

                                <Button className="hover:bg-slate-800 px-[1.5vw] py-1  text-[2.5vw] md:text-xl md:px-3 rounded-md cursor-pointer" onClick={() => {
                                    setOpen(false)
                                    setContactOpen(true)
                                }}>CONTACT</Button>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <motion.img src="/pixelArt/navi.png" alt="navi" className={`z-30 relative lg:absolute lg:top-7 lg:right-0 opacity-50 h-5 w-5 sm:h-7 sm:w-7 `}
                        initial={{ x: -835 }}
                        animate={{ x: !collapsed ? 0 : -835, transition: { duration: 0.4, }, scale: 0.8 }}
                        whileHover={{ opacity: collapsed ? 1 : 0.8 }}
                        onClick={handlDialogOpen}

                    />
                </motion.div>
            </motion.div>



        </>
    )
}
