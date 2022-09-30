class Like {
  static increment(element, value) {
    element.textContent = `${++value}`;
  }

  static disincrement(element, value) {
    element.textContent = `${--value}`;
  }

  static addLikes() {
    const counterElement = this.previousElementSibling;
    const elementlike = this.id;
    console.log(elementlike);
    const counterValue = Number(counterElement.textContent);

    const totalLikesElement = document.querySelector('.photographer-counter_likes p');

    const totalLikesValue = Number(totalLikesElement.textContent);
    console.log(totalLikesValue);

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

  liked() {
    const likes = document.querySelectorAll('.heart-btn');
    console.log(likes);

    likes.forEach((like) => like.addEventListener('click', Like.addLikes));
  }
}
