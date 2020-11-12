class Chain {
constructor(BodyA,BodyB){
    var options={
        bodyA:BodyA,
        bodyB:BodyB,
        stiffness:10,
        length:8
    }      
     this.chain=Constraint.create(options) ;
     World.add(world,this.chain);
     
    
}
display(){
    strokeWeight(2);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
}
}