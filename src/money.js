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


const money = {
  fix2End: formatMoney
};

export default money;
