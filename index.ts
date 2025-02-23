import { HexletCode } from './src/HexletCode';

interface Template {
  name: string;
  job: string;
  gender: 'm' | 'f';
}

const template: Template = { name: 'rob', job: 'hexlet', gender: 'm' };

const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
  f.input('name');
  f.input('job', { as: 'textarea' });
  f.submit();
});

console.log(form);