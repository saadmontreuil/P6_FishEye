const main = document.getElementById('main');
const lightboxNode = document.getElementById('lightbox');
const slidesNode = document.querySelector('.lightbox-media');
const closeBtn = document.querySelector('.lightbox_btn-close');
const leftBtn = document.querySelector('.lightbox_btn-left');
const rightBtn = document.querySelector('.lightbox_btn-right');

// Open lightbox on position
const openLightbox = () => {
  main.classList.toggle('hidden');
  main.setAttribute('aria-hidden', 'true');
  lightboxNode.classList.toggle('hidden');
  lightboxNode.setAttribute('aria-hidden', 'false');
  document.querySelector('.photographer-counter').classList.toggle('hidden');
};

// Close lightbox
const closeLightbox = () => {
  main.classList.toggle('hidden');
  main.setAttribute('aria-hidden', 'false');
  lightboxNode.classList.toggle('hidden');
  lightboxNode.setAttribute('aria-hidden', 'true');
  slidesNode.querySelector('.visible').classList.replace('visible', 'hidden');
  document.querySelector('.widget').classList.toggle('hidden');
};

const startPosition = (node) => {
  const attribut = node.getAttribute('src');
  console.log(attribut);
  const imageLightbox = document.querySelector('.lightbox-media').querySelector(`[src="${attribut}"]`);
  console.log(imageLightbox);
  imageLightbox.parentElement.classList.replace('hidden', 'visible');
  openLightbox();
};

const displayLightbox = () => {
  const lightboxMediaNodes = document.querySelectorAll('.medium-container');

  lightboxMediaNodes.forEach((node) => {
    node.addEventListener('click', (event) => {
        startPosition(event.target);
    });
  });
};
