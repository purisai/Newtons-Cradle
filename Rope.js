class Rope{
    constructor(bodyA, bodyB,x,y){
        var options = {
            bodyA: bodyA,

            bodyB: bodyB,
            pointB:{
                x:x,
                y:y
            }
           
         
        }
      
        this.x=x
        this.y=y
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    

    display(){

       
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push();
            
            stroke(48,22,8);
          
            strokeWeight(4);
             line( pointB.x+this.x , pointB.y+this.y,pointA.x , pointA.y);
               
               
            
           
            
            pop();
        
    }
    
}