const formatNumber = (num) => {
	return Number.parseFloat(num).toFixed(2);
};

const addCommas = (num) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export { addCommas, formatNumber };
