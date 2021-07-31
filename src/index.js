import "./css/common.css";
import galleryItems from "./gallery";
import createImagesList from "./markup";

const ulListImages = document.querySelector(".js-gallery");
const cardImages = createImagesList(galleryItems);
ulListImages.insertAdjacentHTML("beforeend", cardImages);
const modal = document.querySelector(".js-lightbox");
ulListImages.addEventListener("click", imageContainerClick);
const imageOpenModal = document.querySelector(".lightbox__image");
const overlayRef = document.querySelector(".lightbox__overlay");

const closeModal = document.querySelector(".lightbox__button");
closeModal.addEventListener("click", closeModalClick);

window.addEventListener("keyup", closeModalClickEscape);

overlayRef.addEventListener("click", onBackDropClick);

function imageContainerClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  modal.classList.add("is-open");
  imageOpenModal.src = event.target.dataset.source;
}

function closeModalClick(event) {
  modal.classList.remove("is-open");
  imageOpenModal.src = "";
}

function onBackDropClick(event) {
  if (event.target !== overlayRef) {
    return;
  }
  closeModalClick();
}

function closeModalClickEscape(event) {
  if (event.key !== "Escape") {
    return;
  }
  closeModalClick();
}
