var maxframe;
var wallsnumber;
var population;
var stop = 0;
var buttonStop;
var walls = [];
function setup(){
    //Setup the 'playground'
    createCanvas(window.innerWidth, window.innerHeight);
    maxframe = 360;
    wallsnumber = 20;
    population = new Population();
    food = new Goal(window.innerWidth/2, window.innerHeight*1/9);
    //buttonStop = createButton('Stop');
    //button.position( 30, 30);
    //button.mousePressed(stop = 1)

}

function draw(){
    if(stop == 0){
        //Start de drawing
        background('rgb(255, 255, 244)'); //Rgba code is used tho add the 'path' effect, it can be removed in next updates
        food.draw();
        population.draw();
        display();
    }
    else;
}

function reboot(){
}

function display(){
    textSize(18);
    fill(color('rgb(0,102,204)'));
    if(population.popfitness != undefined)
        text('Fitness Population: '+ population.popfitness,
            window.innerWidth-212, 22,
            360, 20);
    if(population.bestpopfitness != undefined)
        text('Best Fitness: '+ population.bestpopfitness,
            window.innerWidth-162, 2,
            360, 20);
    text('Population: '+ population.popID,
        window.innerWidth-148, window.innerHeight-30,
        120, 20);
    textSize(12);
    text('Frame: '+ population.count,
        2, 2,
        120, 20);
}
