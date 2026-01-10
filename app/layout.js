import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

// Simple utility function to combine classes
function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zirui Wang - Portfolio",
  description: "Professional portfolio of Zirui Wang, showcasing projects, skills, and resume",
  keywords: ["portfolio", "web developer", "software engineer", "Zirui Wang"],
  metadataBase: new URL('https://ziruiwang.vercel.app'),
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml', sizes: '32x32' }
    ],
    shortcut: '/favicon.svg',
    apple: '/icon.svg'
  },
  openGraph: {
    title: "Zirui Wang - Portfolio",
    description: "Professional portfolio of Zirui Wang, showcasing projects, skills, and resume",
    url: "https://ziruiwang.vercel.app",
    siteName: "Zirui Wang Portfolio",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Zirui Wang Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body className="antialiased max-w-4xl mx-4 lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <Navbar />
          <div id="main-content" className="min-h-screen focus:outline-none">
            {children}
          </div>
          <Footer />
        </main>
        {/* Floating Contact Button */}
        <a
          href="mailto:wangzr926@gmail.com"
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-blue-500 to-purple-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none"
          aria-label="Contact Zirui Wang"
        >
          Contact
        </a>
      </body>
    </html>
  );
}
