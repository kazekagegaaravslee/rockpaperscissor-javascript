document.addEventListener('DOMContentLoaded', () => {

	const cards = [
		{
			name: 'stone',
			img: 'imgs/stone.jpg'
		},
		{
			name: 'paper',
			img: 'imgs/paper.jpg'
		},
		{
			name: 'scissor',
			img: 'imgs/scissor.jpg'
		}
	]

	const grid = document.querySelector('.grid');
	const grid2 = document.querySelector('.grid2');
	const result = document.querySelector('#result');
	const result1 = document.querySelector('#result1');

	const yourchoice = document.querySelector('.yourchoice');
	const oppchoice = document.querySelector('.oppchoice');
	var yourscore = 0;
	var computer = 0;

	const but = document.querySelector('#resetbut');

	function createBoard () {
		for (let i=0; i < cards.length; i++){
			var card = document.createElement('img');
			card.setAttribute('Data-id', i);
			card.setAttribute('name', cards[i].name);
			card.setAttribute('src', cards[i].img);
			card.addEventListener('click', compare);
			grid.appendChild(card);
		}
		but.addEventListener('click', reset);
	}

	function compare (){
		const compopt = Math.floor(Math.random() * Math.floor(3));
		console.log(this.name);
		console.log(cards[compopt].name);

		yourchoice.innerHTML = "<h3>" + this.name + "</h3>" + "<img src='" + this.src + "'/>" + "<h4>Your option</h4>";
		oppchoice.innerHTML = "<h3>" + cards[compopt].name + "</h3>" + "<img src='" + cards[compopt].img + "'/>" + "<h4>Computer option</h4>";

		var resultstr='';

		if(this.name == cards[compopt].name){
			console.log("draw");
			resultstr = "draw";
		}
		if((this.name == "stone") && (cards[compopt].name == "scissor"))
		{
			console.log('You Won, stone break scissor');
			resultstr = 'You Won, stone break scissor';
			yourscore++;
		}
		else if((this.name == "scissor") && (cards[compopt].name == "stone"))
		{
			console.log('You Lose, stone break scissor');
			resultstr = 'You Lose, stone break scissor';
			computer++;
		}
		else if((this.name == "paper") && (cards[compopt].name == "scissor"))
		{
			console.log('You Lose, scissor cuts paper');
			resultstr = 'You Lose, scissor cuts paper';
			computer++;
		}
		else if((this.name == "scissor") && (cards[compopt].name == "paper"))
		{
			console.log('You Won, scissor cuts paper');
			resultstr = 'You Won, scissor cuts paper';
			yourscore++;
		}
		else if((this.name == "paper") && (cards[compopt].name == "stone"))
		{
			console.log('You Won, paper covers stone');
			resultstr = 'You Won, paper covers stone';
			yourscore++;
		}
		else if((this.name == "stone") && (cards[compopt].name == "paper"))
		{
			console.log('You Lose, paper covers stone');
			resultstr = 'You Lose, paper covers stone';
			computer++;
		} 

		result.innerHTML = resultstr;
		result1.innerHTML = "Your Score : " + yourscore + "<br>Computer Score : " + computer;
		console.log(resultstr);
	}

	function reset(){
		yourscore = 0;
		computer = 0;
		resultstr = '';
		result.innerHTML = resultstr;
		result1.innerHTML = "Your Score : " + yourscore + "<br>Computer Score : " + computer;
		console.log('ha');
	}

	createBoard();
})