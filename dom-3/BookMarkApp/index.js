let item = [];

function idGenerator() {
  let alphArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  let uid = new String();
  for (let i = 0; i < 6; i++) {
    uid = uid + alphArr[Math.floor(Math.random() * 35)];
  }

  return uid;
}
function addItem() {
  let value = String(document.querySelector(".input").value);
  if (value.trim() != "") {
    item.push({ id: idGenerator(), value: value });
    let finalObject = JSON.stringify(item);
    //   console.log(item);
    localStorage.setItem("todo", finalObject);
    listRendrer(item);
    document.querySelector(".input").value = "";
  } else {
    alert("Enter link to add to list");
  }
}
// function deleteItem(t){

// }

function listRendrer(items) {
  document.querySelector(".listContainer").innerHTML = "";
  items.forEach((e) => {
    document.querySelector(".listContainer").innerHTML =
      document.querySelector(".listContainer").innerHTML +
      `<div class="listItem">
    <div style="display:none" class="id">${e.id} </div>
    <div class="valueContainer">
    <div class="value"> ${e.value}</div>
    </div>
    <div class="btnContainer">
    <div class="cpyBtn" onclick="copyLink(this)">Copy</div>
    <div class="dltBtn" onclick="deleteItem(this)">Delete</div>
    </div>
</div>`;
  });
}

function initialStart() {
  let values = JSON.parse(localStorage.getItem("todo"));
  if (values.length != null) {
    item = item.concat(values);

    listRendrer(values);
  }
}
initialStart();

// Copy fxn only work in chromium based browser
function copyLink(t) {
  let textTocopy = String(
    t.parentNode.parentNode.querySelector(".value").innerText
  ).trim();
  console.log(textTocopy);
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      navigator.clipboard.writeText(textTocopy).then(
        () => {
          console.log("Sucssfully copied");
        },
        () => {
          console.log("Oops unable to copy");
        }
      );
    }
  });
}
function deleteItem(t) {
  let id = String(
    t.parentNode.parentNode.querySelector(".id").innerText
  ).trim();
  item = item.filter((e) => id != e.id);
  //   console.log(item);
  let finalObject = JSON.stringify(item);
  localStorage.setItem("todo", finalObject);
  listRendrer(item);
}
