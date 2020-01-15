var todoList = {
    todos: ['item 1', 'item 2', 'item 3'], // Сохранение данных
    displayTodos: function() {
        console.log('My todos: ', this.todos); // Вывод данных
    },
    addNewTodo: function(todo) {  // Добавление новых данных
        this.todos.push(todo);
        this.displayTodos();
    }
};

todoList.displayTodos();
todoList.addNewTodo('item 4');

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




