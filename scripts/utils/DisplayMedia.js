class DisplayMedia {
  constructor(Media, photographerName) {
    this.photographerName = photographerName;
    this.media = Media;
    this.mediaWrapper = document.querySelector('.photograph-media');
  }

  displayMedia() {
    this.media.forEach((media) => {
      const medium = new MediaFactory(media, this.photographerName);
      const selectdata = medium.data;

      const element = medium.createMedia();

      if (element !== undefined) {
        this.mediaWrapper.appendChild(element.creatHtml());
      }
    });
    // SorterMedia.sorted();
  }
}
