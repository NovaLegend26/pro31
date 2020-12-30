class Plinko {
  constructor(x,y,r){
      var options = {
          isStatic:true
      }
      this.r=10
      this.body = Matter.Bodies.circle(x, y, 10, options);
      World.add(world, this.body);
    }      
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      noStroke();
      fill(255)
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
    }
  }