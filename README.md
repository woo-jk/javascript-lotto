<h1 align="middle">프리코스 2주차 - 로또 🎱</h1>
<p align="middle">Console을 통해 작동하는 로또 애플리케이션</p>
<br>

# 📱 실행 순서

### 1. 구매 금액 입력

처음 앱을 실행 할 때, 다음과 같은 문장이 출력됩니다.

```
구입금액을 입력해 주세요.
```

1000원 단위의 숫자를 입력해 주시면 됩니다.
(ex. 8000)

### 2. 구매한 로또 출력

입력한 금액만큼의 로또를 구매하고, 구매한 로또를 다음과 같이 출력합니다.

```
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]
```

### 3. 당첨 로또 입력

구매한 로또의 리스트가 출력되고, 당첨 로또를 생성해야 하므로 다음과 같은 문장이 출력됩니다.

```
당첨 번호를 입력해 주세요.
```

당첨 번호 6자리를 입력해 주시면 됩니다. 이 때, 숫자는 쉼표(,)를 기준으로 나눠서 입력하시면 됩니다.
(ex. 1,2,3,4,5,6)

이후, 당첨 로또의 보너스 번호를 입력하라는 문장이 출력됩니다.

```
보너스 번호를 입력해 주세요.
```

원하는 보너스 번호 하나를 입력하면 됩니다.
(ex. 7)

### 4. 당첨 통계 출력

구매한 로또와 당첨 로또를 비교해서 당첨 통계를 출력합니다.

```
당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

수익률은 로또 당첨금의 총액과 구매한 금액을 비교한 결과를 출력합니다.

<br>

# 💻 실행 결과

```
구입금액을 입력해 주세요.
8000

8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]

당첨 번호를 입력해 주세요.
1,2,3,4,5,6

보너스 번호를 입력해 주세요.
7

당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다.
```

<br>

# 🎯 기능 목록

### 💵 금액 입력 받기

- [x] 사용자로부터 금액을 입력받는다.
- [x] 입력 값이 숫자가 아닌 경우 예외 처리한다.
- [x] 입력 값이 1000으로 나누어지지 않는 경우 예외 처리한다.

### 🖨 로또 발행하기

- [x] 금액 만큼(1000원 당 1개) 로또를 발행한다.
- [x] 로또 번호와 수량 규칙을 지킨다.
  - [x] 로또 번호의 숫자 범위는 1~45이다.
  - [x] 각 로또 번호는 서로 중복되지 않는다.
  - [x] 6개의 숫자를 뽑는다.
- [x] 발행된 로또를 1개씩 출력한다.
  - [x] 로또 번호는 오름차순으로 정렬해서 출력한다.

### 🎱 당첨 번호 입력받기

- [x] 쉼표(,) 단위로 입력받는다.
- [x] 번호의 수가 6개가 아닐 경우 예외 처리한다.
- [x] 중복 번호가 있을 경우 예외 처리 한다.
- [x] 로또 번호의 숫자 범위(1~45)를 벗어날 경우 예외 처리한다.
- [x] 보너스 번호를 입력받는다.
  - [x] 숫자가 아니거나, 숫자 범위를 벗어날 경우 예외 처리한다.

### 🗒 당첨 통계 계산하기

- [x] 발행한 로또와 당첨 번호를 비교한다.
  - [x] 발행한 로또의 등수를 계산하고 저장한다.
- [x] 수익률을 계산한다.
  - [x] 등수에 따른 총 당첨 금액을 계산한다.
  - [x] 구매한 금액을 계산한다.
  - [x] 구매한 금액과 총 당첨 금액을 비교해서 수익률을 계산한다.
  - [x] 수익률은 소수점 둘째 자리에서 반올림한다.
- [x] 당첨 내역을 출력한다.

<br>

# 🔧 도메인 클래스별 메소드 설명

### 🎰 LottoMachine Class

구매 금액을 통해 로또를 구매할 수 있는 클래스

`constructor(money)`

- 생성자로 구매 금액을 입력받고 필드로 저장한다.
- 입력한 금액이 숫자 형식이 아니라면 예외 처리한다.
- 입력한 금액이 1000 단위가 아니라면 예외 처리한다.
- parameter type: `number` or `string`

`getLottos()`

- 금액의 양 만큼 로또를 생성하여 배열로 반환한다.
- 로또의 번호는 1~45 사이의 랜덤한 숫자 값이다.
- return type: `Array<Lotto>`
- 예시
  ```js
  const lottoMachine = new LottoMachine("2000");
  lottoMachine.getLottos(); // [Lotto([1, 2, 3, 4, 5, 6]), Lotto(2, 4, 6, 8, 10, 12)]
  ```

### 🥇 RankCalculator Class

플레이어의 로또들과 당첨 로또를 비교해서 등수를 계산하는 클래스

`constructor(playerLottos, winningLotto)`

- 생성자로 로또를 담은 배열과 당첨 로또를 입력받고 필드로 저장한다.
- parameter type: `Array<Lotto>, WinningLotto`

`getRankCountArray()`

- 등수별 당첨 횟수를 배열로 반환한다.
- 반환된 배열의 0번 인덱스는 1등 횟수 ~ 4번 인덱스는 5등 횟수를 나타낸다.
- return type: `Array<Number>`
- 예시

  ```js
  const playerLottos = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto(1, 3, 5, 7, 9, 11)];
  const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
  const rankCalculator = new RankCalculator(playerLottos, winningLotto);
  rankCalculator.getRankCountArray();
  // [1, 0, 0, 0, 1]
  // 1등 1번, 5등 1번을 나타낸다.

  const playerLottos = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto(1, 3, 5, 7, 9, 11)];
  const winningLotto = new WinningLotto([5, 7, 9, 11, 13, 15], 16);
  const rankCalculator = new RankCalculator(playerLottos, winningLotto);
  rankCalculator.getRankCountArray();
  // [0, 0, 0, 1, 0]
  // 4등 1번을 나타낸다.
  ```

### 💸 YieldCalculator Class

구매 금액과 등수 결과를 비교해서 총 수익률을 구하는 클래스

`constructor(purchaseAmount, rankCountArray)`

- 구매 금액과 등수 결과 배열을 입력받고 필드로 저장한다.
- parameter type: `number, Array<number>`

`getPrizeYield()`

- 구매 금액과 총 상금을 비교한 수익률을 반환한다.
- 수익률은 소수점 둘째 자리에서 반올림한다.
- return type: `number`
- 예시

  ```js
  const yieldCalculator = new YieldCalculator(5000, [0, 0, 0, 0, 1]);
  yieldCalculator.getPrizeYield(); // 62.5

  const yieldCalculator = new YieldCalculator(5000, [0, 0, 0, 1, 0]);
  yieldCalculator.getPrizeYield(); // 1000
  ```
