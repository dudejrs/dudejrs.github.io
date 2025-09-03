const TYpe = require('./type');

module.exports = class URL extends TYpe {
    constructor(name = 'url') {
        super(name);
    }

    convert(data) {
        return data[this.name];
    }
};
