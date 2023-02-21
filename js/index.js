// let progressValue = document.querySelectorAll(".aboutMe__progress-value");
let progressValue1 = document.querySelector(".value1");
let progressValue2 = document.querySelector(".value2");
let progressValue3 = document.querySelector(".value3");
let progressValue4 = document.querySelector(".value4");

let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");
let dot3 = document.querySelector(".dot3");

let progressStartValue = 0;
let progressEndValue1 = 75;
let progressEndValue2 = 80;
let progressEndValue3 = 50;
let progressEndValue4 = 35;
let speed = 50;


if (progressValue1.innerHTML == progressEndValue1) {
  const progress1 = setInterval(() => {
    progressStartValue++;

    progressValue1.textContent = `${progressStartValue}`;
    if (progressStartValue == progressEndValue1) {
      clearInterval(progress1);
    }
  }, speed);
}

if (progressValue2.innerHTML == progressEndValue2) {
  const progress2 = setInterval(() => {
    progressStartValue++;

    progressValue2.textContent = `${progressStartValue}`;
    dot2.classList.add(".dot2");
    
    if (progressStartValue == progressEndValue2) {
      clearInterval(progress2);
    }
  }, speed);
}
/* */
if (progressValue3.innerHTML == progressEndValue3) {
  const progress3 = setInterval(() => {
    // progressStartValue++;

    // progressValue3.textContent = `${progressStartValue}`;
    dot3.classList.add(".dot3");

    // if (progressStartValue == progressEndValue3) {
      // clearInterval(progress3);
    // }
  }, speed);
}


// if (progressValue4.innerHTML == progressEndValue4) {
//   let progress4 = setInterval(() => {
//     progressStartValue++;

//     progressValue4.textContent = `${progressStartValue}`;
//     if (progressStartValue == progressEndValue4) {
//       clearInterval(progress4);
//     }
//   }, speed);
// }



// console.log(progressValue.innerText);

/* 
console.log(progressValue);
progressValue.forEach((item) => {
  if (item.innerHTML == progressEndValue1) {
    console.log("I am 75");
    // console.log(item);
  }
});
*/
// transform: rotate(calc(3.6deg * var(--num)));
