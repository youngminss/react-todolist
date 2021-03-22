# ✔ React - TodoList

### 프로젝트 소개

`styled-components 를 통한 컴포넌트 스타일링`, `Context API 를 이용하 전역 상태 관리` 를 통한 `투두리스트` 만들어보기 

------------------------

### 프로젝트 개요

1. 프로젝트 생성하기
2. 컴포넌트 스타일링하기
3. Context 만들기
4. 기능 구현하기

------------------------

### 기능소개

**1. TodoTemplate 컴포넌트**
+ 투두리스트의 레이아웃을 설정하는 컴포넌트
+ 페이지 중앙에 그림자가 적용된 흰색 박스를 보여준다.

**2. TodoHead 컴포넌트**
+ 오늘의 날짜, 요일을 보여주고, 앞으로 해야 할 일이 몇개 남았는지 보여준다.

**3. TodoList 컴포넌트**
+ 할 일에 대한 정보가 들어있는 todos 배열을 내장함수 map을 사용하여 여러개의 todoitem 컴포넌트를 렌더링

**4. TodoItem 컴포넌트**
+ 각 할 일에 대한 정보를 렌더링하는 컴포넌트
+ 좌측 원을 누르면, 할 일의 완료 여부를 toggle 할 수 있다.
+ 할 일이 완료되면 좌측에 체크가 나타나고, 텍스트의 색상이 연해진다.
+ 마우스를 올리면, 휴지통 아이콘이 나타나고, 이를 누르면, 항목이 삭제

**5. TodoCreate 컴포넌트**
+ 새로운 할 일을 등록할 수 있게 해주는 컴포넌트
+ TdoTemplate 컴포넌트 하단부에, 초록색 원 버튼을 렌더링해주고, 이를 클릭 시, 할 일을 입력할 수 있는 폼이 나타난다.
+ 버튼을 다시 누르면, 폼이 사라진다.

**6. TodoContext ★**
+  `useReducer`, `useContext` 를 이용해서, 전체 컴포넌트의 `state`, `action` 를 관리한다.

------------------------

### Step 1 : 컴포넌트 만들기

### ⚙ Install

- vscode-styled-components : VS Code에서 styled-Components highlight 지원

- npm install react-icons : 리액트에서 제공하는 아이콘 사용가능
- npm install styled-components


### Step 2 : Context API를 활용한 상태관리

1. 리듀서 만들기
2. Context 만들기
3. 커스텀 Hooks 만들기
4. 컴포넌트 Provider 로 감싸기


### Step 3 : 기능 구현하기

Context를 만들었으니, Context 와 연동하여, 기능 구현
= Context 에 있는, state 를 받아와서 렌더링을 하고, 필요한 상황에는 특정 액션을 dispatch 한다.

------------------------

### 💬 Other Issue

1. 로컬에서 프로젝트를 진행하다, 깃헙(origin), 깃랩(gitlab) 에 push 하는데, 깃헙 push하고, gitlab push 하는데 문제 발생

- 에러 1 : ! [rejected]  master -> master (fetch first)
    
    + 원인 : 기존, 데이터가 손실 될까봐, git에서 거부한다.
    + 해결 : git push gitlab +master

- 에러 2 :  ! [remote rejected] master -> master (pre-receive hook declined)
    
    + 원인 :  깃랩은 저장소를 생성하면 기본설정이 '관리자(Maintainers)'만 수정 가능, '개발자(Developers)'는 푸시 허용이 돼 있지 않아서 나는 오류
    + 해결 : 세팅(Settings) > 저장소(Repository) > 보호된 분기(Protected Branches) > 관리자만 수정(default) -> 개발자도 수정가능 변경

- 결론 : 평소에, 먼저 원격저장소에서 repo를 만들고, 로컬에서 clone해서, push를 하던 습관 때문에, 역으로, 로컬에서 진행하다가 원격저장소에 연결하던 방식의 혼동이 있었다.

### 🔥 더 공부해볼 것

- [X] map함수, filter함수
- [ ] useReducer 
- [ ] React.memo
- [ ] useContext

### 🚀 추가적으로 해보고 싶은 것
- [ ] 스톱워치 기능
- [ ] 우선순위변경 기능
- [ ] 내 스타일로 변형
- [ ] 서버배포

