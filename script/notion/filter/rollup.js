const Filter = require('./filter')

class RollupArrayFilter extends Filter {
	
	constructor(property, condition, type, field, value){
		super()
		this.property = property
		this.condition = condition
		this.type = type
		this.field = field
		this.value = value
	}
	
	build(){
		return {
			property : this.property,
			"rollup" : {
				[this.condition] : {
					[this.type] : {
						[this.field] : this.value		
					}
				}
			}
		}
	}
}

module.exports = class RollupFilter extends Filter {
	
	constructor(property, type, field, value){
		super()
		this.property = property
		this.type = type
		this.field = field
		this.value = value
	}

	static Any(property, type, field, value){
		return new RollupArrayFilter(property, "any", type, field, value)
	}

	static Every(property, type, field, value){
		return new RollupArrayFilter(property, "every", type, field, value)
	}

	static None(property, type, field, value){
		return new RollupArrayFilter(property, "none", type, field, value)
	}

	static Date(property, field, value){
		return new RollupFilter(property, "date", field, value)
	}
	
	static Number(property, field, value){
		return new RollupFilter(property, "number", field, value)
	}
	
	build(){
		return {
			property : this.property,
			"rollup" : {
				[this.type] : {
					[this.field] : this.value		
				}
			}
		}
	}
}
