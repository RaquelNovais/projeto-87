var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeigth(block_image_height);
	block_image_object.set({
		top:block_y,
		left:block_x
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		new_image('rr1.png');
		console.log("r");
	}
	if(keyPressed == '86')
	{
		block_x = 200;
		new_image('gr.png');
		console.log("v");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('yr.png');
		console.log("a")
	}
	if(keyPressed == '69')
	{
		blockX = 600;
		new_image('rr.jpg')
		console.log("e")
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	    new_image('pr.png')
		console.log("i")
	}
	
}

