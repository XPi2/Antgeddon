var ants = []; //Array of the population
function setup(){
    //Setup the 'playground'
    createCanvas(window.innerWidth, window.innerHeight);
    for (var i=0; i<30; i++) {
        ants.push(new Ant());
    } // Create population (30 now)
}

function draw(){
    //Start de drawing
    background('rgba(0,0,0,0.1)');  //The rgba code is used tho add the 'path' effect, it can be removed in next updates
    for (var i=0; i<ants.length; i++) {
        ants[i].draw();     //Call the class.function to draw the ants
        ants[i].update();   //Call the class.function to update the state of the ants
    }
}
