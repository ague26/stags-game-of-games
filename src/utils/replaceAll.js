const replaceAll = (string, regex) => {
  return string ? string.replace(regex, '$&\n') : '';
};

module.exports = {
  replaceAll
};
