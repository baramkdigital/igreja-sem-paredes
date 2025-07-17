import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { Lightbox } from "@/components/lightbox"
import { ContactForm } from "@/components/contact-form"
import { Instagram } from "lucide-react"
import { PixDonation } from "@/components/PixDonation"

export default function ChurchLandingPage() {
  return (
    <div className="min-h-screen bg-branco">
      {/* 1. Hero Section com Logo Central */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/WhatsApp Image 2025-07-17 at 13.04.41 (1).jpeg"
            alt="Igreja Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Logo Central */}
        <div className="relative z-10 text-center px-4">
          <Image
            src="/logo-branco.png"
            alt="Logo Igreja Esperança"
            width={600}
            height={400 }
            className="object-contain mx-auto mb-8 drop-shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* 2. Quem Somos */}
      <section className="py-20 bg-branco">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bordo mb-6 font-poppins">Quem Somos</h2>
            <div className="w-24 h-1 bg-mostarda mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
            <p className="text-cinza mb-6 leading-relaxed text-lg">
                A Agência Missionária "Igreja Sem Paredes" nasceu do coração do Pr. Sérgio Santos, que há mais de 50 anos tem vivido e pregado o Evangelho.

              </p>
              <p className="text-cinza mb-6 leading-relaxed text-lg">
                Fundador e pastor presidente da Igreja do Nazareno no Paiol, em Nilópolis, ele teve a ideia do nome durante um dos evangelismos dos “Homens de Terno”. Projeto evangelístico que marca vidas com o anúncio de Jesus.
              </p>
              <p className="text-cinza mb-6 leading-relaxed text-lg">
                Hoje, a agência conta com uma equipe fixa de cerca de 20 pessoas, atuando com excelência nas áres de evangelismo, louvor, mídia, ministério com crianças e a infraestrutura. Todos com o mesmo propósito: alcançar vidas para Jesus.
              </p>
              <p className="text-cinza mb-6 leading-relaxed text-lg">
                Em agosto de 2022, o pastor Sérgio gravou um vídeo compartilhando seu sonho de ter um ônibus missionário para pregar pelo Brasil. Meses depois, Deus respondeu de forma surpreendente: recebemos a doação de um caminhão. E é com ele que temos avançado, transformando praças em igrejas e comunidades inteiras em campos de salvação.
              </p>
              <p className="text-cinza mb-6 leading-relaxed text-lg">
                Atuamos principalmente no interior do Rio de Janeiro, São Paulo e Espírito Santo. E com equipes menores, seguimos até para as nações.
              </p>
              <p className="text-cinza mb-6 leading-relaxed text-lg">
                Mas seguimos crendo que o ônibus vai chegar!
              </p>
              <p className="text-cinza mb-6 leading-relaxed text-lg">
                Nosso chamado é pregar Jesus e mobilizar a Igreja para a missão.<br/>
                Se você não pode ir, você pode enviar. E se pode, oferte nessa obra e nos ajude a chegar ainda mais longe.
              </p>
              <p className="text-cinza leading-relaxed text-lg">
                Somos uma Igreja sem Paredes. Nosso púlpito é a estrada.
              </p>
            </div>
            <div className="h-full flex items-stretch">
              <Image
                src="/482223225_1084941807003249_2448397229756764033_n.jpg"
                alt="Equipe Igreja Sem Paredes"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl object-cover h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Galeria de Fotos */}
      <section className="py-20 bg-mostarda/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bordo mb-6 font-poppins">Galeria de Fotos</h2>
            <div className="w-24 h-1 bg-mostarda mx-auto mb-6"></div>
            <p className="text-xl text-cinza max-w-2xl mx-auto">
              Veja alguns dos momentos especiais que vivemos juntos como família da fé
            </p>
          </div>

          <Lightbox
            images={[
              { src: "/434113580_821927373304695_6292671048646833916_n.jpg", alt: "Momento Especial 1" },
              { src: "/482191509_1084940797003350_2074000240750414926_n.jpg", alt: "Momento Especial 2" },
              { src: "/482223225_1084941807003249_2448397229756764033_n.jpg", alt: "Momento Especial 3" },
              { src: "/482242073_1084941573669939_212178334042404608_n.jpg", alt: "Momento Especial 4" },
              { src: "/WhatsApp Image 2025-07-17 at 13.04.41.jpeg", alt: "Momento Especial 5" },
              { src: "/WhatsApp Image 2025-07-17 at 13.04.41 (1).jpeg", alt: "Momento Especial 6" },
            ]}
          />
        </div>
      </section>

      {/* 4. Formulário de Contato */}
      <section className="py-20 bg-branco">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bordo mb-6 font-poppins">Formulário de Contato</h2>
            <div className="w-24 h-1 bg-mostarda mx-auto mb-6"></div>
            <p className="text-lg text-cinza max-w-xl mx-auto font-inter">
              Entre em contato conosco para agendar uma missão em sua cidade. 
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://www.instagram.com/pr.sergio.santos?igsh=MWM4c2F4ejVndjJ4NQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-bordo hover:text-mostarda transition-colors text-lg font-semibold"
              >
                <Instagram className="w-6 h-6" />
                @pr.sergio.santos
              </a>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      {/* Nova seção: Doação via Pix */}
      <PixDonation />
    </div>
  )
}
