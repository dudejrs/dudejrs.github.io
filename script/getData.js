const { Client } = require('@notionhq/client');
const axios  = require('axios');
const fs = require('fs');

require('dotenv').config();


const dirPath = 'public/data/test';

const Tags = ["Java","Spring", "Spring Boot", "Frontend", "Node.js", "Javascript", "Backend", "빅데이터분석기", "Data Scientist", "SQLP", "DBMS Administrator", "OpenGL", "Graphics", "React.js", "리눅스마스터", "Linux", "DevOps"];

const notion = new Client({
	auth : process.env.notion_integration_secret
});


async function getProperty(pageId, propertyId){
	return axios.get(`https://api.notion.com/v1/pages/${pageId}/properties/${propertyId}`,{
		headers : {
			"Authorization" : `Bearer ${process.env.notion_integration_secret}`,
			"Notion-Version" : '2022-06-28'
		}
	})
}

 async function getResult(){

 	const filter = {
			or : []
	};

	Tags.forEach((tag)=>{
		filter["or"].push({
			property : "Tag",
			multi_select : {
				contains : tag
			}
		})
	});


	const {results} = await notion.databases.query({
		database_id : process.env.notion_database_id,	
		filter : filter
	});

	
	tags = {}

	results.forEach(async(result)=>{

		result["properties"]["Tag"]["multi_select"].forEach((tag)=>{
			const tag_name = tag["name"];

			if( !tags[tag_name] ) tags[tag_name] = [];
			tags[tag_name].push(result["id"]);
		})


		// "완료율"" "단위계획 수"
		result["properties"]["완료율"] = await getProperty(result["id"], result["properties"]["완료율"]["id"]).then(({data})=>{
			return data["results"]
		});;
		// result["properties"]["단위계획 수"] = await getProperty(result["id"], result["properties"]["단위계획 수"]["id"]);

		saveResult(result);
	});

	saveCategories(tags);
}


function saveResult(result){
	const file_path= `${dirPath}/${result.id}.json`;
	fs.writeFile(file_path, JSON.stringify(result), (err)=>{console.log(err)});
}

function saveCategories(result){
	const file_path = `${dirPath}/categories.json`;
	fs.writeFile(file_path, JSON.stringify(result), (err)=> { console.log(err)});
}



fs.rmdirSync(dirPath,{recursive : true }, (err)=>{console.log(err)});
fs.mkdirSync(dirPath ,(err)=>{console.log(err)});
getResult();


/*
{
	properties 
		Date 
		남은 시간
		Tag
		단위계획 수
		완료
		완료
		장기/단기
}
*/