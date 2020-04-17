import React from 'react';

const url = [ 'http://api.open-notify.org/iss-now.json']

// takes the api of the ISS location
// returns an object containing an object of the position coordinates
//   and the timestamp
const getSSLocation = async url => {
	const [{message, iss_position, timestamp}] = await Promise.all(url.map(async url => {
		const resp = await fetch(url);
		return resp.json();
	}))
	return (
		{iss_position, timestamp};
	)
}