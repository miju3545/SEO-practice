# :: 과제

## 1-1) 실행

```bash
> yarn

> yarn start # http://localhost:3000
```

# Description

## 2-1) 구현 환경

- `Next.js`, `Typescript`

## 2-2) code-formatting

- `eslint`, `prettier`
- `lint-staged`, `husky`: 커밋 전 staged 상태의 파일에 eslint와 prettier을 적용하여 git history 내 동일한 formatting 유지

## 2-3) 스타일링

- `tailwindCSS`

## 2-3) SEO

- bot이 ogtag를 잘 긁어가게 하기 위한 추가 설정.
- `next-sitemap`을 사용해 `roboxs.txt`, 정적/동적 `sitemap.xml`을 생성하여 Nextjs 웹 SEO 최적화

## 2-4) 내용

- `attractions`
  - 목록 페이지 seo
  - page, per_page
- `attractions/:id`
  - 상세 페이지 seo
  - `nuka-carousal`: 여러 이미지가 들어올 상황을 대비해 carousal 기능 추가

## 2-5) 상태 관리

- `react-query`, `redux`
