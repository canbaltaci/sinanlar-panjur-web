export const metadata = {
  title: "Sineklik Sistemleri | Sinanlar Panjur & Sineklik",
  description: "Pencere, kapı, katlanır ve plise sineklik sistemleri. Böceklerden korunurken ferah bir yaşam alanı sunuyoruz.",
  keywords: ["sineklik", "pencere sineklik", "kapı sineklik", "plise sineklik", "katlanır sineklik", "sineklik montaj istanbul"],
};

export default function SineklikPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sineklik Sistemleri</h1>
          <p className="text-2xl">Yazın keyfini kaçırmayın, doğayla iç içe yaşayın</p>
        </div>
      </section>

      {/* İletişim Butonları - Üstte */}
      <section className="py-10 bg-white border-b shadow-sm">
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

      {/* SEO Uyumlu Ana İçerik */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Kaliteli Sineklik Çözümleri</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
            Sinanlar Panjur olarak, uzun yıllardır ürettiğimiz sineklik sistemleriyle İstanbul ve çevresine hizmet veriyoruz. 
            Pencere sineklikleri, kapı sineklikleri, plise sineklik ve katlanır modellerimizle hem güvenlik hem de estetik sunuyoruz.
          </p>
        </div>
      </section>

      {/* CTA + Ek Bilgi */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xl text-gray-700 mb-8">
            Hemen teklif almak, ücretsiz keşif yaptırmak veya detaylı bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="text-sm text-gray-500">
            📍 İstanbul • Hızlı Montaj • 2 Yıl Garanti • Uygun Fiyat
          </div>
        </div>
      </section>
    </div>
  );
}