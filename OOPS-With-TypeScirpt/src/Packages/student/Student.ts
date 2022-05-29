export class Student {
    public studentID: string;
    public name: string;
    public age: number;
    public gender: string;
    public email: string;

    // Default Constructor
    // constructor(){}

    //parameterized Constructor
    constructor(studentID: string,
        name: string,
        age: number,
        gender: string,
        email: string,
        
    ) {
        this.studentID = studentID;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    //Copy Constructor 
    // constructor(s2: Student) {
    //     this.studentID = s2.studentID;
    //     this.name = s2.name;
    //     this.age = s2.age;
    //     this.gender = s2.gender;
    //     this.email = s2.email;
    //     this.phoneNumber = s2.phoneNumber;
    // }

    public printInfo():void{
        console.log("StudentID : "+ this.studentID+", Stduent Name : "+this.name+", Student Age : "+this.age +", Student Gender : "+this.gender+ ", Student Email : "+this.email );
    }

}