class roof{
    constructor(){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(600,590,800,15,options);
       this.width = 1200;
       this.height = 650;
       World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
      }
}