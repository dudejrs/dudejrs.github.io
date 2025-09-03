const Type = require('./type');

module.exports = class Rollup extends Type {
    constructor(type, name = 'rollup') {
        super(name);
        this.type = type;
    }

    convert(data) {
        return this.type.convert(data[this.name]);
    }
};
