class Paper
{
    constructor(x,y,r)
    {
        var opt={
            isStatic:false,
            restitution:0.8,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("paper.png")
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(this.x,this.y,this.r/2,opt)
        World.add(world,this.body)
    }
    display(){
        var paperpos=this.body.position;

        push()
        translate(paperpos.x,paperpos.y)
        ellipseMode(CENTER)
        fill(250)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}