/* 
  1. __proto__ :  부모 생성자의 프로토타입을 확인 하는 속성 
  2. 오브젝트 끼리 상속 할 수 있게 구현해준다.
*/

const parent = { name : 'kim'}
const child = {}

child.__proto__= parent;

console.log(child.name)



