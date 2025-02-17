import { HexletCode } from './src/HexletCode';

interface TemplateType {
  name: string;
  job: string;
  gender: 'm' | 'f';
}

const template: TemplateType = { name: 'rob', job: 'hexlet', gender: 'm' };

console.log("Example 1:");
let form = HexletCode.formFor<TemplateType>(template, { method: 'post' }, (f) => {
  f.input('name');
  f.input('job', { as: 'textarea' });
  f.submit();
});
console.log(form);

try {
  form = HexletCode.formFor<TemplateType>(template, { url: '/users' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
    f.submit();
  });
  console.log(form); // This line should not be reached if error is thrown
} catch (e) {
  console.error("Error caught:", e.message);
}

