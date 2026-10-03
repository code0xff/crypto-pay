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
          <NavLink to="/" className="inline-flex items-center text-xs font-medium tracking-[0.18em] uppercase">
            <svg
              viewBox="0 0 16 16"
              className="mr-2 size-3.5"
              aria-hidden="true"
              fill="none"
            >
              <rect
                x="1.15"
                y="0.9"
                width="13.7"
                height="14.2"
                rx="1.3"
                stroke="currentColor"
                strokeWidth="1.25"
              />
              <path
                d="M4.15 5.15h7.7M4.15 8h7.7M4.15 10.85h4.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="square"
              />
            </svg>
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
