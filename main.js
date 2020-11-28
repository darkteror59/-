$(document).ready(function(){

let calculator = {
	numberA: null,
	func: null,
	numberB: null,
	output: null,
	enter: null
}

console.log(calculator);

$("#1").click(function(){
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 1;
		calculator.output = 1;
	}

	else {calculator.numberB = 1;
		calculator.output = 1;
	}
	output();
});

$("#2").click(function(){
	calculator.output = 2;
	console.log(2);
	if (calculator.numberA === null) {
		calculator.numberA = 2;
		calculator.output = 2;
	}

	else {calculator.numberB = 2;
		calculator.output = 2;
	}

	output();
});

$("#3").click(function(){
	calculator.output = 3;
	console.log(3);
	if (calculator.numberA === null) {
		calculator.numberA = 3;
		calculator.output = 3;
	}

	else {calculator.numberB = 3;
		calculator.output = 3;
	}

	output();
});

$("#4").click(function(){
	calculator.output = 4;
	console.log(4);
	if (calculator.numberA === null) {
		calculator.numberA = 4;
		calculator.output = 4;
	}

	else {calculator.numberB = 4;
		calculator.output = 4;
	}

	output();
});

$("#5").click(function(){
	calculator.output = 5;
	console.log(5);
	if (calculator.numberA === null) {
		calculator.numberA = 5;
		calculator.output = 5;
	}

	else {calculator.numberB = 5;
		calculator.output = 5;
	}

	output();
});

$("#6").click(function(){
	calculator.output = 6;
	console.log(6);
	if (calculator.numberA === null) {
		calculator.numberA = 6;
		calculator.output = 6;
	}

	else {calculator.numberB = 6;
		calculator.output = 6;
	}

	output();
});

$("#7").click(function(){
	calculator.output = 7;
	console.log(7);
	if (calculator.numberA === null) {
		calculator.numberA = 7;
		calculator.output = 7;
	}

	else {calculator.numberB = 7;
		calculator.output = 7;
	}

	output();
});

$("#8").click(function(){
	calculator.output = 8;
	console.log(8);
	if (calculator.numberA === null) {
		calculator.numberA = 8;
		calculator.output = 8;
	}

	else {calculator.numberB = 8;
		calculator.output = 8;
	}

	output();
});

$("#9").click(function(){
	calculator.output = 9;
	console.log(9);
	if (calculator.numberA === null) {
		calculator.numberA = 9;
		calculator.output = 9;
	}

	else {calculator.numberB = 9;
		calculator.output = 9;
	}

	output();
});

$("#plus").click(function(){
	calculator.func = 'plus'
	console.log('plus');
});

$("#minus").click(function(){
	calculator.func = 'minus'
	console.log('minus')
})

$("#ymnojenie").click(function(){
	calculator.func = 'ymnojenie'
	console.log('ymnojenie')
})

$("#delenie").click(function(){
	calculator.func = 'delenie'
	console.log('delenie')
})

$("#enter").click(function(){
	console.log('enter');

	if (calculator.func === 'plus') {
		calculator.enter = calculator.numberA + calculator.numberB;
		calculator.output = calculator.enter;
	}

	if (calculator.func === 'minus') {
		calculator.enter = calculator.numberA - calculator.numberB;
		calculator.output = calculator.enter
	}

	if (calculator.func === 'ymnojenie') {
		calculator.enter = calculator.numberA * calculator.numberB;
		calculator.output = calculator.enter
	}

	if (calculator.func === 'delenie') {
		calculator.enter = calculator.numberA / calculator.numberB;
		calculator.output = calculator.enter
	}
	output();
});

function output() {
	$("#output").text(calculator.output);
}

});