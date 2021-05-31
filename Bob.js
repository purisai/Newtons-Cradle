class Bob{
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'frictionAir':0.005,
            'density':0.3
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.width = width;
        this.height = height;
        this.radius=radius
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
    }

    

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS)
        fill("pink")
        ellipse(0,0, this.radius, this.radius)
        pop();
          }

    }

