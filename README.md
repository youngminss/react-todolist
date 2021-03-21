# React - TodoList

### Install

- vscode-styled-components : VS Code에서 styled-Components highlight 지원

- npm install react-icons : 리액트에서 제공하는 아이콘 사용가능
- npm install styled-components

test commit


### Other Issue

1. 로컬에서 프로젝트를 진행하다, 깃헙(origin), 깃랩(gitlab) 에 push 하는데, 깃헙 push하고, gitlab push 하는데 문제 발생

- 에러 1 : ! [rejected]  master -> master (fetch first)
    
    + 원인 : 기존, 데이터가 손실 될까봐, git에서 거부한다.
    + 해결 : git push gitlab +master

- 에러 2 :  ! [remote rejected] master -> master (pre-receive hook declined)
    
    + 원인 :  깃랩은 저장소를 생성하면 기본설정이 '관리자(Maintainers)'만 수정 가능, '개발자(Developers)'는 푸시 허용이 돼 있지 않아서 나는 오류
    + 해결 : 세팅(Settings) > 저장소(Repository) > 보호된 분기(Protected Branches) > 관리자만 수정(default) -> 개발자도 수정가능 변경

- 결론 : 평소에, 먼저 원격저장소에서 repo를 만들고, 로컬에서 clone해서, push를 하던 습관 때문에, 역으로, 로컬에서 진행하다가 원격저장소에 연결하던 방식의 혼동이 있었다.
 
