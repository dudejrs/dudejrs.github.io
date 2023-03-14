import {useEffect, useState} from 'react';
import {Client} from '@notionhq/client';
import axios from 'axios'
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import {NotionRenderer} from 'react-notion-x'
import {Collection} from 'react-notion-x/build/third-party/collection'

import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';

export default function NotionContainer() {
	
	const [response, setResponse] = useState({});

	// const notion = new Client({
	// 	auth : 'secret_5mVIQo9vEeK8NVj6LSaHDJHqIQ0zFGAPmp3QxrpoEsu'
	// })

	// useEffect(async()=>{

	// 	await axios.get('https://notion-api.splitbee.io/v1/page/37c48dc0659c4c6ebcdb72df6b9143e8?v=2e3b460148f743e799e9feb48d69a13c',{
	// 		Authorization: `Bearer secret_5mVIQo9vEeK8NVj6LSaHDJHqIQ0zFGAPmp3QxrpoEsu`
	// 	})
	// 		.then(({data}) =>{
	// 			console.log(data);
	// 			setResponse(data);
	// 		});
	// },[])

	useEffect(async()=>{

		await axios.get('/data/6db4fa58-a9eb-48d6-82cc-c6e1a53ce32b.json')
			.then(({data})=>{
				console.log(data);
				setResponse(data);
			});
		
	},[]);

	
	return (
			<div >  
				{
					// Object.keys(response).length && <NotionRenderer recordMap={response}/>
				}

			</div>
		);
}