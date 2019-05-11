class Graph {
	constructor(xmin, xmax, ymin, ymax) {
		this.xmin = xmin;
		this.xmax = xmax;
		this.ymin = ymin;
		this.ymax = ymax;
		this.points = [];
	}

	draw(width, height) {
		fill(0, 0, 0);
		line(width / 2, 0, width / 2, width); // y
		line(0, height / 2, height, height / 2); // x
		text(this.xmin, 0, height / 2);
		text(this.xmax, width - 15, height / 2);
		text(this.ymin, width / 2, height);
		text(this.ymax, width / 2, 10);

		for (let p of this.points) {
			p.draw(this.xmin, this.xmax, this.ymin, this.ymax, width, height);
		}
	}

	addPoint(p) {
		this.points.push(p);
	}
}