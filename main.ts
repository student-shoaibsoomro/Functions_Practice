// Function without arguments & parameters
// Addition:
function add(){
    let a : number = 20;
    let b : number = 30;
    let sum = a + b;
    console.log(sum);
};
add()

// Function with Arguments & Parameters:
function sum(a : number , b : number){
    console.log(a + b);
}
sum(15,20);
sum(20,40)

// Function with return value:
function laptop(machine1: string, machine2: string){
    return `${machine1}, ${machine2}`;
}
console.log("Lenovo carbon x1", "MacBook");

// Function by Default Parameters:
function food(choice: string = 'My favorite'){
    console.log(choice)
}
food();

function dig(){
    let a = 5;
    let b = 5;
    let sum = a + b;
    return sum;
}
console.log(dig())

function city(){
    let a = 'karachi ';
    let b = 'lahore';
    let pak = a + b;
    return pak;
}
console.log(city());

function ride(){
    let b1 = 'Hayabusa: ';
    let b2 = 'Suzuki Carbon';
    let best = b1 + b2;
    return best;
}
console.log(ride());


// Function with Arguments & Parameters:
function intro(name: string, age: number, student: boolean){
    let intro = `${name}, ${age}, ${student}`;
    console.log(intro);
}
intro("Shoaib", 26, true);
intro("Fahad", 30, false)

// Functions without arguments & parameters
// Subtraction:
function sub(){
    let a : number = 20;
    let b : number = 10;
    let sub = a - b;
    console.log(sub)
}
sub();

// Function without arguments & parameters
// Multiplication:
function multiple(){
    let a : number = 10;
    let b : number = 5;
    let mul = a * b;
    console.log(mul);
};
multiple();

// Function without arguments & parameters
// Division:
function div(){
    let a : number = 100;
    let b : number = 50;
    let div = a / b
    console.log(div);
};
div();

// FUNCTIONS WIH ARGUMENTS & PARAMETERS:

function car(car: string, driver: string){
    return `I buy ${car} & need ${driver}.`
}
console.log(car("Land Cruiser", "Driver"))

