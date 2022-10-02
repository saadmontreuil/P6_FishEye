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
    const galleryContent = Array.from(document.querySelectorAll('.photograph-medium'));
    console.log(galleryContent);
    const lightboxcontent = Array.from(document.querySelectorAll('.lightboxMedia'));
    console.log(lightboxcontent);
    
    console.log(galleryContent);

    if (orderByButton.value === 'Popularité') {
      gallery.innerHTML = '';

      galleryContent.sort((a, b) => b.childNodes[1].childNodes[1].textContent - a.childNodes[1].childNodes[1].textContent);
      sortedToDOM(galleryContent, gallery);
    }

    orderByButton.addEventListener('change', (e) => {
      switch (e.target.value) {
        case 'Popularité':
          gallery.innerHTML = '';

          galleryContent.sort((a, b) => b.childNodes[1].childNodes[1].textContent - a.childNodes[1].childNodes[1].textContent);

          sortedToDOM(galleryContent, gallery);
          break;

        case 'Date':
          gallery.innerHTML = '';

          galleryContent.sort((a, b) => b.childNodes[2].dateTime.localeCompare(a.childNodes[2].dateTime));

          sortedToDOM(galleryContent, gallery);
          break;

        case 'Titre':
          gallery.innerHTML = '';

          galleryContent.sort((a, b) => a.childNodes[1].childNodes[0].textContent.localeCompare(b.childNodes[1].childNodes[0].textContent));

          sortedToDOM(galleryContent, gallery);
          break;

        default:
          break;
      }
    });
  }
}
