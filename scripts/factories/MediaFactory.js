class MediaFactory {
  constructor(data, photograperName){
    this.data = data;
    this.photograperName = photograperName;
   
  }
  createMedia(){
    if (this.data.hasOwnProperty('image')) {
      return new Image(this.data, this.photograperName);
    }

    // if (data.hasOwnProperty('video')) {
    //   return new Video(data, photograperName);
    // }

  }
}

