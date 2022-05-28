export class Car{
    public color:string;
    public model:string;
    public year:number;
    public speed:number;
    constructor(color:string , model:string,year:number,speed:number){
        this.color = color;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }

    public accelerate():void{
        console.log(this.color+" "+this.model+" car is accelerate "+this.speed+" speed");
    }
}