const {readFileSync, writeFileSync} = require('fs')

const {FileJob} = require('../../job')

async function calculateCount({path, categories}) {
	const ret = {}

	for (let category of categories) {
		const data = JSON.parse(await readFileSync(`${process.env.PWD}/public/data/categories/${category}.json`, {encoding : 'utf-8'}))
		
		if (Object.keys(data).length == 0) {
			ret[category] = 0
			continue
		}

		let count = 0
		for (const key in data["카테고리"]) {
			count += data["카테고리"][key].length
		}
		ret[category] = count
	}

	await writeFileSync(path, JSON.stringify(ret), {encoding : 'utf-8', flag : 'w+'})

	return 
}

module.exports = new FileJob({
	name : `카테고리들의 count를 계산`,
	path : `${process.env.PWD}/public/data/categories/count.json`,
	exec : calculateCount,
	handleError: console.log
})