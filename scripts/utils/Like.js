class Like {


  static increment(element, value){
    element.textContent = `${++value}`;
  };

  static addLikes() {
    const counterElement = this.previousElementSibling;
    const counterValue = Number(counterElement.textContent);

    const totalLikesElement = document.querySelector('.photographer-counter_likes p');

    const totalLikesValue = Number(totalLikesElement.textContent);
    console.log(totalLikesValue);

    Like.increment(counterElement, counterValue);
    Like.increment(totalLikesElement, totalLikesValue);
  }



  liked() {
    // const increment = (element, value) => {
    //   element.textContent = `${++value}`;
    // };

    // function addLikes() {
    //   const counterElement = this.previousElementSibling;
    //   const counterValue = Number(counterElement.textContent);

    //   const totalLikesElement = document.querySelector('.photographer-counter_likes p');

    //   const totalLikesValue = Number(totalLikesElement.textContent);
    //   console.log(totalLikesValue);

    //   Like.increment(counterElement, counterValue);
    //   Like.increment(totalLikesElement, totalLikesValue);
    // }

    const likes = document.querySelectorAll('.heart-btn');
    console.log(likes);
    likes.forEach((like) => like.addEventListener('click', Like.addLikes));
  }
}
