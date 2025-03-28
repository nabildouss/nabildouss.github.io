import './globals.css'
import { Inter } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { ThemeProvider } from '@/components/theme-provider'
import { AppShell} from '@/components/appShell'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nabil Douss',
  description: 'Nabil Douss\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppShell>
            {children}          
          </AppShell>          
        </ThemeProvider>
      </body>
    </html>
  )
}
