const
	link = '//dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/obterPosicoesDaLinha/',
	handleError = err => console.log(err),
	asyncTryCatch = async (fn, cb) => {
		try {
			const data = await fn
			return cb(data)
		} catch (error) { return handleError(error) }
	},
	busRequest = async linha => asyncTryCatch(fetch(`${link}${linha}`), results => results.json()),
	returnDistance = (lat1, lon1, lat2, lon2) => {
		const
			R = 6371,
			dLat = (lat2 - lat1) * Math.PI / 180,
			dLon = (lon2 - lon1) * Math.PI / 180,
			a = (
				Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180)
				* Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
			),
			c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)),
			d = R * c
		return Math.round(d * 1000)
	}

export default { busRequest, returnDistance }

// .then(body => body.DATA.map(res => [res[3],res[4]]))
// .then(latLong => latLong.map(dist => {let qry = initial.concat(dist);return distance(...qry)}))
// .then(distance => distance.some(number => number < 300))
// .then(result =>{
// console.log(result)
// if(result){ alert('tem um onibus proximo do seu local')}
// else{
//     console.log('ainda nada')
//     setTimeout(() => {query()}, 60000)
// }
// });
