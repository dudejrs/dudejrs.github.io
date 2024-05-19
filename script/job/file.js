const {cpSync, existsSync, rmSync, statSync} = require('fs')
const Job = require('./job')

module.exports = class FileJob extends Job {
	
	constructor({name,
		path,
		exec,
		handleError,
	 	initialize,
		 finish}
		) {
		super({name, exec, handleError, initialize, finish})
		this.path = FileJob.applyPath(path)
	}

	static applyPath(path) {
		if (!path) {
			throw new Error('path must be given')
		}

		if (!existsSync(path) || !statSync(path).isFile()) {
			throw new Error(`Not a Valid Path: ${path}`)
		}

		return path
	}

	#initialize(){
		cpSync(this.path, this.tmpFile, { overwrite: true }) 
		return 
	}

	#restore() {
		cpSync(this.tmpFile, this.path, { overwrite: true }) 
		return 		
	}

	#finish() {
		rmSync(this.tmpFile, {recursive: true})
	}

	async exec(...args) {
		this.#initialize()
		this.initialize()
		try {
			await this._exec(this.path, ...args)
		} catch (e) {
			this.handleError(e)
			this.#restore()
		} finally {
			this.finish()
			this.#finish()
		}
	}

	get tmpFile() {
		 const p = this.path.split("/")
		 p[p.length - 1] = `_${p[p.length - 1]}`

		return p.join("/")
	}
}