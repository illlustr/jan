import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jan',
  description:
    'Self-hosted, local, AI Inference Platform that scales from personal use to production deployments for a team.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_WEB_URL ?? 'https://cloud.jan.ai'
  ),
  openGraph: {
    images: 'images/preview.jpg',
  },
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
