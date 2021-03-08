class hammer{
    constructor(x, y,width) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.rectangle(x, y, width,30, options);
        this.width = width;
        this.height = 30;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
      }
}