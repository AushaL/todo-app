// Сохранение данных

var todos = ['item 1', 'item 2', 'item 3'];

// Вывод данных

function displayTodos() {
    console.log('My todos: ', todos);
}

displayTodos();

// Добавление новых данных

function addNewTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addNewTodo('item 4');

// Изменение данных 

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

changeTodo(2, 'new todo');

// Удаление данных

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(1);

