var ant;
function setup(){
    //Setup the 'playground'
    createCanvas(window.innerWidth, window.innerHeight);
    ant = new Ant(width/2,height/2);   //Set the class Ant() to the variable ant and set its position to middle of the window-botton
}

function draw(){
    //Start de drawing
    background('rgba(0,0,0,0.3)');  //The rgba code is used tho add the 'path' effect, it can be removed in next updates
    ant.draw();     //Call the class.function to draw 'ant'
    ant.update();   //Call the class.function to update the state of the ant(s)
}
