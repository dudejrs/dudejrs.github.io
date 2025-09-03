const Type = require('./type');

module.exports = class Number extends Type {
    constructor(name = 'number') {
        super(name);
    }

    convert(data) {
        return data[this.name];
    }

    build(value) {
        return {
            [this.name]: value,
        };
    }
};
