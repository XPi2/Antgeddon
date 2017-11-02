class Ant{
    constructor(dna){
        //This 'funciton' sets the characteristics of the Ant.class
        this.pos = createVector(width/2,height*9/10)
            this.color = "magenta";
        this.size = 15;
        if(dna === undefined)
            this.dna = new DNA();
        else
            this.dna = dna;
        this.speed = createVector(); //Setted the inicial speed to go up
        this.acc = createVector(0,0);
        this.count = 0;
    }

    applyForce(force){
        this.acc.add(force);
    } // 'Funciton' to clean the code, the foce modify the path

    update(){
        this.count++;
        this.applyForce(this.dna.genes[this.count]); //This will be related to the DNA of each ant
        population.count++;
        this.speed.add(this.acc); //Adds the new aceleration to the speed of the Ant
        this.pos.add(this.speed,this.speed); //Set the new post of the ant
        this.acc = createVector(0,0); //This multiplier avoid to acumulate aceleration
    }

    draw() {
        push();
        //strokeWeight(4);
        translate(this.pos.x, this.pos.y); //Move the ant to its new pos
        //rectMode(CENTER);
        rotate(this.speed.heading()+PI/2); //Orientate the ant to its moving vector
         //Set the point of rotation to its center
        noStroke();
        fill(color(this.color));
        //rect(0, 0, this.size, this.size)
        triangle(-this.size/2, 0, this.size/2, 0, 0, -this.size);
        pop();
    }
    reboot(){
        this.pos = createVector(width/2, height*9/10);
        this.speed = createVector();
        this.acc = createVector(0,0);
        this.count = 0;
    }
}
