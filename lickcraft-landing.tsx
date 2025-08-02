"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sword,
  Shield,
  Coins,
  Users,
  Calendar,
  Gift,
  Globe,
  Smartphone,
  Crown,
  UserCheck,
  MessageCircle,
  Play,
  Copy,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function Component() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-green-700/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
              </div>
              <h1 className="text-2xl font-bold text-white">LickCraft</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#features" className="text-green-200 hover:text-white transition-colors">
                Características
              </Link>
              <Link href="#community" className="text-green-200 hover:text-white transition-colors">
                Comunidad
              </Link>
              <Link href="#join" className="text-green-200 hover:text-white transition-colors">
                Únete
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Video Banner */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border border-green-700/30">
            {/* Video/Banner Placeholder */}
            <div className="relative aspect-video bg-gradient-to-r from-green-800 to-green-600 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="text-lg opacity-90">Área para cinemáticas del servidor</p>
                <p className="text-sm opacity-70 mt-2">Aquí se insertarán los videos promocionales</p>
              </div>
            </div>

            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">¡Conoce nuestro servidor!</h2>
                <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                  Somos una comunidad que nació en 2014, estuvimos activos por años… ¡y ahora volvemos con todo! 🔥
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IP Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Conecta Ahora Mismo</h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Java IP */}
            <Card className="bg-green-800/30 border-green-600/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-green-400 mr-2" />
                  <h4 className="text-xl font-bold text-white">Java Edition</h4>
                </div>
                <div className="bg-black/40 rounded-lg p-4 mb-4">
                  <p className="text-2xl md:text-3xl font-mono text-green-300 font-bold">sv.lickcraft.net</p>
                </div>
                <Button
                  onClick={() => copyToClipboard("sv.lickcraft.net")}
                  variant="outline"
                  className="bg-green-600 hover:bg-green-500 text-white border-green-500"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar IP
                </Button>
              </CardContent>
            </Card>

            {/* Bedrock IP */}
            <Card className="bg-green-800/30 border-green-600/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-green-400 mr-2" />
                  <h4 className="text-xl font-bold text-white">Bedrock Edition</h4>
                </div>
                <div className="bg-black/40 rounded-lg p-4 mb-2">
                  <p className="text-xl md:text-2xl font-mono text-green-300 font-bold">sv.lickcraft.net</p>
                </div>
                <div className="bg-black/40 rounded-lg p-2 mb-4">
                  <p className="text-lg font-mono text-green-300">Puerto: 25690</p>
                </div>
                <Button
                  onClick={() => copyToClipboard("sv.lickcraft.net:25690")}
                  variant="outline"
                  className="bg-green-600 hover:bg-green-500 text-white border-green-500"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar IP
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-600 text-white px-4 py-2 text-lg">
              <Crown className="w-4 h-4 mr-2" />
              Premium
            </Badge>
            <Badge className="bg-blue-600 text-white px-4 py-2 text-lg">
              <UserCheck className="w-4 h-4 mr-2" />
              No Premium
            </Badge>
            <Badge className="bg-purple-600 text-white px-4 py-2 text-lg">
              <Globe className="w-4 h-4 mr-2" />
              Java & Bedrock
            </Badge>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Revive la nostalgia en LickCraft</h3>
            <p className="text-xl text-green-200 max-w-3xl mx-auto">
              Un servidor Survival semi-vanilla colaborativo donde la aventura nunca termina
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-green-800/30 border-green-600/50 backdrop-blur-sm hover:bg-green-800/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sword className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">🏞️ Survival</h4>
                <p className="text-green-200">Experiencia de supervivencia auténtica con mecánicas semi-vanilla</p>
              </CardContent>
            </Card>

            <Card className="bg-green-800/30 border-green-600/50 backdrop-blur-sm hover:bg-green-800/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">🏰 Arenas PvP</h4>
                <p className="text-green-200">Combates épicos en arenas especialmente diseñadas</p>
              </CardContent>
            </Card>

            <Card className="bg-green-800/30 border-green-600/50 backdrop-blur-sm hover:bg-green-800/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">💰 Economía</h4>
                <p className="text-green-200">Sistema económico balanceado para comerciar y prosperar</p>
              </CardContent>
            </Card>

            <Card className="bg-green-800/30 border-green-600/50 backdrop-blur-sm hover:bg-green-800/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">🔒 Protecciones</h4>
                <p className="text-green-200">Protege tu terreno y construcciones de forma segura</p>
              </CardContent>
            </Card>

            <Card className="bg-green-800/30 border-green-600/50 backdrop-blur-sm hover:bg-green-800/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">⚔️ Clanes</h4>
                <p className="text-green-200">Únete a clanes y forma alianzas estratégicas</p>
              </CardContent>
            </Card>

            <Card className="bg-green-800/30 border-green-600/50 backdrop-blur-sm hover:bg-green-800/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">🎁 Eventos</h4>
                <p className="text-green-200">Eventos regulares con premios y diversión garantizada</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-12 h-12 text-green-400 mr-4" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">Una Comunidad con Historia</h3>
            </div>

            <div className="bg-green-800/30 border-green-600/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-xl md:text-2xl text-green-100 leading-relaxed mb-6">
                Desde <span className="font-bold text-green-300">2014</span>, LickCraft ha sido el hogar de miles de
                jugadores. Después de años de aventuras épicas, regresamos más fuertes que nunca.
              </p>
              <p className="text-lg text-green-200">
                💬 ¡Sumate a una comunidad con historia y empieza tu nueva aventura hoy mismo!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-green-800/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-300 mb-2">10+</div>
                <div className="text-green-200">Años de experiencia</div>
              </div>
              <div className="bg-green-800/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-300 mb-2">1000+</div>
                <div className="text-green-200">Jugadores activos</div>
              </div>
              <div className="bg-green-800/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-300 mb-2">24/7</div>
                <div className="text-green-200">Servidor online</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord CTA */}
      <section id="join" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">¡Únete a Nuestra Comunidad!</h3>
            <p className="text-xl text-green-200 mb-8">
              Conecta con otros jugadores, recibe noticias y participa en eventos exclusivos
            </p>

            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Únete al Discord
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-sm text-green-300 mt-4">Más de 500 miembros activos te esperan</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-green-700/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-green-600 rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
              </div>
              <span className="text-white font-bold text-xl">LickCraft</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-green-200 mb-2">© 2024 LickCraft. Una comunidad desde 2014.</p>
              <p className="text-green-300 text-sm">sv.lickcraft.net | Puerto Bedrock: 25690</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
