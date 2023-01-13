const table = document.querySelector('.table');
const cells = document.querySelectorAll('.cell');
const winner = document.querySelector('h2.winner');
let gameState = 0;
cells.forEach((c, i) => c.addEventListener('click', () => toggleCell(c)));
function toggleCell(c) {
	if (gameState % 2 === 0) {
		c.classList.add('x');
		c.style.pointerEvents = 'none';
	} else {
		c.classList.add('o');
		c.style.pointerEvents = 'none';
	}
	gameState += 1;
	addIconInCell();
	checkGame();
}
function checkGame() {
	let isWon = false;
	const winSteps = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < winSteps.length; i++) {
		const checkFirst = winSteps[i][0];
		const checkSecond = winSteps[i][1];
		const checkThird = winSteps[i][2];
		if (
			cells[checkFirst].classList.contains('x') &&
			cells[checkSecond].classList.contains('x') &&
			cells[checkThird].classList.contains('x')
		) {
			console.log('Win x');
			drawWin("X's");
			stopGame();
			isWon = true;
		}
		if (
			cells[checkFirst].classList.contains('o') &&
			cells[checkSecond].classList.contains('o') &&
			cells[checkThird].classList.contains('o')
		) {
			isWon = true;
			drawWin("O's");
			stopGame();
			console.log('Win o');
		}
		if (!isWon && gameState === 9) {
			stopGame();
			drawWin('Friendship');
		}
	}
}
function addIconInCell() {
	cells.forEach((c, i) => {
		if (c.classList.contains('x')) {
			c.innerHTML = '<i class="fa-solid fa-xmark"></i>';
		}
		if (c.classList.contains('o')) {
			c.innerHTML = '<i class="fa-regular fa-circle"></i>';
		}
	});
}
function stopGame() {
	cells.forEach(c => (c.style.pointerEvents = 'none'));
}
function drawWin(winnerName) {
	switch (winnerName) {
		case "X's":
			winner.innerHTML = `<i class="fa-solid fa-xmark"></i> has won  <i class="fa-solid fa-crown"></i>`;
			break;
		case "O's":
			winner.innerHTML = `<i class="fa-regular fa-circle"></i> has won <i class="fa-solid fa-crown"></i>`;
			break;
		case 'Friendship':
			winner.innerHTML = ` Friendship <i class="fa-regular fa-handshake"></i> has won <i class="fa-solid fa-crown"></i>`;
		default:
			break;
	}
}
