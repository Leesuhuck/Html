alert("Hello world it's Javascript");
console.log('window.console.log Javascript');

/*
1. Create 생성
2. Initlalize 초기화
3. Use 사용

var 재할당 재선언 둘다 가능하다 (하지만 var가 많을수록 변수선언에 대해 찾기 어렵다.)
const 재햘당 재선언 둘다 불가능
let 재할당만 가능

[] = 브라켓
{} = 컬리 브라켓
Array 선언 const a = []
Object 선언 const a = {}
*/

var a   = 221;
var a   = 177;
const b = a - 5.1;
let c   = 166,
    c   = 'name';
console.log(a, b, c);

const objectA = {
    name : "Lee",
    age : "23",
    sex : "man"
};

console.log (objectA);
console.log (document);