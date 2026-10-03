export function AboutPage() {
  return (
    <article className="pt-14">
      <p className="text-[11px] tracking-[0.16em] text-mute uppercase">About</p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight">소개</h1>
      <div className="mt-8 max-w-2xl space-y-4 rounded-xl border border-line bg-white p-6 text-sm leading-relaxed break-keep text-mute">
        <p>이 사이트는 정보 제공용입니다. 금융 자문이나 투자 권유가 아닙니다.</p>
        <p>
          목록은 직접 확인한 시점의 내용입니다. 지원 자산과 결제 가능 여부는 바뀔 수
          있어, 오래된 항목은 틀릴 수 있습니다. 각 항목의 마지막 확인일을 보세요.
        </p>
        <p>
          외부 링크는 해당 서비스로 이동합니다. 지금은 제휴 링크가 아니지만, 나중에
          제휴 링크가 포함될 수 있습니다.
        </p>
        <p>이 사이트는 결제를 받지 않고, 지갑을 연결하지 않습니다.</p>
      </div>
    </article>
  )
}
