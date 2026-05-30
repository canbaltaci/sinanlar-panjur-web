import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    title: "Üretim",
    desc: "Ölçüye özel panjur üretimi, malzeme kalitesi ve düzgün detay işçiliği.",
  },
  {
    title: "Montaj",
    desc: "Temiz uygulama, güvenli sabitleme ve uzun ömür için doğru kurulum.",
  },
  {
    title: "Teknik Destek",
    desc: "Arıza tespiti, bakım, motor/aksesuar değişimi ve hızlı çözüm.",
  },
] as const;

export function Services() {
  return (
    <section id="hizmetler" className="relative border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-orange-500/10 to-transparent blur-2xl" />
      <Container className="py-16 sm:py-20">
        <Reveal className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Hizmetler"
            title="Üretimden montaja, uçtan uca çözüm"
            description="Panjur sistemlerinde hem estetik hem güvenlik beklentisini aynı çizgide buluşturuyoruz."
          />
          <div className="text-sm text-zinc-400">
            Kurumsal iş akışı • Net süreç • Zamanında teslim
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((s, idx) => (
            <Reveal
              key={s.title}
              delayMs={100 + idx * 90}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/12 to-white/5 p-1 ring-1 ring-white/12 shadow-[0_60px_140px_-110px_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:ring-white/18"
            >
              <div className="relative h-full rounded-[22px] bg-zinc-950/50 p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_25%_10%,rgba(249,115,22,0.18),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
                <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200 ring-1 ring-white/10">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-orange-500/15 ring-1 ring-orange-500/20">
                      <span className="h-2 w-2 rounded-sm bg-orange-500/90" />
                    </span>
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="text-lg font-semibold tracking-tight text-zinc-50">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">
                    {s.desc}
                  </p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
                  <div className="mt-4 text-xs font-semibold tracking-wide text-zinc-400">
                    Detaylı bilgi için iletişime geçin
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

