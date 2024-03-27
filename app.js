const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterOption = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

//Function to save task in your local storage
function savelocalTodos (todo)
{
    let todos;
    if (localStorage.getItem("todos") === null) {
    todos = [];
    } 
    else {
    todos = JSON.parse(localStorage.getItem("todos"));
    }   
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify("todos"));
}

//Function to add a new task
function addTodo(event){
    //prevent form submission
    event.preventDefault();

    //create a new todo div
    
}