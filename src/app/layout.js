import Header from "@/app/ui/Header";
import CustomCursor from "@/app/ui/CustomCursor";
import Footer from "@/app/ui/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});

export const metadata = {
  title: 'Web Designer & Developer in Leeds, West Yorkshire | Remlyx',
  description:
    'Professional web designer and developer in Leeds, helping businesses across West Yorkshire with bespoke websites and SEO. Contact Remlyx for a free quote.',
  keywords:
    'web designer leeds, web developer leeds, web design west yorkshire, freelance web developer leeds, wordpress developer leeds, small business web design leeds, bespoke web development leeds, mobile app development leeds, seo services leeds',
  author: 'Remlyx',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Remlyx',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Highfield crescent',
    addressLocality: 'Leeds',
    addressRegion: 'West Yorkshire',
    postalCode: 'LS12 4DA',
    addressCountry: 'UK',
  },
  telephone: '07448429748',
  url: 'https://www.remlyx.com',
  description:
    'Remlyx is a professional web design and development agency in Leeds, West Yorkshire, specializing in bespoke websites, mobile apps, and SEO solutions for small and medium-sized businesses.',
  areaServed: [
    {
      '@type': 'City',
      name: 'Leeds',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'West Yorkshire',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
