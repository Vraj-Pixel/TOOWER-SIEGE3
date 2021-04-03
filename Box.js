class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visiblity = 255
  }
  display(){
    var pos =this.body.position;
   
    if(this.body.speed>5){
      this.visiblity = this.visiblity-5
      World.remove(world,this.body)
      push()
      tint(255, this.visiblity)
      pop()

   }
  
   else{

    rectMode(CENTER);
    fill("Green");
    rect(pos.x, pos.y, this.width, this.height);


   }

  }
}     