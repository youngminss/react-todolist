// 할 일 하나하나, TodoItem 컴포넌트
// dispatch 를 사용해서, 토글 기능과 삭제 기능을 구현

import React from "react";
import styled, {css} from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

// 쓰레기통 버튼 
const Remove = styled.div`
    display : flex;
    align-items: center;
    justify-content : center;   /* ? */
    color : #dee2e6;
    font-size : 24px;
    cursor : pointer;
    &:hover {
        color : #ff6b6b;
    }
    display : none;
`;

// 할 일 완료, 체크
const CheckCircle = styled.div`
    width : 32px;
    height : 32px;
    border-radius : 16px;
    border : 1px solid #ced4da;
    font-size : 24px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 20px;
    cursor : pointer;
    ${props =>
        props.done &&
        css`
            border : 1px solid #38d9a9;
            color : #38d9a9;
        `}
`;

// Component Selector : 이 스타일이 적용된, 컴포넌트 위에, 커서가 있을 때, hover효과가 적용된다.
const TodoItemBlock = styled.div`
    display : flex;
    align-items : center;
    padding-top : 12px;
    padding-bottom : 12px;
    &:hover {
        ${Remove} {
            display : initial;  /* ? */
        }
    }
`;

const Text = styled.div`
    flex : 1;
    font-size : 21px;
    color : #495057;
    ${props =>
        props.done &&
        css`
            color : #ced4da;
        `}
`;

function TodoItem({ id, done, text }){
    const dispatch = useTodoDispatch();
    const onToggle = () => { dispatch({type: "TOGGLE", id })}
    const onRemove = () => { dispatch({type: "REMOVE", id })}
    
    return(
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>
                {done && <MdDone />}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default React.memo(TodoItem);    // React.memo : 불필요한 리렌더링을 방지, 성능 최적화
