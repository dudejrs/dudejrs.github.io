const Filter = require('./filter')

module.exports = class DateFilter extends Filter {
	
	constructor(property, field, value){
		super()
		this.property = property
		this.field = field
		this.value = value
	}

	static After(property, value) {
		return new DateFilter(property, "after", value)
	}

	static Before(property, value) {
		return new DateFilter(property, "before", value)
	}

	static Equals(property, value) {
		return new DateFilter(property, "equals", value)
	}

	static IsEmpty(property, value) {
		return new DateFilter(property, "is_empty", value)
	}

	static IsNotEmpty(property, value) {
		return new DateFilter(property, "is_not_empty", value)
	}

	static NextMonth(property) {
		return new DateFilter(property, "next_month")
	}

	static NextWeek(property) {
		return new DateFilter(property, "next_week")
	}

	static NextYear(property) {
		return new DateFilter(property, "next_year")
	}

	static PastMonth(property) {
		return new DateFilter(property, "past_month")
	}

	static PastWeek(property) {
		return new DateFilter(property, "past_week")
	}

	static PastYear(property) {
		return new DateFilter(property, "past_year")
	}

	static OnOrAfter(property, value) {
		return new DateFilter(property, "on_or_after", value)
	}

	static OnOrBefore(property, value) {
		return new DateFilter(property, "on_or_before", value)
	}

	static ThisWeek(property) {
		return new DateFilter(property, "this_week")
	}

	build(){
		return {
			property : this.property,
			"date" : {
				[this.field] : this.value		
			}
		}
	}
}