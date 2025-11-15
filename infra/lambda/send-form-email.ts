import { APIGatewayProxyHandler } from 'aws-lambda'
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2'

const ses = new SESv2Client({})
const recipient = process.env.RECIPIENT_EMAIL
const sender = process.env.SENDER_EMAIL ?? recipient
const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? '*')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const pickOrigin = (requestOrigin?: string) => {
  if (allowedOrigins.includes('*')) {
    return requestOrigin ?? '*'
  }
  if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
    return requestOrigin
  }
  return allowedOrigins[0] ?? requestOrigin ?? '*'
}

const corsHeaders = (origin?: string) => ({
  'Access-Control-Allow-Origin': origin ?? '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS,POST',
})

const buildTextBody = (data: Record<string, unknown>) =>
  Object.entries(data)
    .map(([key, value]) => `${key}: ${value ?? ''}`)
    .join('\n')

export const handler: APIGatewayProxyHandler = async (event) => {
  const origin = pickOrigin(event.headers?.origin ?? event.headers?.Origin)

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: '',
    }
  }

  if (!recipient || !sender) {
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ message: 'Email service misconfigured.' }),
    }
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {}
    const formName = body.formName || 'contact'
    const subject = `Harmony Collective ${formName} submission`
    const textBody = buildTextBody(body)

    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: sender,
        Destination: {
          ToAddresses: [recipient],
        },
        Content: {
          Simple: {
            Subject: { Data: subject },
            Body: { Text: { Data: textBody } },
          },
        },
      }),
    )

    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: JSON.stringify({ message: 'Submission sent' }),
    }
  } catch (error) {
    console.error('Error sending email', error)
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ message: 'Unable to send your message. Please email us directly.' }),
    }
  }
}

