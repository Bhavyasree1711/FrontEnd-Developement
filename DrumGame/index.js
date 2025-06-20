// var drumButtons = document.querySelectorAll(".drum");

// drumButtons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     var key = this.innerHTML;
//     playSound(key);
//     showBackgroundImage(key);
//     buttonAnimation(key);
//   });
// });

// document.addEventListener("keydown", function (event) {
//   var key = event.key.toLowerCase();
//   playSound(key);
//   showBackgroundImage(key);
//   buttonAnimation(key);
// });

// function playSound(key) {
//   switch (key) {
//     case "w":
//       new Audio("sounds/crash.mp3").play();
//       break;
//     case "a":
//       new Audio("sounds/kick-bass.mp3").play();
//       break;
//     case "s":
//       new Audio("sounds/snare.mp3").play();
//       break;
//     case "d":
//       new Audio("sounds/tom-1.mp3").play();
//       break;
//     case "j":
//       new Audio("sounds/tom-2.mp3").play();
//       break;
//     case "k":
//       new Audio("sounds/tom-3.mp3").play();
//       break;
//     case "l":
//       new Audio("sounds/tom-4.mp3").play();
//       break;
//     default:
//       console.log("No sound for key: " + key);
//   }
// }

// function showBackgroundImage(key) {
//   var btn = document.querySelector("." + key);
//   if (!btn) return;

//   const keyToImageMap = {
//     w: "crash.png",
//     a: "kick.png",
//     s: "snare.png",
//     d: "tom1.png",
//     j: "tom2.png",
//     k: "tom3.png",   
//     l: "tom4.png"
//   };

//   const imageFile = keyToImageMap[key];
//   if (!imageFile) return;

//   btn.style.backgroundImage = `url(images/${imageFile})`;
//   btn.style.backgroundSize = "cover";
//   btn.style.backgroundPosition = "center";
//   btn.style.color = "transparent";

//   setTimeout(() => {
//     btn.style.backgroundImage = "";
//     btn.style.color = "";
//   }, 200);
// }

// function buttonAnimation(key) {
//   var activeButton = document.querySelector("." + key);
//   if (activeButton) {
//     activeButton.classList.add("pressed");
//     setTimeout(() => {
//       activeButton.classList.remove("pressed");
//     }, 100);
//   }
// }


const soundMap = {
    w: "sounds/crash.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/snare.mp3",
    d: "sounds/tom-1.mp3",
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3"
  };

  const drumButtons = document.querySelectorAll(".drum");

  // Button click
  drumButtons.forEach(button => {
    button.addEventListener("click", function () {
      const key = this.innerHTML;
      playSound(key);
      animateButton(key);
    });
  });

  // Keyboard key press
  document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    if (soundMap[key]) {
      playSound(key);
      animateButton(key);
    }
  });

  function playSound(key) {
    const audio = new Audio(soundMap[key]);
    audio.play();
  }

  function animateButton(key) {
    const button = document.querySelector("." + key);
    if (button) {
      button.classList.add("pressed");
      setTimeout(() => {
        button.classList.remove("pressed");
      }, 100);
    }
  }

