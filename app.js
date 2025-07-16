const todo = document.querySelector("#todoInput");
const ol = document.querySelector("#list");

const todoArr = []

function renderTodo(){
     ol.innerHTML = ""
      for(let i = 0; i < todoArr.length; i++){
        ol.innerHTML += `<li>
        ${todoArr[i]}
        <button onclick = "todoDeleted('todoArr[i]')">Delete</button>
        <button onclick = "todoUpdated('todoArr[i]')">Edit</button>
    </li>`
    }
    
}

function addTodo(){
    ol.innerHTML = ""
    todoArr.push(todo.value)
    console.log(todoArr);
    renderTodo()

    todo.value = ""
}


function todoDeleted(index){
    todoArr.splice(index, 1)
    renderTodo()
}

function todoUpdated(update){
    let todoUpdate = prompt("Enter new value")
    todoArr.splice(update, 1, todoUpdate)
    renderTodo()
}