class Ant{
    constructor(){
        //This 'funciton' sets the characteristics of the Ant.class
        this.pos = createVector(width/2,height*4/5)
        this.color = "magenta";
        this.diameter = 30;
        this.speed = createVector(0,random(-1.2)); //Setted the inicial speed to go up
        this.acc = createVector();
        //this.count = 0
    }

    applyForce(force){
        this.acc.add(force)
    } // 'Funciton' to clean the code, the foce modify the path

    update(){
        this.applyForce(random(-0.1,0.1)); //This will be related to the DNA of each ant
        //this.count++
        this.speed.add(this.acc); //Adds the new aceleration to the speed of the Ant
        this.pos.add(this.speed,this.speed); //Set the new post of the ant
        this.acc.mult(0); //This multiplier avoid to acumulate aceleration
    }

    draw() {
        push();
        //strokeWeight(4);
        translate(this.pos.x, this.pos.y); //Move the ant to its new pos
        rotate(this.speed.heading()); //Orientate the ant to its moving vector
        rectMode(CENTER); //Set the point of rotation to its center
        noStroke();
        fill(color(this.color));
        rect(0, 0, this.diameter, this.diameter*0.5);
        pop();
    }
}
