// function add(n1: number | string, n2: number | string) {
//     let result;
//     if(typeof n1 === 'number' && typeof n2 === 'number'){
//         result = n1 + n2;
//     }else{
//         result = n1.toString() + n2.toString();
//     }
    
//       return result;
//   }
function combine(
    n1: number | string, 
    n2: number | string,
    resultConversion: 'as-number' | 'as-text' //any other values will not be allowed only of these values 
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

  //Literal types concept 