const Filter = require('./filter');
const CheckboxFilter = require('./checkbox');

module.exports = class RichTextFilter extends Filter {
    constructor(property, field, value) {
        super();
        this.property = property;
        this.field = field;
        this.value = value;
    }

    static Contains(property, value) {
        return new CheckboxFilter(property, 'contains', value);
    }

    static DoesNotContain(property, value) {
        return new CheckboxFilter(property, 'does_not_contain', value);
    }

    static Eqauls(property, value) {
        return new CheckboxFilter(property, 'equals', value);
    }

    static DoesNotEqaul(property, value) {
        return new CheckboxFilter(property, 'does_not_equal', value);
    }

    static EndsWith(property, value) {
        return new CheckboxFilter(property, 'ends_with', value);
    }

    static Starts_with(property, value) {
        return new CheckboxFilter(property, 'starts_with', value);
    }

    static IsEmpty(property, value) {
        return new CheckboxFilter(property, 'is_empty', value);
    }

    static IsNotEmpty(property, value) {
        return new CheckboxFilter(property, 'is_not_empty', value);
    }

    build() {
        return {
            property: this.property,
            rich_text: {
                [this.field]: this.value,
            },
        };
    }
};
