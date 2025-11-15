const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const CONFIG_ERROR =
  'Email service is not configured. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.'

const DEFAULT_ERROR = 'We were unable to send your message. Please email hunter.j.adam@gmail.com directly.'

export async function sendEmail(templateParams) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(CONFIG_ERROR)
  }

  const payload = {
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: templateParams,
  }

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    try {
      const data = await response.json()
      if (data?.error) {
        throw new Error(data.error)
      }
    } catch (error) {
      if (error instanceof Error && error.message !== '[object Object]') {
        throw error
      }
    }
    throw new Error(DEFAULT_ERROR)
  }
}

