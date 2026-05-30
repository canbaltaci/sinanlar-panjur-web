export const CONTACT = {
  phoneDisplay: "0 (5xx) xxx xx xx",
  phoneTel: "+905xxxxxxxxx",
  whatsappDisplay: "WhatsApp",
  whatsappNumber: "905xxxxxxxxx",
  addressShort: "İstanbul, Türkiye",
  email: "info@sinanlarpanjur.com",
};

export function whatsappLink(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${CONTACT.whatsappNumber}${text}`;
}

