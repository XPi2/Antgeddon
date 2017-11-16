class Ant{
    constructor(dna){
        //This 'funciton' sets the characteristics of the Ant.class
        this.pos = createVector(width/2,height*9/10)
        this.color = "magenta";
        this.size = 15;
        if(dna === undefined)
            this.dna = new DNA();
        else
            this.dna = new DNA(dna);
        this.speed = createVector(); //Setted the inicial speed to go up
        this.acc = createVector(0,0);
        this.alive = true;
        this.eat = false;
        this.count = 0;
        this.amutateprob = 0.5;
    }

    applyForce(force){
        this.acc.add(force);
    } // 'Funciton' to clean the code, the foce modify the path

    checkColision(){ //FINISH THIS
        if(dist(this.pos.x,this.pos.y,food.goalx,food.goaly) <= (food.size*0.5)){
            this.alive = false;
            this.eat = true;
        }
        else if(this.pos.x < 10 || this.pos.x > window.innerWidth-15 || this.pos.y > window.innerHeight-15 || this.pos.y < 10){
            this.alive = false;
        }
        else
            for(var i=0;i<wallsnumber;i++){
                if(this.pos.x > walls[i].initWidth &&
                    this.pos.x < walls[i].finWidth &&
                    this.pos.y > walls[i].initHeight &&
                    this.pos.y < walls[i].finHeight){
                    this.alive = false; //WHY THIS DO NOT FUCKING WORK!!!
                }
            }
    }
    update(){
        this.count++;
        population.count++;
        this.checkColision();
        if( this.alive == true){
            this.applyForce(this.dna.genes[this.count]); //This will be related to the DNA of each ant
            this.speed.add(this.acc); //Adds the new aceleration to the speed of the Ant
            this.pos.add(this.speed,this.speed); //Set the new post of the ant
            this.acc = createVector(0,0); //This multiplier avoid to acumulate aceleration
        }
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
        triangle(-this.size/3, 0, this.size/3, 0, 0, -this.size);
        pop();
    }
    reboot(){
        this.pos = createVector(width/2, height*9/10);
        this.speed = createVector();
        this.acc = createVector(0,0);
        this.count = 0;
    }

    matching(ant){
        this.dna.mix(ant.dna);
    }

    mutate(){
        var mrand = random(0,1);
        if(mrand < this.amutateprob)
            this.dna.geneticMutate();
    }
}
