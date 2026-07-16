export const CONTACT = {
  phoneDisplay: "0536 441 55 20",
  phoneTel: "+905364415520",
  whatsappDisplay: "WhatsApp",
  whatsappNumber: "905364415520",
  addressShort: "İstanbul, Türkiye",
  email: "info@sinanlarpanjur.com",
};

export function whatsappLink(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${CONTACT.whatsappNumber}${text}`;
}

