export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          ¡Tailwind CSS Funciona! 🎉
        </h1>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold">
          Nixon López Portfolio
        </div>
        <p className="text-gray-300 mt-4">
          Página de prueba - Todo está funcionando correctamente
        </p>
        <div className="mt-8 space-y-4">
          <div className="bg-blue-500 text-white p-4 rounded-lg">
            Azul básico de Tailwind ✅
          </div>
          <div className="bg-purple-600 text-white p-4 rounded-lg">
            Púrpura básico de Tailwind ✅
          </div>
          <div className="gradient-text text-2xl font-bold">
            Gradiente personalizado ✅
          </div>
        </div>
      </div>
    </div>
  )
}
