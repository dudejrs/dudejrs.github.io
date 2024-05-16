const Filter = require('./filter')

module.exports = class ANDFilter extends Filter {
	
	constructor(){
		super()
		this.children = []
	}

	static of(...filters) {
		const ret = new ANDFilter()
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
			and : []
		}

		for (let child of children) {
			ret["and"].push(child.build())
		}

		return ret
	}
}