import Image from "next/image";
import { CONTACT, whatsappLink } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1400px_circle_at_15%_10%,rgba(249,115,22,0.20),transparent_55%),radial-gradient(900px_circle_at_85%_25%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(800px_circle_at_60%_90%,rgba(249,115,22,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.88))]" />
        <div className="absolute -top-24 left-1/2 h-[360px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/12 blur-3xl sp-float motion-reduce:animate-none" />
        <div className="absolute -right-40 top-40 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl sp-float motion-reduce:animate-none [animation-delay:1.2s]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22600%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22600%22 height=%22600%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal
              delayMs={0}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-200 ring-1 ring-white/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500/90 shadow-[0_0_24px_rgba(249,115,22,0.55)]" />
              Üretim • Montaj • Teknik Destek
            </Reveal>

            <Reveal as="h1" delayMs={120} className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-b from-zinc-50 to-zinc-300 bg-clip-text text-transparent">
                Panjur Sistemlerinde Güvenilir Çözüm
              </span>
            </Reveal>

            <Reveal as="p" delayMs={220} className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-300 sm:text-lg">
              Sinanlar Panjur olarak üretim, montaj ve teknik destek hizmetleri
              sunuyoruz.
            </Reveal>

            <Reveal delayMs={320} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary" href={`tel:${CONTACT.phoneTel}`}>
                Hemen Ara
              </Button>
              <Button
                variant="secondary"
                href={whatsappLink(
                  "Merhaba, panjur sistemleri hakkında bilgi almak istiyorum."
                )}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </Button>
              <div className="text-sm text-zinc-400">
                <span className="text-zinc-300">{CONTACT.phoneDisplay}</span>
              </div>
            </Reveal>

            <Reveal delayMs={420} className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Hızlı Keşif", v: "Net ölçüm + doğru yönlendirme" },
                { k: "Temiz Montaj", v: "Düzgün işçilik, zamanında teslim" },
                { k: "Destek", v: "Satış sonrası güvenli takip" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)] transition hover:-translate-y-0.5 hover:bg-white/7 hover:ring-white/15"
                >
                  <div className="text-sm font-semibold text-zinc-50">
                    {item.k}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-zinc-300">
                    {item.v}
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal
              delayMs={520}
              className="mt-10 grid grid-cols-2 gap-4 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 sm:grid-cols-4"
            >
              {[
                { v: "10+ yıl", k: "Saha deneyimi" },
                { v: "Hızlı", k: "Keşif & teklif" },
                { v: "Premium", k: "Malzeme standardı" },
                { v: "Güven", k: "Satış sonrası takip" },
              ].map((s) => (
                <div key={s.k} className="text-center">
                  <div className="text-lg font-semibold text-zinc-50">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs font-semibold tracking-wide text-zinc-400">
                    {s.k}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal
              delayMs={180}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/12 to-white/5 p-1 ring-1 ring-white/12 shadow-[0_60px_140px_-90px_rgba(0,0,0,0.95)]"
            >
              <div className="relative rounded-[22px] bg-zinc-950/55 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_30%_20%,rgba(249,115,22,0.20),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]">
                  <Image
                    src="/images/hero-panjur.jpg"
                    alt="Modern panjur sistemi"
                    fill
                    className="object-cover opacity-55"
                    sizes="(max-width: 1024px) 100vw, 520px"
                    priority
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.20),rgba(0,0,0,0.80))]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-zinc-50">
                      Premium Görünüm
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                      Keşif & Teklif
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {[
                      "Alüminyum panjur sistemleri",
                      "Motorlu/uzaktan kumandalı çözümler",
                      "Tamir • bakım • parça değişimi",
                    ].map((t) => (
                      <div
                        key={t}
                        className="flex items-start gap-3 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10 backdrop-blur-sm shadow-[0_18px_60px_-40px_rgba(0,0,0,0.9)] transition hover:-translate-y-0.5 hover:ring-white/15"
                      >
                        <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500/90 shadow-[0_0_0_3px_rgba(249,115,22,0.16)]" />
                        <div className="text-sm leading-6 text-zinc-200">
                          {t}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-xs font-semibold tracking-wide text-zinc-300">
                      Hızlı iletişim
                    </div>
                    <div className="mt-1 text-sm text-zinc-50">
                      {CONTACT.addressShort}
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button variant="ghost" href="#iletisim">
                        İletişim Formu
                      </Button>
                      <Button variant="secondary" href={`tel:${CONTACT.phoneTel}`}>
                        Ara
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

