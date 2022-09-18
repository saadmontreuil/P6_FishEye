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

  // Build Sorter and Media

  const displayMedia = new DisplayMedia(mediaData, photographerData.name);
  displayMedia.displayMedia();
  const sorterMedia = new SorterMedia();
  sorterMedia.sorted();
};

init();
