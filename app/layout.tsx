import "./globals.css"
import Sidebar from "@/components/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main className="ml-72 px-10 py-10">{children}</main>
      </body>
    </html>
  )
}
