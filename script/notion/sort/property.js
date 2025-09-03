const Sort = require('./sort');

module.exports = class PropertySort extends Sort {
    constructor(name, direction, next = null) {
        super('property', name, direction, next);
    }

    static Ascending(name) {
        return new PropertySort(name, Sort.Direction.Ascending);
    }

    static Descending(name) {
        return new PropertySort(name, Sort.Direction.Descending);
    }
};
