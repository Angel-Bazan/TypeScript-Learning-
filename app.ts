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

type Combinable = number | string; //any name can be used as long is not built in JS or TS
type ConversionDescriptor = 'as-number' | 'as-text'; 

function combine(
    n1: Combinable, 
    n2: Combinable,
    resultConversion: ConversionDescriptor //any other values will not be allowed only of these values 
    ) {
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number' ){
        result = +n1 + +n2; //forcing conversion to numbers by adding plus to each input 
    }else{
        result = n1.toString() + n2.toString();
    }
    
      return result;
  }

  const combinedAges = combine(30, 26, 'as-number'); 
  console.log(combinedAges); 

  const combinedStringAges = combine('30', '26', 'as-number'); 
  console.log(combinedStringAges); 

  const combinedNames = combine('Max', 'Anna', 'as-text'); 
  console.log(combinedNames);

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