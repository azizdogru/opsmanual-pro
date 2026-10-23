import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://opsmanual-pro.vercel.app'),
  title: 'OpsManual Pro | Enterprise SOP Templates & Employee Handbooks',
  description:
    'Turnkey Standard Operating Procedures (SOPs), Employee Handbooks, and Safety Compliance Kits for SMBs. Download editable Word (.docx), Google Docs & printable PDF packages.',
  verification: {
    google: 'google4a281205e868ab2c',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500 selection:text-zinc-950">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
