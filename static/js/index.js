var graph;
var zeros;
var colors;

const XMIN = -10;
const XMAX = 10;
const YMIN = -10;
const YMAX = 10;

function setup() {
	var canvas = createCanvas(640, 640);
	graph = new Graph(XMIN, XMAX, YMIN, YMAX);

	zeros = [];
	colors = [];

	for (let i = 0; i < 1000; i++) {
		newtMethod();
	}
}

function draw() {
	graph.draw();
}

function newtMethod() {
	let startPoint = new Complex(Math.random()*(XMAX - XMIN + 1) + XMIN, Math.random()*(YMAX - YMIN + 1) + YMIN);
	let currentPoint = startPoint;

	for (let i = 0; i < 25; i++) {
		currentPoint = currentPoint.subtract(plugIntoFunction(currentPoint).divide(plugIntoFPrime(currentPoint)));

		if (plugIntoFunction(currentPoint).equals(new Complex(0, 0))) {
			break;
		}
	}

	let addToArr = true;
	let r;
	let g;
	let b;

	for (let x = 0; x < zeros.length; x++) {
		if (isWithinOneDecimal(zeros[x].num, currentPoint.num) && isWithinOneDecimal(zeros[x].iNum, currentPoint.iNum)) {
			addToArr = false;

			r = colors[x][0];
			g = colors[x][1];
			b = colors[x][2];
			break;
		}
	}

	if (addToArr) {
		zeros.push(currentPoint);
		let r = Math.random()*256;
		let g = Math.random()*256;
		let b = Math.random()*256;

		colors.push([r, g, b]);
		console.log('NEW ZERO 	' + currentPoint.num + ' + ' + currentPoint.iNum + 'i');
	}

	graph.addPoint(new Point(startPoint.num, startPoint.iNum, r, g, b));
}

function plugIntoFunction(x) {
	return x.pow(2).subtract(new Complex(1, 0)); // x^2 - 1
}

function plugIntoFPrime(x) {
	return x.multiply(new Complex(2, 0)); // 2x
}

function isWithinOneDecimal(num1, num2) {
	if (num1 + 0.1 >= num2 && num1 - 0.1 <= num2) {
		return true;
	}
}


// Example:
// x^3 + 2x^2 + x + 1 		f(x)
// 3x^2 + 4x + 1 			f'(x)