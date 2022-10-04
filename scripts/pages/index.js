/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */
/* eslint no-console: "off" */
const getPhotographers = async () => fetch('data/photographers.json')
  .then((res) => res.json())
  .catch((err) => console.log('error', err));

const init = async () => {
  const { photographers } = await getPhotographers();

  photographers.forEach((photographer) => {
    const Template = new Photographer(photographer);
    Template.PhotographerCard();
  });
};

init();
