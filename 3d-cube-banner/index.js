const cube = document.querySelector(".cube");

let deg = 0;

setInterval(() => {
  deg = deg - 90;
  cube.style.transform = "rotateX(" + deg + "deg)";
}, 1000);
