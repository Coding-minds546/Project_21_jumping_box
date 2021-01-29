var canvas;
var music;
var bar1
var bar2
var bar3
var bar4
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 bar1= createSprite(100,570,200,20)
 bar1.shapeColor= color("green")
 bar2= createSprite(320,570,250,20)
 bar2.shapeColor= color("blue")
 bar3= createSprite(500,570,200,20)
 bar3.shapeColor= color("yellow")
 bar4= createSprite(700,570,200,20)
 bar4.shapeColor= color("purple")
 
    //create box sprite and give velocity
 box= createSprite(random(20,750),400,40,40)
 box.shapeColor= color("white")
 box.velocityX= 4;
 box.velocityY= -4;
 //box.debug= true;

}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
    drawSprites();
    

    //add condition to check if box touching surface and make it box
   if(box.isTouching(bar1)&& box.bounceOff(bar1)){
       box.shapeColor="green"
       
   }
   if(box.isTouching(bar2)&& box.bounceOff(bar2)){
    box.shapeColor="blue"
   
   }
   if(box.isTouching(bar3)&& box.bounceOff(bar3)){
    box.shapeColor="yellow"
    
  }
   if(box.isTouching(bar4)&& box.bounceOff(bar4)){
    box.shapeColor="purple"
   
  }

  

    
}
