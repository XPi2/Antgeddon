var maxframe;
var population;
var stop = 0;
function setup(){
    //Setup the 'playground'
    createCanvas(window.innerWidth, window.innerHeight);
    //Foodcoordinates(window.innerWidh/2, window.innerHeight*1/10);
    maxframe = 400;
    population = new Population();
    food = new Goal(window.innerWidth/2, window.innerHeight*1/9);
}

function draw(){
    if(stop == 0){
        //Start de drawing
        background('rgba(0,0,0,0.1)');  //The rgba code is used tho add the 'path' effect, it can be removed in next updates
        food.draw();
        population.draw();
    }
    else;
}
