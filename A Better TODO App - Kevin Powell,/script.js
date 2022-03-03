const listContainer = document.querySelector('[data-lists]'); // [data-lists] is the new selector that we'll add to html. [] shows that it's custom data attribute.
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]'); 


// we'll create a list to hold our list. It is empty at first because there are no lists when our file loads.
// we switched to objects because we want to add className of active to the list that is clicked on. For that we need to store id.
// let lists = [{id: 1,name: 'name'}, { id: 2, name: 'todo'}] ;

// we have to store lists in browser localstorage. For that we'll create a key.
// using '.' in key name, prevents overwriting previous data.
const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';     // We store which list we select, so that when we reload it persists.
const lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];   //we get stored tasks or we'll have an empty list.
const selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);   //we get the selected list id from storage.




// When we have dynamically created elements, it's not easy to add event listeners on them. So, we can add event listeners to the parent instead and check if our desired child is clicked and then apply the functionality.
listContainer.addEventListener('click', e => {
  console.log('container is clicked.');
  if(e.target.tagName.toLowerCase() === 'li'){
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});


newListForm.addEventListener('submit', event => {
  event.preventDefault(); // this prevents the page from refreshing.
  const listName = newListInput.value;
  if(listName == null || listName === '') return;
  
  const newList = createList(listName);
  newListInput.value = null; //clearing the input
  lists.push(newList); // pushing to lists array
  saveAndRender();
});

function createList(name){
  // this function creates a list for us.
  const newList = 
  {
    id: Date.now().toString(), 
    name: name,
    tasks: []     //a list will have eventaully some tasks, which right now are not there. So we are creating an empty array for tasks for later use.
  }; 
  return newList;
}

function saveAndRender(){
  saveToLocalStorage();
  render();
}

// Save to Local Storage
function saveToLocalStorage(){
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

// a rendered function will render the lists to the DOM
function render(){
  clearElement(listContainer);
  lists.forEach(list => {
    const listElement = document.createElement('li');
    // The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements.
    // listId enables us to identify which list is selected.
    listElement.dataset.listId = list.id;
    listElement.classList.add('list-name');
    listElement.innerText = list.name; //list actually contains the text that we want to store in the list element.
    
    // adding the active-list class to the list after retrieving it from storage for it to become bold.
    if(list.id === selectedListId){
      listElement.classList.add('active-list');
    }
    listContainer.appendChild(listElement);
  });
}

function clearElement(element){
  // this function will clear the element from all children. But how does it do it, i dont' know.
  while(element.firstChild){
    element.removeChild(element.firstChild);
  }
}

render();