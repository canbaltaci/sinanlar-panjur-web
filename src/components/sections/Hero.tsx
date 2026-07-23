'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></div>
          <span className="text-white text-sm font-medium">
            EST. 2009
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Panjur ve Sineklik
          <br />
          <span className="text-orange-500">
            Sistemlerinde Uzman
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-300">
          Kaliteli üretim • Profesyonel montaj • 15+ yıllık güvenilir hizmet
        </p>

        {/* 4 Hizmet Butonu */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <a
            href="/sineklik"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-6 px-6 rounded-2xl transition-all hover:scale-105"
          >
            Sineklik
          </a>
          <a
            href="/panjur"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-6 px-6 rounded-2xl transition-all hover:scale-105"
          >
            Panjur
          </a>
          <a
            href="/kis-bahcesi-cam-balkon"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-6 px-6 rounded-2xl transition-all hover:scale-105"
          >
            Kış Bahçesi & Cam Balkon
          </a>
          <a
            href="/pimapen"
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-6 px-6 rounded-2xl transition-all hover:scale-105"
          >
            Pimapen
          </a>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5">

          <a
            href="#iletisim"
            className="bg-orange-500 hover:bg-orange-600 transition px-10 py-4 rounded-xl text-white font-semibold"
          >
            Teklif Alın
          </a>

          <a
            href="https://wa.me/905364415520"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white hover:bg-white/10 transition px-10 py-4 rounded-xl font-semibold"
          >
            WhatsApp ile İletişime Geç
          </a>

        </div>

        {/* Telefon */}
        <div className="mt-12">
          <p className="text-gray-400 text-lg">
            Hemen Arayın
          </p>
          <a
            href="tel:+905364415520"
            className="block mt-3 text-4xl md:text-5xl font-bold text-orange-500 hover:text-orange-400"
          >
            0536 441 55 20
          </a>
        </div>

        <div className="mt-16 text-gray-500">
          Ücretsiz Keşif • Hızlı Teklif • Profesyonel Montaj
        </div>

      </div>
    </section>
  );
}