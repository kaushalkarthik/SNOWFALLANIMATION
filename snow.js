class Snow{
    constructor(x,y,width,height){
       this.snow=createSprite(x,y,width,height)
       this.x=x
       this.y=y
       this.width=width
       this.height=height
       this.image=loadImage("snow4.webp")
       this.snow.addImage(this.image)
    }
}