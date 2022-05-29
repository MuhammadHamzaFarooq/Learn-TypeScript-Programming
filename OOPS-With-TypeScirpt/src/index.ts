import { Car } from "./Packages/car/Car";
import {Pen} from "./Packages/pen/Pen";
import { Student } from './Packages/student/Student';
import { Mobile } from './Packages/mobile/Moblie';


let hondaCivic = new Car("black","Honda Civic",2022,1000);
hondaCivic.accelerate();

let dollarPen = new Pen("Gel","Black");
dollarPen.wirte();

let Student1 = new Student("000mhf","Muhammad Hamza Farooq",23,"Male","mhamza2021999@gmail.com");
Student1.printInfo();

let TechnoMobile = new Mobile();
TechnoMobile.displayInfo("Techno Pova");
TechnoMobile.displayInfo("Black");
TechnoMobile.displayInfo("Techno Pova","Black");

