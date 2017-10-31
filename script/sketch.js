var population = []; //Array of the population
var maxframe;
function setup(){
    //Setup the 'playground'
    createCanvas(window.innerWidth, window.innerHeight);
    //Foodcoordinates(window.innerWidh/2, window.innerHeight*1/10);
    maxframe = 600;
    Setgoal(window.innerWidth/2, window.innerHeight*1/9); //This set the coordinates of the  food
    for (var i=0; i<100; i++) {
        population.push(new Ant());
    } // Create population (30 now)
    
}

function draw(){
    //Start de drawing
    background('rgba(0,0,0,0.1)');  //The rgba code is used tho add the 'path' effect, it can be removed in next updates
    fill(c2);
    noStroke();
    ellipse(goalX, goalY, 30, 30);
    for (var i=0; i<population.length; i++) {
        population[i].draw();     //Call the class.function to draw the ants
        population[i].update();   //Call the class.function to update the state of the ants
    }
    if(population[0].count == maxframe)
        reboot();
}

function reboot(){
    for (var i=0; i<population.length; i++) {
        population[i].reboot();
    }
}

function Setgoal(x,y){
    c2 = color('rgb(0,255,255)');
    goalX = x;
    goalY = y;
}
