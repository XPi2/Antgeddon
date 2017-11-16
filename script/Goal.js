class Goal{
    constructor(x,y){
        this.color = color('rgba(255, 215, 0, 0.4)');
        this.colors = color('rgb(205, 153, 0)')
        this.goalx = x;
        this.goaly = y;
        this.size = 60;
        this.pos = createVector(this.goalx,this.goaly);
    }

    draw(){
        fill(this.color);
        stroke(this.colors);
        ellipse(this.goalx, this.goaly, this.size, this.size);
    }
}
