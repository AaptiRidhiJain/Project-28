class Mango {
    constructor(x,y,radius){
        var options ={
            isStatic: true,
            restitution: 0,
            friction: 1
    }
    
    this.x = x;
    this.y = y;
    this.r = radius;
    this.image = loadImage("mango.png");
    this.body = Bodies.circle(this.x,this.y,this.r,options);
    World.add(world,this.body);
}

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}