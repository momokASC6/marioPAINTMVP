var fillColor = "#fae";
var boxWidth = 200;
var boxHeight = 100;

var blueBoxX = 0;
var redBoxX = 250;
var greenBoxX = 500;

function setup() {
    createCanvas(1000,1000); // Set canvas to 500x500

    fill('blue');
    rect(blueBoxX, 0, boxWidth, boxHeight);

    fill('red');
    rect(redBoxX, 0, boxWidth, boxHeight);

    fill('green');
    rect(greenBoxX, 0, boxWidth, boxHeight);
}

function mouseDragged() {
    fill(fillColor);
    // Create a circle with origin of the mouse's X and Y coordinates
    //circle(mouseX, mouseY, 100);

    // Create a circle with mouse origins but different size each time
    circle(mouseX, mouseY, random(50,300));
}

function mouseClicked() {

}

