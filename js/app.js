const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("No puedes agregar una tarea vacía");
        return;
    }

    const li = document.createElement("li");
    li.classList.add("task");

    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">❌</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
});

// Evento para completar o eliminar tarea
taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("complete-btn")) {
        event.target.closest("li").classList.toggle("completed");
    }

    if (event.target.classList.contains("delete-btn")) {
        event.target.closest("li").remove();
    }
});
