import { expect, test } from 'vitest';
import { HexletCode } from '../HexletCode';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

test('formFor with input and textarea', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
  });

  expect(form).toBe(
    '<form action="#" method="post">' +
    '<label for="name">Name</label>' +
    '<input type="text" name="name" id="name" value="rob"><br>' +
    '<label for="job">Job</label>' +
    '<textarea name="job" id="job" cols="20" rows="40">hexlet</textarea><br>' +
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
    '<input type="text" name="name" id="name" value="rob"><br>' +
    '<label for="job">Job</label>' +
    '<input type="text" name="job" id="job" value="hexlet"><br>' +
    '<input type="submit" value="Save">' +
    '</form>'
  );
});
