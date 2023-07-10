let isDrawing = false;
let points = [];
let strokeColor = document.querySelector('.colorpicker input');
let strokeWidth = 4;
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const x = document.querySelector('.x');
x.addEventListener('click', function () {
	location.reload();
});
function setup() {
	createCanvas(400, 400);
}
minus.addEventListener('click', function () {
	if (strokeWidth > 1) {
		strokeWidth--;
	}
});
plus.addEventListener('click', function () {
	if (strokeWidth < 100) {
		strokeWidth++;
	}
});
function draw() {
	background(220);
	stroke(strokeColor.value);
	strokeWeight(strokeWidth);
	noFill();

	for (let i = 0; i < points.length - 1; i++) {
		const point = points[i];
		const nextPoint = points[i + 1];
		line(point.x, point.y, nextPoint.x, nextPoint.y);
	}
}

function mousePressed() {
	isDrawing = true;
	points.push({ x: mouseX, y: mouseY });
}

function mouseReleased() {
	isDrawing = false;
}

function mouseDragged() {
	if (isDrawing) {
		points.push({ x: mouseX, y: mouseY });
	}
}
strokeColor.addEventListener('input', function () {
	strokeColor.value = this.value;
});

// Create an instance of p5.js
new p5();
