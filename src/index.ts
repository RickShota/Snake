import "./style/index.less";
import GameControl from "./modules/GameControl";

const btn = document.getElementById("btn")!;

let flag: boolean = false;
btn.onclick = (e) => {
	if (!flag) {
		flag = !flag;
		btn.innerHTML = "Restart";
		let game = new GameControl();
		console.log("开始", flag);
	} else {
		flag = !flag;
		btn.innerHTML = "Paly";
		location.reload();
		console.log("结束", flag);
	}
};
