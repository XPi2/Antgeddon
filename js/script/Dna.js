class DNA{
    constructor(dna){
        this.mutateprob = 0.05;
        this.genes = [];
        var newgenes = [];

        if(dna == undefined)
            for(var i=0; i<maxframe ; i++){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.2);
            }
        else{
            for(var i=0; i<maxframe ; i++){
                newgenes[i] = dna.genes[i];
            }
            this.genes = newgenes;
        }

    }

    mix(dna){
        var father = [];
        var mother = [];

        var mid = floor(random(lifespan));

        for(var i=0; i<lifespan; i++){
            if(i<mid){
                mother[i] = this.genes[i];
                father[i] = dna.genes[i];
            }else{
                mother[i] = dna.genes[i];
                father[i] = this.genes[i];
            }
        }
        this.genes = mother;
        dna.genes = father;
    }

    geneticMutate(){
        var grand;
        
        for(var i=0; i<maxframe ; i++){
            grand = random(0,1);
            if(grand < this.mutateprob){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.5);
            }
        }
    }

}
