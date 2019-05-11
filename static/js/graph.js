class Graph {
	constructor(xmin, xmax, ymin, ymax) {
		this.xmin = xmin;
		this.xmax = xmax;
		this.ymin = ymin;
		this.ymax = ymax;
		this.points = [];
	}

	draw() {
		fill(0, 0, 0);
		line(250, 0, 250, 500); // y
		line(0, 250, 500, 250); // x
		text(this.xmin, 0, 250);
		text(this.xmax, 500, 250);
		text(this.ymin, 250, 500);
		text(this.ymax, 250, 10);

		for (let p of this.points) {
			p.draw(this.xmin, this.xmax, this.ymin, this.ymax);
		}
	}

	addPoint(p) {
		this.points.push(p);
	}
}