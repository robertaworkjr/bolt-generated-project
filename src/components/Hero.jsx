export default function Hero() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=2000&q=80')] 
        bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-50"
      />
      <div className="relative z-10 text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Crypto & Finance Hub</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Your gateway to the latest cryptocurrency and financial market updates
        </p>
      </div>
    </div>
  )
}
