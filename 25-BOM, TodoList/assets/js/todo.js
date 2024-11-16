let form = document.querySelector("form");
let input = document.querySelector("#input");
let list = document.querySelector(".list");

let api = [
  //   {
  //     id: 1,
  //     title: "wake up",
  //   },
  //   {
  //     id: 2,
  //     title: "brush teeth",
  //   },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTodo = {
    id: api.length + 1,
    title: input.value,
  };
  api.push(newTodo);
  console.log(api);
  list.innerHTML = "";
  createTodo();
});

function createTodo() {
  list.innerHTML = "";
  api.forEach((todo) => {
    let li = document.createElement("li");
    li.setAttribute("data-id", todo.id);
    li.classList.add("list_item");

    let span = document.createElement("span");
    span.textContent = todo.title;
    span.classList.add("task");

    let setting = document.createElement("div");
    setting.classList.add("setting");

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can");

    let editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-pen-to-square");

    setting.append(deleteIcon, editIcon);
    li.append(span, setting);
    // if (input.value === "") {
    //   alert("Please enter a todo");
    //   return;
    // }
    list.appendChild(li);

    deleteIcon.addEventListener("click", (e) => {
      let parenElem = e.target.closest(".list_item");
      let id = parenElem.getAttribute("data-id");

      let findIndex = api.findIndex((todo) => todo.id == id);
      if (findIndex !== -1) {
        api.splice(findIndex, 1);
      }
      console.log(api);
      createTodo();
      //   parenElem.remove();
    });
    editIcon.addEventListener("click", (e) => {
      let parenElem = e.target.closest(".list_item");
      let currentText = parenElem.querySelector(".task");
      let newText = prompt("Edit Todo", currentText.textContent);

      if (newText === null || newText === "") {
        alert("Please enter a todo");
        return;
      }

      let id = parenElem.getAttribute("data-id");

      let findTodo = api.find((todo) => todo.id == id);

      if (findTodo) {
        findTodo.title = newText;
          createTodo();
          console.log(api)
      }
    });

    input.value = "";
  });

  //   let li = document.createElement("li");
  //   li.classList.add("list_item");

  //   let span = document.createElement("span");
  //   span.textContent = input.value;
  //   span.classList.add("task");

  //   let setting = document.createElement("div");
  //   setting.classList.add("setting");

  //   let deleteIcon = document.createElement("i");
  //   deleteIcon.classList.add("fa-solid", "fa-trash-can");

  //   let editIcon = document.createElement("i");
  //   editIcon.classList.add("fa-solid", "fa-pen-to-square");

  //   setting.append(deleteIcon, editIcon);
  //   li.append(span, setting);
  //   if (input.value === "") {
  //     alert("Please enter a todo");
  //     return;
  //   }
  //   list.appendChild(li);

  //   deleteIcon.addEventListener("click", (e) => {
  //     let parenElem = e.target.closest(".list_item");
  //     parenElem.remove();
  //   });
  //   editIcon.addEventListener("click", (e) => {
  //     let parenElem = e.target.closest(".list_item");
  //     let currentText = parenElem.querySelector(".task");
  //     let newText = prompt("Edit Todo", currentText.textContent);
  //     if (newText !== null && newText !== "") {
  //       currentText.textContent = newText;
  //     }
  //   });

  //   input.value = "";
}
