import { expect, test } from 'vitest'
import { Tag } from '../Tag'
import { HexletCode } from '../HexletCode';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

test('<label for="name">Name</label>', () => {
  expect(new Tag("label", { for: "name" }, "Name").toString()).toBe('<label for="name">Name</label>')
})

test('HexletCode.formFor with input and textarea', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
  });
  expect(form).toBe('<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" id="name" value="rob"><br><label for="job">Job</label><textarea name="job" id="job" cols="20" rows="40">hexlet</textarea><br></form>');
});

test('HexletCode.formFor with input and class option', () => {
  const form = HexletCode.formFor(template, {}, (f) => {
    f.input('name', { class: 'user-input' });
    f.input('job');
  });
  expect(form).toBe('<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" id="name" class="user-input" value="rob"><br><label for="job">Job</label><input type="text" name="job" id="job" value="hexlet"><br></form>');
});

test('HexletCode.formFor with textarea only', () => {
  const form = HexletCode.formFor(template, {}, (f) => {
    f.input('job', { as: 'textarea' });
  });
  expect(form).toBe('<form action="#" method="post"><label for="job">Job</label><textarea name="job" id="job" cols="20" rows="40">hexlet</textarea><br></form>');
});

test('HexletCode.formFor with textarea and custom size', () => {
  const form = HexletCode.formFor(template, { url: '#' }, (f) => {
    f.input('job', { as: 'textarea', rows: 50, cols: 50 });
  });
  expect(form).toBe('<form action="#" method="post"><label for="job">Job</label><textarea name="job" id="job" cols="50" rows="50">hexlet</textarea><br></form>');
});

test('HexletCode.formFor with submit button', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job');
    f.submit('Save');
  });
  expect(form).toBe('<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" id="name" value="rob"><br><label for="job">Job</label><input type="text" name="job" id="job" value="hexlet"><br><input type="submit" value="Save"></form>');
});