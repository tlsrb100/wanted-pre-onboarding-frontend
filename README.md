# 프로젝트의 실행 방법
* 배포 링크로 실행할 수 있습니다.  
https://wanted-pre-onboarding-frontend-9k8a95ow2-tlsrb100.vercel.app/  
* 로컬에서 실행할 수 있습니다.
```
npm install
npm run start
```  
* test 계정 
   * ID : test9748@gmail.com  
   * PW : 12345678  

# 폴더 구조
  * apis : Auth, Todo에서 사용되는 api
  * components : 각 페이지에 사용되는 컴포넌트 및 공통으로 사용되는 컴포넌트 관리
  * constants : url, 라우팅 path 상수 관리
  * hooks : 커스텀 훅 관리
  * pages : Auth, Todo 페이지 관리
  * styles : 공통 css 속성 관리
  * util : api 제외한 함수 
```
📦src
 ┣ 📂apis
 ┃ ┣ 📜auth.js
 ┃ ┗ 📜todo.js
 ┣ 📂components
 ┃ ┣ 📂@commons
 ┃ ┃ ┗ 📂PageTemplate
 ┃ ┃ ┃ ┣ 📜PageTemplate.jsx
 ┃ ┃ ┃ ┗ 📜PageTemplate.style.js
 ┃ ┣ 📂@helper
 ┃ ┃ ┗ 📂router
 ┃ ┃ ┃ ┣ 📜PrivateRouter.jsx
 ┃ ┃ ┃ ┗ 📜PublicRouter.jsx
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📜Auth.style.js
 ┃ ┃ ┣ 📜InputBox.jsx
 ┃ ┃ ┣ 📜InputForm.jsx
 ┃ ┃ ┣ 📜SelectButton.jsx
 ┃ ┃ ┗ 📜SubmitButton.jsx
 ┃ ┗ 📂Todo
 ┃ ┃ ┣ 📜InputTodo.jsx
 ┃ ┃ ┣ 📜Todo.style.js
 ┃ ┃ ┣ 📜TodoCard.jsx
 ┃ ┃ ┣ 📜TodoCardList.jsx
 ┃ ┃ ┣ 📜TodoForm.jsx
 ┃ ┃ ┗ 📜TodoSelectButton.jsx
 ┣ 📂constants
 ┃ ┣ 📜routes.js
 ┃ ┗ 📜url.js
 ┣ 📂hooks
 ┃ ┣ 📂Auth
 ┃ ┗ 📂Todo
 ┃ ┃ ┣ 📜useCheckBox.js
 ┃ ┃ ┗ 📜useGetTodoList.js
 ┣ 📂pages
 ┃ ┣ 📂Auth
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂Todo
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┗ 📜index.jsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyles.js
 ┃ ┣ 📜color.js
 ┃ ┗ 📜theme.js
 ┣ 📂utils
 ┃ ┗ 📜auth.js
 ┣ 📜App.js
 ┗ 📜index.js
```


# 구현방식
### 페이지 라우팅
```javascript
function App() {
  const pages = useRoutes(Pages);
  setHeaderToken();
  return pages;
}
```
```javascript
const Pages = [
  {
    element: <PrivateRouter />,
    children: [
      {
        path: ROUTES.TODO.PATH,
        element: <Todo />,
      },
    ],
  },
  {
    element: <PublicRouter />,
    children: [
      {
        path: ROUTES.AUTH.PATH,
        element: <Auth />,
      },
    ],
  },
];
```
```javascript
const PrivateRouter = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? <Outlet /> : <Navigate to='/' />;
};
```
  * 페이지 라우팅 구조를 파악하기 쉽게 useRoutes를 사용했고 라우팅을 배열로 만들어 따로 한곳에서 관리할수있도록 하였습니다.
  * PrivateRouter와 PubliceRouter로 중첩시켜 의도한 조건에 따라 각각의 페이지가 라우팅되도록 만들었습니다.


### 로그인/회원가입
1. 로그인과 회원가입을 각각의 페이지로 구분하지 않고 버튼상태에 따라 해당되는 api를 요청하게 했지만, 사용자 경험적인 측면에서는 페이지를 나누어 명확하게 상태를 보여주는것이 좋을것같습니다.
<img width="379" alt="image" src="https://user-images.githubusercontent.com/104765779/208827855-56463651-290f-4a48-b9c8-d6283f19e8e8.png">

1. 헤더 설정  

```javascript
function App() {
  const pages = useRoutes(Pages);
  setHeaderToken();
  return pages;
}
```
```javascript
const setHeaderToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    apiClient.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};
```
  * 페이지 라우팅이 될때마다 App 컴포넌트에서 토큰여부에 따라 Header 설정을 하려고 했지만, 다시 생각해보니 todo 페이지에서 의도적으로 토큰을 지우더라도 라우팅을 하지않는다면 헤더에 토큰이 계속 저장되어있기 때문에 좋은방법이 아니라고 생각합니다.




# 요구 기능
### 1. 로그인 / 회원가입
* / 경로에 로그인 / 회원가입 기능을 개발해주세요  
   - [x] 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요
   - [x] 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다.  
   
* 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  - [x] 이메일 조건: @ 포함
  - [x] 비밀번호 조건: 8자 이상
  - [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요
  - [x] 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다.

* 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동해주세요
  - [x] 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - [x] 응답받은 JWT는 로컬 스토리지에 저장해주세요  
  
* 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  - [x] 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
  - [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 시켜주세요


### 2. 투두 리스트  
* 완료/추가  
  - [x] /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
  - [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
  - [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로           추가되도록 해주세요

* 투두 리스트의 수정, 삭제 기능을 구현해주세요
  - [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리           스트의 내용을 수정할 수 있도록 해주세요
  - [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하          거나 수정을 취소할 수 있도록 해주세요
  - [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세          요
