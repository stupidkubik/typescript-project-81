### Hexlet tests and linter status:
[![Actions Status](https://github.com/stupidkubik/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/stupidkubik/typescript-project-81/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/83694d4fc65e1ab46f1b/maintainability)](https://codeclimate.com/github/stupidkubik/typescript-project-81/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/83694d4fc65e1ab46f1b/test_coverage)](https://codeclimate.com/github/stupidkubik/typescript-project-81/test_coverage)

### Пример использования генератора форм:

```javascript
const form = HexletCode.formFor(
  { name: 'rob', job: 'hexlet', gender: 'm' }, { method: 'post' }, (f) => {
  f.input('name');
  f.input('job', { as: 'textarea' });
  f.submit();
});

console.log(form);

//  <form action="#" method="post">
//      <input name="name" type="text" value="rob">
//      <textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea>
//  </form>
```