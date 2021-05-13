//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//Event-listeners
todoButton.addEventListener('click', addTodo)

//functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault()
    //create div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    console.log(todoDiv)
    //create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //check mark button

    //trash button
}