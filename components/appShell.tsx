import { NavigationBar } from '@/components/nav-bar'

export function AppShell({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <div className="relative mb-10 text-center">
        <div className="grid text-5xl place-items-center font-semibold mb-4">
        Nabil Douss</div>
        <p className={`max-w-[30ch] opacity-50`}>
          Welcome to my personal website!
        </p>
      </div>
      <div className='mt-5 px-5 py-2 mb-10 text-center min-w-full lg:mb-0 lg:grid-cols-4 lg:text-left border rounded lg:pb-10' >
      <NavigationBar/>
      {children}
      </div>
    </main>
  )
}
