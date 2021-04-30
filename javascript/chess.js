function play() {
	const white_piece = document.getElementById("white");
	const black_piece = document.getElementById("black");
	let white_pos = [4, 7];
	let black_pos = [4, 0];
	const speed = 500;
	//const width = 128;
	//const height = 128;
	let turn = false;
	white_piece.style.top = white_pos[1] * 16 + "px";
	white_piece.style.left = white_pos[0] * 16 + "px";
	black_piece.style.top = -16 + black_pos[1] * 16 + "px";
	black_piece.style.left = black_pos[0] * 16 + "px";
	setInterval(frame, speed);

	function posToString(pos) {
		const alpha = ["A", "B", "C", "D", "E", "F", "G", "H"];
		return "K" + alpha[pos[0]] + (8 - pos[1]);
	}
	function frame() {
		let move;
		let moves = [];
		if (turn) {
			if (black_pos[0] < 7) moves.push([1, 0]);
			if (black_pos[0] > 0) moves.push([-1, 0]);
			if (black_pos[1] < 7) moves.push([0, 1]);
			if (black_pos[1] > 0) moves.push([0, -1]);
			if (black_pos[0] < 7 && black_pos[1] < 7) moves.push([1, 1]);
			if (black_pos[0] > 0 && black_pos[1] > 0) moves.push([-1, -1]);
			if (black_pos[0] < 7 && black_pos[1] > 0) moves.push([1, -1]);
			if (black_pos[0] > 0 && black_pos[1] < 7) moves.push([-1, 1]);
			for (let i = 0; i < moves.length; i++) {
				let test = [black_pos[0] + moves[i][0], black_pos[1] + moves[i][1]];
				for (let a = -1; a <= 1; a++) {
					for (let b = -1; b <= 1; b++) {
						if (test[0] + a === white_pos[0] && test[1] + b === white_pos[1]) {
							moves.splice(i, 1);
							console.log("white king too close can't play move to " + posToString(test));
							i--;
							a = 2;
							b = 2;
						}
					}
				}
			}
			move = moves[Math.floor(Math.random() * Math.floor(moves.length))];
			black_pos[0] += move[0];
			black_pos[1] += move[1];
			console.log("Black plays " + posToString(black_pos));
			turn = false;
		} else {
			if (white_pos[0] < 7) moves.push([1, 0]);
			if (white_pos[0] > 0) moves.push([-1, 0]);
			if (white_pos[1] < 7) moves.push([0, 1]);
			if (white_pos[1] > 0) moves.push([0, -1]);
			if (white_pos[0] < 7 && white_pos[1] < 7) moves.push([1, 1]);
			if (white_pos[0] > 0 && white_pos[1] > 0) moves.push([-1, -1]);
			if (white_pos[0] < 7 && white_pos[1] > 0) moves.push([1, -1]);
			if (white_pos[0] > 0 && white_pos[1] < 7) moves.push([-1, 1]);
			for (let i = 0; i < moves.length; i++) {
				let test = [white_pos[0] + moves[i][0], white_pos[1] + moves[i][1]];
				for (let a = -1; a <= 1; a++) {
					for (let b = -1; b <= 1; b++) {
						if (test[0] + a === black_pos[0] && test[1] + b === black_pos[1]) {
							moves.splice(i, 1);
							console.log("black king too close can't play move to " + posToString(test));
							i--;
							a = 2;
							b = 2;
						}
					}
				}
			}
			move = moves[Math.floor(Math.random() * Math.floor(moves.length))];
			white_pos[0] += move[0];
			white_pos[1] += move[1];
			console.log("White plays " + posToString(white_pos) + "\n");
			turn = true;
		}
		white_piece.style.top = white_pos[1] * 16 + "px";
		white_piece.style.left = white_pos[0] * 16 + "px";
		black_piece.style.top = -16 + black_pos[1] * 16 + "px";
		black_piece.style.left = black_pos[0] * 16 + "px";
	}
}
