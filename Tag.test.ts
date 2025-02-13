import { expect, test } from 'vitest'
import { Tag } from './src/Tag'

test('<label for="name">Name</label>', () => {
  expect(new Tag("label", { for: "name" }, "Name").toString()).toBe('<label for="name">Name</label>')
})