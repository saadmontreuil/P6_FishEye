const getPhotographers = async () => fetch('data/photographers.json')
  .then((res) => res.json())
  .catch((err) => console.log('eRROR', err));
const init = async () => {
  const photographerId = parseInt(new URLSearchParams(location.search).get('id'), 10);

  const { photographers, media } = await getPhotographers();
  const photographerData = photographers.find(
    (photographer) => photographer.id === photographerId,
  );
  console.log(photographerData);
  const mediaData = media.filter(
    (media) => media.photographerId === photographerId,
  );
  console.log(mediaData);

  const Template = new Photographer(photographerData);
  Template.PhotographerHeader();

  // Build Sorter and Media
  // const Sorter = new SorterMedia(mediaData);
  // mediaData = Sorter.sorted();
  const displayMedia = new DisplayMedia(mediaData, photographerData.name);
  displayMedia.displayMedia();
};

init();
