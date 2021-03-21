// 오늘의 날짜, 요일, 할 일 개수 보여주는 컴포넌ㅌ

import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
    padding-top : 48px;
    padding-left : 32px;
    padding-right : 32px;
    padding-bottom : 24px;

    border-bottom : 1px solid #e9ecef;

    h1 {
        margin : 0;
        font-size : 36px;
        color : #343a40;
    }
    .day {
        margin-top : 4px;
        color : #868e96;
        font-size : 21px;
    }
    .tasks-left {
        color : #20c997;
        font-size : 18px;
        margin-top : 40px;
        font-weight : bold;
    }
`;


/*
TodoHeadBlock 안에 들어있는, 내용들에 대해, 일일히 컴포넌트를 만드는 대신
일반, HTML 태그를 사용하고, TodoHeadBlock의 스타일에서 CSS Selector를 사용해서, 스타일링

[참고]
- 조건부 스타일링을 할 필요가 없고, 기능적으로도 크게 중요하지 않은 내용이라면 => CSS Selector를 사용하는 것도 좋은 방법
*/ 
function TodoHead() {
    return (
        <TodoHeadBlock>
            <h1>2021년 3월 21일</h1>
            <div className="day">일요일</div>
            <div className="tasks-left">할 일 4개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;