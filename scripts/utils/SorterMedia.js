/* eslint max-len: "off" */
/* eslint no-unused-vars: "off" */
class SorterMedia {
  constructor() {
    this.element = 'test';
  }

  sorted() {
    const test = this.element;

    const sortedToDOM = (array, destination) => {
      array.forEach((arrayElement) => {
        destination.appendChild(arrayElement);
      });
    };

    const orderByButton = document.querySelector('#orderBy');
    const gallery = document.querySelector('.photograph-media');
    const galleryContent = Array.from(document.querySelectorAll('.photograph-medium').entries());
    const gallerylightbox = document.querySelector('.lightbox-media');
    const lightboxcontent = Array.from(document.querySelectorAll('.lightboxMedia'));

    if (orderByButton.value === 'Popularité') {
      gallery.innerHTML = '';

      galleryContent.sort((a, b) => b[1].childNodes[1].childNodes[1].textContent - a[1].childNodes[1].childNodes[1].textContent);
      const sortedPopular = galleryContent.map((element) => element[1]);
      const sortedLightboxPopular = galleryContent.map((element) => lightboxcontent[element[0]]);

      sortedToDOM(sortedPopular, gallery);
      sortedToDOM(sortedLightboxPopular, gallerylightbox);
    }

    orderByButton.addEventListener('change', (e) => {
      switch (e.target.value) {
        case 'Popularité': {
          gallery.innerHTML = '';

          galleryContent.sort((a, b) => b[1].childNodes[1].childNodes[1].textContent - a[1].childNodes[1].childNodes[1].textContent);
          const sorteDpopular = galleryContent.map((element) => element[1]);
          const sortedLightboXPopular = galleryContent.map((element) => lightboxcontent[element[0]]);
          sortedToDOM(sorteDpopular, gallery);
          sortedToDOM(sortedLightboXPopular, gallerylightbox);
          break;
        }
        case 'Date': {
          gallery.innerHTML = '';

          galleryContent.sort((a, b) => b[1].childNodes[2].dateTime.localeCompare(a[1].childNodes[2].dateTime));
          const sortedDate = galleryContent.map((element) => element[1]);
          const sortedLightboxDate = galleryContent.map((element) => lightboxcontent[element[0]]);
          sortedToDOM(sortedDate, gallery);
          sortedToDOM(sortedLightboxDate, gallerylightbox);
          break;
        }
        case 'Titre': {
          gallery.innerHTML = '';

          galleryContent.sort((a, b) => a[1].childNodes[1].childNodes[0].textContent.localeCompare(b[1].childNodes[1].childNodes[0].textContent));
          const sortedTitle = galleryContent.map((element) => element[1]);
          const sortedLightboxTitle = galleryContent.map((element) => lightboxcontent[element[0]]);
          sortedToDOM(sortedTitle, gallery);
          sortedToDOM(sortedLightboxTitle, gallerylightbox);
          break;
        }
        default:
          break;
      }
    });
  }
}
