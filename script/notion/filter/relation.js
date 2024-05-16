const Filter = require('./filter')

module.exports = class RelationFilter extends Filter {
	
	constructor(property, field, value){
		super()
		this.property = property
		this.field = field
		this.value = value
	}

	static Contains(property, value){
		return new RelationFilter(property, "contains", value)
	}

	static DoesNotContain(property, value){
		return new RelationFilter(property, "does_not_contain", value)
	}
	
	static IsEmtpy(property, value){
		return new RelationFilter(property, "is_empty", value)
	}

	static IsNotEmpty(property, value){
		return new RelationFilter(property, "is_not_empty", value)
	}
	
	build(){
		return {
			property : this.property,
			"relation" : {
				[this.field] : this.value		
			}
		}
	}
}