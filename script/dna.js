DNA(){
    randomSeed(random());
    for(i=0; i<1000; i++)
        vector.DNA[i] = random(-1,1);
        console.log(vector.DNA[i]);
    //
    //initial fitness definition = distance of each ant to the food
    //
    //initial evolution algorithm = delete worst 30% of population + clone best 5% of the generation + mate randomly the rest
}
