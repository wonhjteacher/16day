
const cat = {
    name : 'momo',
    gender:'male',
    age:5,
    family:'러시안블루',
    sayHello: function(){
        console.log('안녕하세요'+this.name+'입니다.')
    }
}

console.log(cat.name) 
console.log(cat['family']) 
cat.sayHello();

// 20 , 김철수 , seoul 

const people = {
    name:'김철수',
    age:20,
    address:'seoul'
}
console.log(people.age);
people.gender = 'male'; // people[gender] = 'male';

console.log(people);
