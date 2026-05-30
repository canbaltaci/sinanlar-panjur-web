import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const projects = [
  {
    title: "Konut Uygulaması",
    meta: "Alüminyum panjur + montaj",
    note: "Gün ışığı kontrolü ve güvenlik odağı",
  },
  {
    title: "Ofis / Plaza",
    meta: "Motorlu sistem + kontrol",
    note: "Sessiz çalışma ve estetik görünüm",
  },
  {
    title: "Mağaza Cephe",
    meta: "Güvenlik panjuru",
    note: "Dayanıklılık + hızlı aç/kapa",
  },
] as const;

export function Projects() {
  return (
    <section id="projeler" className="relative border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-orange-500/10 to-transparent blur-2xl" />
      <Container className="py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Projeler / Referanslar"
            title="Her projede aynı çizgi: kalite ve netlik"
            description="Buradaki örnek kartlar yer tutucudur; ileride gerçek proje görselleri ve açıklamalarla zenginleştirebiliriz."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal
              key={p.title}
              delayMs={80 + idx * 90}
              className="group relative overflow-hidden rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_70px_160px_-140px_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:bg-white/7 hover:ring-white/15"
            >
              <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(249,115,22,0.14),transparent_45%)] opacity-0 transition group-hover:opacity-100" />

              <div className="relative">
                <div className="rounded-2xl bg-gradient-to-b from-white/10 to-white/5 p-1 ring-1 ring-white/10">
                  <div className="relative aspect-[16/10] rounded-[14px] bg-zinc-950/60">
                    <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
                    <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-zinc-200 ring-1 ring-white/10">
                      {p.meta}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-zinc-50">
                      {p.title}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-300">{p.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

