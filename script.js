// Сохранение данных

var todos = ['item 1', 'item 2', 'item 3'];

// Вывод данных

function displayTodos() {
    console.log('My todos: ', todos);
}

displayTodos()

// Добавление новых данных

function addNewTodo(todo) {
    todos.push(todo);
    displayTodos()
}

addNewTodo('item 4');

// Изменение данных 

todos[0] = 'start';

// Удаление данных

todos.splice(0, 1);


