import { expect, test } from 'vitest';
import { HexletCode } from '../modules/HexletCode';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

test('HexletCode.formFor with input and textarea', () => {
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

test('HexletCode.formFor with input and class option', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name', { class: 'user-input' });
    f.input('job');
  });
  expect(form).toBe(
    '<form method="post" action="#">' +
    '<label for="name">Name</label>' +
    '<input name="name" type="text" value="rob" class="user-input">' +
    '<label for="job">Job</label>' +
    '<input name="job" type="text" value="hexlet">' +
    '</form>'
  );
});

test('HexletCode.formFor with textarea only', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('job', { as: 'textarea' });
  });
  expect(form).toBe(
    '<form method="post" action="#">' +
    '<label for="job">Job</label>' +
    '<textarea cols="20" rows="40" name="job">hexlet</textarea>' +
    '</form>'
  );
});

test('HexletCode.formFor with textarea and custom size', () => {
  const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('job', { as: 'textarea', rows: 50, cols: 50 });
  });
  expect(form).toBe(
    '<form method="post" action="#">' +
    '<label for="job">Job</label>' +
    '<textarea cols="50" rows="50" name="job">hexlet</textarea>' +
    '</form>'
  );
});

test('HexletCode.formFor with submit button', () => {
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

test('HexletCode.formFor with submit button custom text', () => {
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