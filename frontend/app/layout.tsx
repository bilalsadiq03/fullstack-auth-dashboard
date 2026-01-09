import "./globals.css"
import Providers from "@/lib/providers"
import { Toaster } from "sonner"

export const metadata = {
  title: "Auth Dashboard",
  description: "Internship Assignment",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  )
}
