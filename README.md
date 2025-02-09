# 도트 디자인 포트폴리오 은지런

- 사용 도구 및 기술: `React`, `Typescript`, `Vite`, `SCSS`, `Atomic Design Pattern`
- Demo: [https://eunjeerun.vercel.app/](https://eunjeerun.vercel.app/)


## 리뉴얼 전
- Demo: https://eunjee-run.vercel.app/
- Github: https://github.com/wwowww/eunjeerun2019

<img width="600px" alt="은지런 리뉴얼 후" src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fcf99ef79-8cd5-4ba7-a4bb-32555a37ce76%2F8e27efcb-f391-42f6-a561-75a0a0f7972c%2F30160abc-969e-4cb9-958c-206cbf16a5f4.png?table=block&id=f0b8823e-94fb-4764-92ff-5afd07b11060&spaceId=cf99ef79-8cd5-4ba7-a4bb-32555a37ce76" />


## 리뉴얼 후
- Demo: https://eunjeerun.vercel.app/
- Github: https://github.com/wwowww/eunjeerun

<img width="600px" alt="은지런 리뉴얼 후" src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fcf99ef79-8cd5-4ba7-a4bb-32555a37ce76%2F4d24f3f7-766d-4943-8a11-849635a982f3%2Fimage.png?table=block&id=36144fa7-f41a-4d5d-8ba4-663ba5e0f7bf&spaceId=cf99ef79-8cd5-4ba7-a4bb-32555a37ce76" />
  
- 리뉴얼된 사이트에서는 하단의 페이지네이션과 PC 화면에서는 좌, 우 방향키를 사용해 이동이 가능하고, Mobile 화면에서는 터치로 이전/다음 화면 이동이 가능합니다.
- 슬라이드를 왼쪽으로 넘어가면 달리는 은지가 시간이 지난 후, 원래 방향으로 돌아옵니다.
- 이외에도 재미있어 보이는 window의 구버전 스타일의 창 화면 모달, 포탈(순간 이동) 효과, 폭죽 기능을 추가했습니다.

## 기술을 채택하게 된 이유

### Vite
빠른 빌드 속도를 가지고 있으며, 개발 중에 번들링 시간(웹팩보다 20~30배 정도 빠름)이 크게 단축됩니다. 제 프로젝트는 작은 규모의 프로젝트이기 때문에 Vite가 적합하다고 생각해 사용했습니다. `vite.config.ts`에 최적화 작업도 진행했습니다. 글 하단을 참고해주세요.

### React
프로젝트가 원페이지 형식으로 구성되어 있어 페이지 간의 전환이 필요하지 않고, 하나의 HTML 파일로 모든 UI를 구성할 수 있습니다. 이런 경우, React는 SPA 방식으로 빠르게 렌더링을 처리할 수 있어 Next.js와 같은 복잡한 SSR 솔루션이 불필요하여 React를 선택해 사용하게 됐습니다.

### SCSS
기존에 css로 작성돼, 한 파일에 너무 많은 css가 작성되어 있었습니다. 이를 ModuleCSS를 활용해 한 컴포넌트에 필요한 css만 작성되도록 하여 반복된 코드량을 줄이고 파일의 사이즈를 줄였습니다.

### Pnpm
성능 최적화, 효율적인 의존성 관리, 그리고 디스크 공간 절약을 통해 프로젝트의 빌드 속도와 의존성 관리 효율성을 높이기 위해 채택해 사용했습니다.

---

# React와 함께 Vite를 사용하는 프로젝트 최적화해보기

## 1. Vite 최적화

> Vite: 빠른 속도와 간편한 개발을 할 수 있도록 하는 빌드 도구
>

### 빌드 최적화 - 코드 스플리팅(코드 분할)

코드 스플리팅은 애플리케이션을 여러 개의 작은 청크*로 나눠 초기 로딩 속도를 단축하고 필요 시에만 특정 청크를 로드하는 방식입니다. rollupOptions의 `manualChunks` 옵션을 활용하여 코드 분할을 설정할 수 있습니다.

* 청크(Chunk): 하나의 번들 파일을 효과적으로 다루기 위해 여러 개의 작은 파일로 나눈 것

```tsx
// vite.config.ts 설정
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import gzipPlugin from 'rollup-plugin-gzip'
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      plugins: [gzipPlugin()],
      output: {
        manualChunks: (id) => {
          if (id.indexOf("node_modules") !== -1) {
            const module = id.split("node_modules/").pop();
            if (module) {
              return `vendor-${module.split("/")[0]}`;
            } else {
              return 'vendor-unknown';
            }
          }
        },
      }
    },
  },
})

```
위의 설정은 `node_modules` 에 있는 라이브러리들을 vender 청크로 분리하는 방법으로, vender 청크가 캐싱되어 변경되지 않으면 재사용될 수 있도록 합니다.

첫번째 파라미터인 `id`에서 `node_modules`가 있는지 찾고 `node_modules`를 스플릿해 vender라는 prefix를 붙인 module을 넣어줍니다.


<img width="1291" alt="스크린샷 2025-02-09 오후 6 24 08" src="https://github.com/user-attachments/assets/eecc7ed0-e8db-4ad0-a083-ff351f4c3215" />

<br/>

### 빌드, 의존성 최적화 설정

```tsx
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    target: 'esnext', // 1. 최신 브라우저 타겟팅
    minify: 'esbuild', // 2. esbuild를 사용하여 빌드 속도 개선 -> 이미 기본 값이므로 따로 설정하지 않아도 됨
    sourcemap: false, // 3. 프로덕션에서는 소스맵 비활성화
    chunkSizeWarningLimit: 500, // 4. 청크 경고 한계 조정
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext', // 5. 최신 JS 문법 사용
    },
  },
});

```

1. 빌드 타켓 설정 - `target: 'esnext'` 
    - esnext는 최선 브라우저에서 지원하는 최신 Javascript 문법을 사용해 코드를 빌드합니다. 이렇게 하면 코드 크기를 줄이고 성능을 향상시킬 수 있습니다.
    - 하지만 모든 브라우저가 esnext를 지원하는 것이 아니므로, 필요에 따라 특정 브라우저 버전을 설정할 수 있습니다.
        - 참고: https://vite.dev/guide/build#browser-compatibility
2. Minify 도구 설정 - `minify: 'esbuild'`
    - `esbuild`는 매우 빠른 속도로 코드를 난독화하고 압축하는 도구로 Vite는 기본적으로 `esbuild`를 사용하여 빌드 속도를 개선합니다.
    - 이미 기본 값이므로 따로 설정하지 않아도 됩니다.
3. 소스맵 비활성화 - `sourcemap: false` 
    - 소스맵은 빌드된 코드와 원본 코드를 연결해주는 파일입니다.
    - 개발 환경에서는 유용하지만, 프로덕션 환경에서는 파일 크기를 늘리고 보안상의 문제가 발생할 수 있으므로 비활성화하는 것이 좋다고 합니다.
4. 청크 경고 한계 조정 - `chunkSizeWarningLimit: 500` 
    - vite는 기본적으로 청크 크기가 특정 값을 넘어가면 경고를 표시합니다. 이 옵션을 통해 경고 한계를 조정할 수 있습니다.
    - 하지만 청크 크기를 너무 크게 조정하면 로딩 시간이 길어질 수 있으므로 적절한 값을 설정해야 합니다.
5. 의존성 최적화 - `esbuildOptions` 
    - 의존성 모듈을 미리 번들링해 개발 서버 시작 속도를 향상시키는 기능입니다.
    - `esbuildOptions`를 통해 `esbuild`의 설정을 조정할 수 있으며, 여기서는 `esnext`를 타겟팅하여 최신 JS 문법을 사용하도록 설정했습니다.
    

### 이미지 및 정적 파일 최적화

`vite-plugin-image-optimizer` 를 사용해 이미지 크기를 줄여 최적화했습니다.

```tsx
pnpm add vite-plugin-image-optimizer -D // 설치
```

```tsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import gzipPlugin from 'rollup-plugin-gzip'
import tsconfigPaths from 'vite-tsconfig-paths'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    ViteImageOptimizer({
	    jpg: { quality: 75 },
      png: { quality: [0.6, 0.8] },
      webp: { quality: 80 },
      exclude: ['example.webp', '...'], // 압축 제외할 파일
    }),
  ],
  ...
})

```

- 이미지 크기를 줄여 로딩 속도를 개선하는 방법입니다. 저는 이미지를 webp만 사용하고 있으므로 webp만 설정해줬습니다.
- exclude에는 제외할 파일명을 입력하면 됩니다. 폴더명까지 입력하면 설정이 안되니 주의해주세요.
- 움직이는 이미지는 압축하면 이미지가 움직이지 않으므로(gif 같은 파일) 파일 압축에서 예외처리 해줘야 합니다.

<img width="778" alt="스크린샷 2025-02-09 오후 5 04 27" src="https://github.com/user-attachments/assets/3e618a8f-dbbd-4e99-8794-1d42dd2a369f" />


<br />


## 2. webp 및 Lazy Loading 활용

이미지를 webp 포멧으로 변환하고, `loading="lazy"` 속성을 추가하여 페이지 로딩 속도를 개선했습니다. 

```tsx
<img src="/images/example.webp" alt="example" loading="lazy" />
```

- `loading="lazy"` 는 이미지를 로딩할 때 렌더링이 블로킹되지 않도록 개선하는 방법입니다.
    - 하지만 모든 img 태그에 사용하면 안되는데요, 처음 로딩 했을 때 보여야 하는 부분에 적용하면 이미지가 즉시 로딩되지 않아 사용자 경험에 좋지 않고,
    - 검색엔진 크롤러는 `loading="lazy"` 속성이 적용된 이미지를 제대로 인식하지 못할 수 있기 때문에 중요한 이미지에는 사용을 지양해야 합니다.
- webp
    - 이미지가 로딩되는 시간을 단축하기 위해 구글에서 출시한 파일 포멧
    - jpg-손실 압축 / png-비손실 압축 / webp- 압축방식 선택가능
    - 참고: [https://jaeheepapa.tistory.com/entry/WebP-파일-포맷은-무엇이고-왜-쓸까요](https://jaeheepapa.tistory.com/entry/WebP-%ED%8C%8C%EC%9D%BC-%ED%8F%AC%EB%A7%B7%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%EC%99%9C-%EC%93%B8%EA%B9%8C%EC%9A%94)

## 3. React 코드 스플리팅(동적 로딩)

> 필요할 때만 컴포넌트를 로딩하는 방법으로 페이지에 필요한 순간에만 컴포넌트가 로드되므로 초기 로딩 속도가 빨라집니다.
> 

### Suspense

리액트 내장 컴포넌트로 코드 스플리팅된 컴포넌트를 로딩하고 로딩 중에 보여질 UI를 설정할 수 있습니다. fallback이라는 Props를 통해 보여질 컴포넌트를 지정할 수 있습니다.

### React.lazy + Suspense

```tsx
import { lazy, Suspense } from 'react';
import Background from '@components/molecules/Background/Background';
import style from './SlideContent.module.scss';

const Home = lazy(() => import('@/components/templates/Home/Home'));
...

const SlideContent = () => {
  const slides = [
    <Home openModal={() => openContentModal('home')} />,
    ...
  ];

  return (
    <Suspense fallback={<Background />}>
      <SwiperSlide key={index + "slide key"}>{slide}</SwiperSlide>
    </Suspense>
  );
};

export default SlideContent;
```

## 4. React 렌더링 최적화

- `useMemo`(값을 메모제이션), `useCallback`(함수를 메모제이션)을 활용해 불필요한 리렌더링을 방지하기
- `React.memo`를 활용해 컴포넌트 리렌더링을 방지하기(동일한 prop가 전달된다면 리렌더링되지 않음)
    - memo() 메소드는 React에게 부모 컴포넌트에게 변경이 발생할 때마다 자식 컴포넌트로 이동해 기존의 값과 새로 변경된 props의 값을 비교하게 합니다.
        1. 먼저 기존의 props 값을 저장할 공간 필요
        2. 기존 props 값과 새로운 props 값을 비교하는 작업 필요
    - 이렇게 메모리가 사용되므로 무분별하게 사용하지 않는 것이 좋음

## 5. 추가) SEO 최적화

- 버튼에 `aria-label` 속성을 활용해 어떤 의미가 있는지 설정
- 시멘틱 태그로 변경
- img에 alt 이미지 대체 텍스트 명시
- pagination에 tabIndex를 적용해 tab으로 접근 가능하도록 설정
- robots.txt 설정
    
    ```tsx
    // 모든 검색엔진의 로봇에 대해 수집 허용으로 설정
    User-agent: *
    Allow: /
    ```
    
- LCP 이미지 미리 불러오도록 설정 및 비동기 처리
  ```tsx
  // <head> 태그 안에 추가
  <link rel="preload" as="image" href="/images/run/eunjee-run.webp">
  ```

  ```tsx
  <img
    decoding="async"
    src="example.webp"
    alt="example에 대한 대체텍스트"
  />
  ```

## 결과 화면

<img width="887" alt="스크린샷 2025-02-09 오후 6 27 51" src="https://github.com/user-attachments/assets/9d564e5d-04f1-4050-a05c-408c01dbfd34" />

<img width="868" alt="스크린샷 2025-02-09 오후 6 28 11" src="https://github.com/user-attachments/assets/da24afa5-783c-4d82-b571-215bbcf53fc0" />

<br />
<br />

개선 전에 없었던 기능들(터치 슬라이드, hooks 추가, 최적화 등)로 인해 전체적인 코드량은 늘어났지만 성능 자체는 눈에 띄게 개선되었습니다. 실제 서비스 운영 시, 사용자 이탈 및 검색엔진 최적화를 위해 코드 분할, SEO 최적화 등 최적화에 더욱 신경써야 겠다고 생각하게 됐습니다.
