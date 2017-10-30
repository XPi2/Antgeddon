class Ant{
    constructor(dna){
        //This 'funciton' sets the characteristics of the Ant.class
        this.pos = createVector(width/2,height*9/10)
        this.color = "magenta";
        this.diameter = 15;
        //if(dna === undefined)
            this.dna = new DNA();
        //else
        //    this.dna = dna
        this.speed = createVector(); //Setted the inicial speed to go up
        this.acc = createVector(0,0);
        this.count = 0
    }

    applyForce(force){
        this.acc.add(force)
    } // 'Funciton' to clean the code, the foce modify the path

    update(){
        this.applyForce(this.dna.genes[this.count]); //This will be related to the DNA of each ant
        this.count++
        this.speed.add(this.acc); //Adds the new aceleration to the speed of the Ant
        this.pos.add(this.speed,this.speed); //Set the new post of the ant
        this.acc = createVector(0,0); //This multiplier avoid to acumulate aceleration
    }

    draw() {
        push();
        //strokeWeight(4);
        translate(this.pos.x, this.pos.y); //Move the ant to its new pos
        rotate(radians(this.speed.heading())); //Orientate the ant to its moving vector
         //Set the point of rotation to its center
        noStroke();
        fill(color(this.color));
        triangle(0, 0, this.diameter, 0, this.diameter/2,-this.diameter);
        pop();
    }
    reboot(){
        this.pos = createVector(width/2, height*9/10);
        this.speed = createVector();
        this.acc = createVector(0,0);
        this.count = 0;
    }
}
