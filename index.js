console.log('My code is running');

// selects form by id #todo-form and prevents form submission from refreshing the page
document.querySelector("#todo-form").addEventListener("submit", (event) => {
    event.preventDefault(); 

    // Gets user input and trims spaces
    let taskText = document.querySelector("#todo-input").value.trim(); 

    // Prevents adding an empty task
    if (!taskText) return; 

    // Creates a new list item
    let li = document.createElement("li"); 

    // Adds task text and delete button
    li.innerHTML = `<span>${taskText}</span> <button class="delete-btn">Delete</button>`; 

    // Cross out task when clicked
    li.querySelector("span").addEventListener("click", () => li.classList.toggle("completed")); //changes class of <li> to completed when clicked, for CSS strikethrough. 

    // Deletes task when button is clicked
    li.querySelector(".delete-btn").addEventListener("click", () => li.remove()); 
    

    // Appends new task to the list
    document.querySelector("#todo-list").appendChild(li); 

    // Clears input field after adding a task
    document.querySelector("#todo-input").value = ""; 
});
