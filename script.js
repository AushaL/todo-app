var todoList = { // 0. Объект включает в себя весь функционал программы
    todos: [], // 1. Массив в который сохраненяются данные
    displayTodos: function() { // 2. Метод выводящий данные из массива todo в консоль
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!'); // Если массив пустой
        } else {
            console.log('My todos:'); 
            for (var i = 0; i < this.todos.length; i++) { // Если массив не пустой
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText); 
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
    },
    addNewTodo: function(todoText) {  // 3. Добавление новых данных в массив
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) { // 4. Изменение данных 
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) { // 5. Удаление данных
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) { // 6. Меняем состояние "Выполнено" на противоположное 
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    toggleAll: function() { // 7. Меняем свойство "Выполнено" всех объектов в массиве на противоположное
        var totalTodos = this.todos.length; 
        var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }

        this.displayTodos();
    }
};


var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();
});