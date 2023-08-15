function createBubbles() {
  let boxes = "";

  for (let i = 0; i < 126; i++) {
    let cal = Math.floor(Math.random() * 10);

    boxes += `<div class="bubbles">${cal}</div>`;
  }
  document.querySelector(".remainmain").innerHTML = boxes;
}
let timer = 60;
function runTimer() {
  let stop = setInterval(function () {
    if (timer > 0) {
      timer--;
    } else {
      clearInterval("stop");
      document.querySelector(".remainmain").innerHTML = `<h1>Game over</h1>`;
    }
    document.querySelector("#gettimer").textContent = timer;
  }, 1000);
}

let getclick = 0;
function getHit() {
  getclick = Math.floor(Math.random() * 10);
  document.querySelector("#gethit").textContent = getclick;
}
let score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#points").textContent = score;
}

let getBubbles = document.querySelector(".remainmain");
getBubbles.addEventListener("click", function (gettarget) {
    if (gettarget.target.classList.contains("bubbles")) {
  let getNum = Number(gettarget.target.textContent);
  if (getNum === getclick) {
    increaseScore();
    getHit();
    createBubbles();
  } else if (getNum != getclick) {
    decreaseScore();
    getHit();
    createBubbles();
  }
}
});

function decreaseScore() {
  score -= 5;
  document.querySelector("#points").textContent = score;
}

createBubbles();
runTimer();
getHit();
