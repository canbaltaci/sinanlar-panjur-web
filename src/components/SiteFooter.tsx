import { CONTACT } from "@/lib/contact";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-50">
              Sinanlar Panjur
            </div>
            <div className="mt-1 text-sm text-zinc-400">
              {CONTACT.addressShort} • {CONTACT.phoneDisplay}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
            <a className="hover:text-zinc-50" href="#hizmetler">
              Hizmetler
            </a>
            <a className="hover:text-zinc-50" href="#neden-biz">
              Neden Biz?
            </a>
            <a className="hover:text-zinc-50" href="#projeler">
              Projeler
            </a>
            <a className="hover:text-zinc-50" href="#iletisim">
              İletişim
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Sinanlar Panjur. Tüm hakları saklıdır.</div>
          <div>Modern web altyapısı: Next.js • Tailwind • TypeScript</div>
        </div>
      </Container>
    </footer>
  );
}

