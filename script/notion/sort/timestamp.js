const Sort = require('./sort')

module.exports = class TimestampSort extends Sort {
	
	constructor(value, direction, next = null){
		super("timestamp", value, direction, next)
	}

	static CreatedTimeAscending() {
		return new TimestampSort("created_time", Sort.Direction.Ascending)
	}

	static CreatedTimeDescending() {
		return new TimestampSort("created_time", Sort.Direction.Descending)
	}

	static LastEditedTimeAscending() {
		return new TimestampSort("last_edited_time", Sort.Direction.Ascending)
	}

	static LastEditedTimeDescending() {
		return new TimestampSort("last_edited_time", Sort.Direction.Descending)
	}
}