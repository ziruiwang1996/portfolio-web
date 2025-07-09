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
  openGraph: {
    title: "Zirui Wang - Portfolio",
    description: "Professional portfolio of Zirui Wang, showcasing projects, skills, and resume",
    url: "https://your-portfolio-url.vercel.app",
    siteName: "Zirui Wang Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add an image to your public folder for this
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
      <body className="antialiased max-w-4xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
