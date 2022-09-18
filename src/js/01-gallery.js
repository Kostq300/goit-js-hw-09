// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems.map((image) =>
    `<div class="gallery__item">
    <a class="gallery__link" href=${image.original}>
    <img 
        class="gallery__image"
        src=${image.preview}
        data-source=${image.original}
        alt=${image.description}
        />
        </a>
        </div>`).join("");

gallery.innerHTML = markup;

gallery.innerHTML = markup;

let galleryLightbox = new SimpleLightbox('.gallery a', {captionsData: "alt",  captionDelay: 250,});