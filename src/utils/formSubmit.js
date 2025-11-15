const FORM_ENDPOINT = 'https://formsubmit.co/ajax/hunter.j.adam@gmail.com'

const defaultError = 'We were unable to send your message. Please email hunter.j.adam@gmail.com directly.'

const parseResponse = async (response) => {
  try {
    const text = await response.text()
    return text ? JSON.parse(text) : null
  } catch {
    return null
  }
}

const toFormData = (data) => {
  const formData = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value ?? '')
  })
  return formData
}

export async function submitForm({ data, subject, formName }) {
  const formData = toFormData({
    ...data,
    formName,
    _subject: subject,
    _template: 'table',
  })

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    body: formData,
  })

  const responseData = await parseResponse(response)

  if (!response.ok) {
    throw new Error(responseData?.message || defaultError)
  }

  return responseData
}
