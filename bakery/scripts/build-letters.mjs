// ==========================================
// BUILD FOUNDER LETTER PDFS
// Prints each letter in letters/ to public/letters/
// with headless Chrome or Edge. Run: npm run letters
// ==========================================

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const letters = [
  { source: "customers.html", output: "letter-to-our-customers.pdf" },
  { source: "partners.html", output: "letter-to-our-partners.pdf" },
];

const browserPaths = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
];

const browser = browserPaths.find((path) => path && existsSync(path));

if (!browser) {
  console.error("Chrome or Edge not found. Set CHROME_PATH to your browser.");
  process.exit(1);
}

const outputDir = join(root, "public", "letters");
mkdirSync(outputDir, { recursive: true });

for (const { source, output } of letters) {
  execFileSync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${join(outputDir, output)}`,
    pathToFileURL(join(root, "letters", source)).href,
  ], { stdio: "ignore" });

  console.log(`Created public/letters/${output}`);
}
