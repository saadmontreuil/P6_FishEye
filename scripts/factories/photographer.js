/* eslint no-unused-vars: "off" */
class Photographer {
  constructor(data, likes) {
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.portrait = data.portrait;
    this.likes = likes;
  }

  PhotographerCard() {
    const wrapper = document.querySelector('.photographer_section');
    const link = document.createElement('a');
    const article = document.createElement('article');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('h2');
    const parg = document.createElement('p');
    const location = document.createElement('span');
    const tagline = document.createElement('span');
    const price = document.createElement('span');

    link.setAttribute('href', `photographer.html?id=${this.id}`);
    link.setAttribute('aria-label', `Voir la page de ${this.name}`);
    div.setAttribute('class', 'photographer_card');
    img.setAttribute('src', `assets/photographers/${this.portrait}`);
    img.setAttribute('alt', `portrait ${this.name}`);
    name.setAttribute('class', 'photographer_name');
    location.setAttribute('class', 'location');
    tagline.setAttribute('class', 'tagline');
    price.setAttribute('class', 'price');

    name.textContent = this.name;
    location.textContent = `${this.city}, ${this.country}`;
    tagline.textContent = this.tagline;
    price.textContent = `${this.price}€/jour`;

    wrapper.appendChild(article);
    article.appendChild(link);
    link.appendChild(div);
    div.appendChild(img);
    div.appendChild(name);
    parg.appendChild(location);
    parg.appendChild(tagline);
    parg.appendChild(price);
  }

  PhotographerHeader() {
    const $pageWrapper = document.querySelector('.photograph-header');
    const article = document.createElement('article');
    const divHeader = document.createElement('div');
    const namePhotographer = document.createElement('h1');
    const location = document.createElement('h2');
    const tagline = document.createElement('p');
    const headerBtn = document.createElement('button');
    const PhotographerDiv = document.createElement('div');
    const img = document.createElement('img');

    divHeader.setAttribute('class', 'photograph-header-infos');
    location.setAttribute('class', 'location');
    tagline.setAttribute('class', 'tagline');
    headerBtn.setAttribute('id', 'header-btn');
    headerBtn.setAttribute('class', 'contact_button');
    headerBtn.setAttribute('aria-label', 'Contact Me');
    PhotographerDiv.setAttribute('class', 'photograph-header-portrait');
    img.setAttribute('src', `assets/photographers/${this.portrait}`);
    img.setAttribute('alt', `portrait ${this.name}`);

    location.textContent = `${this.city}, ${this.country}`;
    namePhotographer.textContent = this.name;
    tagline.textContent = this.tagline;
    headerBtn.textContent = 'Contactez-moi';

    $pageWrapper.appendChild(article);
    article.appendChild(divHeader);
    divHeader.appendChild(namePhotographer);
    divHeader.appendChild(location);
    divHeader.appendChild(tagline);
    article.appendChild(headerBtn);
    article.appendChild(PhotographerDiv);
    PhotographerDiv.appendChild(img);
  }

  createCounter() {
    const counter = document.createElement('aside');
    counter.classList.add('photographer-counter');
    const main = document.querySelector('#main');
    counter.innerHTML = `
        <div class="photographer-counter_likes">
            <h2 class="count_text">${this.likes}</h2>
            <em class="count_heart fas fa-heart"></em>
        </div>
        <div class="photographer-counter_price">
            <h2 class="count_text">${this.price}€ / jour</h2>
        </div>
    `;

    main.appendChild(counter);
  }
}
