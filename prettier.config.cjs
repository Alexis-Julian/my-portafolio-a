const config = {
    semi: true,
    singleQuote: true,
    printWidth: 80,
    tabWidth: 3,
    trailingComma: 'es5',
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};

module.exports = config;
