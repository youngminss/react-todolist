// 여러 개의 할 일 항목을 보여주는 TodoList 컴포넌트
// state를 조회하고, 렌더링 해줘야 한다.

import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
    flex : 1;   /* 자신이 차지 할 수 있는 영역을 꽉 채우도록 설정 */
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y : auto;  /* ? */
    //background : gray;  /* flex = 1 이 잘 작동하는지 확인용, 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일*/
`;

function TodoList() {
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            ))}
        </TodoListBlock>
    )
}

export default TodoList;
