import "./globals.css";
import { siteConfig } from "../config/siteConfig";

export default function RootLayout({ children }) {
  const t = siteConfig.theme;
  return (
    <html lang="ja">
      <body style={{
        "--primary": t.primary,
        "--accent": t.accent,
        "--accent-strong": t.accentStrong,
        "--text": t.text,
        "--bg": t.bg
      }}>
        {children}
      </body>
    </html>
  );
}
