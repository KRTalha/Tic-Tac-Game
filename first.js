// fullname = 'Tony Stark';
// price = 24;
// age =99.99;
// x = null;
// isFollow = false;
// console.log(fullname);
// console.log(price);
// console.log(age);
// console.log(x);
// console.log(isFollow);

// let name = "tony Stark";
// console.log(name);
// let price1 =12121;
// console.log(price1);

// typeof price;

// const student = {
//     fullName : "talha mahmmod" ,
//     age : 21,
//     marks  : 4.5,
//     isPass : true ,
// }
// console.log(student["age"]);

// const product = {
//     productNamme : "Parker Jotter Standard CT Ball Pen",
//     collor : "Black",
//     ratting : 7.002,
//     price : 270,
//     discount : "5% off",


// }

// console.log(product);

// const accountInst = {
//     userName : "Shradhakhapra ",
//     posts : 195,
//     followes : 569000,
//     following : 4,
//     Entrepreneur : "Apna College",



// }
// console.log(accountInst);

// for loops

// let sum = 0;
// for (let i = 0; i <=5 ; i++) {
//     sum = sum +i;

// }
// console.log(sum);

// // while loops

// let i = 1;
// while(i <=5){
//     console.log("i: " + i);
//     i++;
// }

// //Do while loops]

// let i = 20;
// do {
//     console.log("Apna college: " );
//     i++;
// } while (i <= 10);

// For of and for in loops

// let str = "Apnacollege: ";

// let size = 0;

// for(let i of str) {
//     console.log(i);
//     size++;
// }
// console.log(size);

// for in loop

// let student ={
//     name : "talha",
//     age : 21,
//     gpa : 4.5,
//     isPass : true,

// };

// for (let i in student){
//     console.log(i , student[i]);
// }

// Question no 1

// for(let i = 0; i <=100;  i++){
//     if(i%2==0){
//         console.log(i)
//     }
//     else{

//     }
    
// }


// Question 2

// let gameNum = 786;

// let userNum = prompt("Please enter your number to start this page.");

// while(userNum != gameNum){
//     userNum = prompt("Please enter again . Yiu enter wrong number");

// }

// console.log("Congratulations you have successfully");\\\


// Stringas 

// let str = "apna College "

// console.log(str[0]);


// Template Literals 
// let speciaStrings = `This is a template strings ${1+2+3}`;
// console.log(speciaStrings);


// let str = "TalhaandDebo";
// let newStr = str.toUpperCase();
// console.log(newStr);


//Strings methods 
// str.toUpperCase()
// str.toLowerCase()
// str.trimm()    //remove whilespacess
// str.slice(start, end) // return part of Strings
// str1.concat(str2) // joins Strings together
// str.replace // 
// str.charAt(index) //


// let username = prompt("@" + "ENter your Username");

// let username1 = "@" + username;

// let userLenth = username1.length;

// let result = username1+userLenth;

// console.log(result);



////  Arrays

// let marks = [97,82,76,62,53];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["ironman", "ironman", "ironman", "ironman"]
// console.log(heroes);
// console.log(typeof marks);


// Array indices 

// let marks = [32,32,213,213,21,12,334,121];

// for(let i=0; i<marks.length; i++){
//     console.log(marks[i]);
// }

// for off loops


// let cities = ["karachi ", "lohore", "Multan","sahiwal", "Gujranwala", "Rome"];

// for(let city in cities){
//     console.log(cities[city.toUpperCase()]); 
// }


// Practice Question 1 ffor arrays 

// let  marks = [85,97,44,37,76,60 ];

// let sum = 0;
// for( let i of marks ){
//     sum += i;
// } 
// let avg = sum /marks.length;
// console.log(avg);



// Practice question2 

// let prices = [250,645,300,900,50];


// for (let i of prices){
//     offer = i/10;
//     i = i -offer;
//     console.log(i);
// }
   

// Arrays methonds

// Push() " add to end"
// Pop() " remove from end"

//let foodItems = ["potato", "apple", "mango", "banana"];
//let marks= [23,43,12,42,21,442];

//let jama = foodItems.concat(marks);
//console.log(jama);

// Unshift method to add new item in start of an array
//let navaIm = foodItems.unshift("nava");
//console.log(foodItems);

// Shift method to remove the first item from an array

//let khatam = foodItems.shift();
//console.log(foodItems);

// Slice  return a piece of an array

//console.log(foodItems.slice(0,2));

// Splice ()  change orignal array(add,remove,replace)


// let num = [1,2,3,4,5,6,7,8];
// num.splice(3,1,104);


// Pracice question 1

//let companies = ["Bloomberg", "Microsoft","Uber", "Google", "IBM", "Netflix"];

//companies.splice(0,1);

//companies.splice(2,1,"Olas");

//let updata = companies.push("Amazon");