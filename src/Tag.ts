import { TagAttributes } from './types'; // Импортируем интерфейс

export class Tag {
  private tagName: string;
  private attributes: TagAttributes; // Используем интерфейс TagAttributes
  private content: string | null;

  constructor(tagName: string, attributes: TagAttributes = {}, content: string | null = null) {
    this.tagName = tagName;
    this.attributes = attributes;
    this.content = content;
  }

  public toString(): string {
    let attributeString = '';
    for (const key in this.attributes) {
      const value = this.attributes[key]; // Получаем значение атрибута, которое может быть string или undefined
      if (value !== undefined) { // Проверяем, что значение не undefined
        attributeString += ` ${key}="${value}"`;
      }
    }

    if (this.content !== null) {
      // Парный тег
      return `<${this.tagName}${attributeString}>${this.content}</${this.tagName}>`;
    } else {
      // Одинарный тег
      return `<${this.tagName}${attributeString}>`;
    }
  }
}