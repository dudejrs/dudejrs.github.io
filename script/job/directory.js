const {cpSync, existsSync, rmdirSync} = require('fs')
const Job = require('./job')

module.exports = class DirectoryJob extends Job {
	
	constructor({name,
		path,
		exec,
		handleError,
	 	initialize,
		 finish, 
		 children}
		) {
		super({name, exec, handleError, initialize, finish, children})
		this.path = DirectoryJob.applyPath(path)
	}

	static applyPath(path) {
		if (!path) {
			throw new Error('path must be given')
		}

		if (!existsSync(path)) {
			throw new Error(`Not a Valid Path: ${path}`)
		}

		return path
	}

	#initialize(){
		cpSync(this.path, this.tmpDir, { recursive: true, overwrite: true }) 
		return 
	}

	#restore() {
		cpSync(this.tmpDir, this.path, { recursive: true, overwrite: true }) 
		return 		
	}

	#finish() {
		rmdirSync(this.tmpDir, {recursive: true})
	}

	async exec(args) {
		this.#initialize()
		this.initialize()
		try {
			await this._exec({ path : this.path, ...args})
			this.children.forEach(
				child => child.exec({...args})	
			)
		} catch (e) {
			this.handleError(e)
			this.#restore()
		} finally {
			this.finish()
			this.#finish()
		}
	}

	get tmpDir() {
		return `${this.path}_`
	}
}