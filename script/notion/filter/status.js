const Filter = require('./filter');

module.exports = class StatusFilter extends Filter {
    constructor(property, field, value) {
        super();
        this.property = property;
        this.field = field;
        this.value = value;
    }

    static Equals(property, value) {
        return new StatusFilter(property, 'equals', value);
    }

    static DoesNotEqual(property, value) {
        return new StatusFilter(property, 'does_not_equal', value);
    }

    static IsEmpty(property, value) {
        return new StatusFilter(property, 'is_empty', true);
    }

    static IsNotEmpty(property, value) {
        return new StatusFilter(property, 'is_not_empty', true);
    }

    build() {
        return {
            property: this.property,
            status: {
                [this.field]: this.value,
            },
        };
    }
};
