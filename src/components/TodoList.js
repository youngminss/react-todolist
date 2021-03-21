// 여러 개의 할 일 항목을 보여주는 TodoList 컴포넌트

import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex : 1;   /* 자신이 차지 할 수 있는 영역을 꽉 채우도록 설정 */
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y : auto;  /* ? */
    background : gray;  /* flex = 1 이 잘 작동하는지 확인용, 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일*/
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="Todo Container 만들기" done={true} />
            <TodoItem text="Todo Head 만들기" done={true} />
            <TodoItem text="Todo List 만들기" done={true} />
            <TodoItem text="Todo Item 만들기" done={true} />
            <TodoItem text="Todo Create 만들기" done={false} />
            <TodoItem text="Todo Template 만들기" done={false} />
        </TodoListBlock>
    )
}

export default TodoList;
