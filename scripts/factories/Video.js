/* eslint no-unused-vars: "off" */
class Video {
  constructor(data, photograperName) {
    this.photograperName = photograperName;
    this.type = 'video';
    this.medium = data.video;
    this.id = data.id;
    this.photographerId = data.id;
    this.title = data.title;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }

  creatHtml() {
    const card = document.createElement('article');
    card.setAttribute('aria-label', 'carte Media');

    const mediumContainer = document.createElement('div');
    mediumContainer.classList.add('medium-container');

    const infosContainer = document.createElement('div');
    infosContainer.classList.add('infos-container');

    card.classList.add('photograph-medium');
    card.appendChild(mediumContainer);
    card.appendChild(infosContainer);

    // Media
    const elementMedium = document.createElement('video');
    elementMedium.setAttribute('src', `assets/images/${this.photograperName}/${this.medium}`);
    elementMedium.setAttribute('tabindex', '0');
    elementMedium.setAttribute('aria-label', `${this.title}`);
    elementMedium.setAttribute('alt', `${this.title}`);
    mediumContainer.appendChild(elementMedium);

    // Titre
    const titleCard = document.createElement('h2');
    titleCard.textContent = this.title;
    infosContainer.appendChild(titleCard);

    // Likes
    const elementLikes = document.createElement('div');
    elementLikes.classList.add('likes');
    const elementLikesCount = document.createElement('span');
    elementLikesCount.classList.add('likesCount');
    elementLikesCount.textContent = this.likes;
    const elementLikesBtn = document.createElement('em');
    elementLikesBtn.classList.add('fa-solid', 'fa-heart', 'heart-btn', 'heartNotLiked');
    elementLikesBtn.setAttribute('tabindex', '0');
    elementLikesBtn.setAttribute('aria-label', 'like');
    elementLikesBtn.setAttribute('role', 'button');
    elementLikes.appendChild(elementLikesCount);
    elementLikes.appendChild(elementLikesBtn);
    infosContainer.appendChild(elementLikes);
    const date = document.createElement('time');
    date.setAttribute('datetime', this.date);
    card.appendChild(date);

    return card;
  }

  LightboxMedia() {
    const lightboxMedia = document.createElement('div');
    lightboxMedia.classList.add('lightboxMedia', 'hidden');

    const html = `
      <video controls class="lightbox-medium" src="assets/images/${this.photograperName}/${this.medium}" alt=photo ${this.title}><p>Votre navigateur ne supporte pas les vid??o HTML5 utilisez ce lien pour visionner la vid??oYour browser doesn't support HTML5 video : 
      <a href="assets/media/${this.medium}">Vid??o</a> instead.</p></video>
      <h2 class="title">${this.title}</h2>
    `;
    lightboxMedia.innerHTML = html;

    return lightboxMedia;
  }
}
