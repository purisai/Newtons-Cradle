class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
      
         
        }
      
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
  

    display(){

       
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
          
            strokeWeight(4);
             line( pointB.x , pointB.y,pointA.x , pointA.y);
               
               
            
           
            
            pop();
        
    }
    
}