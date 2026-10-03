import { ServiceList } from '../components/ServiceList'

export function HomePage() {
  return (
    <>
      <section className="pt-14 pb-8">
        <p className="text-[11px] tracking-[0.16em] text-mute uppercase">
          Crypto payments
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-medium tracking-tight break-keep sm:text-4xl">
          크립토로 결제할 수 있는 서비스
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed break-keep text-mute">
          암호화폐로 결제할 수 있는 서비스를 모아 보여 줍니다. 결제를 직접 처리하지
          않습니다.
        </p>
      </section>
      <ServiceList />
    </>
  )
}
