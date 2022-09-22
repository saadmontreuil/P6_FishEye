class Like {
  liked() {
    function addLikes() {
      const counterElement = this.previousElementSibling;
      const counterValue = Number(counterElement.textContent);

      const totalLikesElement = document.querySelector('.photographer-counter_likes p');

      const totalLikesValue = Number(totalLikesElement.textContent);
      console.log(totalLikesValue);

      increment(counterElement, counterValue);
      increment(totalLikesElement, totalLikesValue);
    }

    const increment = (element, value) => {
      element.textContent = `${++value}`;
    };

    const likes = document.querySelectorAll('.heart-btn');
    likes.forEach((like) => like.addEventListener('click', addLikes));
  }
}
