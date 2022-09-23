function insert(val) {
  document.querySelector(".input").textContent =
    document.querySelector(".input").textContent + val;
}

function removeOne() {
  let newArray = document.querySelector(".input").textContent.split("");
  newArray.pop();
  let finalString = new String();
  for (const n of newArray) {
    finalString = finalString + n;
  }
  document.querySelector(".input").textContent = finalString;
}

function erase() {
  document.querySelector(".input").textContent = "";
}

function ans() {
  let value = eval(document.querySelector(".input").textContent);
  document.querySelector(".input").textContent = value;
}
