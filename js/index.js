document.addEventListener("DOMContentLoaded", function (event) {
  
  let hBurger = document.getElementById("burger");
  let navbar = document.getElementById("main-nav");

  hBurger.addEventListener("click", function (e) {
    this.classList.toggle("is-open");
    navbar.classList.toggle("is-open");
  });





  let aboutMeScroll = document.querySelector(".aboutMe3__scroll");
  document.addEventListener("", () => {});

  let dot1 = document.querySelector(".dot1");
  // let dot2 = document.querySelector(".dot2");
  // let dot3 = document.querySelector(".dot3");
  console.log(dot1);
  // let progressValue = document.querySelectorAll(".aboutMe__progress-value");

  let progressValue1 = document.getElementById("value75"); // die 75 in '75%'
  // let progressValue1 = document.querySelector("#value75");  // die 75 in '75%'
  // let progressValue1 = document.querySelector(".aboutMe__progress-value");  // die 75 in '75%'
  let progressValue2 = document.getElementById("value80"); // die 80 in '80%'
  let progressValue3 = document.getElementById("value50"); // usw.
  let progressValue4 = document.getElementById("value35");

  // let progressStartValue = 0; // StartValue = "offset"
  // let progressEndValue1 = 75; // EndValue = "target"
  // let speed = 50;

  // if (progressValue1.innerHTML == progressEndValue1) {
  //   // setTimeOut
  //   const progress1 = setInterval(() => {
  //     progressStartValue++;

  //     progressValue1.textContent = `${progressStartValue}`;
  //     if (progressStartValue == progressEndValue1) {
  //       clearInterval(progress1);
  //     }
  //   }, speed);
  /**/

  const circles = [
    { id: progressValue1, offset: 0, target: 75, delay: 30 },
    { id: progressValue2, offset: 0, target: 80, delay: 32 },
    { id: progressValue3, offset: 0, target: 50, delay: 20 },
    { id: progressValue4, offset: 0, target: 35, delay: 17 },
  ];

  circles.forEach((circle) => {
    console.log("Circles Values rolling!");
    onLoadingTime(circle);
    // verarbeitung und steuerung im DOM
  });
});

function onLoadingTime(circle) {
  // setTimeout runs code only once
  let timeOut = setInterval(() => {
    // if (circle.id.innerHTML == circle.target) {
    circle.offset++;
    circle.id.innerHTML = `${circle.offset}`;
    if (circle.offset == circle.target) {
      // console.log("true");
      clearInterval(timeOut);
    }
  }, circle.delay);
}

/*
// if (progressValue1.innerHTML == progressEndValue1) {
//   // setTimeOut
//   const progress1 = setInterval(() => {
//     progressStartValue++;

//     progressValue1.textContent = `${progressStartValue}`;
//     if (progressStartValue == progressEndValue1) {
//       clearInterval(progress1);
//     }
//   }, speed);
*/

// let circle75 = document.querySelector(".circlee");
// console.log(circle75)
// let progressValue1 = document.querySelector(".value75");  // die 75 in '75%'

let skillsSection = document.getElementById("aboutMe__skills-container");
window.addEventListener("scroll", () => {
  // Treffpunkt von position des Elements "skillsSection" und
  // screenposition "windows.innerHeight",
  // section <kleiner als screen

  const sectionPosition = skillsSection.getBoundingClientRect().top;
  const screenposition = window.innerHeight;
  /* 
  function showProgress(params) {
  progressBarsAll.forEach((progressBar) => {
  const progressValue = progressBar.dataset.progress;
  circles.forEach((circle) => {
  const setTime = setTimeout(() => {
  onLoadingTime(circle);
  console.log(circle.);
  }, 100);
  clearTimeout(setTime);
  });
  circle75.classList.add("cirlce75");
  }
  function hideProgress(params) {
  circle75.classList.remove("cirlce75");
  }
  */
  if (sectionPosition < screenposition) {
    // console.log("skillsSection is klein: " + sectionPosition);
    // showProgress();
    // dot1.classList.add("dot1");
    console.log("...");
  } else {
    // hideProgress();
    console.log(".344.");

    // console.log("screenPosition is big: " + screenPosition);
  }
});
