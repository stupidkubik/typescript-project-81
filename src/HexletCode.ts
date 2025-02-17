import { Tag } from './Tag';
import { FormOptions, InputOptions, TagAttributes, TextareaOptions } from './types';

export class HexletCode {
  public static formFor<T extends object>(
    template: T,
    options: FormOptions = {},
    callback?: (f: FormBuilder<T>) => void
  ): string {
    const formAttributes: TagAttributes = {
      action: options.url || '#',
      method: 'post',
    };

    const formTag = new Tag('form', formAttributes);
    let formContent = '';

    if (callback) {
      const formBuilder = new FormBuilder<T>(template);
      callback(formBuilder);
      formContent = formBuilder.getFormHTML();
    }

    return formTag.toString().replace('</form>', `${formContent}</form>`);
  }
}

export class FormBuilder<T extends object> {
  private formHTML: string = '';
  private template: T;

  constructor(template: T) {
    this.template = template;
  }

  public input<K extends Extract<keyof T, string>>(
    name: K,
    options?: InputOptions | TextareaOptions
  ): void {
    if (!(name in this.template)) {
      throw new Error(`Field '${String(name)}' does not exist in the template.`);
    }

    if (options && 'as' in options && options.as === 'textarea') {
      this.textarea(name, options as TextareaOptions);
      return;
    }

    const inputAttributes: TagAttributes = {
      type: options && (options as InputOptions).type || 'text',
      name: String(name),
      id: String(name),
      class: options?.class,
      value: this.template[name] !== undefined ? String(this.template[name]) : undefined,
      checked: options && (options as InputOptions).checked ? 'checked' : undefined,
    };
    const inputTag = new Tag('input', inputAttributes);
    const labelTag = new Tag('label', { for: String(name) }, this.capitalizeFirstLetter(String(name)));
    this.formHTML += labelTag.toString();
    this.formHTML += inputTag.toString();
    this.formHTML += '<br>';
  }

  public textarea<K extends Extract<keyof T, string>>(
    name: K,
    options: TextareaOptions = {}
  ): void {
    if (!(name in this.template)) {
      throw new Error(`Field '${String(name)}' does not exist in the template.`);
    }

    const textareaAttributes: TagAttributes = {
      name: String(name),
      id: String(name),
      class: options.class,
      cols: options.cols !== undefined ? String(options.cols) : '20',
      rows: options.rows !== undefined ? String(options.rows) : '40',
    };
    const textareaTag = new Tag('textarea', textareaAttributes, this.template[name] !== undefined ? String(this.template[name]) : '');
    const labelTag = new Tag('label', { for: String(name) }, this.capitalizeFirstLetter(String(name)));
    this.formHTML += labelTag.toString();
    this.formHTML += textareaTag.toString();
    this.formHTML += '<br>';
  }

  public getFormHTML(): string {
    return this.formHTML;
  }

  private capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}