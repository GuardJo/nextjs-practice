import { Metadata } from "next"
import NavBar from "../components/NavBar"

export const metadata: Metadata = {
  title: {
    template: '%s | NextJS Practice',
    default: 'NextJS Practice',
  },
  description: 'Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
