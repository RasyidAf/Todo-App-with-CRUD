window.onload = () => {
  const inputTask = document.getElementById("input");
  const addButton = document.getElementById("add-button");
  const taskList = document.querySelector(".task-list");

  addButton.addEventListener("click", () => {
    if (inputTask.value === "") {
      alert("The input is empty, please add task first");
      return;
    }

    const newTask = document.createElement("div");
    newTask.className = "task";

    const newHead = document.createElement("h4");
    newHead.textContent = inputTask.value;
    newHead.style.display = "inline";

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "btn-group";

    const editButton = document.createElement("button");
    editButton.id = "edit-button";
    editButton.textContent = "Edit";

    editButton.addEventListener("click", () => {
      const newText = prompt("add your new text", newHead.textContent);
      if (newText) {
        newHead.textContent = newText;
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.id = "delete-button";
    deleteButton.textContent = "x";

    deleteButton.addEventListener("click", () => {
      taskList.removeChild(newTask);
    });

    newTask.appendChild(newHead);
    newTask.appendChild(buttonGroup);
    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(deleteButton);
    taskList.appendChild(newTask);

    inputTask.value = "";
  });
};
