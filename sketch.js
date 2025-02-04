document.oncontextmenu = function () { return false; }

var canvasDims = 10;
let noButton;
let opacity = 1;

function setup() {
  mainDiv = createDiv();
  buttons = createDiv();
  mainDiv.attribute("ID","mainDiv");
  buttons.attribute("ID","buttons");

  title = createSpan("Will you be my valentine?");
  title.attribute("ID", "mainTitle");
  title.addClass("mainTitle");

  yesButton = createButton("Yes");
  noButton = createButton("No");

  yesButton.attribute("ID", "yes");
  noButton.attribute("ID", "no");

  yesButton.addClass("buttons");
  noButton.addClass("buttons");
  noButton.style('opacity', opacity);

  noButton.mousePressed(noFunction);
  yesButton.mousePressed(yesFunction);


  myCanvas = createCanvas(600,100);

  title.parent("mainDiv");
  buttons.parent("mainDiv");

  yesButton.parent("buttons")
  noButton.parent("buttons")

  mainDiv.parent("body");
  myCanvas.parent("mainDiv");
}

function draw() {
}

function yesFunction(){
  title.html("Yay!!!");
}

function noFunction(){

  title.html("Will you be my valentine?");
  yesButton = createButton("Yes");
  yesButton.attribute("ID", "yes");
  yesButton.addClass("buttons");
  yesButton.parent("buttons");
  yesButton.mousePressed(yesFunction);
  opacity -= 0.1;
  noButton.style('opacity', opacity);
  if (opacity <= 0.2)
  {
    noButton.style('visibility', 'collapse');
  }

}
