import { Inter } from 'next/font/google'
import '../index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ancile AI - AI Consulting & Solutions',
  description: 'Veteran-founded AI consulting firm specializing in advanced logistics solutions, generative AI planning, and government-focused AI implementations.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
