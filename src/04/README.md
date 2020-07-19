4-4

## 리액트의 기본 테스트 환경 jest 도구 사용해 보기

```
yarn add react-testing-library jest-dom @types/jest
```

## 검사 대상 파일 및 폴더

- .test.js, .spec.js, \_\_test\_\_

## enzyme 라이브러리

- 컴포넌트 기능만 분리해서 검사함

## enzyme 설치

```
yarn add --dev enzyme enzyme-adapter-react-16.3 react-test-renderer
```

## test 환경에 enzyme 추가

- setupTests.js

```
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";
configure({ adapter: new Adapter() });
```

## shallow()

- 현재 컴포넌트의 생명주기만 테스트

## toThrow()

- 에러 검증에 사용

## expect()

- 결과값 검증

## 경고 메시지 오류로 인식하도록 설정

```
afterEach(() => {
  console.error.mockClear();
});

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation((e) => {
    throw new Error(e);
  });
});
```

## 테스트코드 실행

```
yarn test ./src/__tests__/04/Input_spec.jsx
```

## find()

- 엘리먼트 찾기

## prop(), props()

- 프로퍼티 찾기

## setProps()

- 프로퍼티 변경

## simulate()

- 가상 이벤트 발생

## mount()

- 하이어오더 컴포넌트 검사

## aphrodite

- 테스트 명령 환경에 없는 DOM 함수 호출 과정을 중지 시킴
- querySelect() 건너 뜀

## dive()

- shallow() 하위 함수
- 특정 하위 컴포넌트만 선택해서 출력
