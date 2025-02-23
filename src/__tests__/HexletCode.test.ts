import { expect, test } from 'vitest';
import { HexletCode } from '../modules/HexletCode';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

test('formFor with input and textarea', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
  });

  expect(form).toBe(
    '<form method="post" action="#">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    '<label for="job">Job</label>' +
    '<textarea cols="20" rows="40" name="job">hexlet</textarea>' +
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
    '<form method="post" action="#">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    '<label for="job">Job</label>' +
    '<input name="job" type="text" value="hexlet">' +
    '<input type="submit" value="Save">' +
    '</form>'
  );
});

test('formFor with submit button custom text', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
    f.submit('Wow');
  });

  expect(form).toBe(
    '<form method="post" action="#">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob">' +
    '<label for="job">Job</label>' +
    '<textarea cols="20" rows="40" name="job">hexlet</textarea>' +
    '<input type="submit" value="Wow">' +
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