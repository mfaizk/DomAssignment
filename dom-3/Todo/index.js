var trialdata = [];

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
  let element = t.parentNode.querySelector(".hidden");
  trialdata.forEach((e, i) => {
    if (e.id == element.innerText) {
      index = i;
      //   console.log(index);
    }
  });

  //   console.log(index);
  trialdata.splice(index, 1);
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
      id: id,
    });
  }
  document.querySelector(".input").value = "";
  document.querySelector(".listContainer").innerHTML = "";

  listRendrer();
}

function editTodo(t) {
  let index = t.parentNode.querySelector(".hidden").innerText;
  //   console.log(index);
  let data = prompt("YOLO", `${t.parentNode.querySelector(".todo").innerText}`);
  //   console.log(data);
  if (data.trim() != "") {
    trialdata.splice(index, 1, { todo: data, id: Number(index) });
    //   console.log(trialdata);
    document.querySelector(".listContainer").innerHTML = "";

    listRendrer();
  } else {
    alert("Do modication to apply");
  }
}
