class ruber {
    constructor(x, y, w) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1.0
        }
        this.body =Bodies.circle(x, y, w,options);
       this.w=w;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var w = this.body.w;
        push();
        translate(pos.x, pos.y);
        rotate(width);
        //rectMode(CENTER);
        
        fill("red");
        ellipse(0, 0, this.w);
        pop();
      }
}