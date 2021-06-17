class Wire{

    constructor(bodyA,pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:10
        }

        this.Wire=Constraint.create(options)
        World.add(world,this.Wire)

        this.pointB=pointB

    }

    display(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
             
        if (this.Wire.bodyA){
            var slingPos=this.Wire.bodyA.position
            stroke("red")
            line(slingPos.x,slingPos.y,this.pointB.x,this.pointB.y)
        }
    }

    fly(){
        this.Wire.bodyA=null;
    }


}