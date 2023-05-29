//jiggle icons
const smallImages = document.querySelectorAll('.jiggle');

smallImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList.add('jiggle-animation');
    });

    image.addEventListener('mouseout', () => {
        image.classList.remove('jiggle-animation');
    });
});

//retracting box's

window.addEventListener('DOMContentLoaded', function() {
  var box = document.querySelector('.box');
  var image = document.querySelector('.graph');
  var isBoxClicked = false;

  box.addEventListener('click', function() {
    if (!isBoxClicked) {
      box.classList.add('clicked');
      isBoxClicked = true;
    } else {
      box.classList.remove('clicked');
      isBoxClicked = false;
    }
  });

  image.addEventListener('click', function(event) {
    event.stopPropagation();
    if (isBoxClicked) {
      box.classList.remove('clicked');
      isBoxClicked = false;
    }
  });
});