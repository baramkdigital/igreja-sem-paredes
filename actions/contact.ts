"use server"

import nodemailer from "nodemailer"

export async function sendContactEmail(formData: FormData): Promise<{ success: boolean, message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { success: false, message: "Preencha todos os campos obrigatórios." }
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `Contato Igreja Sem Paredes <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: subject || "Novo contato pelo site",
      replyTo: email,
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nAssunto: ${subject}\nMensagem: ${message}`,
      html: `<p><b>Nome:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Telefone:</b> ${phone}</p><p><b>Assunto:</b> ${subject}</p><p><b>Mensagem:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`
    })
    return { success: true, message: "Mensagem enviada com sucesso!" }
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error)
    return { success: false, message: "Erro ao enviar mensagem. Tente novamente mais tarde." }
  }
}
