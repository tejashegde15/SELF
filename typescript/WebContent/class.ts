class Point{
    x:number;
    y:number;
    
    constructor(x:number,y:number)
    {
        this.x=x;
        this.y=y;
    }
    draw(){
            console.log('X'+'  '+this.x+'y'+'    '+this.y);
    }

    getDistance(another:Point)
    {

    }
}

let point:Point=new Point(10,8);
point.draw();
