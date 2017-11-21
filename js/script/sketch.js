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
    
    window.onload();
    //The  kay of the real responsive canvas
    respScale = window.innerWidth/1920;
    thisCanvas = createCanvas( pgWidth, pgHeight);
    //thisCanvas.parent('game');

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
        background('#fdf6e3'); //Rgba code is used tho add the 'path' effect, it can be removed in next updates
        food.draw();
        population.draw();
        display();
    }
    else;
}

function reboot(){
}

window.onload = window.onresize = function() {
    //var canvas = document.getElementById('canvas');
    pgWidth = window.innerWidth;
    pgHeight = window.innerHeight * 0.9;
}

function display(){
    var boxsize;
    var boxsizey;

    textAlign(RIGHT);
    fill(color('rgb( 105, 105, 104)'));
    if(respScale >=0.5){
        textSize(20*respScale);
        boxsize = 360*respScale;
        boxsizey = 22*respScale;

        if(population.popfitness != undefined)
            text('Fitness Population: '+ population.popfitness,
                pgWidth-boxsize, boxsizey*0.2,
                boxsize, boxsizey);
        if(population.bestpopfitness != undefined)
            text('Best Fitness: '+ population.bestpopfitness,
                pgWidth-boxsize, boxsizey*1.2, boxsize, boxsizey);
        textAlign(BOTTOM)
        text('Population: '+ population.popID,
            pgWidth-boxsize, pgHeight-boxsizey*1.2, boxsize, boxsizey);
    }
    else{
        textSize(8);
        boxsize = 180;
        boxsizey = 10;
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
        textSize(16*respScale);
    else
        textSize(8);
    textAlign(LEFT,TOP);
    text('Frame: '+ population.count,
        boxsizey*0.2, boxsizey*0.2,
        boxsize, boxsizey);
    //Framework
    noFill();
    strokeWeight(0.5);
    stroke(color('rgb( 155, 155, 144)'));
    rect(0.5,0.5, pgWidth-1, pgHeight-1);
}
