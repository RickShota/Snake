/**
 * 定义计分牌的类
 */
export default class ScorePanel {
	score = 0;
	level = 1;
	scoreEle: HTMLSpanElement;
	levelEle: HTMLSpanElement;

	constructor() {
		this.scoreEle = document.querySelector("#score")!;
		this.levelEle = document.querySelector("#level")!;
	}

	// 加分的方法
	addScore() {
		this.scoreEle.innerHTML = `${++this.score}`;
		// 每过10关升一级
		if (this.level % 10 === 0) {
			this.levelUp();
		}
	}

	// 等级提升的方法
	levelUp() {
		if (this.level < 50) this.levelEle.innerHTML = `${++this.level}`;
	}
}
