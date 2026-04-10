const box = document.getElementById('box');

function mousePos(e) {
    const x = e.clientX;
    const y = e.clientY;

    box.style.position = "absolute";
    box.style.left = x + "px";
    box.style.top = y + "px";
}

document.addEventListener('mousemove', _.debounce(mousePos, 100));






const slider = document.querySelector('.slider__input');
  const image = document.querySelector('.slider__image');

  let timeout;

  slider.addEventListener('input', function () {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      image.style.width = slider.value * 3 + 'px';
    }, 200);
  });