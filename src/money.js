/**
 * format price
 */
const formatMoney = (money) => {
	if (!money) {
		return '0';
	}

	if (Number.isInteger(parseFloat(money))) {
		return parseInt(money);
	}
	return parseFloat(money).toFixed(2);
};

/**
 * formatMoneyStr: change 1000 to 1,000
 * @param num
 * @returns {string}
 */
const formatMoneyStr = function (num) {
	return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};


const money = {
	fix2End: formatMoney,
	formatMoneyStr
};

export default money;
