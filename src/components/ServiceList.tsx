import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { loadServices } from '../data/loadServices'

export function ServiceList() {
  const services = useMemo(() => loadServices(), [])
  const categories = useMemo(
    () => [...new Set(services.map((service) => service.category))].sort(),
    [services],
  )
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return services.filter((service) => {
      if (category && service.category !== category) return false
      if (!needle) return true
      const haystack = [
        service.name,
        service.summary,
        service.category,
        ...service.assets,
        ...service.chains,
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(needle)
    })
  }, [services, query, category])

  return (
    <section className="rounded-xl border border-line bg-white">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line px-5 py-4">
        <div>
          <p className="text-[11px] tracking-[0.16em] text-mute uppercase">Discovery</p>
          <h2 className="mt-1 text-base font-medium">등록된 서비스</h2>
        </div>
        {services.length > 0 && (
          <label className="w-full sm:w-64">
            <span className="sr-only">검색</span>
            <input
              type="search"
              value={query}
              placeholder="이름, 자산, 카테고리"
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-md border border-line bg-white px-3 py-2 text-xs outline-none placeholder:text-mute focus:border-ink"
            />
          </label>
        )}
      </div>
      {services.length > 0 && categories.length > 0 && (
        <div className="flex flex-wrap gap-2 border-b border-line px-5 py-3" role="group" aria-label="카테고리">
          <FilterChip active={category === null} onClick={() => setCategory(null)}>
            전체
          </FilterChip>
          {categories.map((item) => (
            <FilterChip
              key={item}
              active={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </FilterChip>
          ))}
        </div>
      )}
      {services.length === 0 ? (
        <p className="px-5 py-16 text-sm break-keep text-mute">아직 등록된 서비스가 없습니다.</p>
      ) : filtered.length === 0 ? (
        <p className="px-5 py-16 text-sm text-mute">검색 결과가 없습니다.</p>
      ) : (
        <ul className="grid md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((service) => (
            <li key={service.id} className="border-line border-b md:border-r">
              <article className="flex h-full flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-medium">
                      <Link to={`/services/${service.id}`} className="hover:underline">
                        {service.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-[11px] tracking-wide text-mute uppercase">
                      {service.category}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-md border border-line px-2 py-0.5 text-[10px] tracking-wide text-mute uppercase">
                    Listed
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed break-keep text-mute">{service.summary}</p>
                <p className="mt-auto pt-6 text-[11px] tracking-wide text-mute uppercase">
                  {service.assets.length > 0 ? service.assets.join(' · ') : '자산 미기재'}
                </p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? 'rounded-md border border-ink px-2.5 py-1 text-[11px] tracking-wide'
          : 'rounded-md border border-line px-2.5 py-1 text-[11px] tracking-wide text-mute'
      }
    >
      {children}
    </button>
  )
}
