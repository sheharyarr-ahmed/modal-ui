"use strict";
const btnShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const addHidden = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

// console.log(btnShowModal);
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    console.log("modal opened and overlay enabled");
  });

  btnCloseModal.addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", addHidden);
}
