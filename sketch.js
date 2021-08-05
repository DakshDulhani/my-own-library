var pizza
var burgar
function setup() {
createCanvas(800,400);
pizza=createSprite(500, 200, 50, 100);
pizza.shapeColor="white"
pizza.debug=true
burgar=createSprite(200,200,100,50)
burgar.shapeColor="white"
burgar.debug=true
}

function draw() {
  background("black");  
  burgar.x=mouseX
  burgar.y=mouseY
//console.log(object1.x-object2.x)

if(isTouching(pizza,burgar)){
console.log("pizza is touching burgar")
}
 drawSprites();
}
