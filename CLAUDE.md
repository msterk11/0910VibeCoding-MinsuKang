# CLAUDE.md

개인 소개 페이지 프로젝트.

## 목적

한 페이지짜리 자기소개 사이트. 방문자가 스크롤 한 번으로 다음을 볼 수 있으면 된다.

- 소개 글 (bio)
- 관심사 목록
- 외부 링크 (GitHub, 이메일, 블로그 등)

## 기술 스택

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** — 설정은 `app/globals.css`의 `@import "tailwindcss"` + `@theme`,
  별도 `tailwind.config` 파일 없음
- 상태 관리 라이브러리, 데이터 페칭 라이브러리 없음 — 필요 없다
- `AGENTS.md`는 `next dev`가 자동 관리하는 파일이니 직접 지우지 말 것

## 데이터

- 모든 콘텐츠는 `data/profile.json` 하나에서 읽는다
- 타입은 `types/profile.ts`에 정의 (`Profile`, `Project`, `Link`)
- 데이터 접근은 `lib/getProfile.ts`의 `getProfile()` 한 곳으로만 (async).
  나중에 JSON → DB 전환 시 이 함수 내부만 교체하면 됨
- DB, CMS, 외부 API 호출 없음

## 구조

- 페이지는 `app/page.tsx` 하나 (서버 컴포넌트, `getProfile()` 호출 후 섹션 조립)
- 섹션 컴포넌트: `Intro`, `Projects`, `Interests`, `Hobbies`, `Links` + 공용 `Section`
- 컴포넌트는 `components/`에 둔다
- 전부 서버 컴포넌트. 상호작용이 생기면 그때만 클라이언트 컴포넌트
- 디자인: 90년대 CRT 터미널 컨셉 — 검정 배경 / 인광 그린 / 모노스페이스 /
  스캔라인 오버레이 / 깜빡이는 커서. 라이트모드 없음
- 색상 토큰은 `globals.css`의 `@theme` (`--color-screen/phosphor/dim/amber`),
  Tailwind 클래스로 `bg-screen text-phosphor text-dim text-amber` 사용
- 섹션 제목은 셸 명령어 형태(`$ cat ./interests.txt`)로 렌더 (`Section` 컴포넌트)

## 하지 말 것 (지금은)

- Vercel 배포 설정
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
