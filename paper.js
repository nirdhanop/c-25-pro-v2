class Paper{
constructor(x,y,r)

{
    var options={
        isStatic:false,
        restituition:0.3,
        friction:0.5,
        density:1.2,
    }


this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x, this.y, (this.r-32)/1 ,options)
this.image = loadImage("paper.png");

World.add(world, this.body);
}
display()
{
    var paperpos=this.body.position;
    
    push()
    translate(paperpos.x, paperpos.y)
    rectMode(CENTER);
    
  
        
    imageMode(CENTER);
    image(this.image,0,0,100,80);
    pop()
}
}
