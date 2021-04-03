class Ball {
    constructor (){
    var options = {
    
    restitution : 0.8,
    density : 1,
    friction : 0.5
    
    }
    this.body = Bodies.circle(100,200,50,options)
    World.add(world,this.body)
    this.image = loadImage("polygon.png")
    }
    
    display(){
    
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    
    
    }
    
    
    
    
    }