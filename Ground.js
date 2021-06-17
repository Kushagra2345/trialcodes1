class Ground{
    constructor(x,y,width,height){
        this.x=x
        this.y=y
        this.width=width
        this.height=height

        var options={
            isStatic:true,
            density:10,
            friction:0.1
        }
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)
    }

    display(){
        fill("brown")
        stroke("green")
        strokeWeight(2)
        rect(this.x,this.y,this.width,this.height)
      
    }

}