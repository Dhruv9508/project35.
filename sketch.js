//Create variables here
var dog,happydog,database,foodS,food;
function preload()
{
  dogimage1= loadImage ("images/dogImg.png");
  dogimage2 = loadImage ("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(800, 800);   
  database=firebase.database();
  dog=createSprite(250,250)
  dog.addImage(dogimage1)
  foodStock= database.ref("food");
  foodStock.on("value", readStock)
  dog.scale=0.3;
}

function draw() {  
  background(46,139,87)
if(keyWentDown(UP_ARROW)){
  foodS=food-1
  writeStock(foodS);
  dog.addImage(dogimage2)
}
drawSprites();
textSize(30);
fill ("white");
text ("Note: PreesUpArrrow to feed your dog and name him",10,50)

}

function readStock(data){
food=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  } else {
    x=x+1
  }
database.ref("/").update({
  food:x
})
}

