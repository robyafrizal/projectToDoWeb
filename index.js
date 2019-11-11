//Add new To Do List
const addBtn = document.getElementById("btn");
const inputs = document.getElementById("input");

function addTodo() {
  if (inputs.value === "") {
    alert("You must enter To Do List!");
  } else {
    const lists = document.getElementById("list");

    const li = document.createElement("li");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = " checkbox";

    const i = document.createElement("i");
    i.setAttribute("onclick", "deleteList()");
    i.className = "far fa-trash-alt trashIcon";

    li.innerHTML = inputs.value;
    li.appendChild(input);
    li.appendChild(i);
    lists.appendChild(li);

    inputs.value = "";
  }
}
addBtn.addEventListener("click", addTodo);

inputs.addEventListener("keydown", event => {
  if (event.which === 13) {
    event.preventDefault();
    addTodo();
  }
});

//Add Delete
const li = document.querySelectorAll("li");
console.log(li);
const deleteBtn = document.querySelector(".trashIcon");
// console.log(deleteBtn);
// li.appendChild(deleteBtn);

function deleteList(index) {
  console.log(this);
  for (let i = 0; i < [...li].length; ++i) {
    li[index].parentNode.removeChild(li[index]);
  }
}
deleteBtn.addEventListener("click", deleteList(index));

//TAdd Refresh
const refreshBtn = document.querySelector(".refreshIcon");
refreshBtn.addEventListener("click", refreshItem);

function refreshItem() {
  window.location.reload();
}

//Add Edit
const editBtn = document.querySelector(".checkbox");

editBtn.addEventListener("click", edit);
function edit() {
  alert("Edit List");
}
