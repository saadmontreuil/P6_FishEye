/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */
const main = document.getElementById('main');
const lightboxNode = document.getElementById('lightbox');
const lightboxMedia = document.querySelector('.lightbox-media');
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
  lightboxMedia.querySelector('.visible').classList.replace('visible', 'hidden');
  document.querySelector('.photographer-counter').classList.toggle('hidden');
};

const startPosition = (node) => {
  const attribut = node.getAttribute('src');

  const imageLightbox = document.querySelector('.lightbox-media').querySelector(`[src="${attribut}"]`);

  imageLightbox.parentElement.classList.replace('hidden', 'visible');
  openLightbox();
};

const nextPosition = () => {
  const image = document.querySelector('.visible');
  image.classList.replace('visible', 'hidden');
  if (image.nextElementSibling) {
    image.nextElementSibling.classList.replace('hidden', 'visible');
  } else {
    lightboxMedia.firstChild.classList.replace('hidden', 'visible');
  }
};

const previousPosition = () => {
  const image = document.querySelector('.visible');
  image.classList.replace('visible', 'hidden');
  if (image.previousElementSibling) {
    image.previousElementSibling.classList.replace('hidden', 'visible');
  } else {
    lightboxMedia.lastChild.classList.replace('hidden', 'visible');
  }
};

const displayLightbox = () => {
  const lightboxMediaNodes = document.querySelectorAll('.medium-container');

  lightboxMediaNodes.forEach((node) => {
    node.addEventListener('click', (event) => {
      startPosition(event.target);
    });
    node.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        startPosition(event.target);
      }
    });
  });
};

closeBtn.addEventListener('click', closeLightbox);
rightBtn.addEventListener('click', nextPosition);
leftBtn.addEventListener('click', previousPosition);

// Event - Navigation Slider

leftBtn.addEventListener('click', previousPosition);
leftBtn.addEventListener('keydown', (e) => {
  if ((e.target === document.activeElement) && (e.key === 'Enter')) {
    previousPosition();
  }
});

rightBtn.addEventListener('click', nextPosition);
rightBtn.addEventListener('keydown', (e) => {
  if (e.target === document.activeElement && e.key === 'Enter') {
    nextPosition();
  }
});

document.addEventListener('keydown', (e) => {
  if ((lightboxNode.ariaHidden === 'false') && (e.key === 'ArrowLeft')) {
    previousPosition();
  }
});

document.addEventListener('keydown', (e) => {
  if ((lightboxNode.ariaHidden === 'false') && (e.key === 'ArrowRight')) {
    nextPosition();
  }
});

closeBtn.addEventListener('keydown', (event) => {
  if ((event.target === document.activeElement) && (event.key === 'Enter')) {
    closeLightbox();
  }

  if ((event.target === document.activeElement) && (event.key === 'Tab')) {
    event.preventDefault();
    leftBtn.focus();
  }
});

document.addEventListener('keydown', (e) => {
  if ((lightboxNode.ariaHidden === 'false') && (e.key === 'Escape')) {
    closeLightbox();
  }
});
