import { CONTACT, whatsappLink } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCTA() {
  return (
    <section id="iletisim" className="relative border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 -top-28 h-28 bg-gradient-to-b from-orange-500/12 to-transparent blur-2xl" />
      <Container className="py-16 sm:py-20">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500/18 via-white/6 to-white/5 p-1 ring-1 ring-white/12 shadow-[0_80px_180px_-150px_rgba(0,0,0,1)]">
          <div className="relative rounded-[22px] bg-zinc-950/60 p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(249,115,22,0.18),transparent_55%)]" />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <SectionHeading
                  eyebrow="İletişim"
                  title="Hızlı keşif ve teklif için hemen ulaşın"
                  description="Telefonla arayın veya WhatsApp üzerinden ölçü/konum paylaşın; en hızlı şekilde yönlendirelim."
                />
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button variant="primary" href={`tel:${CONTACT.phoneTel}`}>
                    Hemen Ara
                  </Button>
                  <Button
                    variant="secondary"
                    href={whatsappLink(
                      "Merhaba, keşif/teklif için iletişime geçmek istiyorum."
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="grid gap-3 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-zinc-400">
                      Telefon
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-50">
                      {CONTACT.phoneDisplay}
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-zinc-400">
                      E-posta
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-50">
                      {CONTACT.email}
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-zinc-400">
                      Bölge
                    </div>
                    <div className="mt-1 text-sm font-semibold text-zinc-50">
                      {CONTACT.addressShort}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

