const toDoForm = document.querySelector(".js-todoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-todoList");

let toDoS = [];
const TODOS = "ttoddo";

function saveTodos() {
  localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function dele(event) {
  const dlbtn = event.target;
  const li = dlbtn.parentNode;
  toDoList.removeChild(li);
  const a = toDos.filter(function (todo) {
    return todo.id !== li.id;
  });
  toDos = a;
  saveTodos();
}

function printToDo(text) {
  const li = document.createElement("li");
  const dlbt = document.createElement("button");
  const span = document.createElement("span");
  dlbt.innerText = "x";
  dlbt.addEventListener("click", dele);
  span.innerText = text;
  li.appendChild(dlbt);
  li.appendChild(span);
  toDoList.appendChild(li);
  const NewId = toDoS.length + 1;
  li.id = NewId;
  const toDoOBJ = {
    text: text,
    id: NewId,
  };
  todos.pust(toDoOBJ);
  saveTodos();
}

function subHandle(event) {
  event.preventDefoult();
  const curValue = toDoInput.value;
  printToDo(curValue);
  toDoInput.value = "";
}

function init() {
  load();
  toDoForm.addEventListener("submit", subHandle);
}

init();
