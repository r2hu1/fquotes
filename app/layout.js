import './globals.css';
import { Poppins } from 'next/font/google';
export const metadata = {
  title: 'Famous Quotes',
  description: 'Generates a random quote',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <div className="absolute top-0 -z-10 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {children}
      </body>
    </html>
  )
}
