const Filter = require('./filter');

module.exports = class TimestampFilter extends Filter {
    constructor(timestamp, field, value) {
        super();
        this.timestamp = timestamp;
        this.field = field;
        this.value = value;
    }

    static CreatedTime(field, value) {
        return new TimestampFilter('created_time', field, value);
    }

    static LastEditedTime(field, value) {
        return new TimestampFilter('last_edited_time', field, value);
    }

    build() {
        return {
            timestamp: this.timestamp,
            [this.timestamp]: {
                [this.field]: this.value,
            },
        };
    }
};
