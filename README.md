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
  
- 리뉴얼된 사이트에서는 좌, 우 방향키를 사용해 이동이 가능하고, 슬라이드를 왼쪽으로 넘어가면 달리는 은지가 시간이 지난 후, 원래 방향으로 돌아도록 수정했습니다.
- 이외에도 재미있어보이는 포탈(순간 이동) 효과나, 폭죽 기능을 추가했습니다.

## 기술을 채택하게 된 이유

### Vite
빠른 빌드 속도를 가지고 있으며, 개발 중에 번들링 시간(웹팩보다 20~30배 정도 빠름)이 크게 단축됩니다. 제 프로젝트는 작은 규모의 프로젝트이기 때문에 Vite가 적합하다고 생각해 사용했습니다.

### React
프로젝트가 원페이지 형식으로 구성되어 있어 페이지 간의 전환이 필요하지 않고, 하나의 HTML 파일로 모든 UI를 구성할 수 있습니다. 이런 경우, React는 SPA 방식으로 빠르게 렌더링을 처리할 수 있어 Next.js와 같은 복잡한 SSR 솔루션이 불필요하여 React를 선택해 사용하게 됐습니다.

### SCSS
기존에 css로 작성돼, 한 파일에 너무 많은 css가 작성되어 있었습니다. 이를 ModuleCSS를 활용해 한 컴포넌트에 필요한 css만 작성되도록 하여 반복된 코드량을 줄이고 파일의 사이즈를 줄였습니다.

### Pnpm
성능 최적화, 효율적인 의존성 관리, 그리고 디스크 공간 절약을 통해 프로젝트의 빌드 속도와 의존성 관리 효율성을 높이기 위해 채택해 사용했습니다.
