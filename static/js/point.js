class Point {
	constructor(x, y, r, g, b) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.g = g;
		this.b = b;
	}

	draw(xmin, xmax, ymin, ymax, width, height) {
		noStroke();
		fill(color(this.r, this.g, this.b));
		ellipse((width / (xmax - xmin)) * this.x + (width / 2), (height / (ymax - ymin)) * this.y + (height / 2), 10, 10);
	}
}