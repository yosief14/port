'use server'

import Mailgun from 'mailgun.js'
import FormData from 'form-data'

const CONTACT_FORM_FROM_EMAIL = process.env.CONTACT_FORM_FROM_EMAIL as string || ''
const CONTACT_FORM_TO_EMAIL = process.env.CONTACT_FORM_TO_EMAIL as string || ''
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN as string || ''
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY as string || ''

const mailgun = new Mailgun(FormData)
const mg = mailgun.client({
    username: 'api',
    key: MAILGUN_API_KEY
})

export async function sendEmail(data: { name: string, email: string, message: string }) {
    console.log(data)
    console.log(CONTACT_FORM_TO_EMAIL)
    const result = await mg.messages.create(MAILGUN_DOMAIN, {
        from: CONTACT_FORM_FROM_EMAIL,
        to: CONTACT_FORM_TO_EMAIL,
        subject: 'Contact Form Submission',
        text: `${data.name} sent you a message!\nEmail: ${data.email}\nMessage: ${data.message}`
    })
    return result;
}