# 1. 프로젝트 소개
## Intro: 영화 검색 사이트 만들기
(1) 소개 : 올림픽의 메달 집계를 관리하는 Olympic Medal Tracker <br>
(2) 목표 : 리액트 컴포넌트, 이벤트 관리, 상태(state) 관리를 통해 CRUD 기능을 구현 <br> 
(3) 개발기간 : 2024.10.29 ~ 2024.10.31

## 배포
[medal-tracker 링크](https://hyeonjy.github.io/medal-tracker)

<br>

# 2. 프로젝트 구조
```plaintext
App
│
├── GlobalStyle
└── Medal
    ├── Medalform
    │   └── InputGroup
    └── Medallist
        └── Medalitem
```

# 3. 구현기능
## # 구현기능 요약
**CRUD 기능**
- CRUD 기능을 통해 국가별 데이터를 추가, 조회, 수정, 삭제
- 데이터를 로컬스토리지에 저장

**금메달 순, 총 메달 순 정렬**
- 국가별 메달 집계를 금메달 수 , 총 메달 수 기준으로 정렬
- 토글을 사용하여 원하는 정렬 선택

**폼 유효성 검사**
- 메달 입력은 0-99 숫자만 가능하도록
- 0-99 이외는 모두 에러 메시지로 처리

<br>

## (1) CREAT, READ
![무제cr3](https://github.com/user-attachments/assets/3019718d-7baf-479e-8103-19d2141a0131)
- 국가추가 버튼 클릭 시 새로운 국가와 메달 정보를 리스트에 추가하고 화면에 표시된다.
- 국가와 메달 정보를 로컬 스토리지에 저장하여, 페이지가 새로고침 되거나 닫혀도 데이터가 유지된다.

## (2) UPDATE, DELETE
![무제ud1](https://github.com/user-attachments/assets/e751e157-2abf-480e-9a89-1831b19ce779)
-  삭제 버튼을 클릭하면, 해당 국가 정보를 삭제한다.
-  수정 시 나라 이름과 새로운 메달 수를 입력하고, 수정 버튼을 클릭하면 해당 국가의 메달 수가 업데이트된다

## (3) 메달 집계 정렬
![무제sr1](https://github.com/user-attachments/assets/3efb390d-2bf0-400b-9b05-b3e3b4513da6)
- 국가별 메달 집계를 금메달 수 또는 총 메달 수 기준으로 내림차순 정렬합니다.
- 토글을 사용하여 원하는 정렬을 선택할 수 있다.

## (4) Form validation
![무제v1](https://github.com/user-attachments/assets/a5a4db5c-904f-4a84-9509-147cab9a963a)
- 메달 입력 폼에 0-99를 제외한 문자나 숫자를 입력하면, 실시간으로 에러메시지를 띄운다.
