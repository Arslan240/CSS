
// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Functions
function addTodo(event){

  console.log('hello');
  event.preventDefault();
  // Todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  todoInput.value = ''; //to make the input box empty after submitting.
  newTodo.classList.add('todo-item'); //this class will be used to style the list.
  // append 
  todoDiv.appendChild(newTodo);

  // completed button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'; //adding icon to button.
  completedButton.classList.add('complete-btn');
  // append
  todoDiv.appendChild(completedButton);

  // delete button
  // checkmark button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'; //adding icon to button.
  deleteButton.classList.add('delete-btn');
  // append
  todoDiv.appendChild(deleteButton);

  // append to the list
  todoList.appendChild(todoDiv);
}

function deleteCheck(e){

  const clickedItem = e.target;
  const clickedTask = e.target.parentElement;

  if(clickedItem.classList[0] === 'delete-btn') {
    // Animation, so that animation completes first and then the element gets deleted.
    // 'transitionend' is a specific eventlistener which executes after the transition is completed, instead of completing instantly.
    clickedTask.classList.add('fall');
    clickedTask.addEventListener('transitionend',() => {
      clickedTask.remove();
    });
  }

  if(clickedItem.classList[0] === 'complete-btn') {
    // idk what toggle does.
    clickedTask.classList.toggle('completed');
    console.log(e.target.classList);
  }
}

function filterTodo(e){
  const todos = todoList.childNodes;
  // console.log(todos);
  todos.forEach((todo) => {
    console.log('inside foreach loop');
    switch(e.target.value) {
      case 'all':
        console.log(todo);
        todo.style.display = 'flex';
        break;
      case 'completed':
        if(todo.classList.contains('completed')){
          console.log(todo);
          todo.style.display = 'flex;'
        }
        else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
    }
  });
}