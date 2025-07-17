"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/actions/contact"
import { Mail, User, Phone, MessageCircle, Tag, CheckCircle2, XCircle } from "lucide-react"
import { useFormState } from "react-dom"

export function ContactForm() {
  const initialState = { success: false, message: "" }
  const formAction = async (_prevState: typeof initialState, formData: FormData) => {
    return await sendContactEmail(formData)
  }
  const [state, dispatch] = useFormState(formAction, initialState)
  return (
    <div>
      <form action={dispatch} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-bordo mb-1 font-inter">
              Nome Completo *
            </label>
            <span className="absolute left-3 top-9 text-mostarda">
              <User className="w-4 h-4" />
            </span>
            <Input
              id="name"
              name="name"
              placeholder="Seu nome completo"
              className="pl-10 border-mostarda/30 focus:border-mostarda focus:ring-mostarda/20 h-12 font-inter rounded-xl bg-white/80 focus:shadow-lg transition-all"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-bordo mb-1 font-inter">
              Email *
            </label>
            <span className="absolute left-3 top-9 text-mostarda">
              <Mail className="w-4 h-4" />
            </span>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              className="pl-10 border-mostarda/30 focus:border-mostarda focus:ring-mostarda/20 h-12 font-inter rounded-xl bg-white/80 focus:shadow-lg transition-all"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-medium text-bordo mb-1 font-inter">
              Telefone
            </label>
            <span className="absolute left-3 top-9 text-mostarda">
              <Phone className="w-4 h-4" />
            </span>
            <Input
              id="phone"
              name="phone"
              placeholder="(11) 99999-9999"
              className="pl-10 border-mostarda/30 focus:border-mostarda focus:ring-mostarda/20 h-12 font-inter rounded-xl bg-white/80 focus:shadow-lg transition-all"
            />
          </div>

          <div className="relative">
            <label htmlFor="subject" className="block text-sm font-medium text-bordo mb-1 font-inter">
              Assunto
            </label>
            <span className="absolute left-3 top-9 text-mostarda">
              <Tag className="w-4 h-4" />
            </span>
            <Input
              id="subject"
              name="subject"
              placeholder="Como podemos ajudar?"
              className="pl-10 border-mostarda/30 focus:border-mostarda focus:ring-mostarda/20 h-12 font-inter rounded-xl bg-white/80 focus:shadow-lg transition-all"
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="message" className="block text-sm font-medium text-bordo mb-1 font-inter">
            Mensagem *
          </label>
          <span className="absolute left-3 top-9 text-mostarda">
            <MessageCircle className="w-4 h-4" />
          </span>
          <Textarea
            id="message"
            name="message"
            placeholder="Escreva sua mensagem aqui..."
            rows={4}
            className="pl-10 border-mostarda/30 focus:border-mostarda focus:ring-mostarda/20 font-inter rounded-xl bg-white/80 focus:shadow-lg transition-all"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 font-semibold font-inter rounded-xl bg-bordo text-branco border-0 shadow-[0_6px_24px_0_rgba(91,0,32,0.25)] border-t border-white/20 hover:brightness-110 hover:shadow-[0_2px_8px_0_rgba(91,0,32,0.18)] active:translate-y-1 active:shadow-md transition-all"
        >
          Enviar Mensagem
        </Button>
      </form>

    
      {state && (
        <div
          className={`mt-6 p-4 rounded-xl flex items-center justify-center gap-2 text-center text-sm font-inter shadow-md border
            ${state.success ? "bg-green-50 text-green-800 border-green-200" : "bg-red-50 text-red-800 border-red-200"}
          `}
        >
          {state.success ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-600" />}
          {state.message}
        </div>
      )}
    </div>
  )
}
