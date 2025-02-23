import { expect, test } from 'vitest';
import { Tag } from '../modules/Tag';
import { HexletCode } from '../modules/HexletCode';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

test('<label for="name">Name</label>', () => {
  expect(new Tag("label", { for: "name" }, "Name").toString())
    .toBe('<label for="name">Name</label>');
});

test('HexletCode.formFor with input and textarea', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
  });

  expect(form).toBe(
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input type="text" name="name" value="rob">' +
    '<label for="job">Job</label>' +
    '<textarea name="job" cols="20" rows="40">hexlet</textarea>' +
    '</form>'
  );
});

test('HexletCode.formFor with input and class option', () => {
  const form = HexletCode.formFor(template, {}, (f) => {
    f.input('name', { class: 'user-input' });
    f.input('job');
  });
  expect(form).toBe(
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input type="text" name="name" value="rob" class="user-input">' +
    '<label for="job">Job</label>' +
    '<input type="text" name="job" value="hexlet">' +
    '</form>'
  );
});

test('HexletCode.formFor with textarea only', () => {
  const form = HexletCode.formFor(template, {}, (f) => {
    f.input('job', { as: 'textarea' });
  });
  expect(form).toBe(
    '<form action="#" method="post">' +
    '<label for="job">Job</label>' +
    '<textarea name="job" cols="20" rows="40">hexlet</textarea>' +
    '</form>'
  );
});

test('HexletCode.formFor with textarea and custom size', () => {
  const form = HexletCode.formFor(template, { url: '#' }, (f) => {
    f.input('job', { as: 'textarea', rows: 50, cols: 50 });
  });
  expect(form).toBe(
    '<form action="#" method="post">' +
    '<label for="job">Job</label>' +
    '<textarea name="job" cols="50" rows="50">hexlet</textarea>' +
    '</form>'
  );
});

test('HexletCode.formFor with submit button', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job');
    f.submit('Save');
  });
  expect(form).toBe(
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input type="text" name="name" value="rob">' +
    '<label for="job">Job</label>' +
    '<input type="text" name="job" value="hexlet">' +
    '<input type="submit" value="Save">' +
    '</form>'
  );
});

test('HexletCode.formFor with submit button custom text', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
    f.submit('Wow');
  });
  expect(form).toBe(
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input type="text" name="name" value="rob">' +
    '<label for="job">Job</label>' +
    '<textarea name="job" cols="20" rows="40">hexlet</textarea>' +
    '<input type="submit" value="Wow">' +
    '</form>'
  );
});