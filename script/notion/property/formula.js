const Property = require('./property')

module.exports = class FormulaProperty extends Property {
	constructor(name, propertyName, type = "formula") {
		super(name, propertyName, type, innne)
	}

	convert(data) {
		// return await getProperty(data["id"], data["properties"][this.propertyName]["id"], secret).then(({data})=>{
		// 	return data["formula"]["string"];
		// });

		return {}
	}
}
