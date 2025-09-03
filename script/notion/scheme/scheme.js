module.exports = class Scheme {
    constructor(name, config) {
        this.name = name;
        this.children = Scheme.applyChildren(config);
    }

    static applyChildren(config) {
        return Object.entries(config)
            .filter(e => e[1] instanceof Scheme)
            .map(e => {
                e[1].name = e[0];
                return e[1];
            });
    }

    static isFalsy(d) {
        return (
            !d ||
            (Array.isArray(d) && d.length == 0) ||
            Object.keys(d).length == 0
        );
    }

    addChild(scheme) {
        this.children.push(scheme);
        return this;
    }

    async convert(data, args) {
        const ret = {};

        for (let child of this.children) {
            const d = await child.convert(data, args);
            if (!Scheme.isFalsy(d)) {
                ret[child.name] = d;
            }
        }

        return ret;
    }
};
