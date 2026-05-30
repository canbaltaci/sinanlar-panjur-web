import { CONTACT, whatsappLink } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const nav = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz?", href: "#neden-biz" },
  { label: "Projeler", href: "#projeler" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "İletişim", href: "#iletisim" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/35">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-zinc-50"
          aria-label="Sinanlar Panjur Ana Sayfa"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <span className="h-3 w-3 rounded-sm bg-orange-500 shadow-[0_0_0_3px_rgba(249,115,22,0.15)]" />
          </span>
          <span className="text-sm sm:text-base">
            Sinanlar <span className="text-zinc-300">Panjur</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="secondary" href={`tel:${CONTACT.phoneTel}`}>
            Hemen Ara
          </Button>
          <Button
            className="hidden sm:inline-flex"
            href={whatsappLink("Merhaba, panjur hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </Button>
        </div>
      </Container>
    </header>
  );
}

