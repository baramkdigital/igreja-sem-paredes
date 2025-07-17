import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Award, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { Lightbox } from "@/components/lightbox"
import { ContactForm } from "@/components/contact-form"

export default function ChurchLandingPage() {
  return (
    <div className="min-h-screen bg-branco">
      {/* 1. Hero Section com Logo Central */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Igreja+Background"
            alt="Igreja Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-bordo/50"></div>
        </div>

        {/* Logo Central */}
        <div className="relative z-10 text-center px-4">
          <div className="w-48 h-48 mx-auto bg-branco/95 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 shadow-2xl">
            <span className="text-bordo text-6xl font-bold">IE</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-branco mb-6 drop-shadow-lg font-poppins">
            Igreja Esperança
          </h1>
          <p className="text-xl md:text-2xl text-branco/90 max-w-3xl mx-auto leading-relaxed drop-shadow">
            Bem-vindos à nossa casa de oração e comunhão
          </p>
        </div>
      </section>

      {/* 2. Quem Somos */}
      <section className="py-20 bg-branco">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bordo mb-6 font-poppins">Quem Somos</h2>
            <div className="w-24 h-1 bg-mostarda mx-auto mb-6"></div>
            <p className="text-xl text-cinza max-w-3xl mx-auto leading-relaxed">
              Somos uma comunidade de fé dedicada a servir a Deus e ao próximo, construindo relacionamentos genuínos e
              transformando vidas através do amor de Cristo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-bordo mb-6">Nossa História</h3>
              <p className="text-cinza mb-6 leading-relaxed text-lg">
                Fundada com o propósito de ser um farol de esperança em nossa comunidade, a Igreja Esperança tem como
                missão proclamar o evangelho de Jesus Cristo e discipular pessoas de todas as idades.
              </p>
              <p className="text-cinza leading-relaxed text-lg mb-8">
                Acreditamos que cada pessoa é preciosa aos olhos de Deus e merece ser amada, acolhida e cuidada. Nossa
                igreja é um lugar onde você pode crescer espiritualmente e encontrar sua família na fé.
              </p>
              <p className="text-cinza leading-relaxed text-lg">
                Ao longo dos anos, construímos uma reputação sólida baseada na confiança, amor e compromisso com a
                palavra de Deus. Nosso objetivo é sempre servir com excelência e dedicação.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600&text=Igreja+Interior"
                alt="Interior da Igreja"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-mostarda/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-mostarda" />
                </div>
                <h4 className="text-xl font-bold text-bordo mb-4">Amor e Acolhimento</h4>
                <p className="text-cinza leading-relaxed">
                  Um ambiente caloroso onde todos são bem-vindos, independente de sua origem ou situação
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-mostarda/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-mostarda" />
                </div>
                <h4 className="text-xl font-bold text-bordo mb-4">Comunidade Unida</h4>
                <p className="text-cinza leading-relaxed">
                  Relacionamentos genuínos e duradouros construídos na base do amor cristão
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-mostarda/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-mostarda" />
                </div>
                <h4 className="text-xl font-bold text-bordo mb-4">Compromisso com a Fé</h4>
                <p className="text-cinza leading-relaxed">
                  Dedicação total ao ensino bíblico e ao crescimento espiritual de cada membro
                </p>
              </CardContent>
            </Card>
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
              { src: "/placeholder.svg?height=400&width=600&text=Foto 1", alt: "Momento Especial 1" },
              { src: "/placeholder.svg?height=400&width=600&text=Foto 2", alt: "Momento Especial 2" },
              { src: "/placeholder.svg?height=400&width=600&text=Foto 3", alt: "Momento Especial 3" },
              { src: "/placeholder.svg?height=400&width=600&text=Foto 4", alt: "Momento Especial 4" },
              { src: "/placeholder.svg?height=400&width=600&text=Foto 5", alt: "Momento Especial 5" },
              { src: "/placeholder.svg?height=400&width=600&text=Foto 6", alt: "Momento Especial 6" },
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
              Entre em contato conosco. Estamos aqui para ouvir você e ajudar no que for necessário.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <ContactForm />

            {/* Informações de contato compactas */}
            <div className="mt-8 text-center space-y-3">
              <div className="flex items-center justify-center space-x-2 text-cinza">
                <Phone className="w-4 h-4 text-mostarda" />
                <span className="text-sm font-inter">(11) 99999-9999</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-cinza">
                <Mail className="w-4 h-4 text-mostarda" />
                <span className="text-sm font-inter">contato@igrejaesperanca.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-cinza">
                <MapPin className="w-4 h-4 text-mostarda" />
                <span className="text-sm font-inter">Rua da Esperança, 123 - São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="bg-cinza text-branco py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-branco/80">
            &copy; {new Date().getFullYear()} Igreja Esperança. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
