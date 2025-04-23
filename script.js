"use strict";
const btnShowModal = document.querySelectorAll(".show-modal");
//in querySelector we use . before specifying any class where as in the manipulation with class using any methods like add, remove, contains we dont use . before specifying any class.
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const closeModal = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// console.log(btnShowModal);
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
  {
    console.log("modal opened and overlay enabled");
  }
  // the function inside the event handler was then applied by the fucntion named as addHidden
  //   btnCloseModal.addEventListener("click", function () {
  //     modal.classList.add("hidden");
  //     overlay.classList.add("hidden");
  //   });
  btnCloseModal.addEventListener("click", closeModal); //here after the functin name addHidden the parenthesis were not added because otherwise function would be immediately invoked not after happening of the event but immediately

  overlay.addEventListener("click", closeModal);
}
//keyboard events look for it in the obsidian

// document.addEventListener("keydown", function () {
//   console.log("a key was pressed");
// });
document.addEventListener("keydown", function (e) {
  // the parameter e is holding the value of key pressed meaning this parameter is actually the pressed key.
  console.log(e.key + " was pressed");
  //   if (e.key === "Escape") {
  //     if (!modal.classList.contains("hidden")) {
  //       // condition here: if modal class does not containes hidden
  //       closeModal();
  //     }
  //after refactoring
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
