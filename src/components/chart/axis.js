import * as d3 from 'd3'

export function getScale(type, data, margin, width) {

	data = data.filter(d => d)

	switch(type){
		case 'length' : 
			return d3.scaleLinear().domain([0, data.length-1]).range([margin.left, width- margin.right]) 
		case 'time' :
			return d3.scaleTime().domain([data[0], data[data.length-1]]).range([margin.left, width- margin.right])
		default : 
			return d3.scalePoint().domain(data).range([margin.left, width- margin.right])
	}
}

export function getAxis(type, tickformat, x, data){
	let ticks;
	data = data.filter(d => d)

	if (type == 'time'){
		switch(tickformat){
			case 'day' : 
				ticks = d3.timeDays(data[0], data[data.length-1])

				return d3.axisBottom(x).tickValues(ticks)
						.tickFormat(x.tickFormat("%A %d"))
			
			case 'week' :
				ticks = d3.timeWeeks(data[0], data[data.length-1])

				return d3.axisBottom(x).tickValues(ticks)
							.tickFormat(x.tickFormat("%b %d"))
			case 'month' : 
				ticks = d3.timeMonths(data[0], data[data.length-1])

				return d3.axisBottom(x).tickValues(ticks)
					.tickFormat(x.tickFormat("%b"))

			default :
		}
	}

	return d3.axisBottom(x).ticks(data.length);
}
