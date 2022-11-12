const MissionUtils = require("@woowacourse/mission-utils");

class WinningCalculator {
  #lottos;
  #winningLotto;
  #rank;

  constructor(lottos, winningLotto) {
    this.#lottos = lottos;
    this.#winningLotto = winningLotto;
    this.#rank = Array.from({ length: 5 }, () => 0);
    this.calculateRank();
  }

  getMatchNumber(numbers, winningNumbers) {
    return numbers.filter((number) => winningNumbers.includes(number));
  }

  calculateRank() {
    this.#lottos.map((lotto) => {
      const matchNumber = this.getMatchNumber(lotto.numbers, this.#winningLotto.numbers);

      if (matchNumber.length === 6) {
        this.#rank[0]++;
      }
      if (matchNumber.length === 5 && lotto.numbers.includes(this.#winningLotto.bonusNumber)) {
        this.#rank[1]++;
      }
      if (matchNumber.length === 5 && !lotto.numbers.includes(this.#winningLotto.bonusNumber)) {
        this.#rank[2]++;
      }
      if (matchNumber.length === 4) {
        this.#rank[3]++;
      }
      if (matchNumber.length === 3) {
        this.#rank[4]++;
      }
    });
  }

  printRank() {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.#rank[4]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.#rank[3]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.#rank[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#rank[1]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.#rank[0]}개`);
  }
}

module.exports = WinningCalculator;
