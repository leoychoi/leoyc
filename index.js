let shouldDraw = true;

function setup() {
    createCanvas(windowWidth, windowHeight);
    drawBackground();
    frameRate(5);
    writeIntro();
}

function windowResized() {
    drawBackground();
    writeIntro();
    console.log(windowWidth, windowHeight);
}

function mouseClicked() {
    shouldDraw = !shouldDraw;
}

function mouseMoved() {
    highlightRect();
    writeIntro();
    if (shouldDraw) {
        drawCursorTracker();
    }
}

function draw() {
    return;
}

function drawBackground() {
    background(0);
    noStroke();
    fill(104, 128, 162);
    rect(0, 0, windowWidth / 2, windowHeight / 2);
    fill(107, 150, 150);
    rect(windowWidth / 2, 0, windowWidth / 2, windowHeight / 2);
    fill(124, 150, 107);
    rect(0, windowHeight / 2, windowWidth / 2, windowHeight / 2);
    fill(150, 107, 107);
    rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2);
}

function drawCursorTracker() {
    fill(239, 254, 174);
    stroke(239, 254, 174);
    strokeWeight(1);
    line(mouseX, mouseY, pmouseX, pmouseY);

    strokeWeight(0);
    fill(239, 254, 174);
    ellipse(pmouseX, pmouseY, 10, 10);
}

function highlightRect() {
    drawBackground();
    if (mouseX < windowWidth / 2 && mouseY < windowHeight / 2) {
        fill(0, 107, 255);
        rect(0, 0, windowWidth / 2, windowHeight/2);
    }
    else if (mouseX >= windowWidth / 2 && mouseY < windowHeight / 2) {
        fill(0, 243, 194);
        rect(windowWidth/2, 0, windowWidth / 2, windowHeight / 2);
    }
    else if (mouseX < windowWidth / 2 && mouseY >= windowHeight / 2) {
        fill(151, 243, 0);
        rect(0, windowHeight / 2, windowWidth / 2, windowHeight / 2);
    }
    else if (mouseX >= windowWidth / 2 && mouseY >= windowHeight / 2) {
        fill(255, 133, 48);
        rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2);
    }
}

function writeIntro() {
    textSize(64);
    textAlign(LEFT, TOP);
    stroke(0);
    strokeWeight(2);
    fill(236, 236, 236);
    text("Leo's website", 10, 10);   
}