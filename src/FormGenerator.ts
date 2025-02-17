import { Tag } from './Tag';

export class FormGenerator {
  public generateForm(data: { [key: string]: any }): string {
    let formHTML = '<form>';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        const label = new Tag('label', { for: key }, this.capitalizeFirstLetter(key)).toString();
        let input;

        // Определяем тип input в зависимости от типа значения или имени ключа (можно расширить логику)
        if (typeof value === 'number') {
          input = new Tag('input', { type: 'number', id: key, name: key, value: String(value) }).toString();
        } else if (typeof value === 'boolean') {
          input = new Tag('input', { type: 'checkbox', id: key, name: key, checked: value ? 'checked' : undefined }).toString();
        }
        else {
          input = new Tag('input', { type: 'text', id: key, name: key, value: value || '' }).toString();
        }

        formHTML += label;
        formHTML += input;
        formHTML += '<br>'; // Добавляем перенос строки для простоты примера
      }
    }
    formHTML += '</form>';
    return formHTML;
  }

  private capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}