const Type = require('./type');

module.exports = class Date extends Type {
    constructor(name = 'date') {
        super(name);
    }

    convert(data) {
        if (!data || !data[this.name]) {
            return {};
        }
        const {start, end} = data[this.name];
        return {start, end};
    }
};
