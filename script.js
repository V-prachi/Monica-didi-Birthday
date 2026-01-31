let ball1 = document.querySelector("#ball1");
let ball2 = document.querySelector("#ball2");
let ball3 = document.querySelector("#ball3");
let ball4 = document.querySelector("#ball4");
let blastsound = new Audio("video.mp4");

ball1.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 200,
    origin: { y: 0.3, x: 0.3 },
    angle: 270,
  });
  blastsound.play();
  let div = document.createElement("div");
  div.innerText = "Happy";
  div.classList.add("Text");
  ball1.appendChild(div);
  ball1.classList.remove("balloon");
});

ball2.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 200,
    origin: { y: 0.4, x: 0.4 },
    angle: 270,
  });
  blastsound.play();
  let div = document.createElement("div");
  div.innerText = "Birthday";
  div.classList.add("Text");
  ball2.appendChild(div);
  ball2.classList.remove("balloon");
});

ball3.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 200,
    origin: { y: 0.3, x: 0.5 },
    angle: 270,
  });
  blastsound.play();
  let div = document.createElement("div");
  div.innerText = "Monica";
  div.classList.add("Text");
  ball3.appendChild(div);
  ball3.classList.remove("balloon");
});

ball4.addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 200,
    origin: { y: 0.4, x: 0.7 },
    angle: 270,
  });
  blastsound.play();
  let div = document.createElement("div");
  div.innerText = "didi";
  div.classList.add("Text");
  ball4.appendChild(div);
  ball4.classList.remove("balloon");
});
