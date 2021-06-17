class Box{
        constructor(x,y,width,height){
    
        this.x=x
        this.y=y
        this.width=width
        this.height=height
    
        var options={
            isStatic:false,
            mass:10,
            density:2,
            friction:1
        }
    
        this.body=Bodies.rectangle(x,y,width,height,options)
    
        World.add(world,this.body)
        
    
        }
    
        display(){
            var angle = this.body.angle;
            push();
            fill("green")
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rect(0,0,this.width,this.height)
            pop();
        }
    
    }
