$(document).ready(function(){

let calculator = {
	numberA: null,
	func: null,
	numberB: null,
	output: 0,
	enter: null
}

console.log(calculator);
output();

$("#1").click(function(){
	console.log(1);
	if (calculator.numberA === null) {
		calculator.numberA = 1;
		calculator.output = 1;
	}

	else {
		calculator.numberB = 1;
		calculator.output = 1;
	}

	output();
});

$("#2").click(function(){
	console.log(2);

	if (calculator.numberA === null) {
		calculator.numberA = 2;
		calculator.output = 2;
	}

	else {
		calculator.numberB = 2;
		calculator.output = 2;
	}

	output();
});

$("#3").click(function(){
	console.log(3);

	if (calculator.numberA === null) {
		calculator.numberA = 3;
		calculator.output = 3;
	}

	else {
		calculator.numberB = 3;
		calculator.output = 3;
	}

	output();
});

$("#4").click(function(){
	console.log(4);

	if (calculator.numberA === null) {
		calculator.numberA = 4;
		calculator.output = 4;
	}

	else {
		calculator.numberB = 4;
		calculator.output = 4;
	}

	output();
});
$("#5").click(function(){
	console.log(5);

	if (calculator.numberA === null) {
		calculator.numberA = 5;
		calculator.output = 5;
	}

	else {
		calculator.numberB = 5;
		calculator.output = 5;
	}

	output();
});

$("#6").click(function(){
	console.log(6);

	if (calculator.numberA === null) {
		calculator.numberA = 6;
		calculator.output = 6;
	}

	else {
		calculator.numberB = 6;
		calculator.output = 6;
	}

	output();
});

$("#7").click(function(){
	console.log(7);

	if (calculator.numberA === null) {
		calculator.numberA = 7;
		calculator.output = 7;
	}

	else {
		calculator.numberB = 7;
		calculator.output = 7;
	}

	output();
});
$("#8").click(function(){
	console.log(8);

	if (calculator.numberA === null) {
		calculator.numberA = 8;
		calculator.output = 8;
	}

	else {
		calculator.numberB = 8;
		calculator.output = 8;
	}

	output();
});

$("#9").click(function(){
	console.log(9);

	if (calculator.numberA === null) {
		calculator.numberA = 9;
		calculator.output = 9;
	}

	else {
		calculator.numberB = 9;
		calculator.output = 9;
	}

	output();
});

$("#0").click(function(){
	console.log(0);

	if (calculator.numberA === null) {
		calculator.numberA = 0;
		calculator.output = 0;
	}

	else {
		calculator.numberB = 0;
		calculator.output = 0;
	}

	output();
});

$("#plus").click(function(){
	calculator.func = 'plus';
	console.log('plus');
});

$("#minus").click(function(){
	calculator.func = 'minus';
	console.log('minus');
});

$("#delenie").click(function(){
	calculator.func = 'delenie';
	console.log('delenie');
});

$("#ymnojenie").click(function(){
	calculator.func = 'ymnojenie';
	console.log('ymnojenie');
});

$("#enter").click(function(){
	console.log('enter');

	if (calculator.enter) {

		if (calculator.func === 'ymnojenie') {
			calculator.enter = calculator.enter * calculator.numberB;
			calculator.output = calculator.enter;
		}

		else if (calculator.func === 'delenie') {
			calculator.enter = calculator.enter / calculator.numberB;
			calculator.output = calculator.enter;
		}

		else if (calculator.func === 'minus') {
			calculator.enter = calculator.enter - calculator.numberB;
			calculator.output = calculator.enter;
		}

		else if (calculator.func === 'plus') {
			calculator.enter = calculator.enter + calculator.numberB;
			calculator.output = calculator.enter;
		}
	}

	else {
		
		if (calculator.func === 'ymnojenie') {
			calculator.enter = calculator.numberA * calculator.numberB;
			calculator.output = calculator.enter;
		}

		else if (calculator.func === 'delenie') {
			calculator.enter = calculator.numberA / calculator.numberB;
			calculator.output = calculator.enter;
		}

		else if (calculator.func === 'minus') {
			calculator.enter = calculator.numberA - calculator.numberB;
			calculator.output = calculator.enter;
		}

		else if (calculator.func === 'plus') {
			calculator.enter = calculator.numberA + calculator.numberB;
			calculator.output = calculator.enter;
		}
	}

	output();
});


$("#clear").click(function(){
	console.log('clear');

	calculator.numberA = null;
	calculator.numberB = null;
	calculator.output = 0;
	calculator.func = null;
	calculator.enter = null;

	output();
});

function output() {
	$("#output").text(calculator.output);
}

});