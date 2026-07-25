export const metadata = {
  title: "Pimapen PVC Kapı ve Pencere | Sinanlar",
  description: "Yüksek kaliteli Pimapen PVC kapı, pencere ve doğrama sistemleri. Isı yalıtımı, ses yalıtımı ve modern tasarım.",
  keywords: ["pimapen", "pvc pencere", "pvc kapı", "pimapen montaj", "ısı yalıtımlı pencere"],
};

export default function PimapenPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-700 to-orange-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Pimapen PVC Sistemleri</h1>
          <p className="text-2xl">Isı ve ses yalıtımında güvenilir çözüm</p>
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

      {/* SEO Uyumlu Uzun İçerik */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Pimapen PVC Kapı ve Pencere Sistemleri</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Sinanlar Panjur olarak yüksek kaliteli Pimapen PVC kapı, pencere ve doğrama sistemleri sunuyoruz. 
            Isı yalıtımı, ses yalıtımı ve modern tasarımı bir araya getiren çözümlerimizle 
            evinizin konforunu ve enerji verimliliğini artırıyoruz.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Pimapen profilleri uzun yıllardır güvenle kullanılan, dayanıklı ve estetik ürünlerdir. 
            Profesyonel ölçüm ve montaj ekibimizle her mekana özel çözümler üretiyor, 
            kaliteli malzeme ve işçilikle uzun ömürlü sonuçlar elde ediyoruz.
          </p>

          <h3 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Pimapen Avantajları</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li><strong>Isı Yalıtımı:</strong> Enerji tasarrufu sağlar</li>
            <li><strong>Ses Yalıtımı:</strong> Dış gürültüyü azaltır</li>
            <li><strong>Modern Tasarım:</strong> Her tarza uygun renk ve model seçenekleri</li>
            <li><strong>Uzun Ömür:</strong> Dayanıklı ve bakımı kolay sistemler</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xl text-gray-700 mb-6">
            Eviniz için en uygun Pimapen çözümünü belirlemek ve ücretsiz keşif yaptırmak için hemen bize ulaşın.
          </p>
        </div>
      </section>
    </div>
  );
}