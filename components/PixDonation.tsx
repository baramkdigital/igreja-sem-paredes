"use client"
import Image from "next/image"
import { useState } from "react"
import { Copy } from "lucide-react"

export function PixDonation() {
  const [copied, setCopied] = useState(false)
  const pixKey = "missaoonibus@gmail.com"

  function handleCopy() {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="w-full py-16 flex justify-center bg-mostarda/10">
      <div className="w-full max-w-xl flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-bordo mb-2 text-center">
          Transforme vidas com sua doação
        </h2>
        <p className="text-lg text-cinza mb-8 text-center max-w-lg">
          Sua generosidade nos ajuda a levar esperança e amor a quem mais precisa.
        </p>
        <Image
          src="/pix.jpeg"
          alt="QR Code Pix para doações"
          width={220}
          height={220}
          className="rounded-xl bg-white shadow-lg mb-6"
        />
        <div className="flex flex-col items-center gap-2 mb-4">
          <span className="text-base text-bordo font-semibold">Chave Pix</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-cinza bg-white px-3 py-1 rounded select-all border border-mostarda/40">
              {pixKey}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className={`flex items-center gap-1 px-3 py-1 rounded transition font-semibold border border-mostarda/40 text-bordo bg-mostarda/30 hover:bg-mostarda hover:text-branco ${copied ? 'bg-bordo text-branco' : ''}`}
              title="Copiar chave Pix"
            >
              <Copy className="w-4 h-4" />
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>
        </div>
        <p className="text-cinza/80 text-base mt-2 text-center">
          Cada oferta nos leva mais longe. <span className="text-mostarda font-semibold">Obrigado por semear conosco!</span>
        </p>
      </div>
    </section>
  )
} 