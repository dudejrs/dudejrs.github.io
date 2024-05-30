const Filter = require('./filter')

module.exports = class ORFilter extends Filter {
	
	constructor(){
		super()
		this.children = []
	}

	static of(...filters) {
		const ret = new ORFilter()
		for (let filter of filters) {
			ret.addChild(filter)
		}
		return ret
	}

	addChild(filter) {
		this.children.push(filter)
		return this
	}

	build(){
		const ret = {
			or : []
		}

		for (let child of this.children) {
			ret["or"].push(child.build())
		}

		return ret
	}
}