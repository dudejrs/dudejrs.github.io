module.exports = class Property {
    constructor(name, id, type, rename) {
        this.name = name;
        this.id = id;
        this.type = type;
        this.rename = rename ? rename : name;
    }

    convert() {
        throw new Error('UnSupported');
    }

    build(_value) {
        throw new Error('UnSupported');
    }
};
