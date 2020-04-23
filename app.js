const todoInput = document.querySelector("#inputField");
const todoButton = document.querySelector("#inputBtn");
const todoList = document.querySelector(".todolist");
const deleteBtn = document.querySelector(".deleteBtn");

todoButton.addEventListener("click", addToDo);
deleteBtn.addEventListener("click", deleteItem);

function addToDo(event) {
    event.preventDefault();
    const newToDo = "<div class='row'><div class='col-sm-10'><p>" + $("#inputField").val() + "</p></div><div class='col-sm-2'><button type='button' class='btn btn-success'><i class='fas fa-check'></i></button><button type='button' class='btn btn-warning deleteBtn'><i class='fas fa-trash-alt'></i></button></div></div>";
    $( ".todolist" ).append( newToDo );
}

function deleteItem(event) {
    console.log("delete");
}