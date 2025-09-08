'use client'

import { motion } from 'framer-motion'
import { Calculator, Globe, Smartphone, Bot } from 'lucide-react'

interface ServiceCTAProps {
  serviceType: 'web' | 'mobile' | 'automation'
  title: string
  highlightedText: string
  onQuoteClick: () => void
}

const ServiceCTA = ({ serviceType, title, highlightedText, onQuoteClick }: ServiceCTAProps) => {
  const getIcon = () => {
    switch (serviceType) {
      case 'web':
        return Globe
      case 'mobile':
        return Smartphone
      case 'automation':
        return Bot
      default:
        return Globe
    }
  }

  const Icon = getIcon()

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
      <div className="container-padding">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}{' '}
            <span className="gradient-text">{highlightedText}</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Obtén una cotización personalizada y comienza tu proyecto hoy mismo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={onQuoteClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calculator className="w-5 h-5" />
              Obtener Cotización
            </motion.button>
            
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              Ver Portafolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceCTA
