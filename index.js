// document.querySelector("button").addEventListener("click",fnclicked);
//
// function fnclicked() {
//   alert("button clicked");
// }

document.querySelector(".w-b").addEventListener("click", tom1);

document.querySelector(".a-b").addEventListener("click", tom2);

document.querySelector(".s-b").addEventListener("click", tom3);

document.querySelector(".d-b").addEventListener("click", tom4);

document.querySelector(".j-b").addEventListener("click", snare);

document.querySelector(".k-b").addEventListener("click", crash);

document.querySelector(".l-b").addEventListener("click", kick);

document.addEventListener('keypress', function(e){
  var keyp = e.key;
  switch (keyp) {
    case 'w': tom1();
      break;
    case 'a': tom2();
      break;
    case 's': tom3();
      break;
    case 'd': tom4();
      break;
    case 'j': snare();
      break;
    case 'k': crash();
      break;
    case 'l': kick();
      break;
    default:

  }
});

function tom1() {

   var x = new Audio("sounds/tom-1.mp3");
   x.play();

}
function tom2() {
  var x = new Audio("sounds/tom-2.mp3");
x.play();
}
function tom3() {
  var x = new Audio("sounds/tom-3.mp3");
  x.play();

}
function tom4() {
  var x = new Audio("sounds/tom-4.mp3");
  x.play();
}
function snare() {
  var x = new Audio("sounds/snare.mp3");
  x.play();
}
function crash() {
  var x = new Audio("sounds/crash.mp3");
  x.play();
}
function kick() {
  var x = new Audio("sounds/kick-bass.mp3");
  x.play();
}
