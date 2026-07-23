export const metadata = {
  title: "Sineklik Sistemleri | Sinanlar Panjur & Sineklik",
  description: "Pencere, kapı, katlanır, plise sineklik sistemleri. Dayanıklı, estetik ve kullanışlı sineklik çözümleri ile böceklerden arının.",
  keywords: ["sineklik", "pencere sineklik", "kapı sineklik", "plise sineklik", "katlanır sineklik", "sineklik montaj"],
};

export default function SineklikPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sineklik Sistemleri</h1>
          <p className="text-2xl">Yazın keyfini kaçırmayın, doğayla iç içe yaşayın</p>
        </div>
      </section>

      {/* Tanıtım Yazısı - SEO için önemli */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Sinanlar Panjur olarak yılların tecrübesiyle ürettiğimiz sineklik sistemleri, 
            hem fonksiyonel hem de estetik tasarımlarıyla evinize değer katıyor. 
            Pencere sineklikleri, kapı sineklikleri, plise ve katlanır modellerimizle 
            böceklerden arınmış, ferah bir yaşam alanı sunuyoruz.
          </p>
        </div>
      </section>

      {/* Avantajlar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Neden Sinanlar Sineklik?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold mb-4">🛡️ Dayanıklılık</h3>
              <p className="text-gray-600">UV korumalı, paslanmaz ve uzun ömürlü malzemeler.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold mb-4">🎨 Estetik Tasarım</h3>
              <p className="text-gray-600">Her tarza uygun renk ve model seçenekleri.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold mb-4">⚡ Kolay Kullanım</h3>
              <p className="text-gray-600">Sessiz ray sistemi ve kolay temizlik.</p>
            </div>
          </div>
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