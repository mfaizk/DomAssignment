var startT;
function startTime() {
  document.querySelector(".time-elapsed").textContent = "running";
  document.querySelector(".time-elapsed").style.cssText = "color:#CAD5E2";
  document.querySelector(".stop-btn").setAttribute("onclick", "timeElapsed()");

  startT = performance.now();
}

function timeElapsed() {
  let endTime = performance.now();
  document.querySelector(".time-elapsed").textContent =
    Math.round((endTime - startT) / 1000) + " sec";

  document.querySelector(".stop-btn").setAttribute("onclick", null);
}

function reset() {
  document.querySelector(".time-elapsed").textContent = "reseted";
  document.querySelector(".stop-btn").setAttribute("onclick", null);
}
