//harkirat simple Todo
// let globalId = 1;
//     function markAsDone(todoId) {
//       const parent = document.getElementById(todoId);
//       parent.children[2].innerHTML = "Done!"
//     }

//     function createChild(title, description, id) {
//       const child = document.createElement("div");
//       const firstGrandChild = document.createElement("div");
//       firstGrandChild.innerHTML = title;
//       const secondGrandChild = document.createElement("div");
//       secondGrandChild.innerHTML = description;
//       const thirdGrandParent = document.createElement("button");
//       thirdGrandParent.innerHTML = "Mark as done";
//       thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
//       child.appendChild(firstGrandChild);
//       child.appendChild(secondGrandChild);
//       child.appendChild(thirdGrandParent)
//       child.setAttribute("id", id);
//       return child;
//     }
//     function addTodo() {
//       const title = document.getElementById("title").value;
//       const description = document.getElementById("description").value;
//       const parent = document.getElementById("todos");
//       parent.appendChild(createChild(title, description, globalId++));
//     }




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
