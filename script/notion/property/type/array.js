const Type = require('./type');

module.exports = class Array extends Type {
    constructor(type, name = 'array') {
        super(name);
        this.type = type;
    }

    convert(data) {
        return data[this.name].map(item => this.type.convert(item));
    }
};
