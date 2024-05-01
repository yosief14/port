'use client'
import { motion } from 'framer-motion'
import ContactForm from "./ContactForm"
import { Dialog, DialogContent, DialogFooter, DialogPortal } from "../ui/dialog"
import { MenuTitle } from "../navbar/Navbar"
export default function ContactSheet({ showModels, setOpen, open }: { setOpen: React.Dispatch<React.SetStateAction<boolean>>, open: boolean, showModels: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <Dialog key="contactDialogue" open={open} onOpenChange={setOpen} >
            <DialogPortal >
                <DialogContent className="sm:max-w-[425px] bg-black font-pixel">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <MenuTitle className={'bottom-[91.8%]'}></MenuTitle>
                        <ContactForm />

                        <div className="flex flex-row justify-between relative mt-16   text-lg">
                            <button className="hover:opacity-100 opacity-70" onClick={() => setOpen(!open)}>RETURN</button>

                            <button className="opacity-70 hover:opacity-100" onClick={() => {
                                setOpen(false)
                                showModels(false)
                            }}>CLOSE</button>

                        </div>
                        <DialogFooter className=" right-4 relative">
                        </DialogFooter>
                    </motion.div>
                </DialogContent>
            </DialogPortal>
        </Dialog >
    )
}
