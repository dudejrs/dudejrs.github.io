const Filter = require('./filter')

module.exports = class NumberFilter extends Filter {
	
	constructor(property, field, value){
		super()
		this.property = property
		this.field = field
		this.value = value
	}

	static Eqauls(property, value){
		return new NumberFilter(property, "equals", value)
	}

	static DoesNotEqaul(property, value){
		return new NumberFilter(property, "does_not_equal", value)
	}

	static GreaterThan(property, value){
		return new NumberFilter(property, "greater_than", value)
	}

	static GreaterThanOrEqualTo(property, value){
		return new NumberFilter(property, "greater_than_or_equal_to", value)
	}
	
	static LessThan(property, value){
		return new NumberFilter(property, "less_than", value)
	}

	static LessThanOrEqualTo(property, value){
		return new NumberFilter(property, "less_than_or_equal_to", value)
	}
	
	static IsEmpty(property, value){
		return new NumberFilter(property, "is_empty", value)
	}

	static IsNotEmpty(property, value){
		return new NumberFilter(property, "is_not_empty", value)
	}
	
	build(){
		return {
			property : this.property,
			"number" : {
				[this.field] : this.value		
			}
		}
	}
}