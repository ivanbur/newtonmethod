class Point {
	constructor(x, y, r, g, b) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.g = g;
		this.b = b;
	}

	draw(xmin, xmax, ymin, ymax) {
		// noStroke();
		// fill(color(this.r, this.g, this.b));
		fill('red');
		ellipse((500 / (xmax - xmin)) * this.x + 250, (500 / (ymax - ymin)) * this.y + 250, 1, 1);
	}
}