
// 가격 * 0.4 로 text 출력 

function Product(item , price){
    this.item = item;
    this.price = price ; 
    /* this.tex=function(){
        return (this.price*0.33) 
    } */
}

Product.prototype.tex=function(){
    return (this.price * 0.1) 
}

const product1 =  new Product('book',15000);
const product2 =  new Product('game',25000);
const product3 =  new Product('cd',2000);

console.log(product3.tex())

// 인스턴스 오브젝트가 값을 직접 소유하게 만드록 싶으면 constructor 에 만들다 
// prototype 만 가지고 있고 참조해서 사용하고 싶으면prototype 에 만들어서 상속시킨다

console.log(product3.__proto__);


