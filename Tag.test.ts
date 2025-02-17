import { expect, test } from 'vitest'
import { Tag } from './src/Tag'
import { HexletCode } from './src/HexletCode';

test('<label for="name">Name</label>', () => {
  expect(new Tag("label", { for: "name" }, "Name").toString()).toBe('<label for="name">Name</label>')
})

test('HexletCode.formFor with input and textarea', () => {
  const form = HexletCode.formFor({ name: 'rob', job: 'hexlet', gender: 'm' }, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
  });
  expect(form).toBe('<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" id="name" value="rob"><br><label for="job">Job</label><textarea name="job" id="job" cols="20" rows="40">hexlet</textarea><br></form>');
});

test('HexletCode.formFor with input and class option', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };
  const form = HexletCode.formFor(template, {}, (f) => {
    f.input('name', { class: 'user-input' });
    f.input('job');
  });
  expect(form).toBe('<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" id="name" value="rob" class="user-input"><br><label for="job">Job</label><input type="text" name="job" id="job" value="hexlet"><br></form>');
});

test('HexletCode.formFor with textarea only', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };
  const form = HexletCode.formFor(template, {}, (f) => {
    f.input('job', { as: 'textarea' });
  });
  expect(form).toBe('<form action="#" method="post"><label for="job">Job</label><textarea name="job" id="job" cols="20" rows="40">hexlet</textarea><br></form>');
});

test('HexletCode.formFor with textarea and custom size', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };
  const form = HexletCode.formFor(template, { url: '#' }, (f) => {
    f.input('job', { as: 'textarea', rows: 50, cols: 50 });
  });
  expect(form).toBe('<form action="#" method="post"><label for="job">Job</label><textarea name="job" id="job" cols="50" rows="50">hexlet</textarea><br></form>');
});