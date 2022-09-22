const getPhotographers = async () => fetch('data/photographers.json')
  .then((res) => res.json())
  .catch((err) => console.log('eRROR', err));
const init = async () => {
  const photographerId = parseInt(new URLSearchParams(location.search).get('id'), 10);

  const { photographers, media } = await getPhotographers();
  const photographerData = photographers.find(
    (photographer) => photographer.id === photographerId,
  );

  const mediaData = media.filter(
    (media) => media.photographerId === photographerId,
  );

  const Template = new Photographer(photographerData);
  Template.PhotographerHeader();

  const displayMedia = new DisplayMedia(mediaData, photographerData.name);
  displayMedia.displayMedia();
  const sorterMedia = new SorterMedia();
  sorterMedia.sorted();
  const like = new Like();
  like.liked();

  let numberOfLikes = 0;

  mediaData.forEach((media) => {
    if (photographerId === media.photographerId) {
      numberOfLikes += media.likes;
    }
  });

  // CREATE COUNTER
  const counter = new Photographer(photographerData, numberOfLikes);

  counter.createCounter();


// Event Modal Btn
const modal = document.getElementById('contact_modal');
const contactBtn = document.querySelector('#header-btn');
const modalCloseBtn = document.getElementById('modal-btn-close');
const submitBtn = document.getElementById("btn-submit");

contactBtn.addEventListener("click", (e) => {
  displayModal();
});

modalCloseBtn.addEventListener('click', (e) => {
  closeModal();
});



};

init();



