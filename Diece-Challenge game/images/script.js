// var randomnum1=prompt("Enter number between 1-6");
// var randomimgpath1="images/"+"dice"+randomnum1+".png";
// document.querySelectorAll("img")[0].setAttribute("src",randomimgpath1);

// // var randomnum2=Math.floor(Math.random() * 6) + 1;
// var randomnum2=prompt("Enter number between 1-6");
// var randomimgpath2="images/"+"dice"+randomnum2+".png";
// document.querySelectorAll("img")[1].setAttribute("src",randomimgpath2);
// if(randomnum1>randomnum2){
//     document.querySelector("h1").innerHTML="Player 1 Wins";
// }else if(randomnum1<randomnum2){
//     document.querySelector("h1").innerHTML="Player 2 wins"
// }else{
//     document.querySelector("h1").innerHTML="Draw";
// }


const input1 = parseInt(prompt("Player 1: Enter a number between 1 and 6"));
const input2 = parseInt(prompt("Player 2: Enter a number between 1 and 6"));

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

let currentVal1 = 1;
let currentVal2 = 1;

let angle1 = 0;
let angle2 = 0;

let dice1Stopped = false;
let dice2Stopped = false;

function getDiceImage(num) {
  return "images/dice" + num + ".png";
}

// Animate dice 1
const interval1 = setInterval(() => {
  angle1 += 30;
  currentVal1 = (currentVal1 % 6) + 1;
  img1.style.transform = `rotate(${angle1}deg)`;
  img1.setAttribute("src", getDiceImage(currentVal1));

  if (angle1 >= 360 && currentVal1 === input1) {
    clearInterval(interval1);
    img1.style.transform = "rotate(0deg)";
    img1.setAttribute("src", getDiceImage(input1));
    dice1Stopped = true;
    decideWinner();
  }
}, 100);

// Animate dice 2
const interval2 = setInterval(() => {
  angle2 += 30;
  currentVal2 = (currentVal2 % 6) + 1;
  img2.style.transform = `rotate(${angle2}deg)`;
  img2.setAttribute("src", getDiceImage(currentVal2));

  if (angle2 >= 360 && currentVal2 === input2) {
    clearInterval(interval2);
    img2.style.transform = "rotate(0deg)";
    img2.setAttribute("src", getDiceImage(input2));
    dice2Stopped = true;
    decideWinner();
  }
}, 100);

// Only run when both dice have finished
function decideWinner() {
  if (dice1Stopped && dice2Stopped) {
    if (input1 > input2) {
      h1.innerHTML = " Player 1 Wins!";
    } else if (input2 > input1) {
      h1.innerHTML = "Player 2 Wins! ";
    } else {
      h1.innerHTML = "It's a Draw!";
    }
  }
}
