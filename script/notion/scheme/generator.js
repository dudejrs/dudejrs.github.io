const Scheme = require('./scheme')

module.exports = class GeneratorScheme extends Scheme {
	constructor(name, generateScheme){
		super(name, {})
		this.generateScheme = generateScheme
	}

	async convert(data, args) {
		const ret = {}
		
		for (let scheme of await this.generateScheme(args)) {
			let d = await scheme.convert(data, args)

			if (!Scheme.isFalsy(d)) {
				ret[scheme.name] = d
			}
		}

		return ret
	}
}