var todoList = {
    todos: [], // Сохранение данных
    displayTodos: function() {
        console.log('My todos:'); // Вывод данных
        for (var i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i].todoText);
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

todoList.addNewTodo('item 4');
todoList.changeTodo(0, 'new todo');
// todoList.deleteTodo(2);

todoList.toggleCompleted(0);