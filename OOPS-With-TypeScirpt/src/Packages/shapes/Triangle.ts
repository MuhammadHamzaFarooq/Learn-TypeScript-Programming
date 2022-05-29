import { Shapes } from './Shapes';

export class Triagnle extends Shapes {
    public area(l: number, h: number): void {
        console.log("Area of Triagnle", 1 / 2 * l * h);
    }
}