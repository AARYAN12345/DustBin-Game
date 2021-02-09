class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      };
      this.body = ellipse(x,y, 55, 55);
      this.radius = 55;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      elipseMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("blue");
      elipse(0, 0, this.radius);
      pop();
    }
  };
  

    