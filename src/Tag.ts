export class Tag {
  private tagName: string;
  private attributes: { [key: string]: string };
  private content: string | null; // Добавляем content для парных тегов

  constructor(tagName: string, attributes: { [key: string]: string } = {}, content: string | null = null) {
    this.tagName = tagName;
    this.attributes = attributes;
    this.content = content; // Инициализируем content
  }

  public toString(): string {
    let attributeString = '';
    for (const key in this.attributes) {
      attributeString += ` ${key}="${this.attributes[key]}"`;
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