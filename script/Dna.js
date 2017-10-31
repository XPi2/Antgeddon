class DNA{
    constructor(){
        this.genes = [];
        //console.log(maxframe);
        randomSeed(random());
        for(var i=0; i<maxframe ; i++){
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(0.1);
        }
    }

}
