class Ant{
    constructor(_width, _height){
        //This 'fuciton' sets the characteristics of the Ant.class
        this.x = _width;
        this.y = _height;
        this.color = "magenta";
        this.diameter = 15;
        this.speed = 0; //Now is setted to 0 to make the ant static, it will be changed in next updates
    }

    update(){
        //Change the position    
        if(this.x >= innerWidth || this.x <= 0) //If the ant arrives to the borders of the window it will change its direction
            this.speed *= -1;
        else;
        this.x += this.speed; //This determine te actual movement of the ant. Pretty simple right now.
    }

    draw() {
        //strokeWeight(4);
        noStroke();
        fill(color(this.color));
        ellipse(this.x, this.y, this.diameter*0.6, this.diameter);
        ellipse(this.x, this.y -(this.diameter/2), this.diameter*0.6, this.diameter);
        //The two ellipses are only a concept probe of the ants shape
    }
}
