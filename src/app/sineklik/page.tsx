export const metadata = {
  title: "Sineklik Sistemleri | Sinanlar Panjur & Sineklik",
  description: "Pencere sineklik, kapı sineklik, plise sineklik ve katlanır sineklik modelleri. Kaliteli malzeme, profesyonel montaj ve uzun ömürlü çözümler.",
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

      {/* İletişim Butonları */}
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

      {/* Uzun SEO İçeriği */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Sineklik Sistemleri ile Ferah ve Güvenli Yaşam Alanları</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Sinanlar Panjur olarak, yılların verdiği tecrübe ile ürettiğimiz sineklik sistemleri, 
            evinizde ve iş yerinizde konforu üst seviyeye taşıyor. Özellikle yaz aylarında böcek, sinek ve haşerelerden 
            korunmak isteyenler için en ideal çözümü sunuyoruz.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pencere sineklikleri, kapı sineklikleri, modern plise sineklik ve katlanır sineklik modellerimizle 
            hem estetik hem de fonksiyonel çözümler üretiyoruz. Kullandığımız malzemeler yüksek kaliteli, 
            UV dayanımlı ve uzun yıllar sorunsuz kullanım sunuyor.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Sineklik Çeşitlerimiz</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>Pencere Sineklikleri:</strong> Sabit ve açılır kapanır modeller</li>
            <li><strong>Kapı Sineklikleri:</strong> Mıknatıslı, raylı ve katlanır sistemler</li>
            <li><strong>Plise Sineklik:</strong> Modern görünüm, az yer kaplayan tasarım</li>
            <li><strong>Katlanır Sineklik:</strong> Geniş açıklıklar için ideal çözüm</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xl text-gray-700 mb-6">
            Hemen teklif almak, ücretsiz keşif yaptırmak veya detaylı bilgi almak için bizimle iletişime geçin.
          </p>
        </div>
      </section>
    </div>
  );
}