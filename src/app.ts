// function add(n1: number | string, n2: number | string) {
//     let result;
//     if(typeof n1 === 'number' && typeof n2 === 'number'){
//         result = n1 + n2;
//     }else{
//         result = n1.toString() + n2.toString();
//     }
    
//       return result;
//   }


//   //Literal types concept 


// function combine(
//     n1: number | string, 
//     n2: number | string,
//     resultConversion: 'as-number' | 'as-text' //any other values will not be allowed only of these values 
//     ) {
//     let result;
//     if(typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number' ){
//         result = +n1 + +n2; //forcing conversion to numbers by adding plus to each input 
//     }else{
//         result = n1.toString() + n2.toString();
//     }
    
//       return result;
//   }

//   const combinedAges = combine(30, 26, 'as-number'); 
//   console.log(combinedAges); 

//   const combinedStringAges = combine('30', '26', 'as-number'); 
//   console.log(combinedStringAges); 

//   const combinedNames = combine('Max', 'Anna', 'as-text'); 
//   console.log(combinedNames);



//type alias: before starting code we can use type alias to re-use them anywhere in our code; save time and can be cleaner 

// type Combinable = number | string; //any name can be used as long is not built in JS or TS
// type ConversionDescriptor = 'as-number' | 'as-text'; 

// function combine(
//     n1: Combinable, 
//     n2: Combinable,
//     resultConversion: ConversionDescriptor //any other values will not be allowed only of these values 
//     ) {
//     let result;
//     if(typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number' ){
//         result = +n1 + +n2; //forcing conversion to numbers by adding plus to each input 
//     }else{
//         result = n1.toString() + n2.toString();
//     }
    
//       return result;
//   }

//   const combinedAges = combine(30, 26, 'as-number'); 
//   console.log(combinedAges); 

//   const combinedStringAges = combine('30', '26', 'as-number'); 
//   console.log(combinedStringAges); 

//   const combinedNames = combine('Max', 'Anna', 'as-text'); 
//   console.log(combinedNames);

  //Types Aliases & Object Types 
//   Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

// For example:

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
// To:

// type User = { name: string; age: number };
 
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// } 

//Function Return Types & Void 

//Void will be the standard where you have a function that does not return a value

// function add(n1: number, n2: number) {
//     return n1 + n2;
// }

// function printResult(num: number): void {
//     console.log('Result: ' + num);
// }

// printResult(add(5, 12)); 

//Functions as types : types that describe a function regarding the parameters and the return value allows us to describe which type of function specifically we want to use somewhere expected value in a parameter to create a function with some call back or like the example below a variable 

// function add(n1: number, n2: number) {
//     return n1 + n2;
// }

// function printResult(num: number): void {
//     console.log('Result: ' + num);
// }

// printResult(add(5, 12)); 

// let combineValues: (a: number, b:number) => number; 

// combineValues = add; 

// console.log(combineValues(8, 8));

//function types call backs example:call back needs to be a function that maybe does'nt return anything but it does take a number as an argument 

// function add(n1: number, n2: number,) {
//     return n1 + n2;
// }

// function printResult(num: number): void {
//     console.log('Result: ' + num);
// }

// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//     const result = n1 + n2;
//     cb(result);
// }

// printResult(add(5, 12)); 

// let combineValues: (a: number, b:number) => number; 

// combineValues = add; 

// console.log(combineValues(8, 8));

// addAndHandle(10, 20, (result) => {
//     console.log(result);
// })


//Unknown Types: for unknown types we first have to check the currently stored in userInput before we can assign it to any variable type; unknown is better than any because it allows you to do some checking of the different types being used  

const button = document.querySelector('button')!;

button.addEventListener('click', () => {
  console.log('Clicked')
})


//spread operator 
const hobbies = ['Sports', 'Cooking']; 
const activeHobbies = ['Hiking']; 

activeHobbies.push(...hobbies)

//useful for pulling out elements from an array 


//Rest Operators example: With rest operators we can add an infinite amount of numbers with just one declaration

// const add = (...numbers: number[]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };

// const addedNumbers = add(5, 10, 2, 3.7);
// console.log(addedNumbers)

//Creating a first class 
class Department {
  name: string; 

  constructor(n: string) {
      this.name = n;
  }
}

const accounting = new Department('Accounting');

console.log(accounting);

//storing more data in first class 
class Department {
  // private id: string;
  // private name: string; //this would be considered public property, with no need to add public in front of it which means that it is accessible to add more values to the property 
  private employees: string[] = []; //this can be a string array for the employees; Besides properties, you can also mark methods as "private" . Now this means that employees is only accesible from inside the class
 
    constructor(private id: string, public name: string) { //instead of having double initialization now we can store the fields in the constructor  
      // this.name = n; with the shortcut we can also save some code 
  }
    describe(this:Department) {
        console.log(`Department (${this.id}): ${this.name}`); 
    }

    addEmployee(employee: string) {
        this.employees.push(employee); //pushing employee to our employees array 
    }
    printEmployeeInformation() { //using another method to print the employee information
        console.log(this.employees.length); 
        console.log(this.employees)
    }
}

const accounting = new Department('d1','Accounting');
accounting.addEmployee('Max'); //since it is Private people have to use the addEmployee method or else they will get an error 
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployeeInformation(); 

//Read only modifiers 
//Lets see we want some properties to be read only we are going to add the following; once read-only is added it gives that certain property a sense that should be initialized only once. read-only exist only on TS not JS
class Department {
  // private id: string;
  // private name: string; //this would be considered public property, with no need to add public in front of it which means that it is accessible to add more values to the property 
  private employees: string[] = []; //this can be a string array for the employees; Besides properties, you can also mark methods as "private" . Now this means that employees is only accesible from inside the class
 
    constructor(private readonly id: string, public name: string) { //instead of having double initialization now we can store the fields in the constructor  
      // this.name = n; with the shortcut we can also save some code 
  }
    describe(this:Department) {
        console.log(`Department (${this.id}): ${this.name}`); 
    }

    addEmployee(employee: string) {
        this.employees.push(employee); //pushing employee to our employees array 
    }
    printEmployeeInformation() { //using another method to print the employee information
        console.log(this.employees.length); 
        console.log(this.employees)
    }
}

const accounting = new Department('d1','Accounting');
accounting.addEmployee('Max'); //since it is Private people have to use the addEmployee method or else they will get an error 
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployeeInformation(); 
