'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from 'framer-motion'
import ContactForm from "./ContactForm"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogPortal, DialogTitle } from "../ui/dialog"
import { MenuTitle } from "../navbar/Navbar"
export default function ContactSheet({ setOpen, open }: { setOpen: React.Dispatch<React.SetStateAction<boolean>>, open: boolean }) {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogPortal >
                <DialogContent className="sm:max-w-[425px] bg-black font-pixel">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <ContactForm />
                        <DialogHeader>
                            <DialogTitle><MenuTitle></MenuTitle></DialogTitle>

                        </DialogHeader>

                        <div className="grid grid-cols-1 items-center gap-4 w-28 relative mt-7" >

                        </div>
                        <div className=" items-center gap-4">

                        </div>
                        <button onClick={() => setOpen(!open)}></button>
                        <DialogFooter className=" right-4 relative">
                        </DialogFooter>
                    </motion.div>
                </DialogContent>
            </DialogPortal>
        </Dialog >
    )
}
