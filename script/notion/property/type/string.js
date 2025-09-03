const Type = require('./type');

module.exports = class String extends Type {
    constructor(name = 'string') {
        super(name);
    }

    convert(data) {
        return data[this.name];
    }
};
