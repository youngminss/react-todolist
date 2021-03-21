// 리듀서 만들기

import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
    {
        id : 1,
        text : "프로젝트 생성하기",
        done : true
    },
    {
        id: 2,
        text: "컴포넌트 스타일링하기",
        done: true
    },
    {
        id: 3,
        text: "Context 만들기",
        done: false
    },
    {
        id: 4,
        text: "기능 구현하기",
        done: false
    },
];

function todoReducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return state.concat(action.todo);
        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.id ? {...todo, done : !todo.done} : todo    
            );
        case "REMOVE" :
            return state.filter(todo => todo.id !== action.id);
        default :
            throw new Error(`Unhandled action type : ${action.type}`);
    }
}

// Context 만들기
/* 
state와 dispatch 를 Context를 통하여 다른 컴포넌트에서 바로 사용 할 수 있게 해준다.
하나의 Context 를 만들어, state 와 dispatch를 함께 넣지 않고, 두 개의 Context 를 만들어서, 따로 따로 넣어줄 것임
이러면, dispatch 만 필요한 컴포넌트에서, 불필요한 렌더링을 방지한다. 또, 추후 사용하게 되는 과정에서 편리하다.
*/
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();  // nextId 값 관리 : 새로운 항목을 추가 할 때, 사용할 고유 ID, useRef를 사용하여 관리

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    ); 
}

/* 
Context 에서 사용 할 값을 지정할 때는, 위와 같이, Provider 컴포넌트를 렌더링 후, value 를 설정하면 된다.
그리고, Props로 받아온 children 값을 내부에 렌더링 해준다.
이러면, 다른 컴포넌트에서 state 나 dispatch를 사용하고 싶을 때, 
*/

// useContext 커스텀 Hook 만들기 & 예외 에러 처리
/* 
커스텀 훅 사용 시, 해당 컴포넌트가 TodoProvider 컴포넌트 내부에 렌더링 되어 있어야 함
만약, TodoProvider 로 감싸져있지 않다면, 에러 발생시키기

추후, 나중에 프로젝트가 커지고, 실수를 하게 됐을 때, 문제점을 빨리 캐치가능하게 해준다.
*/
export function useTodoState() {
    const context = useContext(TodoStateContext);

    if(!context) {
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}
export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);

    if (!context) {
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}
export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);

    if (!context) {
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}
