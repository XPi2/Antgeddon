class Population{
    constructor(){
        this.popSize = 50;
        this.antpop = [];
        this.bestpop = [];
        this.fitness = [];
        this.count = 0;
        for (var i=0; i<this.popSize; i++) {
            this.antpop.push(new Ant());
        } // Create population 
        console.log(this.antpop)
    }

    draw(){
        this.count = this.antpop[0].count;
        for (var i=0; i<this.popSize; i++) {
            this.antpop[i].update();     //Call the class.function to draw the ants
            this.antpop[i].draw();   //Call the class.function to update the state of the ants
        }
        //if(this.count == maxframe)
            //this.reboot();
    }

    reboot(){
        this._individualFitness();
        this._acumulateFitness();
        //this.selectionFitness();

        for(var i=0; i < this.popSize; i++){
            var rand = random();
            for(var j=0; j < this.popSize; j++){
                if(rand < this.fitness[j][2]){
                    //Ant selected
                    //console.log(this.antpop[this.fitness[j][0]])

                    this.bestpop[i] = new Ant(this.antpop[this.fitness[j][0]].dna);

                    //this.newpopulation[i].reboot();
                    //Finish the for loop
                    j = 0;
                }
            } 
        }
        //this.antpop = this.bestpop;
        this.count = 0;
    }

    _individualFitness(){
        this.totalfitness = 0;
        // Here we fill the fitness array with the distance fitness o each ant and at the same time we compute the adder of fitness
        for(var i=0; i<this.popSize ; i++){
            this.ifitness = 1/dist(this.antpop[i].pos.x,this.antpop[i].pos.y,food.goalx,food.goaly);
            this.totalfitness += this.ifitness;
            this.fitness[i] = [i,this.ifitness];
        }
        // Here we correct the fitness of each ant to its relative fitness of all the population fitness
        for(var i=0; i<this.popSize ; i++){
            this.fitness[i][1] = (this.fitness[i][1]/this.totalfitness);
        }
        // Sort the array by its second parameter
        this.fitness.sort(function(a, b) {
            return a[1] - b[1];
        });
        this.fitness.reverse(); //This reorder the array in fitnees decrecent
        
        // This was an check function, no matter
            //this.totalfitness = 0;
            //for(var i=0; i<this.fitness.length; i++)
            //    this.totalfitness += this.fitness[i][1];
            //console.log("Total fitness =")
            //console.log(this.totalfitness);
    }

    _acumulateFitness(){
        this.accfitness = 0;
        for(var i=0; i<this.fitness.length ; i++){
            //This is the adder of the fitness of the previus ants of the population
            this.accfitness += this.fitness[i][1];
            this.fitness[i][2] = this.accfitness;
        }
        // We can check that the array is correctly computed and sorted
        console.log(this.fitness);
    }

    selectionFitness(){
        this.newpopulation = [];
        for(var i=0; i < this.popSize; i++){
            var rand = random();
            for(var j=0; j < this.popSize; j++){
                if(rand < this.fitness[j][2]){
                    //Ant selected
                    this.newpopulation[i] = new Ant(this.population[this.fitness[j][0]].dna);
                    //this.newpopulation[i].reboot();
                    //Finish the for loop
                    j = 0;
                }
            } 
        }
        this.population = this.newpopulation;
    }
}
