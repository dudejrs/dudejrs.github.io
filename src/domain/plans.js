import axios from 'axios';



function getIdsFromCategroy(category){
	return axios.get('/data/categories.json')
			.then(({data})=>{
				return data[category];
			});
}

async function getPlan(id){
	return  await axios.get(`/data/${id}.json`)
					.then(({data})=> {
						return refineData(data);
					})
					.catch((error)=>{ 
						console.log(error);
						return undefined 
					});
}

async function getPlansFromIds(ids){
	const result = [] 
	

	for(let i=0; i<ids.length ; i++){
		let plan = await getPlan(ids[i]);
		result.push(plan);
	}

	return result;
}


function refineData(rawData){
	const result = {};

	result["id"]= rawData["id"];
	result["title"] = rawData["properties"]["Name"]["title"][0]["plain_text"]
	if(rawData["properties"]["남은 시간"]["rollup"]["array"][0]){
		result["남은 시간"] = rawData["properties"]["남은 시간"]["rollup"]["array"][0]["formula"]["string"];
	}
	// result["단위계획 수"] = rawData["properties"]["단위계획 수"]["formula"]["number"];
	result["Tag"] = rawData["properties"]["Tag"]["multi_select"].map((item)=>item["name"]);
	result["완료"] = (rawData["properties"]["완료"]["checkbox"])? "true" : "false";
	if(rawData["properties"]["완료율"][0]["formula"]["string"])
		result["완료율"] = rawData["properties"]["완료율"][0]["formula"]["string"];
	result["장기/단기"] = rawData["properties"]["장기/단기"]["multi_select"].map((item)=>item["name"])

	return result;
}


export function getPlans(category){
	return getIdsFromCategroy(category)
			.then((ids)=>{
				return  getPlansFromIds(ids);
			})
			.catch((error)=>{
				console.log(error);
				return Promise.resolve([])
			});
}

export function getPlanById(id){
	return getPlan(id);
}


