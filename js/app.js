let r, x;

function setup() {
    createCanvas(windowWidth, windowHeight);
    r = min(width, height) / 6;
    x = r;
    drawCircle();
}

function drawCircle() {
    clear();
    circle(x, height / 2, r * 2);
}

function mouseClicked() {
    x += 10;
    if (x > width + r) {
        x = -r;
    }
    drawCircle();
}
