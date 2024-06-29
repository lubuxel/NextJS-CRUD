import type { Metadata } from 'next'

export const metadata = {
  title: 'Youtube',
  description: 'next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>        
  )
}
