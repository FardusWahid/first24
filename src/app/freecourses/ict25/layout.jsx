
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
    title: "Ict deCoder",
    description: "ACS Ict Decoder 25 for free",
    keywords: "acs ict course hsc 25, acs ict decoder, acs ict course hsc 25 pdf, acs ict course hsc 24, acs ict, acs ict course, acs ict course 2025, ICT Decoder, ICT, HSC 2025, ICT 2025, HSC ICT, Ict, Information and communication technology",



    
  }
  
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