export const WHATSAPP_NUMBER = "+17405868907";
export const TELEGRAM_NUMBER = "+51970102209";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}`;
export const TELEGRAM_LINK = `https://t.me/${TELEGRAM_NUMBER}`;

const cleanNumber = (number: string) => number.replace(/\+/g, "");

export const CONTACT_LINKS = {
  whatsapp: `https://wa.me/${cleanNumber(WHATSAPP_NUMBER)}`,
  telegram: `https://t.me/${TELEGRAM_NUMBER}`,
  whatsappNumber: WHATSAPP_NUMBER,
  telegramNumber: TELEGRAM_NUMBER,
} as const;