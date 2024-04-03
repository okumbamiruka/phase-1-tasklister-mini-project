document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const tasks = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskDescription = document.querySelector("#new-task-description");
    const taskValue = taskDescription.value;

    if (taskValue === "") {
      alert("Please enter a task");
    }else{
      const taskList = document.createElement("li")
      const deleteButton = document.createElement("button")
      taskList.textContent = taskValue
      deleteButton.textContent = "X"
      tasks.appendChild(taskList)
      taskList.appendChild(deleteButton)

      deleteButton.addEventListener("click",() =>{
        taskList.remove()
      })
    }
    form.reset();
  })
})