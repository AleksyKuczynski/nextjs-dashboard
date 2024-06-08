import '@/app/ui/global.css';
import { mainFont } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mainFont.className}`}>{children}</body>
    </html>
  );
}
