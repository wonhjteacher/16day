function People(name,age) {
   this.name = name ; 
   this.age = age
   this.address = 'seoul'
}

const people1 = new People('순이',30)
const people2 = new People('철수',10)

console.log(people2)

function Circle(radius){
    this.radius = radius ;
    this.getDiameter = function(){
       return this.radius * 2 
    }
}

const circle1 = new Circle(5)
const circle2 = new Circle(10)

console.log(circle2.getDiameter())
console.log(circle1)
// 이름 , 국 , 영 , 수  , 평균 메서드  
//  kim, lee , park 

function Score(name,kor,eng,math) {
   this.name = name;
   this.korNum = kor;
   this.engNum = eng;
   this.mathNum = math;
}
Score.prototype.getAvg = function(){
   return  (this.korNum+this.engNum+this.mathNum)/3
}

const kim = new Score('KIM',50,60,70)
const lee = new Score('LEE',30,100,60)
const park = new Score('PARK',60,90,30)
console.log(park)
console.log(park.getAvg())
console.log(Score.prototype)



