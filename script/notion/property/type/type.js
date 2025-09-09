module.exports = class Type {
    constructor(name) {
        this.name = name;
    }

    convert(data) {
        throw new Error(`UnSupported Operation : ${JSON.stringify(data)}`);
    }
};
