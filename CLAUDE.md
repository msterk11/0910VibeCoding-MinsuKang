# CLAUDE.md

개인 소개 페이지 프로젝트.

## 목적

한 페이지짜리 자기소개 사이트. "the one-page issue"라는 잡지 표지 컨셉으로,
스크롤 한 번에 이름·소속 / 커버 스토리(미리me) / 프로젝트 / 관심사 / 취미 /
연락처를 보여 준다. 시각 디자인은 Claude Design의 `강민수 - 잡지 표지.dc.html`을
옮긴 것.

## 기술 스택

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** — 설정은 `app/globals.css`의 `@import "tailwindcss"` + `@theme`,
  별도 `tailwind.config` 파일 없음
- 폰트는 `app/layout.tsx`에서 Google Fonts `<link>`로 로드
  (Bodoni Moda / Gowun Batang / Archivo / JetBrains Mono). 한글(Gowun Batang) 때문에
  `next/font`가 아니라 `<link>` 사용
- 상태 관리 라이브러리, 데이터 페칭 라이브러리 없음 — 필요 없다
- `AGENTS.md`는 `next dev`가 자동 관리하는 파일이니 직접 지우지 말 것

## 데이터

- 모든 콘텐츠는 `data/profile.json` 하나에서 읽는다 (잡지 지면 문구 전부 포함:
  masthead / cover / contents / feature / projects / interests / hobbies / links)
- 타입은 `types/profile.ts`의 `Profile`
- 데이터 접근은 `lib/getProfile.ts`의 `getProfile()` 한 곳으로만 (async).
  나중에 JSON → DB 전환 시 이 함수 내부만 교체하면 됨
- DB, CMS, 외부 API 호출 없음
- 일부 문구(프로젝트 Scanline/Ledger, 취미, 이메일 주소 등)는 디자인 목업에서
  온 자리표시자 — 실제 값으로 바꾸려면 `profile.json`만 수정

## 구조

- 페이지는 `app/page.tsx` 하나 (서버 컴포넌트, `getProfile()` 호출 후 섹션 조립)
- 섹션 컴포넌트 (`components/`): `Cover`, `Contents`, `Feature`, `Columns`, `Colophon`
- 전부 서버 컴포넌트. 상호작용이 생기면 그때만 클라이언트 컴포넌트
- 디자인: 잡지 표지 — 어두운 지면(`#100e0c`)과 크림 지면(`#f4efe6`)이 번갈아,
  액센트 레드 `#d1462f`. 다크/라이트 토글 없음. 자세한 내용은 `DESIGN.md`
- 색상 토큰은 `globals.css`의 `@theme` (`--color-ink/ink-2/ink-3/paper/accent/
  warm/cream/stone/ash`), Tailwind 클래스로 `bg-ink text-paper text-accent` 등
- 유동 타이포는 Tailwind arbitrary value + `clamp()` (`text-[clamp(64px,15.5vw,196px)]`)
- 콜로폰 링크 카드의 호버 반전은 `globals.css`의 `.card-invert`

## 배포

- Vercel + GitHub 연동. `msterk11/0910VibeCoding-MinsuKang` 레포의 `main`에
  push하면 자동 배포된다 (Preview: 다른 브랜치 / Production: main)
- 환경변수 없음, 빌드 커맨드 기본값(`next build`) 그대로
- 롤백은 Vercel 대시보드의 Deployments에서

## 하지 말 것 (지금은)

- Supabase 등 DB / 백엔드 연동
- 인증, 폼 제출, 방문자 데이터 수집
- 다국어(i18n), 다크모드 토글 등 부가 기능 (요청 시에만)

DB는 나중에 붙일 예정이므로, 데이터 접근은 한 군데(예: `lib/getProfile.ts`)로 모아서
나중에 JSON → DB 전환이 쉽도록 한다.

## 명령어

```bash
npm run dev     # 개발 서버
npm run build   # 프로덕션 빌드
npm run lint    # 린트
```
