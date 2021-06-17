class Stone{

constructor(x,y,radius){

this.x=x
this.y=y
this.radius=radius

var options={
    isStatic:false,
    restitution:1,
    density:1.5,
}
this.body=Bodies.circle(x,y,radius,options)

World.add(world,this.body)

}

display(){
    var angle = this.body.angle;
    push();
    fill("yellow")
    translate(this.body.position.x, this.body.position.y);
    circle(0,0,2*this.radius)
    rotate(angle);
    pop();
}
}