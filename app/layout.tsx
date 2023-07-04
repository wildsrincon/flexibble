export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarcable developer projects',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

