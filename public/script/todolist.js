document.addEventListener("DOMContentLoaded", () => {
    // Get references to DOM elements
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const filters = document.querySelectorAll(".filter");
    const darkToggle = document.getElementById("darkModeToggle");
    const deleteModal = document.getElementById("deleteModal");
    const confirmDelete = document.getElementById("confirmDelete");
    const cancelDelete = document.getElementById("cancelDelete");

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let currentFilter = "all";
    let taskToDelete = null;

    // Save tasks to localStorage
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Handle Add Task button click
    addTaskBtn.addEventListener("click", () => {
      const text = taskInput.value.trim();
      if (text) {
        const newTask = { id: Date.now(), text, completed: false };
        tasks.push(newTask);
        taskInput.value = "";
        saveTasks();
        renderTasks();
      }
    });

    // Render tasks based on current filter
    function renderTasks() {
      taskList.innerHTML = "";

      const filtered = tasks.filter(task => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
      });

      filtered.forEach(task => {
        const li = document.createElement("li");

        const content = document.createElement("div");
        content.className = "task-content";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "done-checkbox";
        checkbox.checked = task.completed;

        // Toggle task completion
        checkbox.addEventListener("change", () => {
          task.completed = checkbox.checked;
          saveTasks();
          renderTasks();
        });

        const span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) span.classList.add("completed");

        content.appendChild(checkbox);
        content.appendChild(span);

        const buttons = document.createElement("div");
        buttons.className = "task-buttons";

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.innerHTML = "🖉";
        editBtn.className = "edit-btn";
        editBtn.addEventListener("click", () => {
          const newText = prompt("Edit task:", task.text);
          if (newText !== null && newText.trim() !== "") {
            task.text = newText.trim();
            saveTasks();
            renderTasks();
          }
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = "🗑️"; // Simple trash emoji


        deleteBtn.addEventListener("click", () => {
          taskToDelete = task.id;
          deleteModal.style.display = "flex";
        });

        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);

        li.appendChild(content);
        li.appendChild(buttons);
        taskList.appendChild(li);
      });
    }

    // Filter buttons logic
    filters.forEach(btn => {
      btn.addEventListener("click", () => {
        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderTasks();
      });
    });

    // Toggle dark mode
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });

    // Cancel delete confirmation
    cancelDelete.addEventListener("click", () => {
      taskToDelete = null;
      deleteModal.style.display = "none";
    });

    // Confirm delete and remove task
    confirmDelete.addEventListener("click", () => {
      if (taskToDelete !== null) {
        tasks = tasks.filter(t => t.id !== taskToDelete);
        saveTasks();
        renderTasks();
        deleteModal.style.display = "none";
      }
    });

    // Initial render
    renderTasks();
  });

  // Logout
  document.getElementById("logoutBtn").addEventListener("click", () => {
localStorage.removeItem("loggedInUser");
window.location.href = "/login";
});
