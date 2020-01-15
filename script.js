var todoList = {
    todos: ['item 1', 'item 2', 'item 3'], // Сохранение данных
    displayTodos: function() {
        console.log('My todos: ', this.todos); // Вывод данных
    }

};

todoList.displayTodos();

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




