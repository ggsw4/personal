var rocket; 
var baseLine;

function setup()
{
     createCanvas(800, 600);
    
    baseLine = height - 100

     rocket =    {
        coordinates: createVector(width/2, baseLine),
        thrust: false, 
        moveLeft: false,
        moveRight: false,
        fire: false
    }
        bullet = { 
            coordinates: createVector(rocket.coordinates.x, rocket.coordinates.y)
        }
    
}
function draw()
{
    //move the rocket
    if (rocket.thrust && rocket.coordinates.y > 0)
	{
		rocket.coordinates.y -= 5;
	}
	else if (rocket.coordinates.y < baseLine)
	{
		rocket.coordinates.y += 7;
	}

	if (rocket.moveLeft && rocket.coordinates.x > 0 && rocket.coordinates.y != baseLine)
	{
		rocket.coordinates.x -= 5;
	}

	if (rocket.moveRight && rocket.coordinates.x < width && rocket.coordinates.y != baseLine)
	{
		rocket.coordinates.x += 5;
	}
    
    background(10);
    
    //draw the rocket
    fill(153, 204, 255);
    beginShape();
	vertex(rocket.coordinates.x + 5, rocket.coordinates.y + 60);
	vertex(rocket.coordinates.x + 5, rocket.coordinates.y + 20);
	vertex(rocket.coordinates.x + 15, rocket.coordinates.y);
	vertex(rocket.coordinates.x + 25, rocket.coordinates.y + 20);
	vertex(rocket.coordinates.x + 25, rocket.coordinates.y + 60);
	endShape(CLOSE);

	fill(255, 72, 72);
	beginShape();
	vertex(rocket.coordinates.x - 5, rocket.coordinates.y + 65);
	vertex(rocket.coordinates.x + 5, rocket.coordinates.y + 40);
	vertex(rocket.coordinates.x + 5, rocket.coordinates.y + 60);
	endShape(CLOSE);

	beginShape();
	vertex(rocket.coordinates.x + 35, rocket.coordinates.y + 65);
	vertex(rocket.coordinates.x + 25, rocket.coordinates.y + 40);
	vertex(rocket.coordinates.x + 25, rocket.coordinates.y + 60);
	endShape(CLOSE);
    
    beginShape();
    vertex(rocket.coordinates.x+ 12, rocket.coordinates.y + 45);
    vertex(rocket.coordinates.x + 15, rocket.coordinates.y + 70);
    vertex(rocket.coordinates.x + 18, rocket.coordinates.y + 45);
    endShape(CLOSE);
    
    fill(230, 230, 0);
    ellipse(rocket.coordinates.x+15, rocket.coordinates.y + 23, 7, 7);
    ellipse(rocket.coordinates.x+15, rocket.coordinates.y + 33, 7, 7);
    

	if (rocket.thrust)
	{
        fill(240, 240, 0);
		beginShape();
		vertex(rocket.coordinates.x + 7, rocket.coordinates.y + 60);
		vertex(rocket.coordinates.x + 12, rocket.coordinates.y + 83);
		vertex(rocket.coordinates.x + 15, rocket.coordinates.y + 73);
		vertex(rocket.coordinates.x + 18, rocket.coordinates.y + 83);
		vertex(rocket.coordinates.x + 23, rocket.coordinates.y + 60);
		endShape();
        fill(240, 150, 0)
        beginShape();
		vertex(rocket.coordinates.x + 9, rocket.coordinates.y + 60);
		vertex(rocket.coordinates.x + 12, rocket.coordinates.y + 76);
		vertex(rocket.coordinates.x + 15, rocket.coordinates.y + 66);
		vertex(rocket.coordinates.x + 18, rocket.coordinates.y + 76);
		vertex(rocket.coordinates.x + 21, rocket.coordinates.y + 60);
		endShape();
	}
    
    if(rocket.fire == true){
        fill(255, 200, 0);
		ellipse(bullet.coordinates.x + 15, bullet.coordinates.y -10, 10,10);
		bullet.coordinates.y -= 50;
    }
    else {
        bullet.coordinates.x = rocket.coordinates.x;
        bullet.coordinates.y = rocket.coordinates.y;
    }
} 

function keyPressed()
{
	if (key == "W")
	{
		rocket.thrust = true;
	}

	if (key == "A")
	{
		rocket.moveLeft = true;
	}

	if (key == "D")
	{
		rocket.moveRight = true;
	}
    
    if (keyCode == 32){
		rocket.fire = true;
	}
}

function keyReleased()
{
    if(key == "W")
    {
	   rocket.thrust = false;
    }
    
    if(key == "A")
    {
	   rocket.moveLeft = false;
    }
    
    if(key == "D")
    {
	   rocket.moveRight = false;
    }
    
    if (keyCode == 32){
		rocket.fire = false;
	}

}