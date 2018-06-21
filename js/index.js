const keys = {
				enter: 0, //13
				up: 0, //38
				down: 0, //39
				left: 0, //37
				right: 0, //39
				space: 0 //8
}

const directionCommand = {
				X: -10, //Vertical max - Top
				y: -50, //Horizontal - Left
}

const conditionCommand = {
				top: -10,
				left: -50
}

const canvas = document.getElementById("canvas");

document.addEventListener("keydown", event => {
				if (event.keyCode === 13) {
								move();
				} else if (event.keyCode === 8) {
								stop();
				}
})

move = () => {
	console.log("Moving happening!")
	let ballon = document.getElementById("ballon");
	setInterval(function () {
		if (conditionCommand.top < 350 && conditionCommand.left < 1000) {
						conditionCommand.top += 4;
						conditionCommand.left += 2;
						ballon.style.top = directionCommand.x++ + 'px';
						ballon.style.left = directionCommand.y++ + 'px';

		} else if (conditionCommand.top < 350) {
						conditionCommand.top += 4;
						ballon.style.top = directionCommand.x-- + 'px';

		} else if (conditionCommand.left < 1000) {
						directionCommand.y -= 2;
						ballon.style.top = directionCommand.y + 'px';
						
		}
	}, 100)
}
