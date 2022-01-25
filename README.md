# **📱 실시간 환율 계산기**

## 프로젝트 소개

> 주어진 API를 활용하여 두 종류의 환율 계산기가 각각 작동하도록 구현하는 프로젝트

<br/>

## 팀원 소개

| 팀 구성        | 담당                              |
| -------------- | --------------------------------- |
| 이현호, 윤창현 | 선택박스 계산기 (SelectConverter) |
| 박훈주, 이주영 | 탭 계산기 (TabConverter)          |

<br/>

## 배포 주소

[wanted-currency-converter.netlify.app](https://wanted-currency-converter.netlify.app/)

<br/>

## 사용 기술 및 스택

- Stack
  - React Hooks
  - styled-components
  - fetch
  - Deploy : Netilfy
  - Other : Git / GitHub
  - Build Tool (Create React App)
  - Code Quality Tool (Prettier)

<br/>

## 과제 구현 목록

- **Select Box Converter (이현호, 윤창현)**
  ![KakaoTalk_20220125_234904701.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9b9f3ac-7145-4d65-9dbb-9a256cb51bcd/KakaoTalk_20220125_234904701.gif)
  - [x] 레이아웃 및 UI ( SelectConverter )
  - [x] API 데이터 받아 사용
  - [x] 리스트 위아래 선택 박스
  - [x] current에 따른 수취국가 환율 표시
  - [x] 결과값에 따른 환전값 반환
- **Tab Box Converter (박훈주, 이주영)**
  ![KakaoTalk_20220125_234134991.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d342bc7e-606f-4a86-b9b2-d6cfea7c4835/KakaoTalk_20220125_234134991.gif)
  - [x] 레이아웃 및 UI 설계 (`input`, `select` 로 입력값 설정 후 하단의 탭박스에 결과값 출력)
  - [x] 선택된 통화의 종류에 따라 Tab의 구성이 유동적으로 변화되도록 구현
        ex) 드롭다운 메뉴를 “USD” → “CAD”로 바꿀 경우, 탭 내부의 “CAD”는 제거되고 “USD” 추가.
  - [x] 선택된 Tab의 `border-bottom`만 제거되도록 구현
  - [x] input 박스에 숫자만 입력되도록 설정 후 회계/통화 형식에 맞춰 콤마(,)가 천의 자리마다 찍힐 수 있도록 구현 ex) ‘2000’ 입력 시 ‘2,000’ 으로 출력
  - [x] API를 통해 실시간으로 환율 데이터를 가져와서 환율 계산기 구현.
        환율 연산식 : `input 입력값 * (탭에서 선택된 통화 / 드롭다운에서 선택된 통화)`

<br/>

## CRA 구조

```markdown
src
│
├─components
│ │  
│ └─SelectConverter  
│ │ SelectConverter.jsx
│ └─TabConverter
│ TabConverter.jsx
│
├─constants
│ index.js
│
├─pages
│ MainPage.jsx
│
├─styles
│ GlobalStyles.js
│
├─utils
│ dateConverter.js
│
```

<br/>

## 커밋 컨벤션

깃모지를 사용하여 직관성을 높이고, 기능이나 UI 설계에 따른 메세지를 커밋 메세지에 담는것을 컨벤션으로 결정했습니다. 깃모지로 인해 상대방이 어떤 작업을 수행했는지 한 눈에 확인할 수 있고, 메세지를 보며 조금 더 상세한 상황을 파악할 수 있습니다.

| 깃모지 | 사용 예시               |
| ------ | ----------------------- |
| 🎉     | init                    |
| 🚚     | 디렉토리 또는 파일 이동 |
| ✨     | 기능 구현               |
| 💄     | CSS 스타일링            |
| ♻️     | 리팩토링                |
| 📝     | Readme 수정             |
| ➕     | 모듈 추가               |
| 🐛     | 버그 해결               |
| 🚑️    | 치명적인 오류 해결      |

<br/>

## 과제 후기

### **이현호** 😎

라이브 코딩을 하다보니 긴장도 되었지만, 막히는 부분에서 함께 고민하며 나아가는 모습을 보고 페어 프로그래밍의 중요성을 알게되었습니다. 그리고 제가 잘 아는 부분에 대해서 설명하면서 프로젝트를 설계하는 것으로 기초를 다시 다지게 되는 경험이 되었습니다.

### 윤창현 ✨

명확한 업무분담과 빠르고 정확한 협업과 소통으로 프로젝트를 완성 하였고, 한걸음 더 발전할 수 있었던 좋은 시간이었습니다.

### **박훈주** 🎅

사실 항상 독학을 하며 코딩을 해왔었기에 협업에 익숙하지 않았었습니다. 하지만 팀원들의 도움으로 원활하게 협업하는 방식을 배울 수 있었고, 생각보다 코딩을 할 때 고려해야 할 것들이 많음을 새삼 깨달았습니다.

### **이주영 🙋‍♀️**

이번 과제를 통해 git으로 pull request를 하며 협업하는 방식을 익힐 수 있었습니다. 이외에도 정해진 팀원과 함께한 짝 프로그래밍을 통해 몰랐던 부분이나 막히는 부분을 같이 고민하고 해결할 수 있었습니다.
