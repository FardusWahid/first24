import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
    title: "Complete IELTS Course in Bangladesh - Munzereen Shahid [2024]",
    description: "IELTS-এর সেরা প্রস্তুতি নিতে ভিডিও, লেকচার শিট, IELTS Reading & Listening Mock Test ও IELTS প্রস্তুতির বইসহ টেন মিনিট স্কুল নিয়ে এসেছে Complete IELTS Course-টি।",
    keywords: "Ielts, IELTS Course, IELTS Course by Munzereen Shahid, General Training IELTS, Ielts Bangla",



    
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