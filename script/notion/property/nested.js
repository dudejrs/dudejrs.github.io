const {CheckboxType , DateType , MultiSelectType , RichTextType , SelectType , StatusType , TitleType } = require('./type')

module.exports = class NestedProperty {

	constructor(name, type, rename) {
		this.name = name
		this.type = type
		this.rename = rename ? rename : name
	}

	static Checkbox(name) {
		return new NestedProperty(name, new CheckboxType())
	}

	static Date(name) {
		return new NestedProperty(name, new DateType())
	}

	static MultiSelect(name) {
		return new NestedProperty(name, new MultiSelectType())
	}

	static RichText(name) {
		return new NestedProperty(name, new RichTextType())
	}

	static Select(name) {
		return new NestedProperty(name, new SelectType())
	}

	static Status(name) {
		return new NestedProperty(name, new SelectType())
	}

	static Title(name) {
		return new NestedProperty(name, new TitleType())
	}

	convert(data) {
		return this.type.convert(data["properties"][this.name])
	}
}