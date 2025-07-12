function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add delete option
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.float = "right";
  deleteBtn.style.background = "transparent";
  deleteBtn.style.border = "none";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = ""; // clear input
  }
