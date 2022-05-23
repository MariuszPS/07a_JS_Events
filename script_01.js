
/* Btn */

const btn = document.body.children[0];
// const btn = document.body
console.log(btn);

/********  Event-Listener **********/
btn.addEventListener("mouseleave",test);
btn.addEventListener("mouseenter",test);
btn.addEventListener("click",test);

function test() {
   console.log("hi");
}
