import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    title: "Premium malzeme & işçilik",
    desc: "Uzun ömürlü kullanım için kalite standardı ve düzgün detay.",
  },
  {
    title: "Net süreç yönetimi",
    desc: "Keşif → teklif → üretim → montaj → teslim → destek akışı.",
  },
  {
    title: "Güven veren iletişim",
    desc: "Hızlı geri dönüş, şeffaf bilgilendirme ve destek odaklı yaklaşım.",
  },
  {
    title: "Zamanında teslim",
    desc: "Planlı çalışma ile montaj gününde sürpriz yok.",
  },
] as const;

export function WhyUs() {
  return (
    <section id="neden-biz" className="relative border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-white/5 to-transparent blur-2xl" />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal>
            <SectionHeading
            className="lg:col-span-5"
            eyebrow="Neden Biz?"
            title="Kurumsal görünüm, sağlam iş, sürdürülebilir destek"
            description="Sinanlar Panjur’da hedef; ilk günden itibaren güven veren bir süreç ve uzun vadeli memnuniyet."
            />
          </Reveal>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((x, idx) => (
                <Reveal
                  key={x.title}
                  delayMs={60 + idx * 80}
                  className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_50px_120px_-110px_rgba(0,0,0,1)] transition hover:-translate-y-1 hover:bg-white/7 hover:ring-white/15"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500/90 shadow-[0_0_0_3px_rgba(249,115,22,0.16)]" />
                    <div>
                      <div className="text-sm font-semibold text-zinc-50">
                        {x.title}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-zinc-300">
                        {x.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal
              delayMs={420}
              className="mt-6 rounded-3xl bg-gradient-to-r from-orange-500/14 via-white/6 to-white/5 p-1 ring-1 ring-white/12 shadow-[0_70px_160px_-130px_rgba(0,0,0,1)]"
            >
              <div className="rounded-[22px] bg-zinc-950/55 p-6">
                <div className="text-sm font-semibold text-zinc-50">
                  Güven paketi
                </div>
                <p className="mt-2 text-sm leading-7 text-zinc-300">
                  Keşif ölçüm doğruluğu, temiz montaj standardı ve satış sonrası
                  takip ile “premium” işi standart hale getiriyoruz.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

