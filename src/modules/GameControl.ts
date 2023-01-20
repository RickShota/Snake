import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

/* 游戏控制器 */
export default class GameControl {
	snake: Snake;
	food: Food;
	scorePanel: ScorePanel;
	// 记录移动方向
	direction: string = "";
	// 记录蛇是否存活
	isLive: boolean = true;

	constructor() {
		this.snake = new Snake();
		this.food = new Food();
		this.scorePanel = new ScorePanel();

		// 调用初始化方法
		this.init();
	}

	// 游戏初始化，即开始游戏
	init() {
		// 随机食物
		this.food.change();
		// 键盘事件
		document.addEventListener("keydown", (e: KeyboardEvent) => {
			this.direction = e.key;
		});
		// 使蛇递归运动（一开始方向为空）
		this.run();
	}

	// 蛇的运动
	run() {
		// 获取蛇坐标
		let X = this.snake.X;
		let Y = this.snake.Y;
		// 计算蛇坐标
		switch (this.direction) {
			case "w":
				Y -= 10;
				break;
			case "s":
				Y += 10;
				break;
			case "a":
				X -= 10;
				break;
			case "d":
				X += 10;
				break;
			default:
				console.log("按键无效");
				break;
		}
		// 调用检查蛇是否吃到食物的方法
		this.checkIfEat(X, Y);

		// 修改蛇头坐标使其运动
		try {
			this.snake.X = X;
			this.snake.Y = Y;
		} catch (e: any) {
			alert(e.message + "Game Over!");
			this.isLive = false;
		}
		// 开启延迟调用，利用递归实现不停运动，运动速度跟随等级提升
		this.isLive &&
			setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
		// 等效于if(this.isLive) {...}
	}

	// 检查是否吃到食物以及后续做法的方法
	checkIfEat(X: number, Y: number): void {
		if (X === this.food.X && Y === this.food.Y) {
			// 刷新食物
			this.food.change();
			// 增加分数
			this.scorePanel.addScore();
			// 增加蛇身长度
			this.snake.addBody();
		}
	}
}
