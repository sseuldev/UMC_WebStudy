# :pencil: 5th UMC_WEB 활동 정리
---
### 1. 로그인 화면 구현 (login_form)
---
- login.html & style.css & login.js 를 활용하여 페이지 구현
- 로그인 정보 받기

  - 아이디가 틀릴 시 : *"존재하지 않는 계정입니다"*
  - 비밀번호가 틀릴 시 : *"아이디와 비밀번호를 다시 한 번 확인해주세요!"*
  - 비밀번호를 5회 이상 틀리는 경우 : *"비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다."*
 
---
### 2. 회원가입 화면 구현 (membership_form)
---
- membership.html & style.css 를 활용하여 페이지 구현
- javascript를 이용한 유효성 검사는 구현하지 못함

---
### 3. React 시작하기 (React_환경설정)
---
- react 앱 시작하기
```
npx create-react-app (파일명)
```
- 경로 변경 (change directory)
```
cd (파일명)
```
- 앱 실행 -> npm의 조금 더 개선된 버전 - 더 빠르다
```
yarn start
```

---
### 4. 영화 앱 구현_1 (netflix-clonecoding)
---
- Component, JSX, Props를 활용하여 페이지 구현
- Movie.jsx & App.js & index.css & index.js & movieDummy.js
- API를 movieDummy.js에 받아오기 (by 클론코딩)
- 받아온 데이터를 jsx 파일에서 export 하고 Props를 활용하여 앱 구현

--- 
### 5. 영화 앱 구현_2 (react-routing-demo)
---
- react-router-dom의 BrowseRouter, Routes, Route 컴포넌트 구성하기
- Link 컴포넌트와 useNavigate Hook을 이용한 페이지 전환
- 앱 기능
  - 광고 보기/안보기
  - 로그인/로그아웃
  - 영화/TV 프로그램/인물 배너
  - 영화 포스터 클릭 시 상세 화면

--- 
### 6. Reactnative 를 이용한 계산기 구현 (Reactnative)
---
- Reactnative
