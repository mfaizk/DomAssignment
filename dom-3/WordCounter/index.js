function wordCounter() {
  let input = String(document.querySelector(".input").value);
  let count = 0;
  for (const i of input.split("")) {
    if (i != " ") {
      count = count + 1;
    }
  }
  document.querySelector(".answer").innerText = count;
}

function loader() {
  document.querySelector(".loading").style.display = "flex";
  setTimeout(() => {
    wordCounter();
    document.querySelector(".loading").style.display = "none";
  }, 3000);
}

function reset() {
  document.querySelector(".input").value = "";
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".answer").innerText = "";
}
