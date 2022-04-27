
// Selectors

  const todoInput = document.querySelector('.todo-input');

  const todoButton = document.querySelector('.todo-button');

  const todoList = document.querySelector('.todo-list');



// Event Listeners

todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);




// Functions

function addTodo(event){
  event.preventDefault();
  // todo-div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create LI
  const newTodo = document.createElement('li');
  // change what the user put to a random kid activity (check below below)
  newTodo.innerText = randomKidActivity();
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  // TRASH BUTTON
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  // APPEND TO LIST
  todoList.appendChild(todoDiv);
  // CLEAR TODO INPUT VALUE
  todoInput.value = '';
}

function deleteCheck(e){
  const item = e.target;
  // DELETE todo
  if (item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    // animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function() {
      todo.remove();
    });
  }


// CHECK MARK
if(item.classList[0] === 'complete-btn'){
  const todo = item.parentElement;
  todo.classList.toggle('completed');
}

}


// array with random kid stuff
let kidActivity = ['can you help me with the homework?', 'I spilled food on the floor', 'Can I use your phone?',
                    'How many legs does a cricket have?', 'I ate all the ketchup', '*glass breaking noises in the other room*',
                    'How many books exist?', 'My pants are dirty on the inside', 'Can we have 17 dogs?', 
                  'Look, I can fit 8 t-shirts at the same time', 'what is sex?', 'Can you talk with turtles?',
                  'I drew us on the wall', 'Can you jump more than me?', 'I have invented a new color'];

function randomKidActivity () {
  let randomNum = Math.floor(Math.random() * kidActivity.length);
  return kidActivity[randomNum];
}
