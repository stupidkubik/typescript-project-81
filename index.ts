import { Tag } from './src/Tag'; // Путь может отличаться в зависимости от вашей структуры

// Создание тега <input type="text" id="username" class="form-input">
const inputTag = new Tag('input', {
  type: 'text',
  id: 'username',
  class: 'form-input'
});

const inputHTML = inputTag.toString();
console.log(inputHTML); // Выведет: <input type="text" id="username" class="form-input">

// Создание тега <br> без атрибутов
const brTag = new Tag('br');
const brHTML = brTag.toString();
console.log(brHTML); // Выведет: <br>

// Создание тега <hr class="divider">
const hrTag = new Tag('hr', { class: 'divider' });
const hrHTML = hrTag.toString();
console.log(hrHTML); // Выведет: <hr class="divider">