module.exports = {
  '**/*.{js,ts,jsx,tsx}': 'eslint --cache --format=pretty',
  '**/*.{css,scss,sass,less}': 'stylelint',
  '**/*': ['prettier --write', 'git add'],
};
