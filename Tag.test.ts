import { expect, test } from 'vitest'
import { Tag } from './src/Tag'
import { HexletCode } from './src/HexletCode';

test('<label for="name">Name</label>', () => {
  expect(new Tag("label", { for: "name" }, "Name").toString()).toBe('<label for="name">Name</label>')
})

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

const form = HexletCode.formFor(template, {}, (f) => {
  f.input('name');
  f.input('job');
});
console.log(form);