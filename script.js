var todoList = {
    todos: ['item 1', 'item 2', 'item 3'], // Сохранение данных
    displayTodos: function() {
        console.log('My todos: ', this.todos); // Вывод данных
    },
    addNewTodo: function(todo) {  // Добавление новых данных
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) { // Изменение данных 
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) { // Удаление данных
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

todoList.displayTodos();
todoList.addNewTodo('item 4');
todoList.changeTodo(2, 'new todo');
todoList.deleteTodo(2);




