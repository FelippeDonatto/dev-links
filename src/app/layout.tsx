import '../styles/globals.css'

export const metadata = {
  title: 'Dev Links'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-900 bg-app bg-cover w-full h-screen">{children}</body>
    </html>
  )
}
