'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Instagram, Facebook, MessageSquare, Youtube, ArrowUp, X } from 'lucide-react'

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/nixoncodes.ai',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/nixoncodes.ai',
      color: 'hover:text-blue-400'
    },
    {
      name: 'TikTok',
      icon: MessageSquare,
      href: 'https://tiktok.com/@nixoncodes.ai',
      color: 'hover:text-gray-400'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/@nixoncodes.ai',
      color: 'hover:text-red-400'
    }
  ]

  const quickLinks = [
    { name: 'Servicios', href: '#services' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ]

  const services = [
    'Desarrollo Web con IA',
    'ChatBots Inteligentes',
    'Automatizaciones',
    'Consultoría Técnica'
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <motion.div
                className="flex items-center space-x-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <div className="font-bold text-xl">Nixon López</div>
                  <div className="text-sm text-gray-400">Desarrollo Web & IA</div>
                </div>
              </motion.div>
              
              <motion.p
                className="text-gray-400 text-sm leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                5 años transformando negocios con tecnología de vanguardia. 
                Especialista en IA, desarrollo web y automatizaciones.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors p-2 rounded-lg hover:bg-white/5`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h3
                className="font-semibold text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Enlaces Rápidos
              </motion.h3>
              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transform transition-transform duration-200 block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Services */}
            <div>
              <motion.h3
                className="font-semibold text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Servicios
              </motion.h3>
              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {services.map((service, index) => (
                  <li key={service} className="text-gray-400 text-sm">
                    {service}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h3
                className="font-semibold text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Contacto
              </motion.h3>
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-gray-400 text-sm">
                  Email: infonixoncodes@gmail.com
                </p>
                <p className="text-gray-400 text-sm">
                  Instagram: @nixoncodes.ai
                </p>
                <p className="text-gray-400 text-sm">
                  LinkedIn: nixonlopez
                </p>
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Iniciar Proyecto
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                          <motion.p
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © {new Date().getFullYear()} Nixon López. Todos los derechos reservados.
            </motion.p>
              
              <div className="flex items-center gap-6">
                <motion.button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors text-sm underline"
                  whileHover={{ y: -1 }}
                >
                  Políticas de Privacidad
                </motion.button>
                
                <motion.button
                  onClick={scrollToTop}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <span>Volver arriba</span>
                  <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">Políticas de Privacidad</h2>
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 text-gray-300 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">1. Información que Recopilamos</h3>
                <p className="text-sm leading-relaxed">
                  Recopilamos información que nos proporcionas directamente, como cuando te contactas a través de nuestro formulario, 
                  envías un correo electrónico o nos contactas de otra manera. Esta información puede incluir tu nombre, dirección 
                  de correo electrónico y cualquier otra información que decidas proporcionar.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Uso de la Información</h3>
                <p className="text-sm leading-relaxed">
                  Utilizamos la información que recopilamos para responder a tus consultas, proporcionar servicios, mejorar nuestro 
                  sitio web y comunicarnos contigo sobre nuestros servicios. No vendemos, alquilamos ni compartimos tu información 
                  personal con terceros sin tu consentimiento.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Cookies y Tecnologías Similares</h3>
                <p className="text-sm leading-relaxed">
                  Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar tu experiencia de navegación. 
                  Puedes configurar tu navegador para rechazar cookies, pero esto puede afectar la funcionalidad del sitio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Seguridad de la Información</h3>
                <p className="text-sm leading-relaxed">
                  Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no autorizado, 
                  alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">5. Tus Derechos</h3>
                <p className="text-sm leading-relaxed">
                  Tienes derecho a acceder, corregir o eliminar tu información personal. También puedes optar por no recibir 
                  comunicaciones de marketing. Para ejercer estos derechos, contáctanos a través de la información de contacto 
                  proporcionada en este sitio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">6. Cambios en esta Política</h3>
                <p className="text-sm leading-relaxed">
                  Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos cualquier cambio 
                  significativo publicando la nueva política en este sitio y actualizando la fecha de "última actualización".
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">7. Contacto</h3>
                <p className="text-sm leading-relaxed">
                  Si tienes preguntas sobre esta política de privacidad o nuestras prácticas de privacidad, 
                  contáctanos en: infonixoncodes@gmail.com
                </p>
              </div>

              <div className="text-xs text-gray-500 pt-4 border-t border-gray-700">
                <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 border-t border-gray-700">
              <motion.button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cerrar
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </footer>
  )
}

export default Footer
