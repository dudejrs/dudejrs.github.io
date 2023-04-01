
export function filterData(data, fields){

	if(!fields){
		return data;
	}
	
	const output = {};
	
	output["id"] = data["id"];

	fields.forEach((field)=>{
		if(field == "단위계획 수") return; /* 추후 수정 */
		if(data[field]) output[field] = data[field];
	});

	return output;
}