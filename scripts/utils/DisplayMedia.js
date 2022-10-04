/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */
class DisplayMedia {
  constructor(Media, photographerName) {
    this.photographerName = photographerName;
    this.media = Media;
    this.mediaWrapper = document.querySelector('.photograph-media');
    this.lightboxWrapper = document.querySelector('.lightbox-media');
  }

  displayMedia() {
    this.media.forEach((media) => {
      const medium = new MediaFactory(media, this.photographerName);

      const element = medium.createMedia();

      if (element !== undefined) {
        this.mediaWrapper.appendChild(element.creatHtml());
        this.lightboxWrapper.appendChild(element.LightboxMedia());
      }
    });
  }
}
