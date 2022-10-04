/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */
class MediaFactory {
  constructor(data, photograperName) {
    this.data = data;
    this.photograperName = photograperName;
  }

  createMedia() {
    if (Object.prototype.hasOwnProperty.call(this.data, 'image')) {
      return new Image(this.data, this.photograperName);
    }

    if (Object.prototype.hasOwnProperty.call(this.data, 'video')) {
      return new Video(this.data, this.photograperName);
    }
    return undefined;
  }
}
