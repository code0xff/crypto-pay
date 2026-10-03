import { Link, useParams } from 'react-router-dom'
import { loadServices } from '../data/loadServices'

function Field({ label, children }: { label: string; children: string }) {
  return (
    <div className="grid gap-1 border-t border-line py-4">
      <dt className="text-[11px] tracking-[0.14em] text-mute uppercase">{label}</dt>
      <dd className="text-sm break-all">{children}</dd>
    </div>
  )
}

export function ServiceDetailPage() {
  const { id } = useParams()
  const service = loadServices().find((item) => item.id === id)

  if (!id || !service) {
    return (
      <section className="pt-14">
        <p className="text-[11px] tracking-[0.16em] text-mute uppercase">Not found</p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight break-keep">
          서비스를 찾을 수 없습니다
        </h1>
        <p className="mt-4 text-sm text-mute">요청한 항목이 목록에 없습니다.</p>
        <p className="mt-8">
          <Link to="/services" className="text-sm underline-offset-4 hover:underline">
            목록으로
          </Link>
        </p>
      </section>
    )
  }

  return (
    <article className="pt-14">
      <p className="text-[11px] tracking-[0.16em] text-mute uppercase">{service.category}</p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight break-keep">{service.name}</h1>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed break-keep text-mute">{service.summary}</p>
      <dl className="mt-8 max-w-2xl rounded-xl border border-line bg-white px-5">
        <Field label="자산">{service.assets.length > 0 ? service.assets.join(', ') : '—'}</Field>
        <Field label="체인">{service.chains.length > 0 ? service.chains.join(', ') : '—'}</Field>
        <Field label="결제 방식">
          {service.paymentMethods.length > 0 ? service.paymentMethods.join(', ') : '—'}
        </Field>
        <Field label="지역">{service.regions.length > 0 ? service.regions.join(', ') : '—'}</Field>
        <div className="grid gap-1 border-t border-line py-4">
          <dt className="text-[11px] tracking-[0.14em] text-mute uppercase">마지막 확인일</dt>
          <dd className="text-sm">
            <time dateTime={service.verifiedAt}>{service.verifiedAt}</time>
          </dd>
        </div>
        <div className="grid gap-1 border-t border-line py-4">
          <dt className="text-[11px] tracking-[0.14em] text-mute uppercase">링크</dt>
          <dd className="text-sm break-all">
            <a href={service.url} rel="noreferrer" target="_blank" className="underline-offset-4 hover:underline">
              {service.url}
            </a>
          </dd>
        </div>
      </dl>
      <p className="mt-8">
        <Link to="/services" className="text-sm underline-offset-4 hover:underline">
          목록으로
        </Link>
      </p>
    </article>
  )
}
