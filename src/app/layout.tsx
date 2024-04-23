import { Navbar } from '@/Components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Mariah Lemos',
  description: "This is Pedro website for his girlfriend's birthday.",
}

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-montserrat' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${montserrat.variable} bg-green-50 h-screen`}>
        <Navbar />
        <main className='px-4 border-l-[12px] border-emerald-700'>
          {children}
        </main>
      </body>
    </html>
  )
}
