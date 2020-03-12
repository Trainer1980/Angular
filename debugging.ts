var myString: string;
myString = "Bee stinger";
//myString defined as a string and can't be redefined as a number
//changed the 9 to '9'
myString = '9';




function sayHello(name: string){
    return `Hello, ${name}!`;
}
console.log(sayHello("Kermit"));
// name is defined as a string and can't be redefined as a number
// changed 9 to '9'
console.log(sayHello('9'));




function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
console.log(fullName("Mary", "Moore", "Tyler"));
// middle name is required and it needs to be optional
// put ? between middleName & :
console.log(fullName("Jimbo", "Jones"));




interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
}
console.log(graduate(christine));
// in jay, belts is listed as belt
// added s to belt
console.log(graduate(jay));




class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string){
            this.fullName = `${firstName} ${lastName}`;
        }
    debug(){
        console.log("Console.log() is my friend.")
    }
}
// Have to make an instance of Ninja class
const shane = new Ninja("Shane", "Rock");
// Have to make another instance of Ninja class
const turing = new Ninja("Alan", "Turing");
//
function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
console.log(study(turing));




// x & y were set to any so you infer their types by their usage, so I typed them as number
var increment = (x: number) => x + 1;
console.log(increment(3));
var square = (x: number) => x * x;
// Need to remove the braces
console.log(square(4));
// Need to add paren to parems
var multiply = (x: number,y: number) => x * y;
// Needs to be a function
var math = (x: number, y: number) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}




class Elephant {
    constructor(public age: number){}
    birthday = () =>{
        this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
// Inference allows us to make use of the age param