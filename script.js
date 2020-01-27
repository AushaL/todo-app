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

var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addNewTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
    }
};

// facebook clone

// var dataBase = [
//     {
//         userName: "Tom",
//         password: "666"
//     },
//     {
//         userName: "Sally",
//         password: "123"
//     },
//     {
//         userName: "Ingrid",
//         password: "555"
//     }
// ];

// var newsFeed = [
//     {
//         userName: "Bob",
//         timiLine: "So tired from all that learning"
//     },
//     {
//         userName: "Sally",
//         timiLine: "I hate my shitty life"
//     },
//     {
//         userName: "Mike",
//         timiLine: "Js is preety cool!"
//     }
// ];

// function isUserValid(userName, password) {
//     for (var i = 0; i < dataBase.length; i++) {
//         if (dataBase[i].userName === userName &&
//             dataBase[i].password === password) {
//                 return true;
//         }
//     }
//     return false;
// }

// function signIn(userName, password) {
//     if (isUserValid(userName, password)) {
//         console.log(newsFeed);
//     } else {
//         alert("Sorry, wrong username or password");
//     }
// }

// var userNamePrompt = prompt("What's your user name?");
// var passwordPrompt = prompt("What's your password?");
 
// signIn(userNamePrompt, passwordPrompt);