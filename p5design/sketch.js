let names = [];
let content = "IMRA";
let customFont;

class Name {

  constructor(x,y) {
    this.pos = createVector(x,y);
    this.width = 175;
    this.height = 50;
    this.speed = 7;
    this.way = p5.Vector.random2D();
    this.way.setMag(this.speed);
  }
  Look() {
    //rect(this.pos.x, this.pos.y, this.width, this.height);
    text(content, this.pos.x , this.pos.y + 50);
  }
  Stand(){
      this.pos.x = windowWidth / 2;
      this.pos.y = windowHeight / 2;
  }
  Move() {
    this.pos.add(this.way);

    if(((this.pos.x + this.width) > window.innerWidth) || (this.pos.x < 0)){
      this.way.x*= -1;
      fill(random(69, 150, 255),random(69, 150, 255),(random(69, 150, 255)));
    }
    if((this.pos.y + this.height > window.innerHeight) || (this.pos.y < 0)){
      this.way.y*= -1;
      fill(random(69, 150, 255),random(69, 150, 255),random(69, 150, 255));
    }
  }
}
function preload(){
  customFont = loadFont("font/SHOWG.TTF");
}

function setup() {
  createCanvas(windowWidth, windowHeight - 4);
  frameRate(60);
  for (let i = 0; i < 1; i++) {
    names.push(new Name(windowWidth /2, windowHeight /2));
  }
}

function draw() {
  background(69, 69, 69, 1);
    for(Name of names){
            stroke(5);
            textFont(customFont);
            textSize(70);
            Name.Look();
            Name.Move();
    }
}    
