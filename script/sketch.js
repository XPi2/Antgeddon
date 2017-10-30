var population = []; //Array of the population
var maxframe
function setup(){
    //Setup the 'playground'
    createCanvas(window.innerWidth, window.innerHeight);
    maxframe = 600;
    for (var i=0; i<100; i++) {
        population.push(new Ant());
    } // Create population (30 now)
}

function draw(){
    //Start de drawing
    background('rgba(0,0,0,0.1)');  //The rgba code is used tho add the 'path' effect, it can be removed in next updates
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
