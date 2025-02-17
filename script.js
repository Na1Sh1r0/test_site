// при клике по кнопке скрипт запустит код
button.onclick = function () {
  // если фон кнопки чёрный
  if (button.style.backgroundColor == 'white') {
    // изменим его на белый, а текст сделаем чёрным
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    button.text = 'black';
    body.style.backgroundColor = 'black';
    body.style.color = 'white';

  } 

  else {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    button.text = 'white';
    body.style.backgroundColor = 'white';
    body.style.color = 'black';

    // иначе сделаем фон чёрным, а текст белым 
  }
}