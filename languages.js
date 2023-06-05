const { join } = require('path')
const { readdirSync, lstatSync } = require('fs')

const defaultLanguage = 'en';

const languages = readdirSync(join(__dirname, 'data')).filter((filename) => {
    const joinedPath = join(join(__dirname, 'data'), filename)
    const isDirectory = lstatSync(joinedPath).isDirectory()
    return isDirectory
});

languages.splice(languages.indexOf(defaultLanguage), 1);
languages.unshift(defaultLanguage);

module.exports = {
    languages,
    defaultLanguage,
};