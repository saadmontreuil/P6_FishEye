/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */
/* eslint no-console: "off" */
const getPhotographers = async () => fetch('data/photographers.json')
  .then((res) => res.json())
  .catch((err) => console.log('eRROR', err));
const init = async () => {
  const photographerId = parseInt(new URLSearchParams(window.location.search).get('id'), 10);
  const { photographers, media } = await getPhotographers();
  const photographerData = photographers.find(
    (photographer) => photographer.id === photographerId,
  );
  // cest il trouve pas le id il renvoi a la page d'acceuil

  if (!photographerData) {
    window.location.href = 'index.html';
  }
  const mediaData = media.filter(
    (medias) => medias.photographerId === photographerId,
  );
  // photographer header de la page photographer
  const Template = new Photographer(photographerData);
  Template.PhotographerHeader();
  // affichage des media
  const displayMedia = new DisplayMedia(mediaData, photographerData.name);
  displayMedia.displayMedia();
  // tri des media
  const sorterMedia = new SorterMedia();
  sorterMedia.sorted();
  // lightbox
  displayLightbox();
  // like les media
  Like.liked();

  let numberOfLikes = 0;

  mediaData.forEach((mediaa) => {
    if (photographerId === mediaa.photographerId) {
      numberOfLikes += mediaa.likes;
    }
  });

  // Affichage de la bannière du total de likes et le prix
  const counter = new Photographer(photographerData, numberOfLikes);

  counter.createCounter();

  // afficage le modal du contact

  const modal = document.getElementById('contact_modal');
  const contactBtn = document.querySelector('#header-btn');
  const modalCloseBtn = document.getElementById('modal-btn-close');
  const submitBtn = document.getElementById('submit');

  contactBtn.addEventListener('click', () => {
    displayModal();
  });

  modalCloseBtn.addEventListener('click', () => {
    closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (modal.ariaHidden === 'false' && e.key === 'Escape') {
      closeModal();
    }
  });
};

init();
