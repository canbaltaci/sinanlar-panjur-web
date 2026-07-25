export const metadata = {
  title: "Kış Bahçesi ve Cam Balkon | Sinanlar Panjur",
  description: "Kış bahçesi, cam balkon, katlanır ve sürgülü cam sistemleri. Modern, kullanışlı ve estetik çözümler.",
  keywords: ["kış bahçesi", "cam balkon", "katlanır cam balkon", "sürgülü cam sistem"],
};

export default function KisBahcesiCamBalkonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-700 to-blue-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Kış Bahçesi & Cam Balkon</h1>
          <p className="text-2xl">Mevsim fark etmeksizin dış mekan keyfi</p>
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

      {/* SEO İçerik */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Kış Bahçesi ve Cam Balkon Sistemleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Sinanlar Panjur olarak kış bahçesi ve cam balkon sistemlerinde modern ve kullanışlı çözümler sunuyoruz. 
            Evlerinize ekstra yaşam alanı kazandıran sistemlerimizle dört mevsim dış mekan keyfini yaşamanızı sağlıyoruz.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Cam balkon sistemleri sayesinde balkonunuz yağmur, rüzgar ve soğuk havadan korunurken, 
            istenildiğinde tamamen açılabilir hale gelir.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Hizmet Çeşitlerimiz</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>Kış Bahçesi:</strong> Cam ve alüminyum konstrüksiyonla 4 mevsim kullanılabilir alanlar</li>
            <li><strong>Cam Balkon:</strong> Katlanır ve sürgülü sistemler</li>
            <li><strong>Açılır Kapanır Sistemler:</strong> Kullanım kolaylığı ve modern görünüm</li>
          </ul>
        </div>
      </section>

      {/* Galeri */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Kış Bahçesi & Cam Balkon Uygulamalarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img 
              src="/images/cambalkon1.jpg" 
              alt="Cam balkon örneği 1" 
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
            <img 
              src="/images/cambalkon2.png" 
              alt="Cam balkon örneği 2" 
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
            <img 
              src="/images/kis-bahcesi1.webp" 
              alt="Kış bahçesi örneği" 
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xl text-gray-700 mb-6">
            Evinize ekstra yaşam alanı kazandırmak için hemen bizimle iletişime geçin.
          </p>
        </div>
      </section>
    </div>
  );
}