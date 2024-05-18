module.exports = class Job {
	constructor({name,
		exec = () => {throw new Error("exec function must be given")},
		handleError = ()=>{},
	 	initialize = ()=>{},
		 finish = ()=>{}
	}) {
		this.name = name
		this.handleError = handleError
		this.initialize = initialize
		this.finish = finish
		this._exec = exec
	}

	exec(...args) {
		this.initialize()
		try {
			this._exec(args)
		} catch (e) {
			this.handleError(e)
		} finally {
			this.finish()
		}
	}
}