'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronDown, Sparkles, Bot, Code, Zap, Calculator } from 'lucide-react'
import Image from 'next/image'
import { useQuoteModal } from '@/hooks/useQuoteModal'

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const { openModal } = useQuoteModal()
  
  const texts = [
    'Desarrollo Web con IA',
    'ChatBots Inteligentes',
    'Automatizaciones',
    'Soluciones Innovadoras'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1))
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  const floatingIcons = [
    { Icon: Bot, delay: 0, position: { top: '20%', left: '10%' } },
    { Icon: Code, delay: 2, position: { top: '30%', right: '15%' } },
    { Icon: Zap, delay: 4, position: { bottom: '30%', left: '15%' } },
    { Icon: Sparkles, delay: 1, position: { top: '60%', right: '10%' } },
  ]

  return (
    <section id="hero" className="relative min-h-screen h-auto md:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-8 md:py-0 pb-0">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => {
          // Posiciones fijas basadas en el índice para evitar hidration mismatch
          const positions = [
            { left: 15, top: 20 }, { left: 85, top: 35 }, { left: 45, top: 60 }, { left: 70, top: 15 },
            { left: 25, top: 75 }, { left: 90, top: 80 }, { left: 10, top: 45 }, { left: 60, top: 90 },
            { left: 35, top: 25 }, { left: 80, top: 55 }, { left: 20, top: 85 }, { left: 65, top: 10 },
            { left: 40, top: 70 }, { left: 95, top: 40 }, { left: 5, top: 65 }, { left: 75, top: 30 },
            { left: 30, top: 95 }, { left: 85, top: 20 }, { left: 50, top: 50 }, { left: 15, top: 80 }
          ];
          const position = positions[i] || { left: 50, top: 50 };
          
          return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
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
              delay: i * 0.2,
            }}
          />
        )})}
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-400/30"
          style={position}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay,
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 container-padding h-full pt-20 pb-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center md:items-stretch h-full">
          
          {/* Left column - Content */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left flex flex-col justify-center h-full"
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <span className="text-blue-400 font-mono text-2xl tracking-wider">
                ¡Hola! Soy
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Nixon López</span>
            </motion.h1>

            {/* Animated subtitle */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2">
                Especialista en{' '}
                <span className="text-blue-400 font-semibold">
                  {currentText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </h2>
              <p className="pt-5 text-gray-400 max-w-2xl mx-auto lg:mx-0 text-lg"> 
                Desarrollo web, ChatBots inteligentes y automatizaciones que impulsan tu negocio al futuro.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
            >
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal('web')}
              >
                <Calculator className="w-5 h-5" />
                Solicitar Cotización
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right column - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end h-full relative"
          >
            <motion.div
              className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-[500px] sm:h-[600px] md:h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile image container */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/images/nixonprofile.png"
                  alt="Nixon López - Desarrollador Web y Especialista en IA"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
              
              {/* Floating tech icons around the image - better distributed */}
              <motion.div
                className="absolute top-8 -right-4 sm:-right-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-8 -left-4 sm:-left-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -left-6 sm:-left-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  x: [0, -8, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute top-3/4 -left-4 sm:-left-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <Code className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Gradient overlay - only on desktop */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  )
}

export default HeroSection
