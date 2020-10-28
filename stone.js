class Stone {

    constructor(x, y, width, height){

        var options = {
            restitution: 0,
            isStatic: false,
            friction: 1,
            density: 1.2,
        }
        
        this.body = Bodies.rectangle(x, y, width, height,options);

        this.width = width;
        this.height = height;
        
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;

        rectMode(CENTER);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
    }

};