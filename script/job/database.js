const Job = require('./job')

module.exports = class DatabaseJob extends Job{
	constructor({
		name, 
		path,
		target,
		exec, 
		handleError = (e)=>{throw e},
		initialize = ()=>{},
		finish = () => {}}, 
		children = []) {
		
		super({name, exec, handleError, initialize, finish, children})
		this.path = path
		this.target = target
	}

	async exec(args) {
		let data ;
		console.log(`[Database Job] ${this.name} start`)
		data = this.initialize()
		try {
			data = await this._exec({...args, path: this.path});
			this.children.forEach(
				child => child.exec({...args, ...data})	
			)
		} catch (e) {
			this.handleError(e)
		} finally {
			if (data) {
				this.finish({data, path: this.path })
			}
		}
		console.log(`[Database Job] ${this.name} finish`)
		return data
	}
}