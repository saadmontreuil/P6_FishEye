class Image {
  constructor(data, photograperName) {
    this.photograperName = photograperName;
    this.type = 'image';
    this.medium = data.image;
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
    const elementMedium = document.createElement('img');
    elementMedium.setAttribute('src', `assets/images/${this.photograperName}/${this.medium}`);
    elementMedium.setAttribute('tabindex', '0');
    elementMedium.setAttribute('aria-label', 'medium');
    elementMedium.setAttribute('alt', `${this.title}`);
    mediumContainer.appendChild(elementMedium);

    // Titre
    const titleCard = document.createElement('h3');
    titleCard.textContent = this.title;
    infosContainer.appendChild(titleCard);

    // Likes
    const elementLikes = document.createElement('div');
    elementLikes.classList.add('likes');
    const elementLikesCount = document.createElement('span');
    elementLikesCount.classList.add('likesCount');
    elementLikesCount.textContent = this.likes;
    const elementLikesBtn = document.createElement('i');
    elementLikesBtn.classList.add('fa-solid', 'fa-heart', 'heart-btn');
    elementLikesBtn.setAttribute('tabindex', '0');
    elementLikesBtn.setAttribute('aria-label', 'like');
    elementLikesBtn.setAttribute('role', 'button');
    elementLikes.appendChild(elementLikesCount);
    elementLikes.appendChild(elementLikesBtn);
    infosContainer.appendChild(elementLikes);

    return card;
  }
}
