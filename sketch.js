var canvas, pink, blue, orange, green, ball, wall, wall2,wall3,wall4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    pink = createSprite(100,580,190,30)
    pink.shapeColor = rgb(255,192,253);

    blue = createSprite(300,580,190,30)
    blue.shapeColor = rgb(0,0,255);

    orange = createSprite(500,580,190,30)
    orange.shapeColor = rgb(255,165,0);

    green = createSprite(700,580,190,30)
    green.shapeColor = rgb(0,128,0);
    
    ball = createSprite(random(20,750), 200, 40, 40);
    ball.setVelocity(2,6);

    wall = createSprite(0,300,1,600);

    wall2 = createSprite(800,300,1,600);

    wall3 = createSprite(400,0,800,1);

    wall4 = createSprite(400,600,800,1);
}

function draw() {
    background(rgb(169,169,169));

    ball.bounceOff(wall);

    ball.bounceOff(wall2);

    ball.bounceOff(wall3);

    ball.bounceOff(wall4);

    if(pink.isTouching(ball)){
        ball.shapeColor = rgb(255,192,253);
        ball.setVelocity(0,0);
        music.stop();
    }

    if(blue.isTouching(ball) && ball.bounceOff(blue)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(orange.isTouching(ball) && ball.bounceOff(orange)){
        ball.shapeColor = rgb(255,165,0);
    }

    if(green.isTouching(ball) && ball.bounceOff(green)){
        ball.shapeColor = rgb(0,128,0);
    }

    drawSprites();
}
