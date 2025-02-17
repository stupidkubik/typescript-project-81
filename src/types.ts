export interface TagAttributes {
  [key: string]: string | undefined;
}

export interface FormOptions {
  url?: string;
  method?: string;
}

export interface InputOptions {
  type?: string;
  class?: string;
  value?: string | number | boolean;
  checked?: boolean;
}

export interface TextareaOptions {
  class?: string;
  rows?: number;
  cols?: number;
  as?: 'textarea'; // Add 'as' property for type differentiation
}