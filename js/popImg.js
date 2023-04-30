const image = document.getElementById('imageSlide');

image.style.top = '100%';
image.style.left = '0%';

function popImage() {
  image.animate([
    { transform: 'translateY(0%)' },
    { transform: 'translateY(-85%)' }
  ], {
    duration: 3000,
    easing: 'ease-in-out'
  });

   setTimeout(function() {
    image.animate([
      { transform: 'translateY(-85%)' },
      { transform: 'translateY(0%)' }
    ], {
      duration: 2000,
      easing: 'ease-in-out'
    });
  }, 3000);
}
setInterval(popImage, 7000);
