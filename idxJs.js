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
const h1Title = document.querySelector("#titleEx");
const title = document.getElementById("introduction");

console.log(title);
console.dir(h1Title);
console.dir(title);

title.innerHTML = "Hello From Javascript";
h1Title.style.color = "red";



document.title = "I Love You";

