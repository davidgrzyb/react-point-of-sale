const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
        cssnano({
            preset: 'default'
        }),
        purgecss({
            content: ['./src/**/*.js', './public/index.html'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
    ],
};