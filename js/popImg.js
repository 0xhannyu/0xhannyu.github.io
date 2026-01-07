const image = document.getElementById('imageSlide');

function popImage() {

  image.style.display = 'block';

  image.animate([
    { transform: 'translateY(100%)' },
    { transform: 'translateY(15%)' }
  ], {
    duration: 3000,
    easing: 'ease-in-out',
    fill: 'forwards'
  });

  setTimeout(() => {
    image.animate([
      { transform: 'translateY(15%)' },
      { transform: 'translateY(100%)'}
    ], {
      duration: 2000,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
  }, 3000);
}

setInterval(popImage, 5000);
