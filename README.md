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
- `lint-staged`, `husky`: 커밋 전 staged 상태의 파일에 eslint와 prettier을 적용하여 git history 내 동일한 formatting 유지합니다.

## 2-3) 스타일링

- `tailwindCSS`

## 2-3) SEO

- bot이 ogtag를 잘 긁어가게 하기 위해 `next-sitemap`을 사용해 `roboxs.txt`, 정적/동적 `sitemap.xml`을 생성하여 Nextjs 웹의 SEO를 최적화하였습니다.

## 2-4) 내용

- `attractions`
  - 목록 페이지 seo
  - pagination: page, per_page
- `attractions/:id`
  - 상세 페이지 seo
  - `nuka-carousal`: 여러 이미지가 들어올 상황을 대비해 carousal 기능 추가

## 2-5) 상태 관리

- `react-query`, `contextApi`
- `fetcher` 함수 작성하여 여러 method, body, params를 요청 & 응답할 수 있게 하였습니다.
- 로그인 유저나 토큰과 같은 세션 정보만 전역으로 관리하기 위해 간단한 context api 사용하였습니다.
- cookie를 사용하여 jwt token 값은 물론 expiresIn도 관리한다.

## 2-6) form, input 관리

- `use-form-hook`
- input 요소 여러 개가 한 페이지에 있을 때 발생하는 렌더링 문제를 해결하기 위해 `ref`로 DOM에 직접 접근하는 비제어 방식을 주로 사용하려 했지만 `forwardRef`로 감싸는 작업이 필요했습니다.
  이런 불편함은 물론 input value에 대한 에러 처리 역시 비제어 방식으로 해결하고자 선택하게 되었습니다.
