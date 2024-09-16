import dataRu from '../data/ru.json';
import dataEn from '../data/en.json';

let currentLanguage = 'ru'; // или 'en' в зависимости от начального языка

export default function test() {
  const div = document.createElement('div');
  div.textContent = dataRu.name;
  div.style.color = 'white';
  document.body.appendChild(div);

  div.style.cursor = 'pointer'; // Добавляем указатель, чтобы показать, что элемент кликабелен
  // Обработчик клика для переключения языка
  div.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    div.textContent = currentLanguage === 'ru' ? dataRu.name : dataEn.name;
  });
}
