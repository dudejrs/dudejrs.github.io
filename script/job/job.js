module.exports = class Job {
	constructor({name,
		exec = () => {throw new Error("exec function must be given")},
		handleError = ()=>{},
	 	initialize = ()=>{},
		 finish = ()=>{},
		 children = []
	}) {
		this.name = name
		this.handleError = handleError
		this.initialize = initialize
		this.finish = finish
		this.children = children
		this._exec = exec
	}

	setChild(child){
		this.children.push(child)
		return this
	}

	exec(args) {
		this.initialize()
		try {
			this._exec({...args})
			this.children.forEach(
				child => child.exec({...args})	
			)
		} catch (e) {
			this.handleError(e)
		} finally {
			this.finish()
		}
	}
}