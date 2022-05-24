// 생성자 함수를 사용해서 여러개의 오브젝트를 만들어서 사용
// prototype 을 이용해서 상속을 받아서 값을 참조 
// => ES6 클래스 Class 

class User {
    constructor(name,age){
        this.name=name;
        this.age=age;
        /* this.hi = function(){
            console.log('이름은'+this.name+'나이는'+this.age)
        } */
    }
    hi(){
        console.log('이름은'+this.name+'나이는'+this.age)
    }

}

const user1 = new User('김길동',10)
const user2 = new User('이순희',15)

console.log(User.prototype)

// people1 {name:'새싹' }  hello()=>반갑습니다.  welcome()=>방문해주셔서 감사합니다

class People {
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log(this.name + '반갑습니다.')
    }
    welcome(){
        console.log(this.name + '방문해주셔서 감사합니다.')
    }
}

const people1 =  new People('새싹');
console.log(people1.hello())
console.log(people1.welcome())
console.log(people1) //people1__proto__ = >  Object.getPrototypeOf(people1) 
console.log(Object.getPrototypeOf(people1))
