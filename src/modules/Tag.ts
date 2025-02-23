import { TagAttributes } from './types';

export class Tag {
  private tagName: string;
  private attributes: TagAttributes;
  private content: string | null;

  constructor(tagName: string, attributes: TagAttributes = {}, content: string | null = null) {
    this.tagName = tagName;
    this.attributes = this.normalizeAttributes(attributes);
    this.content = content;
  }

  private normalizeAttributes(attributes: TagAttributes): TagAttributes {
    const normalized: TagAttributes = {};
    for (const [key, value] of Object.entries(attributes)) {
      if (value !== undefined) {
        normalized[key] = String(value);
      }
    }
    return normalized;
  }

  public toString(): string {
    const attributeString = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');

    if (this.content !== null) {
      // Парный тег
      return `<${this.tagName}${attributeString}>${this.content}</${this.tagName}>`;
    } else {
      // Одинарный тег
      return `<${this.tagName}${attributeString}>`;
    }
  }
}