function insert(num) {
  var tV = document.querySelector(".textview");
  tV.value = String(tV.value) + num;
}

function equals() {
  let sum = eval(document.querySelector(".textview").value);
  document.querySelector(".textview").value = sum;
}

function clean() {
  document.querySelector(".textview").value = "";
}

function back() {
  if (document.querySelector(".textview").value !== "") {
    let newArr = String(document.querySelector(".textview").value).split("");
    newArr.pop();
    let finalString = new String();
    for (const o of newArr) {
      finalString = finalString + o;
    }
    document.querySelector(".textview").value = finalString;
  }
}
