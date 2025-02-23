export interface TagAttributes {
  [key: string]: string | undefined;
}

export interface FormOptions {
  method?: string;
  url?: string;
}

export interface InputOptions {
  name: string;
  type?: string;
  value?: string | number | boolean;
  class?: string;
  checked?: boolean;
}

export interface TextareaOptions {
  cols?: number;
  rows?: number;
  name?: string;
  class?: string;
  as?: 'textarea';
}