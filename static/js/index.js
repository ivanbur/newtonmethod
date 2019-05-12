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

	for (let i = 0; i < 100000; i++) {
		// newtMethod();
		setTimeout(newtMethod, 0);
	}

	// for (let x = XMIN; x <= XMAX; x += 0.001) {
	// 	for (let y = YMIN; y <= YMAX; y += 0.001) {
	// 		setTimeout(newtMethodSpecPoint(x, y), 1);
	// 	}
	// }
}

function draw() {
	graph.draw(width, height);
}

function newtMethod() {
	let startPoint = new Complex(Math.random()*(XMAX - XMIN) + XMIN, Math.random()*(YMAX - YMIN) + YMIN);
	let currentPoint = startPoint;

	for (let i = 0; i < 20000; i++) {
		currentPoint = currentPoint.subtract(plugIntoFunction(currentPoint).divide(plugIntoFPrime(currentPoint)));

		if (plugIntoFunction(currentPoint).equals(new Complex(0, 0))) {
			break;
		}
	}

	addToGraph(currentPoint, startPoint);
}

function newtMethodSpecPoint(x, y) {
	let startPoint = new Complex(x, y);
	let currentPoint = startPoint;

	for (let i = 0; i < 20000; i++) {
		currentPoint = currentPoint.subtract(plugIntoFunction(currentPoint).divide(plugIntoFPrime(currentPoint)));

		if (plugIntoFunction(currentPoint).equals(new Complex(0, 0))) {
			break;
		}
	}

	addToGraph(currentPoint, startPoint);
}

function addToGraph(currentPoint, startPoint) {
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
	// return x.pow(2).subtract(new Complex(1, 0)); // x^2 - 1

	// return x.pow(3).add((new Complex(3, 0)).multiply(x.pow(2))).subtract(x).subtract(new Complex(3, 0)); // x^3 + 3x^2 - x - 3

	// return x.subtract(new Complex(0, 1)).multiply(x.subtract(new Complex(1, 0))).multiply(x.add(new Complex(1, 0))); // (x - i)(x - 1)(x + 1)

	return x.pow(4).add(new Complex(2500, 0)); // x^4 + 2500

	return x.pow(6).subtract(x.pow(4).multiply(new Complex(3, 0))).subtract(x.pow(2).multiply(new Complex(29, 0))).subtract(new Complex(255, 0)); // x^6 - 3x^4 - 29x^2 - 225
}

function plugIntoFPrime(x) {
	// return x.multiply(new Complex(2, 0)); // 2x

	// return x.pow(2).multiply(new Complex(3, 0)).add(x.multiply(new Complex(6, 0))).subtract(new Complex(-1, 0)); // 3x^2 + 6x - 1

	// return x.pow(2).multiply(new Complex(3, 0)).subtract(x.multiply(new Complex(0, 2))).subtract(new Complex(1, 0)); // 3x^2 - 2ix - 1

	return x.pow(3).multiply(new Complex(4, 0)); // 4x^3

	return x.pow(5).multiply(new Complex(6, 0)).subtract(x.pow(3).multiply(new Complex(12, 0))).subtract(x.multiply(new Complex(58, 0))); // 6x^5 - 12x^3 - 58x
}

function isWithinOneDecimal(num1, num2) {
	if (num1 + 0.1 >= num2 && num1 - 0.1 <= num2) {
		return true;
	}
}


// Example:
// x^3 + 2x^2 + x + 1 		f(x)
// 3x^2 + 4x + 1 			f'(x)