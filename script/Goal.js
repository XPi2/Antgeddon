class Goal{
    constructor(x,y){
        this.color = color('rgb(255, 215, 0)');
        this.goalx = x;
        this.goaly = y;
        this.size = 30;
        this.pos = createVector(this.goalx,this.goaly);
    }

    draw(){
        fill(this.color);
        noStroke();
        ellipse(this.goalx, this.goaly, this.size, this.size);
    }
}
