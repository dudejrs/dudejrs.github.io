
module.exports = class Sort {
	
	static Direction = Object.freeze({
		Ascending : Symbol.for("ascending"),
		Descending : Symbol.for("descending")
	})

	constructor(type, value, direction, next = null){
		this.type = type
		this.value = value
		this.direction = direction
		this.next = next
	}

	static Ascending(property) {
		return new Sort(property, Sort.Direction.Ascending)
	}

	static Decending(property) {
		return new Sort(property, Sort.Direction.Descending)
	}

	static CreatedTimeAscending() {
		return new Sort("created_time", Sort.Direction.Ascending)
	}

	static CreatedTimeDescending() {
		return new Sort("created_time", Sort.Direction.Descending)
	}

	static LastEditedTimeAscending() {
		return new Sort("last_edited_time", Sort.Direction.Ascending)
	}

	static LastEditedTimeDescending() {
		return new Sort("last_edited_time", Sort.Direction.Descending)
	}

	add(sort) {
		let cur = this
		while (cur.next) {
			cur = cur.next
		}
		cur.next = sort
	}

	build(){
		let ret = []
		let cur = this
		
		while(cur) {
			ret.push({
				[this.type] : this.value, 
				direction : Symbol.keyFor(this.direction)
			})
			cur = cur.next
		}
		return ret
	}
}