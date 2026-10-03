import { NavLink, Outlet } from 'react-router-dom'

function navClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? 'border-b border-ink text-ink'
    : 'border-b border-transparent text-mute hover:text-ink'
}

export function Layout() {
  return (
    <div className="min-h-svh font-mono text-ink antialiased">
      <header className="border-b border-line bg-paper/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <NavLink to="/" className="text-xs font-medium tracking-[0.18em] uppercase">
            <span aria-hidden="true" className="mr-2">
              ✶
            </span>
            Directory
          </NavLink>
          <nav className="flex items-center gap-6 text-xs tracking-[0.14em]" aria-label="주요">
            <NavLink to="/" end className={navClass}>
              홈
            </NavLink>
            <NavLink to="/services" className={navClass}>
              목록
            </NavLink>
            <NavLink to="/about" className={navClass}>
              소개
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 pb-24">
        <Outlet />
      </main>
    </div>
  )
}
