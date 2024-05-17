const Filter = require('./filter')

module.exports = class ANDFilter extends Filter {
	
	constructor(){
		super()
		this.children = []
	}

	static of(...filters) {
		const ret = new ANDFilter()
		for (let filter of filters) {
			if (filter) {
				ret.addChild(filter)
			}
		}
		return ret
	}

	addChild(filter) {
		this.children.push(filter)
		return this
	}

	build(){
		const ret = {
			and : []
		}

		for (let child of this.children) {
			ret["and"].push(child.build())
		}

		return ret
	}
}