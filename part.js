class Part {
    constructor(x,y,width,angle) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,20,options);
      this.width = width;
      this.height = 15;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
