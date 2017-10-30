class Ant{
    constructor(){
        //This 'fuciton' sets the characteristics of the Ant.class
        this.pos = createVector(width/2,height*4/5)
        this.color = "magenta";
        this.diameter = 30;
        this.speed = createVector(0,random(-1.2));
        this.acc = createVector();
        //this.speed = createVector();
        //this.count = 0
    }

    applyForce(force){
        this.acc.add(force)
    }

    update(){
        this.applyForce(random(-0.1,0.1));
        //this.count++
        this.speed.add(this.acc);
        this.pos.add(this.speed,this.speed);
        this.acc.mult(0);
    }

    draw() {
        push();
        //strokeWeight(4);
        translate(this.pos.x, this.pos.y);
        rotate(this.speed.heading());
        rectMode(CENTER);
        noStroke();
        fill(color(this.color));
        rect(0, 0, this.diameter, this.diameter*0.5);
        pop();
    }
}
