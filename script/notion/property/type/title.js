const Type = require('./type');

module.exports = class Title extends Type {
    constructor(name = 'title') {
        super(name);
    }

    convert(data) {
        return data[this.name].map(t => t['plain_text']).join('');
    }
};
