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
    const elementlike = this.id;

    const counterValue = Number(counterElement.textContent);

    const totalLikesElement = document.querySelector('.photographer-counter_likes p');

    const totalLikesValue = Number(totalLikesElement.textContent);

    if (this.id === 'heartNotLiked') {
      Like.increment(counterElement, counterValue);
      Like.increment(totalLikesElement, totalLikesValue);
      this.id = 'heartLiked';
    } else if (this.id === 'heartLiked') {
      Like.disincrement(counterElement, counterValue);
      Like.disincrement(totalLikesElement, totalLikesValue);
      this.id = 'heartNotLiked';
    }
  }

  static liked() {
    const likes = document.querySelectorAll('.heart-btn');

    likes.forEach((like) => like.addEventListener('click', Like.addLikes));
  }
}
