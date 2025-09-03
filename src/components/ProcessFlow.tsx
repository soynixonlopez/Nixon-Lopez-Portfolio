'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Sparkles } from 'lucide-react'

interface ProcessStep {
  step: string
  title: string
  description: string
  icon?: React.ComponentType<any>
  color: string
}

interface ProcessFlowProps {
  steps: ProcessStep[]
  title: string
  subtitle: string
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ steps, title, subtitle }) => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Escalera de proceso con líneas punteadas */}
        <div className="max-w-6xl mx-auto mb-20 relative">
          {/* SVG para las líneas de conexión en forma de L */}
          <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
            
            {/* Líneas de respaldo sólidas para asegurar visibilidad */}
            {steps.map((step, index) => {
              if (index === steps.length - 1) return null;
              
              const currentY = 150 + index * 200;
              const nextY = 150 + (index + 1) * 200;
              const isEven = index % 2 === 0;
              
              // Línea horizontal desde la tarjeta actual
              const horizontalStart = isEven ? 300 : 900;
              const horizontalEnd = isEven ? 700 : 700;
              
              // Línea vertical de conexión
              const verticalX = 700;
              
              return (
                <g key={`backup-line-${index}`}>
                  {/* Línea horizontal sólida de respaldo */}
                  <line
                    x1={horizontalStart}
                    y1={currentY}
                    x2={horizontalEnd}
                    y2={currentY}
                    stroke="#3B82F6"
                    strokeWidth="10"
                    opacity="0.3"
                  />
                  
                  {/* Línea vertical sólida de respaldo */}
                  <line
                    x1={verticalX}
                    y1={currentY}
                    x2={verticalX}
                    y2={nextY}
                    stroke="#3B82F6"
                    strokeWidth="10"
                    opacity="0.3"
                  />
                </g>
              );
            })}
            
            {/* Líneas de conexión en forma de L */}
            {steps.map((step, index) => {
              if (index === steps.length - 1) return null;
              
              const currentY = 150 + index * 200;
              const nextY = 150 + (index + 1) * 200;
              const isEven = index % 2 === 0;
              
              // Línea horizontal desde la tarjeta actual (más larga y visible)
              const horizontalStart = isEven ? 300 : 900;
              const horizontalEnd = isEven ? 700 : 700;
              
              // Línea vertical de conexión (más gruesa y visible)
              const verticalX = 700;
              
              return (
                <g key={`line-${index}`}>
                  {/* Línea horizontal punteada - más gruesa y visible */}
                  <line
                    x1={horizontalStart}
                    y1={currentY}
                    x2={horizontalEnd}
                    y2={currentY}
                    stroke="url(#lineGradient)"
                    strokeWidth="8"
                    strokeDasharray="15,15"
                    opacity="1"
                  />
                  
                  {/* Línea vertical punteada - más gruesa y visible */}
                  <line
                    x1={verticalX}
                    y1={currentY}
                    x2={verticalX}
                    y2={nextY}
                    stroke="url(#lineGradient)"
                    strokeWidth="8"
                    strokeDasharray="15,15"
                    opacity="1"
                  />
                  
                  {/* Flecha más grande y visible en la línea vertical */}
                  <polygon
                    points={`${verticalX - 12},${nextY - 30} ${verticalX + 12},${nextY - 30} ${verticalX},${nextY - 8}`}
                    fill="url(#lineGradient)"
                    opacity="1"
                  />
                  
                  {/* Círculos de conexión para hacer las líneas más visibles */}
                  <circle
                    cx={horizontalStart}
                    cy={currentY}
                    r="10"
                    fill="url(#lineGradient)"
                    opacity="1"
                  />
                  <circle
                    cx={horizontalEnd}
                    cy={currentY}
                    r="10"
                    fill="url(#lineGradient)"
                    opacity="1"
                  />
                  <circle
                    cx={verticalX}
                    cy={currentY}
                    r="10"
                    fill="url(#lineGradient)"
                    opacity="1"
                  />
                  <circle
                    cx={verticalX}
                    cy={nextY}
                    r="10"
                    fill="url(#lineGradient)"
                    opacity="1"
                  />
                </g>
              );
            })}
          </svg>
          
          {/* Pasos del proceso en escalera */}
          <div className="relative space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Contenido del paso */}
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-20 text-right' : 'pl-20 text-left'}`}>
                  <motion.div
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Número del paso con efecto de profundidad */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl shadow-2xl mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                         style={{
                           background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`,
                           boxShadow: `0 20px 40px ${step.color}40`
                         }}>
                      <span className="text-3xl font-bold text-white drop-shadow-lg">
                        {step.step}
                      </span>
                    </div>
                    
                    {/* Contenido del paso */}
                    <div className={`${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-sm`}>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {step.description}
                      </p>
                      
                      
                    </div>
                  </motion.div>
                </div>
                
                {/* Icono del paso */}
                <div className={`flex-1 ${index % 2 === 0 ? 'pl-20' : 'pr-20'}`}>
                  <motion.div
                    className="flex justify-center"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <div className="w-28 h-28 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center shadow-xl border border-gray-200 dark:border-gray-600">
                      {step.icon ? (
                        <step.icon className="w-14 h-14 text-gray-600 dark:text-gray-400" />
                      ) : (
                        <div className="w-14 h-14 bg-gray-300 dark:bg-gray-600 rounded-xl flex items-center justify-center">
                          <span className="text-gray-500 dark:text-gray-400 font-bold text-2xl">
                            {step.step}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          

        </div>

        {/* Información adicional debajo */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-8 py-4 rounded-full">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Cada paso está diseñado para maximizar la eficiencia y calidad del resultado final
            </span>
            <Sparkles className="w-5 h-5 text-purple-500" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessFlow
