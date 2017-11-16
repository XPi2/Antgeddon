// Global variables:
var maxframe;
var wallsnumber;
var population;
var stop = 0;
var pgWidth;
var pgHeight;
var respScale;
//var buttonStop;
var walls = [];
function setup(){
    //Setup the 'playground'
    pgWidth = window.innerWidth*3/4;
    pgHeight = window.innerHeight*68/70;
    //The  kay of the real responsive canvas
    respScale = window.innerWidth/1920;

    createCanvas( pgWidth, pgHeight);

    maxframe = 360;
    wallsnumber = 16;
    population = new Population();
    food = new Goal(pgWidth/2, pgHeight*1/10);
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
    var boxsize = 360*respScale;
    var boxsizey = 20*respScale;
    
    textAlign(RIGHT);
    fill(color('rgb(0,102,204)'));
    if(respScale >=0.3){
        textSize(18*respScale);
        boxsize = 360*respScale;
        boxsizey = 20*respScale;

        if(population.popfitness != undefined)
            text('Fitness Population: '+ population.popfitness,
                pgWidth-boxsize, boxsizey*0.2,
                boxsize, boxsizey);
        if(population.bestpopfitness != undefined)
            text('Best Fitness: '+ population.bestpopfitness,
                pgWidth-boxsize, boxsizey*1.2, boxsize, boxsizey);
        textAlign(BOTTOM)
        text('Population: '+ population.popID,
            pgWidth-boxsize, pgHeight-boxsizey, boxsize, boxsizey);
    }
    else{
        textSize(6);
        boxsize = 120;
        boxsizey = 7;
        if(population.popfitness != undefined)
            text('Fitness Population: '+ population.popfitness,
                pgWidth-boxsize, boxsizey*0.2,
                boxsize, boxsizey);
        if(population.bestpopfitness != undefined)
            text('Best Fitness: '+ population.bestpopfitness,
                pgWidth-boxsize, boxsizey*1.2, boxsize, boxsizey);
        textAlign(BOTTOM)
        text('Population: '+ population.popID,
            pgWidth-boxsize, pgHeight-boxsizey, boxsize, boxsizey);
    }
    if(respScale >=0.3)
        textSize(12*respScale);
    else
        textSize(4);
    textAlign(LEFT,TOP);
    text('Frame: '+ population.count,
        boxsizey*0.2, boxsizey*0.2,
        boxsize, boxsizey);
    //Framework
    noFill();
    strokeWeight(0.5);
    stroke(color('rgb(1,1,1)'));
    rect(0.5,0.5, pgWidth-1, pgHeight-1);
}
