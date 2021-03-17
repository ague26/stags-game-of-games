const { replaceAll } = require('./replaceAll');

describe('replaceAll', () => {
  it('should begin a new line at every uppercase letter', () => {
    const string = 'Foo Bar Baz';
    const regex = /\W+(?=[A-Z][a-z])/g;
    const expected = 'Foo \nBar \nBaz';
    const actual = replaceAll(string, regex);
    expect(actual).toEqual(expected);
  });

  it('should not begin a new line for words that start with a lowercase letter', () => {
    const string = 'foo Bar baz';
    const regex = /\W+(?=[A-Z][a-z])/g;
    const expected = 'foo \nBar baz';
    const actual = replaceAll(string, regex);
    expect(actual).toEqual(expected);
  });
});
