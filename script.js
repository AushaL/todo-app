var todoList = {
    todos: [], 
    addNewTodo: function(todoText) {  
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) { 
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) { // 5. Удаление данных
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) { // 6. Меняем состояние "Выполнено" на противоположное 
        var todo = this.todos[position];
        todo.completed = !todo.completed;
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
    }
};

var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addNewTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEvenListeners: function() {
        var todosUl = document.querySelector('ul');
        todosUl/addEventListener('click', function(event) {
        var elementClicked = event.target;
        if (elementClicked.className === 'deleteButton') {
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        }
    });
    }
};

view.setUpEvenListeners();

// extra code

function runWithDebugger (myFunction) {
    
    myFunction();
}

setTimeout(function() {
    console.log('Wake up Neo!');
}, 1000)

var characters = ['Neo', 'Trinity', 'Morfeus'];

function logMatrixName(name) {
    console.log(name)
}

characters.forEach(logMatrixName);

function forEach(myArray, myFunction) {
    for(var i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}

forEach(characters, logMatrixName);