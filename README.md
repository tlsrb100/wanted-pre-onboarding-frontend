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
### 폴더 관리
```
apis : Auth, Todo에서 사용되는 api
components : 각 페이지에 사용되는 컴포넌트 및 공통으로 사용되는 컴포넌트 관리
constants : url, 라우팅 path 상수 관리
hooks : 커스텀 훅 관리
pages : Auth, Todo 페이지 관리
styles : 공통 css 속성 관리
util : api 제외한 함수 
```
  * 사용 목적에 맞는 파일들을 따로 관리하고 찾기쉽게 최대한 구분지어 폴더를 만들었습니다.
  * css파일은 styles 폴더에 넣지 않고 관리하기 쉽게 직접적으로 사용하는 컴포넌트와 같은 폴더에 위치시켰습니다.
  * constants폴더에 상수들을 넣어놨지만 url 경우는 env 파일로 관리하는것이 보안상 더 좋을거라 생각합니다.
  
  
### 페이지 라우팅
```javascript
function App() {
  const pages = useRoutes(Pages);
  setHeaderToken();
  return pages;
}

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

const PrivateRouter = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? <Outlet /> : <Navigate to='/' />;
};
```
  * 페이지 라우팅 구조를 파악하기 쉽게 useRoutes를 사용했고 라우팅을 배열로 만들어 한곳에서 따로 관리할수있도록 하였습니다.
  * PrivateRouter와 PubliceRouter로 중첩시켜 토큰여부에 따라 페이지 라우팅이 일어나게 하였습니다. ex) 비로그인시에 url에 /todo를 입력하면 '/' 로그인페이지로 이동하게 됩니다.


### 페이지 템플릿
  * Auth, Todo 페이지에서 공통으로 가지는 부분들은 PageTemplate 컴포넌트를 만들어서 관리했습니다. 현재는 타이틀만 공통으로 적용되어있습니다.
  ```javascript
  const PageTemplate = ({ children, title }) => {
  return (
    <S.PageTemplateWrapper>
      <S.PageHeaderWrapper>{title}</S.PageHeaderWrapper>
      {children}
    </S.PageTemplateWrapper>
  };

  const Auth = () => {
    return (
      <PageTemplate title={'Todo List'}>
        <InputForm />
      </PageTemplate>
    );
  };
  ```



### Auth Page
1. 로그인 / 회원가입
<img width="379" alt="image" src="https://user-images.githubusercontent.com/104765779/208827855-56463651-290f-4a48-b9c8-d6283f19e8e8.png">

```javascript
  const submitLoginInfoHandler = async (body) => {
    try {
      if (selectedButton === '로그인') {
        const res = await signIn(body);
        const accessToken = res.data.access_token;
        localStorage.setItem('accessToken', accessToken);
        alert(`로그인되었습니다`);
        navigate('/todo');
      } else if (selectedButton === '회원가입') {
        const res = await signUp(body);
        const accessToken = res.data.access_token;
        alert(`회원가입되었습니다`);
        localStorage.setItem('accessToken', accessToken);
      }
    } catch (error) {
      alert(`인증 에러 : ${error.response.data.message}`);
    }
  };
```
  * 로그인과 회원가입을 각각의 페이지로 구분하지 않고 버튼상태에 따라 해당되는 api를 요청하게 했지만, 사용자 경험적인 측면에서는 페이지를 나누어 명확하게 상태를 보여주는것이 좋을것같습니다.  
  * email / PW는 최소한의 유효성기능만 적용이 되어있어서 추후 보완이 필요한 상태입니다.
  
2. 헤더 설정  

```javascript
function App() {
  const pages = useRoutes(Pages);
  setHeaderToken();
  return pages;
}

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
  * 페이지 라우팅이 될때마다 App 컴포넌트에서 토큰여부에 따라 Header 설정을 하려고 했지만, 다시 생각해보니 todo 페이지에서 의도적으로 토큰을 지우더라도 라우팅을 하지않는다면 헤더에 토큰이 계속 저장되어있기 때문에 좋은방법은 아니라고 생각합니다.



### Todo Page

1. 구조   
 ```javascript
 const TodoForm = () => {
  const { todoList, fetchAndSetTodo } = useGetTodoList([]);

  useEffect(() => {
    fetchAndSetTodo();
  }, []);

  return (
    <S.TodoFormContainer>
      <InputTodo onClick={fetchAndSetTodo} />
      <TodoCardList todoList={todoList} fetchAndSetTodo={fetchAndSetTodo} />
    </S.TodoFormContainer>
  );
};
 ```
     
* props drilling을 하게 되어서 최상단인 TodoForm에서 todoList상태를 만들어 관리하였습니다.
* useGetTodoList 커스텀훅은 todoList 상태, 필요한 함수를 다른곳에서도 사용하려고 만들었지만,
  useState로 로컬상태만 가지다보니 다른곳에서 상태공유가 불가능해서 단순히 TodoForm 컴포넌트에서 보여지는 코드를 줄이는 역할만 하고 있습니다. 

2. CRUD
  * create, update, delete 요청은 정상응답을 받으면 상단 TodoForm에서 props로 받은 함수로 todoList를 fetch해오고 상태를 업데이트하도록 하였습니다.
    ```javascript
      const deleteHandler = async (id) => {
      try {
        await deleteTodo(id);
        fetchAndSetTodo();
      } catch (error) {
        alert(`Todo 삭제 에러 :  ${error.response.data.message}`);
      }
    };
    ```
  * Todo Input값을 가져올때는 불필요한 재렌더링을 피하기 위해 useState 상태로 만들지 않고 useRef를 사용하였습니다.
    ```javascript
    const InputTodo = ({ onClick }) => {
      const typedInput = useRef('');

      return (
        <S.InputTodoContainer>
          <input className='todo-input-content' ref={typedInput} />
          <div className='add-icon-box' onClick={createHandler}>
            <FontAwesomeIcon icon={faCirclePlus} size='2x' />
          </div>
        </S.InputTodoContainer>
      );
    };
    ```
  * 에러 핸들링은 각각의 api 요청에 try ~ catch을 사용해서 모든 에러에 대해 메세지를 띄워주도록 하였습니다.
    사용자에게 에러의 내용을 보여주기 위해서 에러 응답에 포함되어있는 메세지를 활용했습니다.
    
    ```javascript
    const createHandler = async () => {
      try {
        const content = typedInput.current.value;
        await createTodo({ todo: content });
        typedInput.current.value = '';
        onClick();
      } catch (error) {
        alert(`Todo 등록 에러 :  ${error.response.data.message}`);
      }
    };
    ```
    
    <img width="448" alt="image" src="https://user-images.githubusercontent.com/104765779/208838392-88529d76-a04f-48f6-843f-65341adf161c.png">

    

  


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
