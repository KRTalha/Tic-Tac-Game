// alert("Hi debo are you ready to go ");

// console.dir(document.body);

// let heading = document.getElementsByClassName("heading-class");
// console.dir(heading);
// console.log(heading);



// tagName : return tags for element nodes


// let firstEl =document.querySelector("p");
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p");
// console.dir(allEl);


// innerText : return thr text content to the element and its children

// how to select the nodes for their children 
// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");


//practice question 1

// let el = document.querySelector("h2");

// el.innerText = el.innerText + "From Apna College";

// let boxes = document.querySelectorAll(".box");

// let idx = 1;
// for(div of boxes){
//     div.innerText = `new uniqe value ${idx}`;
//     idx++;

// }

// let div = document.querySelector('div');
// console.log(div);

// let val = div.getAttribute('class');
// console.log(val);  

// let para = document.querySelector("p");
// console.log(para.setAttribute("class" , "newclass"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "transparent";

// div.style.fontSize = "26px";

// if want to access the atributes in html what we use is name of parametere like div  and then this function with .getAttribute("class")
// if we want to do some changes in the html we


// DOM Manipulation 
//Insert Element  let el = document.createElement("div");

// node.append(el); // add at the end of the node(inside);

// node.prepend(el); // add at the start of the node(inside

// node.before(el); // add before of the node(outside)

// node.after(el); // add after of the node(outside)


// let newbtn = document.createElement('button');
// newbtn.innerText = "Love ME";

// let p =document.querySelector("p");
// p.after(newbtn);


// let newHEading = document.createElement("h1");
// newHEading.innerText = "Hi , I am Debora";

// document.querySelector("body").prepend(newHEading);

// let para = document.querySelector("para");
// para.remove();


let newbtn = document.createElement("button");
newbtn.innerText = "Click Me";
document.querySelector("body").prepend(newbtn);
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

// Question no 2


let para = document.querySelector("p");
para.classList.add("Talha");
console.log(para.classList);