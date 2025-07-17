"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/actions/contact"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null)

  return (
    <div>
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-bordo mb-1 font-inter">
            Nome Completo *
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Seu nome completo"
            className="border-mostarda/30 focus:border-mostarda focus:ring-mostarda/20 h-10 font-inter"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-bordo mb-1 font-inter">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="seu@email.com"
            className="border-mostarda/30 focus:border-mostarda focus:ring-mostarda/20 h-10 font-inter"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-bordo mb-1 font-inter">
            Telefone
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="(11) 99999-9999"
            className="border-mostarda/30 focus:border-mostarda focus:ring-mostarda/20 h-10 font-inter"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-bordo mb-1 font-inter">
            Assunto
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="Como podemos ajudar?"
            className="border-mostarda/30 focus:border-mostarda focus:ring-mostarda/20 h-10 font-inter"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-bordo mb-1 font-inter">
            Mensagem *
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Escreva sua mensagem aqui..."
            rows={4}
            className="border-mostarda/30 focus:border-mostarda focus:ring-mostarda/20 font-inter"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-bordo hover:bg-bordo/90 text-branco h-10 font-semibold disabled:opacity-50 font-inter"
        >
          {isPending ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>

      {/* Success/Error Messages */}
      {state && (
        <div
          className={`mt-4 p-3 rounded-lg text-center text-sm font-inter ${
            state.success
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {state.message}
        </div>
      )}
    </div>
  )
}
