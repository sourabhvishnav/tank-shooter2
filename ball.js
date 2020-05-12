class Ball {
  constructor(x,y,width,height){
    
      var options ={
          "resitution": 1.5,
          "friction": 1,
          "density": 1,
      }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body) 
  }
  display(){
      var pos = this.body.position;
      fill("white");
      ellipse(pos.x,pos.y,this.width,this.height);
  }

}