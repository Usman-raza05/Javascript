const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a task
function addTask() {
    const taskText = input.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Toggle completion on click
    li.querySelector('.task-text').addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    // Delete task on button click
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    todoList.appendChild(li);
    input.value = ""; // Clear input
}

// Event Listeners
addBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add task
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});