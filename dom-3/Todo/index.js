var trialdata = [];
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
function listRendrer() {
  trialdata.forEach((e) => {
    document.querySelector(".listContainer").innerHTML =
      document.querySelector(".listContainer").innerHTML +
      ` <div class="todoListContainer">
        <div class="todo">
          ${e.todo}
        </div>
        <img src="./assets/delete.svg" class="dltBtn" onclick="deleteTodo(this)" />
        <img src="./assets/mod.svg" class="modBtn" onclick="editTodo(this)" />
        <div class="hidden">${e.id}</div>
      </div>`;
  });
  //   console.log("called");
}
listRendrer();

function deleteTodo(t) {
  let index = new Number();
  let element = t.parentNode.querySelector(".hidden").innerText;
  // trialdata.forEach((e, i) => {
  //   if (e.id == element.innerText) {
  //     index = i;
  //     //   console.log(index);
  //   }
  // });

  //   console.log(index);
  // trialdata.splice(index, 1);
  console.log(element);
  trialdata = trialdata.filter((e) => e.id != element);
  //   console.log(trialdata);

  document.querySelector(".listContainer").innerHTML = "";
  listRendrer();
}

function addTodo() {
  let value = String(document.querySelector(".input").value);
  let id = trialdata.length;
  if (value.trim() != "") {
    trialdata.push({
      todo: value,
      id: idGenerator(),
    });
  }
  document.querySelector(".input").value = "";
  document.querySelector(".listContainer").innerHTML = "";

  listRendrer();
}

function editTodo(t) {
  let id = t.parentNode.querySelector(".hidden").innerText;
  //   console.log(index);
  let data = prompt("YOLO", `${t.parentNode.querySelector(".todo").innerText}`);
  //   console.log(data);
  if (data.trim() != "") {
    trialdata.forEach((e, i) => {
      if (e.id == id) {
        trialdata.splice(i, 1, { todo: data, id: idGenerator() });
        //   console.log(trialdata);
        document.querySelector(".listContainer").innerHTML = "";

        listRendrer();
      }
    });
  } else {
    alert("Do modication to apply");
  }
}
