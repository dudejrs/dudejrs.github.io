const Job = require('./job')

module.exports = class DatabaseJob extends Job{
	constructor({
		name, 
		path,
		target,
		exec, 
		handleError = (e)=>{throw e},
		initialize = ()=>{},
		finish = () => {}}) {
		
		super({name, exec, handleError, initialize, finish})
		this.path = path
		this.target = target
	}

	async exec(...args) {
		let data ;
		console.log(`[Database Job] ${this.name} start`)
		data = this.initialize()
		try {
			data = await this._exec(...args);
		} catch (e) {
			this.handleError(e)
		} finally {
			if (data) {
				this.finish({data, path: this.path })
			}
		}
		console.log(`[Database Job] ${this.name} finish`)
	}
}