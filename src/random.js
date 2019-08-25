function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomString(len) {
	return Math.random().toString(36).substr(2, len);
}


export default {
	getRandomInt,
	getRandomArbitrary,
	getRandomString
};
