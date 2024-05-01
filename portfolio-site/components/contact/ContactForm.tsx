'use client'
import { z } from 'zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormLabel,
    FormItem,
    FormMessage,
} from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast, useToast } from '../ui/use-toast'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { sendEmail } from '@/services/sendEmail'
import { useState } from 'react'
import { Toast, ToastAction } from '../ui/toast'
const ContactFormSchema = z.object(
    {
        name: z.string().min(2),
        email: z.string().email(),
        message: z.string().min(5)
    })

export default function ContactForm() {
    const [sending, setSending] = useState(false);
    const [errorCount, setErrorCount] = useState(0);
    const form = useForm<z.infer<typeof ContactFormSchema>>(
        {
            resolver: zodResolver(ContactFormSchema),
            defaultValues: {
                name: '',
                email: '',
                message: ''
            }
        },
    )
    async function onSubmit(data: z.infer<typeof ContactFormSchema>) {
        setSending(true);
        const result = await sendEmail(data);
        const toastMessage = {
            title: "Error",
            variant: "destructive",
            description: "There was an error sending your message. Please try again.",
            action: <ToastAction altText={'Close'}>Close</ToastAction>
        }

        if (!result) {
            if (errorCount > 4) {
                toastMessage.description = "There seems to be an issue with this form. Please try again later or contact me direclty at yosief14@gmail.com"
            }
            setErrorCount(errorCount + 1)
        }

        else {
            toastMessage.title = "Success"
            toastMessage.variant = "success"
            toastMessage.description = "Your message has been sent. I will get back to you as soon as possible."
            form.reset()
        }
        toast(toastMessage as any)
    }
    return (
        <Form {...form} >
            <form className='sha space-y-5 mt-5 flex flex-col'
                onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem
                        >
                            <FormLabel
                                className='text-white text-xl'
                            >Name</FormLabel>
                            <FormControl>
                                <Input
                                    className='text-black font-sans text-lg'
                                    placeholder='Billy Bob'{...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className='text-white text-xl'
                            >Email</FormLabel>
                            <FormControl>
                                <Input
                                    className='text-black font-sans text-lg'
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel
                                className='text-white text-xl'
                            >Message</FormLabel>
                            <FormControl>
                                <Textarea className='text-black font-sans text-lg' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' className='bg-slate-900 relative top-5 text-xl py-6 w-1/2 self-center hover:opacity-70  '>Send</Button>
            </form>
        </Form>
    )
}