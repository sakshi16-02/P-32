class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.0,
        //   'density':1.0
      }
      this.visibility=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }

    score(){
      if (this.visibility < 0 && this.visibility > -1005){
        score++;
      }
    }

    display(){
      // var pos =this.body.position;
      // var angle = this.body.angle;

      if(this.body.speed < 4){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.visibility = this.visibility - 5;
         //tint(255,this.visibility);
         //image(this.image, pos.x, pos.y, 50, 50);
         pop();
       }
      // else{
      //   World.remove(world, this.body);
      //   push();
      //   this.visibility = this.visibility -5;
      //   pop();
        
      // }
       
    }
}
  