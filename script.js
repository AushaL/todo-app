var todoList = {
    todos: [], // Сохранение данных
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
            console.log('My todos:'); // Вывод данных
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
    },
    addNewTodo: function(todoText) {  // Добавление новых данных
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) { // Изменение данных 
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) { // Удаление данных
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};


todoList.addNewTodo('item 1');
todoList.toggleCompleted(0);
todoList.addNewTodo('item 2');
todoList.addNewTodo('item 3');
todoList.addNewTodo('item 4');
todoList.addNewTodo('item 5');
todoList.toggleCompleted(4);
todoList.toggleCompleted(2);