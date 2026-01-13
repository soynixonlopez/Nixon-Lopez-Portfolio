'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  MessageCircle,
  Send,
  Clock,
  Mail
} from 'lucide-react'
import TechLogo from './TechLogo'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleWhatsAppClick = () => {
    const phoneNumber = '+50768252312'
    const message = encodeURIComponent('Hola, estoy interesado en solicitar una cotización para tus servicios')
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: 'Contacta Directamente',
      description: 'Respuesta inmediata',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'soynixonlopez@gmail.com',
      description: 'Respuesta en 24 horas',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Horario',
      info: 'Lun - Vie: 9AM - 6PM',
      description: 'Zona horaria EST',
      color: 'from-purple-500 to-purple-600'
    }
  ]



  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
        {[...Array(15)].map((_, i) => {
          // Posiciones fijas para evitar hydration mismatch
          const positions = [
            { left: 10, top: 15 }, { left: 80, top: 25 }, { left: 30, top: 70 }, { left: 90, top: 45 },
            { left: 20, top: 85 }, { left: 70, top: 10 }, { left: 50, top: 60 }, { left: 15, top: 40 },
            { left: 85, top: 75 }, { left: 40, top: 20 }, { left: 60, top: 90 }, { left: 25, top: 55 },
            { left: 95, top: 30 }, { left: 35, top: 80 }, { left: 75, top: 50 }
          ];
          const position = positions[i] || { left: 50, top: 50 };
          
          return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        )})}
      </div>

      <div className="container-padding relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(0, 212, 255, 0.4)',
                '0 0 0 10px rgba(0, 212, 255, 0)',
                '0 0 0 0 rgba(0, 212, 255, 0)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Send size={16} />
            Contacto
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para{' '}
            <span className="gradient-text">Conseguir Más Clientes</span>?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contacta con nosotros ahora por WhatsApp y descubre cómo podemos crear 
            la página web perfecta para tu negocio. Respuesta inmediata y cotización gratuita.
          </p>
        </motion.div>

        {/* WhatsApp Contact - Centered */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <MessageCircle className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para{' '}
              <span className="gradient-text">Comenzar tu Proyecto</span>?
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Contáctame directamente por WhatsApp y recibe respuesta inmediata. 
              Cotización gratuita y sin compromiso. Hablamos sobre tu proyecto ahora mismo.
            </p>

            <motion.button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-full font-semibold text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-green-500/50 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <TechLogo name="WhatsApp" size={32} />
              Contactar por WhatsApp
            </motion.button>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-4">También puedes contactarme por:</p>
              <div className="flex justify-center gap-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">soynixonlopez@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Lun - Vie: 9AM - 6PM</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >

            <h3 className="text-2xl font-bold text-white mb-6 mt-12">
              Síguenos en nuestras{' '}
              <span className="gradient-text">Redes Sociales</span>
            </h3>
            
            <div className="flex justify-center gap-6">
            <motion.a
              href="https://instagram.com/soynixonlopez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors p-3 rounded-full hover:bg-pink-500/10"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TechLogo name="Instagram" size={32} />
            </motion.a>
            <motion.a
              href="https://tiktok.com/@soynixonlopez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-gray-500/10"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TechLogo name="TikTok" size={32} />
            </motion.a>
            <motion.a
              href="https://facebook.com/soynixonlopez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors p-3 rounded-full hover:bg-blue-500/10"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TechLogo name="Facebook" size={32} />
            </motion.a>
            <motion.a
              href="https://youtube.com/@soynixonlopez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors p-3 rounded-full hover:bg-red-500/10"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TechLogo name="YouTube" size={32} />
            </motion.a>
          </div>
        </motion.div>



      </div>
    </section>
  )
}

export default ContactSection