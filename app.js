/*
Jednoduchá galerie
Repo: vydristopa/galerie
Author: vydristopa & danielsebesta
*/

function openLightbox(element) {
	const lightbox = document.getElementById("lightbox");
	const lightboxObrazek = document.getElementById("lightbox-obrazek");
	lightboxObrazek.src = element.src;
	lightbox.classList.add("lightbox-show");
}

function closeLightbox() {
	const lightbox = document.getElementById("lightbox");
	lightbox.classList.remove("lightbox-show");
}
