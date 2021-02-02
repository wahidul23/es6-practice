// function doubleIt(number){
//     return number*2;
// }
// const doubleIt = function myFunc(number){         // function expression
//     return number*2;
// }
      //funciton name parameter  return value
const doubleIt = Number => Number*2;  //es6 arrow function
const add = (x,y) => x+y;

const sum = add(23, 18);
console.log(sum);
const give7 = () => 7;
const result = give7();
console.log(result);
const total = doubleIt(23);
console.log(total);

const doMath = (x, y) =>{
    const sum = x +y;
    const sub = x - y;
    const result2 = sum * sub;
    return result2;
}
const total2 = doMath(3, 4);
console.log(total2);
