const parent = { 
    name : 'kim' ,
    age : 50 
}

// 1. 생성자 함수로 만든다. constructor 로 만든다. 
// 2. Object.create()  

const child = Object.create(parent) ;

console.log(child) // {} 
console.log(child.name) // kim 
console.log(child.age) // 50

const item={title:'TEE',price:5000}
const itemChild = Object.create(item) ; 
itemChild.price = 7000;
console.log(itemChild.price)
console.log(itemChild)

const itemChildChild  = Object.create(itemChild);
console.log(itemChildChild.price)

//ES6 Class 

