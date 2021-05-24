var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairyImg, fairyImg2, fairy;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");
	fairyImg2 = loadAnimation("fairy.png");
	music = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	music.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(145,510);
	fairy.addAnimation("fairy", fairyImg);
	fairy.scale = 0.35;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
background(bgImg);

star.x= starBody.position.x 
star.y= starBody.position.y

textSize(8)
text(fairy.x,1,10);
//write code to stop star in the hand of fairy
if (star.y >= 470 && fairy.x >= 455 && fairy.x <= 485){
	Matter.Body.setStatic(starBody, true);
	fairy.addAnimation("fairyevolves", fairyImg2);	
	fairy.changeAnimation("fairyevolves");
	star.visible = false;
}
drawSprites();
}

function keyPressed(){
	if (keyCode ===DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if(keyCode === RIGHT_ARROW){
		fairy.x += 20;
	}
	if(keyCode === LEFT_ARROW){
		fairy.x -= 20;
	}
}
