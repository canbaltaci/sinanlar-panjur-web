export const metadata = {
    title: "Kış Bahçesi ve Cam Balkon | Sinanlar Panjur",
    description: "Modern kış bahçesi, cam balkon ve açılır kapanır sistemler.",
  };
  
  export default function KisBahcesiCamBalkonPage() {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-sky-700 to-blue-800 text-white py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kış Bahçesi & Cam Balkon</h1>
            <p className="text-2xl">Mevsim fark etmeksizin dış mekan keyfi</p>
          </div>
        </section>
  
        {/* İletişim Butonları */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition">
              Teklif Alın
            </a>
            <a href="https://wa.me/905364415520" target="_blank" className="border border-green-600 text-green-600 hover:bg-green-50 px-10 py-4 rounded-2xl text-lg font-semibold transition flex items-center gap-2">
              💬 WhatsApp ile İletişime Geç
            </a>
            <a href="tel:05364415520" className="text-2xl font-bold text-orange-600">
              0536 441 55 20
            </a>
          </div>
        </section>
      </div>
    );
  }