"use client"

import Image from "next/image"

export function PixDonation() {
  return (
    <div className="mt-16 flex flex-col items-center bg-bordo/95 rounded-3xl p-10 shadow-2xl border-4 border-mostarda">
      <h3 className="text-3xl md:text-4xl font-bold text-branco mb-2 font-poppins text-center drop-shadow-lg">
        Seja um mantenedor desta missão
      </h3>
      <p className="text-lg md:text-xl text-mostarda mb-6 text-center font-medium">
        Sua doação nos ajuda a levar esperança e transformar vidas!
      </p>
      <div className="mb-6 flex flex-col items-center">
        <Image
          src="/pix.jpeg"
          alt="QR Code Pix para doações"
          width={240}
          height={240}
          className="rounded-2xl border-4 border-mostarda shadow-xl bg-white"
        />
      </div>
      <div className="flex flex-col items-center mb-4">
        <span className="inline-flex items-center gap-2 text-lg md:text-xl font-semibold text-mostarda mb-1">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="40" height="40" rx="12" fill="#d4a017"/><path d="M13.5 20C13.5 16.4101 16.4101 13.5 20 13.5C23.5899 13.5 26.5 16.4101 26.5 20C26.5 23.5899 23.5899 26.5 20 26.5C16.4101 26.5 13.5 23.5899 13.5 20Z" stroke="#601b1a" strokeWidth="2"/></svg>
          Chave Pix
        </span>
        <span className="block text-xl md:text-2xl font-mono text-branco bg-bordo/80 px-4 py-2 rounded-lg select-all tracking-wide shadow-inner border border-mostarda mb-2">
          missaoonibus@gmail.com
        </span>
        <button
          type="button"
          className="text-sm text-mostarda bg-branco/10 px-3 py-1 rounded hover:bg-mostarda hover:text-bordo border border-mostarda transition font-semibold"
          onClick={() => {navigator.clipboard.writeText('missaoonibus@gmail.com')}}
        >
          Copiar chave
        </button>
      </div>
      <p className="text-branco/80 text-center text-base mt-2">
        Toda oferta é um passo a mais para alcançarmos novas vidas. <span className="font-semibold text-mostarda">Obrigado por semear conosco!</span>
      </p>
    </div>
  )
} 