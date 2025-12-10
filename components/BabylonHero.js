export default function BabylonHero() {
  return (
    <section className="h-[80vh] bg-[url('/babylon.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-amber-300 drop-shadow-lg">
          Les Jardins Suspendus — Sélection de Cocktails
        </h1>
      </div>
    </section>
  )
}