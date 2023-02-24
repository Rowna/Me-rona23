document.addEventListener("DOMContentLoaded", function (event) {
  //do work

  // let dot1 = document.querySelector(".dot1");
  // let dot2 = document.querySelector(".dot2");
  // let dot3 = document.querySelector(".dot3");

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
    { id: progressValue4, offset: 0, target: 35, delay: 20 },
  ];

  circles.forEach((circle) => {
    console.log(circle);
    onLoadingTime(circle);
    // verarbeitung und steuerung im DOM
  });
});

function onLoadingTime(circle) {
  let timeOut = setInterval(() => {
    // if (circle.id.innerHTML == circle.target) {
    circle.offset++;
    circle.id.innerHTML = `${circle.offset}`;
    if (circle.offset == circle.target) {
      // console.log("true");
      clearInterval(timeOut);
    }
  }, circle.delay);

  //
}
