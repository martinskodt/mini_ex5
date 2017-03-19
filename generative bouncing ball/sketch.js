var balls = [];
var distance = 0; 
var dirx = 0;
var diry = 0;
var antal = 10;
var nr = 10
						//Ball objekt (constructor funktion)
function Balls(x,y){
this.x = x;
this.y = y;
this.size = 10
this.speedx = 10
this.speedy = 10
this.col = color(255)
						//ændre farve
	this.co = function(){	
	this.col = color(random(255), random(255), random(255))	

}
						//tegn cirkel
	this.show = function(){
fill(this.col)
noStroke()
ellipse(this.x,this.y,this.size,this.size)	

}
						//bevægelse med retning og hastighed					
	this.move = function(){
		
	this.x = this.x + this.speedx * dirx
	this.y = this.y + this.speedy * diry
	//test funktioner
	//this.x += this.speedx
	//this.y += this.speedy
}
						//ændre retning ved at ramme bolde
	this.ballbounce = function(){
		this.speedx *=  -1
		this.speedy *=  -1
	}
						//ændre retning ved at ramme kanterne
	this.wallbounce = function(){
	
	if(this.x + (this.size/2) >= width || this.x - (this.size/2) <= 0){
		this.speedx *=  -1 
		//this.size += random(sizec, -sizec)
		
	}
	if(this.y + (this.size/2) >= height || this.y - (this.size/2) <= 0){
		this.speedy *=  -1 
		//this.size += random(sizec, -sizec)
		
	}	
	//if(this.size <= 10){
	//	this.size = 30
	//}	
}
						//tjek om en bold rammer andre
  	this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.size) {
		
      return true;
    } else {
      return false;
    }
  }
}						//tilføj bold når man trykker på knap
function addball(){
balls.push(new Balls(100,100)); 
nr = nr +1
}	

function setup() {
createCanvas(1000,1000)
  frameRate(60)

 dirx = random(1,-1)
 diry = random(1,-1)
 						//tegn array af "antal" bolde ved start
for (var i = 0; i< antal; i++){	
	
balls[i] = new Balls(random(25,975),random(25,975));

						}
						// skab knap
var button;
button = createButton("Add Ball")
button.position(10,75);
button.mousePressed(addball);
	
}

function draw() {
background(0,100)
						//tekst
fill(255)
textSize(25)
text("Balls",10,30)
text(nr,25,60)
						//sæt funktionerne igang for hver bold
for (var i = 0; i<(balls.length); i++){
	
	balls[i].move();
	balls[i].wallbounce();
	balls[i].show();
						// tjek om en bold rammer en anden bold	
	for (var j = 0; j < balls.length; j++){
		if(i != j && balls[i].intersects(balls[j])){	
						//start disse funktioner når bolde rammer hinanden.		
		balls[i].co();
		balls[j].co();
		balls[i].ballbounce();
		balls[j].ballbounce();
						}
				}
		}
}
