const Filter = require('./filter')

module.exports = class DateFilter extends Filter {
	
	constructor(property, type, field, value){
		super()
		this.property = property
		this.type = type
		this.field = field
		this.value = value
	}

	static Checkbox(property, field, value) {
		return new DateFilter(property, "checkbox", field, value)
	}

	static Date(property, field, value) {
		return new DateFilter(property, "date", field, value)
	}

	static Number(property, field, value) {
		return new DateFilter(property, "number", field, value)
	}

	static String(property, field, value) {
		return new DateFilter(property, "string", field, value)
	}

	build(){
		return {
			property : this.property,
			"formula" : {
				[this.type] : {
					[this.field] : this.value		
				}
			}
		}
	}
}