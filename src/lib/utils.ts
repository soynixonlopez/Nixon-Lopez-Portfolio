import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility para generar delays escalonados en animaciones
export function staggerDelay(index: number, baseDelay: number = 0.1) {
  return index * baseDelay
}

// Utility para scroll suave a elementos
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Utility para formatear texto con efecto de typing
export function typewriterEffect(text: string, speed: number = 50): Promise<string> {
  return new Promise((resolve) => {
    let index = 0
    const result = ""
    
    const timer = setInterval(() => {
      if (index === text.length) {
        clearInterval(timer)
        resolve(text)
      }
      index++
    }, speed)
  })
}
