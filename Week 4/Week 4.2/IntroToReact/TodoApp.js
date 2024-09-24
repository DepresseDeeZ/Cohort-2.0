// //advance todo with delete fucntionality
// let globalId = 1;

// function markAsDone(todoId) {
//   const parent = document.getElementById(todoId);
  
//   // Mark the todo as done and disable the "Mark as Done" button
//   parent.children[2].innerHTML = "Done!";
//   parent.children[2].disabled = true;

//   // Enable the "Remove" button only after marking as done
//   parent.children[3].disabled = false;
// }

// function removeTodo(todoId) {
//   const parent = document.getElementById(todoId);  // Select the todo item by ID
//   parent.remove();  // Remove the child from the DOM
// }

// function createChild(title, description, id) {
//   // Create a new todo div
//   const child = document.createElement("div");
  
//   // Add title
//   const firstGrandChild = document.createElement("div");
//   firstGrandChild.innerHTML = title;

//   // Add description
//   const secondGrandChild = document.createElement("div");
//   secondGrandChild.innerHTML = description;

//   // Add "Mark as Done" button
//   const markDoneBtn = document.createElement("button");
//   markDoneBtn.innerHTML = "Mark as done";
//   markDoneBtn.setAttribute("onclick", `markAsDone(${id})`);

//   // Add "Remove" button (initially disabled)
//   const removeBtn = document.createElement("button");
//   removeBtn.innerHTML = "Remove";
//   removeBtn.setAttribute("onclick", `removeTodo(${id})`);
//   removeBtn.disabled = true; // Disable initially, enabled only when done

//   // Append all elements to the todo div
//   child.appendChild(firstGrandChild);
//   child.appendChild(secondGrandChild);
//   child.appendChild(markDoneBtn);
//   child.appendChild(removeBtn);

//   // Set the unique ID of the todo div
//   child.setAttribute("id", id);
  
//   return child;
// }

// function addTodo() {
//   // Get title and description input values
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("description").value;

//   // Get the container for todos
//   const parent = document.getElementById("todos");

//   // Append the newly created todo child to the container
//   parent.appendChild(createChild(title, description, globalId++));

//   // Optionally, clear the input fields after adding a todo
//   document.getElementById("title").value = '';
//   document.getElementById("description").value = '';
// }



// harkirat simple Todo
let globalId = 1;
    function markAsDone(todoId) {
      const parent = document.getElementById(todoId);
      parent.children[2].innerHTML = "Done!"
    }

    function createChild(title, description, id) {
      const child = document.createElement("div");
      const firstGrandChild = document.createElement("div");
      firstGrandChild.innerHTML = title;
      const secondGrandChild = document.createElement("div");
      secondGrandChild.innerHTML = description;
      const thirdGrandParent = document.createElement("button");
      thirdGrandParent.innerHTML = "Mark as done";
      thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
      child.appendChild(firstGrandChild);
      child.appendChild(secondGrandChild);
      child.appendChild(thirdGrandParent)
      child.setAttribute("id", id);
      return child;
    }
    function addTodo() {
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const parent = document.getElementById("todos");
      parent.appendChild(createChild(title, description, globalId++));
    }




// function addTodo() {
//     const title = document.getElementById("title").value;
//     const desc = document.getElementById("description").value;
//     console.log(title);
//     console.log(desc);
//     const el = document.getElementById("container");
//     //propoer way to do this
//     //docuemnt.createElement'
//     const childDiv = document.createElement("div") //<div></div> create a div
//     childDiv.innerHTML  = title;

//     el.appendChild(childDiv)

//     const innerDiv1 = document.createElement("div");
//     const innerDiv2 = document.createElement("div");
//     const innerBtn = document.createElement("button");
//     el.innerHTML









//   // document.getElementById("container").innerHTML = "ehllo";

//   // //easy idiot way
//   // el.innerHTML = `
//   //         <div>${desc}</div>
//   //         <button>Mark as Done</button>
//   // `;

// //   //another way to solve this  similar to append but by brute force with any tags
//     // const original  =document.getElementById("container").innerHTML;

// //   el.innerHTML = original+ `
// //           <div>${title}</div>
// //           <div>${desc}</div>
// //           <button>Mark as Done</button>`;


// }
