class Obstacle{
    constructor(){
        this.color = color('rgb(0,204,102)');
        this.obstx = random(window.innerWidth);
        this.obsty = random(window.innerHeight/3, window.innerHeight*3/4);
        this.sizex = 80;
        this.sizey = this.sizex/8;
        this.pos = createVector(this.obstx,this.obsty);
        this.initWidth = this.pos.x - this.sizex;
        this.finWidth = this.pos.x + this.sizey;
        this.initHeight = this.pos.y - this.sizey;
        this.initHeight = this.pos.y + this.sizey;
    }

    draw(){
        fill(this.color);
        //rectMode(CENTER);
        noStroke();
        rect(this.pos.x, this.pos.y, this.sizex*2, this.sizey*2);
    }
}
