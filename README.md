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
- `lint-staged`, `husky`: 커밋 전 staged 상태의 파일에 eslint와 prettier을 적용하여 git history 내 동일한 formatting 유지하도록 합니다.

## 2-3) 스타일링

- `tailwindCSS`
- `twin.macro`을 같이 사용함으로써 컴포넌트와 스타일 로직을 분리하였습니다.

## 2-4) SEO

- meta 정보를 정적/동적 파일로 렌더시키기 위해 SSR을 활용하여 SEO를 최적화합니다.
- 목록/상세 페이지는 SSR로 받아온 데이터를 사용하였습니다.
- meta 태그에 title과 og를 포함하였습니다.
- detail 페이지의 경우, 구조화된 데이터 작동 방식을 이용하여 페이지의 콘텐츠를 내용을 더 자세히 보이도록 작성하였습니다.

## 2-4) 내용

- `/attractions?page={number}&per_page={number}`
  - 목록 페이지 seo
  - pagination
  - `next/link`는 기본적으로 페이지 최상단으로 스크롤 하도록 동작하기 때문에 이 기능을 그대로 사용하였습니다.
- `/attractions/:id`
  - 상세 페이지 seo
  - 여러 이미지가 들어올 상황을 대비해 carousal 기능을 추가하였습니다.

## 2-5) 상태 관리

- `react-query`, `contextApi`
- `fetcher` 함수 작성하여 여러 method, body, params, header로 요청/응답할 수 있게 하였습니다.
- 로그인 유저나 토큰과 같은 세션 정보만 전역으로 관리하기 위해 간단한 context api 사용하였습니다.
- `js-cookie`를 사용하여 token 값은 물론 expiresIn도 관리하도록 하였습니다.
- `react-query`에 필요한 fetch 함수는 `/repositories` 내 하나의 객체로 묶어 CSR 뿐만 아니라 SSR에서도 간편하게 불러올(import) 수 있도록 하였습니다. SSR로 리팩도링 와중 일부 불필요하게 된 CSR query들은 `/queries`에 모두 정리되어 있습니다.

## 2-6) form, input 관리

- input 요소 여러 개가 한 페이지에 있을 때 발생하는 렌더링 문제를 해결하기 위해 `ref`로 DOM에 직접 접근하는 비제어 방식을 사용하려 했지만 `forwardRef`로 감싸는 작업이 필요했습니다. 이런 불편함과 input value에 대한 에러 처리 역시 동시에 해결하고자 `use-form-hook`을 선택하였습니다.
- validation을 한눈에 보기 쉽도록 하기 위해 `yupResolver`를 사용하였습니다.

## 2-7) 에러 화면

- `400`
  - 잘못된 body 또는 params 에 대해 Bad Request 화면을 렌더링합니다.
  - 로그인 화면의 경우, 아이콘이나 에러 메시지로 표현됩니다.
  - 목록 및 상세 페이지의 경우, `page, per_page, attraction_id`값이 유효하지 않을 경우 렌더링합니다.
- `401`
  - 로그인이 되지 않은 사용자의 접근을 허가하지 않을 때 Not Allowed 화면을 렌더합니다.
- `404`
  - 그 밖에 없는 페이지(라우터)의 경우 렌더링합니다.
