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
});
console.log(form);

console.log("\nExample 2:");
form = HexletCode.formFor<TemplateType>(template, {}, (f) => {
  f.input('name', { class: 'user-input' });
  f.input('job');
});
console.log(form);

console.log("\nExample 3:");
form = HexletCode.formFor<TemplateType>(template, {}, (f) => {
  f.input('job', { as: 'textarea' });
});
console.log(form);

console.log("\nExample 4:");
form = HexletCode.formFor<TemplateType>(template, { url: '#' }, (f) => {
  f.input('job', { as: 'textarea', rows: 50, cols: 50 });
});
console.log(form);

console.log("\nExample 5 (Error Expected):");

try {
  form = HexletCode.formFor<TemplateType>(template, { url: '/users' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
  });
  console.log(form); // This line should not be reached if error is thrown
} catch (e) {
  console.error("Error caught:", e.message);
}