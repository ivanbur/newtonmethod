var graph;
var zeros;

function setup() {
	var canvas = createCanvas(640, 640);
	graph = new Graph(-10, 10, -10, 10);

	zeros = [];
}

function draw() {
	graph.draw();
}

function newtMethod() {
	let previousX = Math.random()*21 - 10;

	while(previousX != )
	let nextX = previousX - (plugIntoFunction(previousX)/plugIntoFPrime(previousX));
}

function plugIntoFunction(x) {
	return Math.powx, 2) - 1; (// x^2 - 1
}

function plugIntoFPrime(x) {
	return 2*x; // 2x
}


// Example:
// x^3 + 2x^2 + x + 1 		f(x)
// 3x^2 + 4x + 1 			f'(x)