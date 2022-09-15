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
      console.log(selectdata);
      const element = medium.createMedia();
      console.log(medium);
      if (element !== undefined) {
        this.mediaWrapper.appendChild(element.creatHtml());
      }
    });
    SorterMedia.sorted();
  }
}
