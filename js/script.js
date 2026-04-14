"use strict";

var blackRGB;
var blueRGB;
var violetRGB;
var purpleRGB;
var tealRGB;

var gutterSize;
var sideMarginsSize;

var fullHeight;

var currentCategory = Categories.DEMOS;

function preload() {
    Categories.displayHtmlContent(currentCategory);

    blackRGB = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--black').split("rgb(")[1].split(")")[0].split(",");
    blueRGB = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--blue-var-main').split("rgb(")[1].split(")")[0].split(",");
    violetRGB = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--violet-var-main').split("rgb(")[1].split(")")[0].split(",");
    purpleRGB = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--purple-var-main').split("rgb(")[1].split(")")[0].split(",");
    tealRGB = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--teal-var-main').split("rgb(")[1].split(")")[0].split(",");

    gutterSize = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--gutter-size').split("px")[0];
    sideMarginsSize = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--screen-margin-size').split("px")[0];
}

function setup() {
    fullHeight = document.querySelector("#canvas-overlay").scrollHeight;
    var canvas = createCanvas(windowWidth, fullHeight); //width, height
    canvas.position(0, 0);
    canvas.style('z-index', '-2');
    colorMode(RGB, 255);

    drawBackground();
}

function windowResized() {
    fullHeight = document.querySelector("#canvas-overlay").scrollHeight;
    resizeCanvas(windowWidth, fullHeight);
    drawBackground();
}

function draw() {
    var heightCheck = document.querySelector("#canvas-overlay").scrollHeight;
    if (heightCheck != fullHeight) {
        windowResized();
    }
}

function drawBackground() {
    background(blackRGB[0], blackRGB[1], blackRGB[2]);
    drawBgStripes();
    drawFooter();
}

function drawBgStripes() {
    var nbCol = window.getComputedStyle(document.querySelector(':root')).getPropertyValue('--nb-columns');
    var colSize = (width - (2*sideMarginsSize) - gutterSize) / nbCol;

    for (var i = 0; i < nbCol; ++i) {
        push();

        noStroke();
        if (i%2 == 0) {
            fill(blueRGB[0], blueRGB[1], blueRGB[2]);
        }
        else {
            fill(violetRGB[0], violetRGB[1], violetRGB[2]);
        }
        rect(+sideMarginsSize + gutterSize/2 + (i*colSize), 0, colSize, height);

        pop();
    }

    var c1 = color(violetRGB[0], violetRGB[1], violetRGB[2]);
    var c2 = color(blueRGB[0], blueRGB[1], blueRGB[2]);
    var c3 = color(blackRGB[0], blackRGB[1], blackRGB[2]);

    push();
    for (var i = +sideMarginsSize; i <= +sideMarginsSize + gutterSize/2; ++i) {
        var inter = map(i, +sideMarginsSize, +sideMarginsSize + gutterSize/2, 0, 1);
        var colour = lerpColor(c3, c1, inter);
        stroke(colour);
        line(i, 0, i, height);
    }
    pop();

    push();
    for (var i = +sideMarginsSize + gutterSize/2 + (colSize * nbCol); i <= +sideMarginsSize + gutterSize/2 + (colSize * nbCol) + gutterSize/2; ++i) {
        var inter = map(i, +sideMarginsSize + gutterSize/2 + (colSize * nbCol), +sideMarginsSize + gutterSize/2 + (colSize * nbCol) + gutterSize/2, 0, 1);
        var colour = lerpColor(c2, c3, inter);
        stroke(colour);
        line(i, 0, i, height);
    }
    pop();
}

function drawFooter() {
    push();
    var cnv = createGraphics(width, 10*gutterSize);

    noStroke();
    cnv.noStroke();
    cnv.fill(blueRGB[0], blueRGB[1], blueRGB[2]);
    cnv.rect(0, 0, width, 10*gutterSize);
    cnv.erase();
    cnv.ellipse(width/2, 0, width + 160, 7*gutterSize);
    image(cnv, 0, height - 2*10*gutterSize);
    noFill();
    stroke(violetRGB[0], violetRGB[1], violetRGB[2]);
    strokeWeight(gutterSize);
    arc(width/2, height - 2*10*gutterSize, width + 160, 7*gutterSize, 0, PI);
    pop();

    cnv.clear();
    cnv.noErase();

    push();
    fill(purpleRGB[0], purpleRGB[1], purpleRGB[2]);
    noStroke();
    ellipse(width/2, height - 10*gutterSize, width, 8*gutterSize);
    pop();

    push();
    fill(blackRGB[0], blackRGB[1], blackRGB[2]);
    noStroke();
    rect(0, 0, sideMarginsSize, height);
    rect(width-sideMarginsSize, 0, sideMarginsSize, height);
    pop();

    push();

    noStroke();
    cnv.noStroke();
    cnv.fill(violetRGB[0], violetRGB[1], violetRGB[2]);
    cnv.rect(0, 0, width, 10*gutterSize);
    cnv.erase();
    cnv.ellipse(width/2, 0, width + 160, 7*gutterSize);
    image(cnv, 0, height - 10*gutterSize);
    noFill();
    stroke(blueRGB[0], blueRGB[1], blueRGB[2]);
    strokeWeight(gutterSize);
    arc(width/2, height - 10*gutterSize, width + 160, 7*gutterSize, 0, PI);
    pop();

    cnv.remove();
}

function changeCategory(newCategory) {
    //TODO curtains
    if (currentCategory !== newCategory) {
        const previousBtn = document.getElementById(currentCategory);
        previousBtn.classList.remove("nav-item-selected");
        const newBtn = document.getElementById(newCategory);
        newBtn.classList.add("nav-item-selected");

        currentCategory = newCategory;
        const elementToRemove = document.getElementById('content-zone-inner');
        elementToRemove.parentNode.removeChild(elementToRemove);
        Categories.displayHtmlContent(currentCategory);
    }
    
}