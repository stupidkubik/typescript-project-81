import { expect, test } from 'vitest';
import { HexletCode } from '../modules/HexletCode';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

test('formFor with input and textarea', () => {
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

test('formFor with submit button', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job');
    f.submit();
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

test('should throw error if field does not exist in template', () => {
  expect(() => {
    HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('nonexistent');
    });
  }).toThrow(Error);
});