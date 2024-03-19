// function talhaMamood(msg,n){
//     console.log(msg*n);
// }


// function sumCal( a,b){
//     s = a+b;
//     return s;
    
// }

// let val = sumCal(9,9);
// console.log(val);


// Arrow function 

// function sum(a,b){
//    return a+b;

// }

// const sumFunction =(a, b)=>{
//     console.log(a+b);
//   }


//  const muliFunction= (a,b)=>{
//     console.log(a*b);
//   }

// function retVowels(str){
//     let vowels = [a,e,i,o,u]
//     for(let i=0;i<str.length;i++){
//         if (str=== vowels){
//             console.log(i);
//         }


//     }

//     }
    


// retVowels("Hello");

// 

// let countVow = (str)=>{
//     count = 0;
//     for( const char of str ){
//         if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }


// ForEach function 


// let arr = ["Talha", "Mahmood"];

// arr.forEach((val) =>{
//     console.log(val.toUpperCase());
// });


// Higer order  functions kia hote hai

// Wo function jo kisi or function ko as a parameter le le ya phir function return kr k de are called higher order function 

// Practice question for each loop 

// let arr = [1,2,3,4,5];

// arr.forEach((val) =>{

  
         

//     console.log(val*val);

// });


// Array Methods 

// Map methods

// let num = [1,2,3,4,2,42,3,1];

// let newvari = num.map((val) => {
//     console.log(val*4);
// });

// console.log(newvari);


// Filter  method in Array  

// num = [1,2,3,4,2,42,3,5]

// let newArr = num.filter(val =>{
//     return val%2 == 0;
// });

// console.log(newArr);

// Reduce method


// let arr = [1,2,3,4,5];

// const output = arr.reduce((prev , curr) => {
//     return prev + curr;
// });

// console.log(output);


// Pint a largest number inn a arry 

// let arr = [1,2,3,4,5];

// let largeNum = arr.reduce((pre ,currt)=>{
//     return pre > currt ? pre : currt;
// });

// console.log(largeNum); 


// Practice QUestion no 1

// letrr = [87,85,95,93,91,81,100]

// let NitePlus = arr.filter((val)=>{

//     return val >90;

// });
// console.log(NitePlus); 


//  Practice question 2

// let n = prompt("enter your number")
// let arr = [];

// for (let i = 1; i <=n; i++) {
//     arr[i - 1] = i;
// }
// console.log(arr);

// let newarr = arr.reduce((prev , currt)=>{

//     return prev + currt;
// });

// console.log(newarr);

// let n = prompt("enter your number")
// let arr = [];

// for (let i = 1; i <=n; i++) {
//     arr[i - 1] = i;
// }
// console.log(arr);

// let newarr = arr.reduce((prev , currt)=>{

//     return prev * currt;
// });

// console.log(newarr);

let arr = "hello world";
count = 0;


function vowels (arr){
    for(let )
    if(arr ==="a" || arr ==="e" || arr ==="i" || arr ==="o" || arr ==="u"){
        count++;
    }
    console.log(count);
}