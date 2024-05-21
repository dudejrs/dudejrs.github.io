module.exports = class Scheme {
	constructor(name, config){
		this.name = name
		this.children = Scheme.applyChildren(config)
	}

	static applyChildren(config) {
		return Object.entries(config)
			.filter(e => e[1] instanceof Scheme)
			.map(e => {
				e[1].name = e[0]
				return e[1]
			});
	}

	addChildren(scheme) {
		this.children.push(children)
		return this
	}

	async convert(data, args) {
		const ret = {}
		
		for (let child of this.children) {
			ret[child.name] = await child.convert(data, args)
		}

		return ret
	}
}