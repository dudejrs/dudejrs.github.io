const Property = require('./property')
const {CheckboxType , DateType , MultiSelectType , RichTextType , SelectType , StatusType , TitleType, NumberType, RollupType, URLType } = require('./type')

module.exports = class NestedProperty extends Property {

	constructor(name, id, type, rename) {
		super(name, id, type, rename)
	}

	static Checkbox(name, id, rename) {
		return new NestedProperty(name, id, new CheckboxType(), rename)
	}

	static Date(name, id, rename) {
		return new NestedProperty(name, id, new DateType(), rename)
	}

	static Number(name, id, rename) {
		return new NestedProperty(name, id, new NumberType(), rename)
	}

	static MultiSelect(name, id, rename) {
		return new NestedProperty(name, id, new MultiSelectType(), rename)
	}

	static RichText(name, id, rename) {
		return new NestedProperty(name, id, new RichTextType(), rename)
	}

	static Select(name, id, rename) {
		return new NestedProperty(name, id, new SelectType(), rename)
	}

	static Status(name, id, rename) {
		return new NestedProperty(name, id, new StatusType(), rename)
	}

	static Title(name, id, rename) {
		return new NestedProperty(name, id, new TitleType(), rename)
	}

	static Rollup(name, id, type, rename) {
		return new NestedProperty(name, id, new RollupType(type), rename)
	}

	static URL(name, id, rename) {
		return new NestedProperty(name, id, new URLType(), rename)
	}

	async convert(data) {
		return this.type.convert(data["properties"][this.name])
	}

	build(value) {
		return {
			[this.name] : type.build(value)
		}
	}
}