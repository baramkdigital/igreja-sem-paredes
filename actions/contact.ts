"use server"

export async function sendContactEmail(formData: FormData) {
  // Simular delay de envio
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validação básica
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Por favor, preencha todos os campos obrigatórios.",
    }
  }

  // Aqui você integraria com um serviço de email real
  // Por exemplo: SendGrid, Resend, Nodemailer, etc.

  console.log("Email enviado:", {
    name,
    email,
    phone,
    subject,
    message,
  })

  return {
    success: true,
    message: `Obrigado ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`,
  }
}
