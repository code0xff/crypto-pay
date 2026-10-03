# 크립토 결제 디렉터리

암호화폐로 결제할 수 있는 서비스를 모아 보여 주는 정적 사이트입니다. 결제를 처리하지 않고, 지갑을 연결하지 않습니다. 데이터는 `src/data/services.json`에 있습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

개발 서버 주소는 터미널에 출력됩니다. 라우터는 `HashRouter`라서 주소가 `#/services` 형태입니다.

## base 경로

GitHub Pages 프로젝트 사이트는 `https://<user>.github.io/<repo>/`에서 열립니다. `vite.config.ts`의 `base`는 `VITE_BASE`가 있으면 그 값을 쓰고, 없으면 `/crypto-pay/`입니다. 레포 이름이 다르면 배포 시 `VITE_BASE`를 `/레포이름/`으로 맞춥니다. 워크플로는 `VITE_BASE=/${{ github.event.repository.name }}/`로 빌드합니다.

사용자 사이트(`<user>.github.io`)나 커스텀 도메인은 루트에서 서빙되므로 `VITE_BASE=/`로 빌드합니다.

## 서비스 추가

`src/data/services.json`을 배열로 편집합니다. 항목 필드는 `src/types.ts`의 `Service`와 같아야 합니다.

- `id`: URL에 쓰는 고유 문자열
- `name`, `summary`, `category`
- `assets`, `chains`, `paymentMethods`, `regions`: 문자열 배열
- `url`: 공식 페이지 주소
- `verifiedAt`: 결제를 확인한 날짜, ISO 날짜 문자열 (예: `2026-10-03`)

예시 없이 빈 배열 `[]`로 시작합니다. 확인하지 않은 항목은 넣지 않습니다.

## 배포

`.github/workflows/deploy.yml`이 `main`에 푸시되면 `npm ci`, `npm run build` 후 GitHub Pages에 올립니다.

저장소 Settings → Pages → Build and deployment → Source를 **GitHub Actions**로 선택해야 워크플로 배포가 동작합니다. 레포를 만들고 `main`에 푸시한 뒤에 한 번만 설정하면 됩니다.
