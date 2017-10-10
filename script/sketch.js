function setup(){
    var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    createCanvas(width, height);
}

function draw(){

    background(0);
    var c = color("lime");  
    fill(c);  
    noStroke(); 
    ellipse(width/2, 30, 30, 30);
}

//function plantarUnPino(){
    // Voy al pino y cago
    // @params: 
    //  - macarrones: pasta con tomate
    //  - yogur: leche rara
    //  @returns:
    //   - trunyo
//}
