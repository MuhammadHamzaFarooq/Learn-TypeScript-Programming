export class Pen{
    public color:string;
    public type:string;
    constructor(color:string ,type:string){
        this.color = color;
        this.type = type;
    }
    public wirte():void{
        console.log("Writing Somethings");
    }
}

