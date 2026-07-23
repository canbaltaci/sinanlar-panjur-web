export const metadata = {
    title: "Panjur Sistemleri | Sinanlar Panjur & Sineklik",
    description: "Alüminyum panjur, kepenk, otomatik panjur ve güvenlik sistemleri. Kaliteli üretim ve profesyonel montaj.",
    keywords: ["panjur", "alüminyum panjur", "otomatik panjur", "kepenk", "güvenlik panjuru"],
  };
  
  export default function PanjurPage() {
    return (
      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-800 to-zinc-900 text-white py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Panjur Sistemleri</h1>
            <p className="text-2xl">Güvenlik ve estetik bir arada</p>
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
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Panjur ve Kepenk Sistemleri</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Sinanlar Panjur olarak alüminyum panjur, kepenk ve otomatik panjur sistemlerinde uzmanlaşmış bir firmayız. 
              Eviniz, dükkanınız veya iş yeriniz için en güvenli ve estetik çözümleri sunuyoruz.
            </p>
  
            <p className="text-gray-700 leading-relaxed mb-6">
              Özellikle güvenlik ihtiyacının yüksek olduğu bölgelerde panjur sistemleri büyük önem taşımaktadır. 
              Dayanıklı alüminyum profiller, kaliteli motor sistemleri ve modern tasarımlarımızla uzun yıllar sorunsuz kullanım sağlıyoruz.
            </p>
  
            <h3 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Panjur Çeşitlerimiz</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li><strong>Alüminyum Panjur:</strong> Şık ve dayanıklı</li>
              <li><strong>Otomatik Panjur:</strong> Uzaktan kumanda ve app kontrollü</li>
              <li><strong>Kepenk Sistemleri:</strong> Klasik ve modern modeller</li>
            </ul>
          </div>
        </section>
  
        {/* CTA */}
        <section className="py-16 bg-gray-50 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-xl text-gray-700 mb-6">
              Güvenlik ve konfor için en iyi panjur sistemini seçmek için hemen bizimle iletişime geçin.
            </p>
          </div>
        </section>
      </div>
    );
  }