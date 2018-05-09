/**
 * format price
 */
const formatMoney = (money) => {
  if (!money) {
    return '0';
  }
  if ((`${money}`).indexOf('.') !== -1) {
    return parseFloat(money).toFixed(2);
  }
  return parseInt(money);
};


const money = {
  fix2End: formatMoney
};

export default money;
