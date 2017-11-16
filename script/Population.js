class Population{
    constructor(){
        this.popSize = 200;
        this.antpop = [];
        this.count = 0;
        this.popID = 1;
        for (var i=0; i<this.popSize; i++) {
            this.antpop.push(new Ant());
        } // Create population 
        console.log(this.antpop);
        this.amatching = 0.1;
        for(var i=0;i<wallsnumber;i++)
            walls[i] = new Obstacle();
    }

    draw(){
        for (var i=0; i<this.popSize; i++) {
            this.antpop[i].update();     //Call the class.function to draw the ants
            this.antpop[i].draw();   //Call the class.function to update the state of the ants
        }
        for(var i=0;i<wallsnumber;i++)
            walls[i].draw();
        this.count = this.antpop[0].count;
        if(this.count == maxframe)
            this.reboot();
    }

    reboot(){
        this.fitness = [];
        var bestpop = [];

        this._individualFitness();
        this._acumulateFitness();

        //Selection
        for(var i=0; i < this.popSize; i++){
            var ran = random();
            for(var j=0; j < this.popSize; j++){
                if(ran < this.fitness[j][2]){
                    bestpop[i] = new Ant(this.antpop[this.fitness[j][0]].dna);
                    j=this.popSize;
                }

            }
        }

        this.matching(); 

        for(var i=0; i < this.popSize; i++){
            bestpop[i].mutate();
            this.antpop[i] = bestpop[i];
        }
        this.count = 0;
        this.popID++;
    }

    _individualFitness(){
        var totalfitness = 0;
        // Here we fill the fitness array with the distance fitness
        // o each ant and at the same time we compute the adder of fitness
        for(var i=0; i<this.popSize ; i++){
            this.ifitness = 1/dist(this.antpop[i].pos.x,this.antpop[i].pos.y,food.goalx,food.goaly);
            totalfitness += this.ifitness;
            this.fitness[i] = [i,this.ifitness];
        }
        // Here we correct the fitness of each ant to its relative fitness of all the population fitness
        for(var i=0; i<this.popSize ; i++){
            this.fitness[i][1] = (this.fitness[i][1]/totalfitness);
        }
        // Sort the array by its second parameter
        this.fitness.sort(function(a, b) {
            return a[1] - b[1];
        });
        this.fitness.reverse(); //This reorder the array in fitnees decrecent
    }

    _acumulateFitness(){
        //Returns the accumulative fitness inside the fitness array
        var accfitness = 0;
        for(var i=0; i<this.fitness.length ; i++){
            //This is the adder of the fitness of the previus ants of the population
            accfitness += this.fitness[i][1];
            this.fitness[i][2] = accfitness;
        }
    }
    matching(){
        for(var i=0;i<this.popsize/2;i++){
            var rand = random();
            if(rand < this.matchingProb){
                //Pick an ant
                var father = random(this.ants);
                var mother = random(this.ants);
                mother.matching(father);
            }
        }
    }
}
