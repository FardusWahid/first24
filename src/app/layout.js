import { Inter } from "next/font/google";
import "./globals.css";





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apple Courses",
  description: "Admission Courses online",
  keywords: "acs, acs engineering 24 login, acs login, acs 24,  acs engineering, acs pdf, acs engineering pdf, hsc 24, hsc routine, hsc 2024, hsc exam, acs, apar classroom, acs telegram, acs website, acs shop, acs free, apoubo physics",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <title>{metadata.title}</title>
    </head>
      <body className={inter.className}>{children}</body>
     
    </html>
  );
}
