import { NavigationBar } from '@/components/nav-bar'

export function AppShell({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="relative md:mb-10 text-center">
        <div className="grid text-5xl place-items-center font-semibold mb-4">
        Nabil Douss</div>
        <div className={`max-w-[30ch] opacity-50`}>
          Welcome to my personal website!
        </div>
      </div>
      <div className='lg:px-5 py-2 mb-10 text-center max-w-screen-xl lg:mb-0 lg:grid-cols-4 lg:text-left lg:border lg:rounded lg:pb-10' >
        <div className='hidden lg:flex'>
          <NavigationBar/>
        </div>
      {children}
      </div>
    </main>
  )
}
