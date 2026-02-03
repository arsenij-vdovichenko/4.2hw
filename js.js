window.addEventListener("mousemove", (e) => {
    console.log(e.clientX);
    console.log(e.clientY);
    const x = e.clientX
    const y = e.clientY
    div.style.position = "absolute"
    div.style.left = x
    div.style.left = y
})







const slider = document.querySelector('.slider__input');
  const image = document.querySelector('.slider__image');

  let timeout;

  slider.addEventListener('input', function () {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      image.style.width = slider.value * 3 + 'px';
    }, 200);
  });