export default class Snake {
	// 蛇头
	head: HTMLDivElement;
	// 蛇身集合（包括蛇头）
	bodies: HTMLCollection;
	// 整体容器
	body: HTMLDivElement;

	constructor() {
		this.head = document.querySelector("#snake > div")!;
		this.body = document.querySelector("#snake")!;
		// 动态获取元素集合，querySelectorAll无法做到
		this.bodies = this.body.getElementsByTagName("div")!;
	}

	// 获取蛇头坐标
	get X() {
		return this.head.offsetLeft;
	}
	get Y() {
		return this.head.offsetTop;
	}

	// 设置蛇坐标(移动蛇身)
	set X(value: number) {
		if (this.X === value) return;
		// 判断是否撞墙（0~290）
		if (value < 0 || value > 290) throw new Error("撞墙了！");
		// 禁止掉头
		if (
			this.bodies[1] &&
			(this.bodies[1] as HTMLElement).offsetLeft === value
		) {
			// 纠正方向
			if (value > this.X) {
				value = this.X - 10;
			} else {
				value = this.X + 10;
			}
		}
		// 移动身
		this.moveBody();
		// 移动头
		this.head.style.left = value + "px";
		// 检查有无撞到自己
		this.checkHeadBody();
	}
	set Y(value: number) {
		if (this.Y === value) return;
		if (value < 0 || value > 290) throw new Error("撞墙了！");
		if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
			// 纠正方向
			if (value > this.Y) {
				value = this.Y - 10;
			} else {
				value = this.Y + 10;
			}
		}
		this.moveBody();
		this.head.style.top = value + "px";
		this.checkHeadBody();
	}

	// 蛇增加身体
	addBody() {
		this.body.insertAdjacentHTML("beforeend", "<div></div>");
	}

	// 移动身体
	moveBody() {
		// 遍历元素集合，将后边的身体设置为前一节身体的位置
		for (let i = this.bodies.length - 1; i > 0; i--) {
			// 获取前一节身体的位置
			let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
			let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
			// 赋值给当前遍历的身体
			(this.bodies[i] as HTMLElement).style.left = x + "px";
			(this.bodies[i] as HTMLElement).style.top = y + "px";
		}
	}

	// 检查蛇头撞身体
	checkHeadBody() {
		// 遍历所有身体，检查其是否和蛇头坐标发生重叠
		for (let i = 1; i < this.bodies.length; i++) {
			let bd = this.bodies[i] as HTMLElement;
			if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
				throw new Error("撞到自己了！");
			}
		}
	}
}
