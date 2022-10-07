# KOSPI 200 기업 정보 제공 API

KOSPI 200 기업 정보를 제공하는 API

## 사용 기술 스택
JavaScript
Node.js
MySQL

## 모듈 버전 정보

| name | version |
|--|--:|
| cookie-parser|~1.4.4 |
|debug |~2.6.9 |
|express |~4.16.1 |
| http-errors|~1.6.3 |
| morgan|~1.9.1 |
| mysql|2.18.1 |
| nodemon|2.0.20 |

## 데이터 출처

`MIT License`  
https://financedata.github.io/posts/finance-data-reader-users-guide.html

## API URI structure

![image](https://user-images.githubusercontent.com/68600592/194486637-e14d7a0b-13ab-4696-aeb4-2111a8704dae.png)

## 결과 화면
`1. GET /stocks`

![image](https://user-images.githubusercontent.com/68600592/194486945-94485218-ab90-4387-9d7b-cfbd71b34021.png)

`2. GET /stocks/373220`

![image](https://user-images.githubusercontent.com/68600592/194487206-4e006d36-00b0-4f07-b968-590fdc72861f.png)

`3. POST /stocks`

![image](https://user-images.githubusercontent.com/68600592/194486856-18c87ebf-c967-4c02-a240-a64ae5adbfdc.png)

`4. PUT /stocks/005930`

![image](https://user-images.githubusercontent.com/68600592/194487334-e19658c3-ca03-4fbc-99f3-a14b33238b49.png)

`5. DELETE /stocks/12301231`

![image](https://user-images.githubusercontent.com/68600592/194487400-314fe8fa-5b23-4674-9c0c-0cc37bcd8627.png)
