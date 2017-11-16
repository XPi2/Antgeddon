var maxframe;
var wallsnumber;
var population;
var stop = 0;
var walls = [];
function setup(){
    //Setup the 'playground'
    createCanvas(window.innerWidth, window.innerHeight);
    //Foodcoordinates(window.innerWidh/2, window.innerHeight*1/10);
    maxframe = 200;
    wallsnumber = 5;
    population = new Population();
    food = new Goal(window.innerWidth/2, window.innerHeight*1/9);
    for(var i=0;i<wallsnumber;i++)
        walls[i] = new Obstacle();
}

function draw(){
    if(stop == 0){
        //Start de drawing
        background('rgb(255, 255, 244)'); //Rgba code is used tho add the 'path' effect, it can be removed in next updates
        food.draw();
        for(var i=0;i<wallsnumber;i++)
            walls[i].draw();
        population.draw();
    }
    else;
}
