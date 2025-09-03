const Filter = require('./filter');

module.exports = class MultiSelectFilter extends Filter {
    constructor(property, field, value) {
        super();
        this.property = property;
        this.field = field;
        this.value = value;
    }

    static Contains(property, value) {
        return new MultiSelectFilter(property, 'contains', value);
    }

    static DoesNotContain(property, value) {
        return new MultiSelectFilter(property, 'does_not_contain', value);
    }

    static IsEmpty(property, value) {
        return new MultiSelectFilter(property, 'is_empty', true);
    }

    static IsNotEmpty(property, value) {
        return new MultiSelectFilter(property, 'is_not_empty', true);
    }

    build() {
        return {
            property: this.property,
            multi_select: {
                [this.field]: this.value,
            },
        };
    }
};
