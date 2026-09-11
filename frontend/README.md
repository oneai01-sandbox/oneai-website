# ONE AI website

## Tech Stacks

- Next.js App Router
- React와 TypeScript
- CSS Modules
- Axios
- ESLint

## How to run

```bash
nvm use 22
npm install
npm run dev
```

run on [http://localhost:3000](http://localhost:3000)

## Filetree

```text
src/
├── app/          # App Router 페이지, layout, SEO 파일, 전역 스타일
├── components/   # layout, home, product 및 공통 UI 컴포넌트
├── config/       # 사이트 정보와 네비게이션 데이터
├── hooks/        # 향후 React Custom Hook
├── lib/api/      # Axios 공통 인스턴스
├── styles/       # 디자인 토큰과 공통 애니메이션
└── types/        # 공유 TypeScript 타입
```

## Env Variables

`.env.example`을 참고해 로컬 환경의 `.env.local`을 설정할 수 있습니다.

```env
NEXT_PUBLIC_API_BASE_URL=https://api.one-ai.dev/api
```