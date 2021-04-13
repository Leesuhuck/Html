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
/**
 * submit : winodw에 존재하지 않습니다.
 * 왜냐 submit은 제출이란 뜻으로 window을 제출할수 없기 때문입니다.
 * resize : 이벤트를 받기위해 기다리는것
 * 자바스크립트는 이벤트를 받기위해 기다리고 있습니다.
 * 이제 window resize는 handleResize 호출합니다.
 * handleResize : 니가 필요한 시점에서 호출하라
 * handleResize() : 지금 바로 당장 호출하라
 * handleResize(event) : 실행될때 마다 이벤트 객체를 불러옴
 */

function handleResize(event) {
    console.log(event);
    console.log("I have been plz Resize");
}

function handleClick() {
    alert('successClick');
}

console.dir(window.addEventListener);

window.addEventListener("resize", handleResize);

h1Title.addEventListener("click", handleClick);
/**
 * block : 자바스크립트 표현법으로 console.log, alert, 등 아무거나
 * 적용 해주어도 된다는 뜻입니다.
 * 조건 : 이게 뭐든 참을 의미 하면 뭐든 넣을 수 있다.
 * === : 완전히 같은 값인가?
 * && : 논리식 AND
 * || : 논리식 OR
 * prompt : alert형식과 비슷한 형식이다. 하지만 이런 형식은 오래된 형식이라
 *  잘 사용하지 않는다 html form으로 좀더 좋게 할수 있다.
 * 
 */
if (10 > 5 && "LSH_console" === "LSH_console") {
    console.log("yes");
} else {
    console.log("No");
}

const age = prompt("Ask something : How old are you?");

console.log(age);

/* 제이쿼리 library가 없어 선택자를 사용할수 없습니다.
$(function() {

    var jsQuery = $("#queryTs")[0];
    console.dir(jsQuery);
    
});
*/