import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "M. A.",
    title: "Konut projesi",
    quote:
      "Keşiften montaja kadar her adım çok düzenliydi. İşçilik temiz, teslimat zamanında.",
  },
  {
    name: "S. K.",
    title: "Mağaza uygulaması",
    quote:
      "Güvenlik panjuru için hızlı çözüm sundular. İletişim güçlü, destekleri iyi.",
  },
  {
    name: "E. T.",
    title: "Ofis sistemleri",
    quote:
      "Motorlu sistemler sorunsuz çalışıyor. Hem estetik hem kaliteli bir iş çıktı.",
  },
] as const;

export function Testimonials() {
  return (
    <section id="yorumlar" className="relative border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-white/5 to-transparent blur-2xl" />
      <Container className="py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Müşteri Yorumları"
            title="Memnuniyet odaklı iş, güçlü referans"
            description="Yorum alanı, gerçek Google yorumları veya referans cümleleriyle güçlendirildiğinde dönüşümü artırır."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal
              key={t.name}
              as="figure"
              delayMs={80 + idx * 90}
              className="relative overflow-hidden rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_70px_160px_-140px_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:bg-white/7 hover:ring-white/15"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_0%,rgba(249,115,22,0.12),transparent_50%)] opacity-60" />
              <div className="relative">
                <blockquote className="text-sm leading-7 text-zinc-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-zinc-50">
                      {t.name}
                    </div>
                    <div className="text-xs font-semibold tracking-wide text-zinc-400">
                      {t.title}
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-orange-400/90">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 rounded-sm bg-orange-500/85"
                      />
                    ))}
                  </div>
                </figcaption>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

