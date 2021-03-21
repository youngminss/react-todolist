import React from 'react';
import { createGlobalStyle } from 'styled-components';  // createGlobalStyle = 특정 컴포넌트가 아닌, 글로벌 스타일 추가가능
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background : #e9ecef;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
