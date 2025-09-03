const Filter = require('./filter');

module.exports = class SelectFilter extends Filter {
    constructor(property, field, value) {
        super();
        this.property = property;
        this.field = field;
        this.value = value;
    }

    static Equals(property, value) {
        return new SelectFilter(property, 'equals', value);
    }

    static DoesNotEqaul(property, value) {
        return new SelectFilter(property, 'does_not_equal', value);
    }

    static IsEmpty(property, value) {
        return new SelectFilter(property, 'is_empty', true);
    }

    static IsNotEmpty(property, value) {
        return new SelectFilter(property, 'is_not_empty', true);
    }

    build() {
        return {
            property: this.property,
            select: {
                [this.field]: this.value,
            },
        };
    }
};
