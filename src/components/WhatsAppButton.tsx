import { whatsappLink } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Merhaba, panjur hakkında bilgi almak istiyorum.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-zinc-900/70 px-4 py-3 text-sm font-semibold text-zinc-50 ring-1 ring-white/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.85)] backdrop-blur transition hover:bg-zinc-900/85 hover:ring-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
      aria-label="WhatsApp ile iletişime geç"
    >
      <span className="relative grid h-8 w-8 place-items-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/20">
        <span className="absolute inset-0 rounded-full bg-emerald-400/10 sp-shimmer" />
        <span className="h-3.5 w-3.5 rounded-sm bg-emerald-400" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="inline sm:hidden">WA</span>
    </a>
  );
}

