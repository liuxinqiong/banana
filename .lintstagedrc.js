module.exports = {
  '**/*.{js,ts,jsx,tsx}': 'npm run lint:js',
  '**/*.{css,scss,sass,less}': 'npm run lint:style',
  '"**/*"': ['npm run lint:prettier'],
};
