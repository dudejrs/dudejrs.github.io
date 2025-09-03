const {NestedProperty} = require('../../notion/property');
const {PageScheme} = require('../../notion/scheme');

module.exports = new PageScheme('기술', {
    Name: NestedProperty.Title('Name', 'title'),
});
