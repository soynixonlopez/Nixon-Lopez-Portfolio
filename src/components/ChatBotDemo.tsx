'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const ChatBotDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! 👋 Soy el ChatBot de Nixon López. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const predefinedResponses: { [key: string]: string } = {
    'hola': '¡Hola! 😊 Es genial conocerte. ¿Te interesa saber sobre los servicios de desarrollo web con IA?',
    'servicios': '🚀 Ofrezco tres servicios principales:\n\n1. **Desarrollo Web con IA** - Sitios modernos e inteligentes\n2. **ChatBots** - Asistentes virtuales como yo\n3. **Automatizaciones** - Sistemas que trabajan por ti\n\n¿Cuál te interesa más?',
    'precio': '💰 Los precios varían según el proyecto:\n\n• Sitio web básico: $800-1500\n• ChatBot personalizado: $500-1200\n• Automatizaciones: $300-800\n\n¿Te gustaría una cotización personalizada?',
    'tiempo': '⏰ Los tiempos típicos son:\n\n• Sitio web: 2-4 semanas\n• ChatBot: 1-2 semanas\n• Automatización: 1-3 semanas\n\n¿Tienes alguna fecha límite en mente?',
    'contacto': '📞 Puedes contactar a Nixon:\n\n• Email: infonixoncodes@gmail.com\n• Instagram: @nixoncodes.ai\n• LinkedIn: in/nixonlopez\n\n¿Prefieres que él te contacte directamente?',
    'experiencia': '👨‍💻 Nixon tiene:\n\n• 5+ años como desarrollador\n• Experiencia como IT Teacher\n• Especialización en IA\n• 100+ proyectos completados\n\n¿Quieres ver algunos ejemplos de su trabajo?',
    'default': '🤔 Interesante pregunta. Te recomiendo contactar directamente a Nixon para una respuesta detallada. ¿Te ayudo con su información de contacto?'
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (key !== 'default' && lowerMessage.includes(key)) {
        return response
      }
    }
    
    return predefinedResponses.default
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simular tiempo de respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    '¿Qué servicios ofreces?',
    '¿Cuánto cuesta un sitio web?',
    '¿Cuánto tiempo toma?',
    'Información de contacto'
  ]

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(0, 212, 255, 0.4)',
            '0 0 0 10px rgba(0, 212, 255, 0)',
            '0 0 0 0 rgba(0, 212, 255, 0)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              width: isMinimized ? 320 : 400,
              height: isMinimized ? 60 : 600
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">ChatBot Demo</h3>
                  <p className="text-xs opacity-90">Nixon López Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`flex items-start gap-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === 'user' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                        }`}>
                          {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </div>
                        <div className={`px-3 py-2 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-blue-500 text-white rounded-br-none'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'
                        }`}>
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      className="flex justify-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <Bot className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg rounded-bl-none">
                          <div className="flex space-x-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-gray-400 rounded-full"
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Questions */}
                {messages.length === 1 && (
                  <div className="px-4 pb-2">
                    <p className="text-xs text-gray-500 mb-2">Preguntas rápidas:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => setInputText(question)}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Escribe tu mensaje..."
                      className="flex-1 bg-gray-100 dark:bg-gray-700 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      disabled={isTyping}
                    />
                    <motion.button
                      onClick={handleSendMessage}
                      disabled={!inputText.trim() || isTyping}
                      className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBotDemo
