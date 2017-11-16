var maxframe;
var wallsnumber;
var population;
var stop = 0;
var buttonStop;
var walls = [];
function setup(){
    //Setup the 'playground'
    createCanvas(window.innerWidth, window.innerHeight);
    //Foodcoordinates(window.innerWidh/2, window.innerHeight*1/10);
    maxframe = 200;
    wallsnumber = 5;
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
    text('Frame: '+ population.count, window.innerWidth-53, window.innerHeight-50, 120, 20);
    //fill('#ED225D');
    text('Population: '+ population.popID, window.innerWidth-86, window.innerHeight-30, 120, 20);
}
