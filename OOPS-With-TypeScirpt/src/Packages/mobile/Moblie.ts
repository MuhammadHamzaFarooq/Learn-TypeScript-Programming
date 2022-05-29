export class Mobile {
    public name: string = "X";
    public color: string = "Black";
    // public size:string;
    // public price:number;
    // public model:string;
    // public year:number;

    // Compile time polymorphism
    public displayInfo(): void;
    public displayInfo(name: string): void;
    public displayInfo(color: string): void;
    public displayInfo(name: string, color: string): void;
    public displayInfo(name?: string, color?: string): void {
        if (name != null && color != null) {
            this.name = name;
            this.color = color;
            console.log("Name : " + this.name + " Color : " + this.color);
        }
        else if (name != null) {
            this.name = name;
            console.log(this.name)
        }
        else if (color != null) {
            this.color = color;
            console.log(this.color);
        }

    }

}