const Filter = require('./filter')

module.exports = class CheckboxFilter extends Filter {
	
	constructor(property, field, value){
		super()
		this.property = property
		this.field = field
		this.value = value
	}

	static Eqauls(property, value){
		return new CheckboxFilter(property, "equals", value)
	}

	static DoesNotEqaul(property, value){
		return new CheckboxFilter(property, "does_not_equal", value)
	}
	
	build(){
		return {
			property : this.property,
			"checkbox" : {
				[this.field] : this.value		
			}
		}
	}
}