/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */
/* eslint no-param-reassign: "off" */
class Like {
  static increment(element, value) {
    element.textContent = `${value += 1}`;
  }

  static disincrement(element, value) {
    element.textContent = `${value -= 1}`;
  }

  static addLikes() {
    const counterElement = this.previousElementSibling;
    const elementlike = this.classList;

    const counterValue = Number(counterElement.textContent);

    const totalLikesElement = document.querySelector('.photographer-counter_likes h2');

    const totalLikesValue = Number(totalLikesElement.textContent);

    if (this.classList[3] === 'heartNotLiked') {
      Like.increment(counterElement, counterValue);
      Like.increment(totalLikesElement, totalLikesValue);
      this.classList.replace('heartNotLiked', 'heartLiked');
    } else if (this.classList[3] === 'heartLiked') {
      Like.disincrement(counterElement, counterValue);
      Like.disincrement(totalLikesElement, totalLikesValue);
      this.classList.replace('heartLiked', 'heartNotLiked');
    }
  }

  static liked() {
    const likes = document.querySelectorAll('.heart-btn');

    likes.forEach((like) => like.addEventListener('click', Like.addLikes));
  }
}
