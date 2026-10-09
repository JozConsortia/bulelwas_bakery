// ==========================================
// BAKERY INFORMATION
// ==========================================

export const bakeryName = "Bulelwa's Bakery & Confectionery";

export const founderName = "Reabetswe Dube";

export const founderQuote =
  "Whether you came for a cupcake or a conversation about the future, you are welcome at our table.";

export const phoneNumber = "0645050305";

export const whatsappNumber = "27645050305";

export const emailAddress = "bulelwasbakeryconfectionery@gmail.com";

export const bakeryAddress =
  "1484/17 Saint John Road, Debonair Park, The Evaton Estates, 1984";

export const instagramUrl =
  "https://www.instagram.com/bulelwas_bakery?igsi=Z3RlcDY2NTgycG95";

export const facebookUrl = "https://www.facebook.com/share/1EhoaTEb7L/";

export const whatsappUrl = `https://wa.me/${whatsappNumber}`;

// Opens WhatsApp with a ready-to-fill function order message.
export const functionOrderUrl = `${whatsappUrl}?text=${encodeURIComponent(
  [
    "Hi Bulelwa's Bakery! I would like to order for a function.",
    "",
    "Type of function: ",
    "Date: ",
    "Number of guests: ",
    "What I need (cakes, scones, etc.): ",
  ].join("\n")
)}`;

// ==========================================
// GOOGLE MAPS
// ==========================================

export const locationUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  bakeryAddress
)}`;
