import { NavigationBar } from '@/components/nav-bar'
import { Icons } from '@/components/icons'
import Link from 'next/link'
import { SiteFooter } from './site-footer'

export function AppShell({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 px-20">
      <div className="max-w-screen-xl sm:w-full relative text-center">
        <div className='flex mb-2 justify-center sm:absolute sm:top-3'>
        <Link href="/">
            <Icons.home />
        </Link>
        </div>
        <div className="text-5xl font-semibold mb-4">
          Nabil Douss
        </div>
        <div className={`opacity-50`}>
          Welcome to my personal website!
        </div>
        <div className='md:mt-10 lg:px-5 py-2 mb-10 text-center  lg:mb-0 lg:grid-cols-4 lg:text-left lg:border lg:rounded lg:pb-10' >
          <div className='hidden lg:flex'>
            <NavigationBar/>
          </div>
          {children}
        </div>
        <SiteFooter className='pt-20' />        
      </div>        
    </main>
  )
}
