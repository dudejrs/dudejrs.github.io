const Sort = require('./sort')

module.exports = class PropertySort extends Sort{
	
	constructor(value, direction, next = null){
		super("property", value, direction, next)
	}

	static Ascending(value) {
		return new Sort(value, Sort.Direction.Ascending)
	}

	static Decending(value) {
		return new Sort(value, Sort.Direction.Descending)
	}
}