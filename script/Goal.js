class Goal{
    constructor(x,y){
        this.color = color('rgba(255, 215, 0, 0.4)');
        this.colors = color('rgb(205, 153, 0)')
        this.goalx = x;
        this.goaly = y;
        //This adjust the size
        //with a minimun of 20px
        if(respScale >= 0.3)
            this.size = 60*respScale;
        else
            this.size = 20;
        this.pos = createVector(this.goalx,this.goaly);
    }

    draw(){
        fill(this.color);
        stroke(this.colors);
        ellipse(this.goalx, this.goaly, this.size, this.size);
    }
}
