import { ServiceList } from '../components/ServiceList'

export function ServicesPage() {
  return (
    <>
      <section className="pt-14 pb-8">
        <p className="text-[11px] tracking-[0.16em] text-mute uppercase">Services</p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight break-keep">서비스 목록</h1>
      </section>
      <ServiceList />
    </>
  )
}
