/**
 * 定义食物类
 */
export default class Food {
	// 定义一个属性表示食物对应的元素
	element: HTMLDivElement;

	constructor() {
		// 叹号强调该值不为null
		this.element = document.querySelector("#food")!;
	}

	// 定义获取食物坐标的方法
	get X() {
		return this.element.offsetLeft;
	}
	get Y() {
		return this.element.offsetTop;
	}

	// 生成随机的位置（0~290）
	change(): void {
		// 要求：范围0~290，10的倍数
		let X = Math.round(Math.random() * 29) * 10;
		let Y = Math.round(Math.random() * 29) * 10;
		this.element.style.left = X + "px";
		this.element.style.top = Y + "px";
	}
}
