# Bulelwa's Bakery & Confectionery

The website for **Bulelwa's Bakery & Confectionery**, a home bakery in Debonair Park, The Evaton Estates, making cakes, scones, cupcakes, biscuits, muffins and customised pastries for every function.

The site lets customers browse products, see opening hours, find the bakery on Google Maps and place orders through WhatsApp, phone or email.

---

## Features

- **Seven pages:** Home, About, Products, Functions & Events, Order, Contact and Operating Hours
- **WhatsApp ordering:** one tap opens WhatsApp with a ready-to-fill function order (type of function, date, guests, items)
- **Click-to-call and email links** for quick contact
- **Google Maps directions** straight to the bakery
- **Founder letters:** downloadable PDF letters to customers and partners
- **Fully responsive:** works on phones, tablets and desktops, including older devices (iOS 14+, Android Chrome 87+)
- **No back end needed:** a static site that can be hosted anywhere

## Tech stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev) | User interface |
| [Vite 8](https://vite.dev) | Dev server and production build |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons (WhatsApp, phone, email, etc.) |
| [ESLint](https://eslint.org) | Code checks |

---

## Getting started

### Requirements

- [Node.js](https://nodejs.org) 20 or newer (includes npm)

### Install and run

The app lives in the `bakery/` folder, so run every command from there:

```bash
cd bakery
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser. The page reloads automatically when you save changes.

### Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the production site into `bakery/dist/` |
| `npm run preview` | Serves the production build locally to check it |
| `npm run lint` | Checks the code for mistakes |
| `npm run letters` | Rebuilds the founder letter PDFs (needs Chrome or Edge) |

---

## Project structure

```
bakery/
├── index.html              # Page shell
├── images/                 # Product and logo photos
├── letters/                # Founder letters (HTML source for the PDFs)
├── public/
│   └── letters/            # Generated PDFs served to visitors
├── scripts/
│   └── build-letters.mjs   # Prints the letters to PDF
└── src/
    ├── bakeryInfo.js       # Business details: name, phone, address, links
    ├── App.jsx             # Page switching and browser tab titles
    ├── components/         # Navbar, Footer, FounderMessage
    └── pages/              # One file per page
```

Pages are switched with the URL hash (for example `#/products`), so the site works on any static host without extra server setup.

---

## Updating the business details

The bakery's name, phone and WhatsApp numbers, email, address and social links are all in one file:

**[`bakery/src/bakeryInfo.js`](bakery/src/bakeryInfo.js)**

Change them there and every page updates automatically, including the WhatsApp order message and the Google Maps link.

### Updating the founder letters

1. Edit `bakery/letters/customers.html` or `bakery/letters/partners.html`.
2. Run `npm run letters` to regenerate the PDFs in `bakery/public/letters/`.

If Chrome or Edge is installed somewhere unusual, point the script at it:

```bash
CHROME_PATH="/path/to/chrome" npm run letters
```

---

## Deployment

```bash
cd bakery
npm run build
```

Upload the contents of `bakery/dist/` to any static host, such as Netlify, Vercel, GitHub Pages or Cloudflare Pages.

When hosting under a sub-path (for example GitHub Pages at `/bulelwas_bakery/`), set `base` in [`bakery/vite.config.js`](bakery/vite.config.js):

```js
export default defineConfig({
  base: '/bulelwas_bakery/',
  // ...
})
```

---

## Contact

**Bulelwa's Bakery & Confectionery**
1484/17 Saint John Road, Debonair Park, The Evaton Estates, 1984

- Phone / WhatsApp: 064 505 0305
- Email: bulelwasbakeryconfectionery@gmail.com
- [Instagram](https://www.instagram.com/bulelwas_bakery) · [Facebook](https://www.facebook.com/share/1EhoaTEb7L/)
