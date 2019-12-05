const buttonView = document.querySelector('.brands-btnView');
const brandsItems = document.querySelectorAll('.brands-item');

buttonView.addEventListener('click', function () {
  if (buttonView.classList.contains('brands-btnView__show')) {
    for (let i = 0; i < brandsItems.length; i++) {
      brandsItems[i].classList.add('hidden');
    }
    buttonView.classList.add('brands-btnView__hide');
    buttonView.classList.remove('brands-btnView__show');
    buttonView.innerHTML = 'Показать все';
  } else {
    for (let i = 0; i < brandsItems.length; i++) {
      brandsItems[i].classList.remove('hidden');
    }
    buttonView.classList.add('brands-btnView__show');
    buttonView.classList.remove('brands-btnView__hide');
    buttonView.innerHTML = 'Скрыть';
  }
});