function usd(amount, asNumber = false) {
  let currency = 0;
  if (amount) {
    currency = amount / 100;
  }
  if (asNumber) {
    return currency
  }
  return `$${currency.toFixed(2)}`;
}

function fromUsd(currency) {
  if (!currency) {
    throw new Error('A currency is required');
  }
  if (typeof currency == 'string') {
    currency = parseFloat(currency.replace('$', ''));
  } else if (typeof currency != 'number') {
    throw new Error(`${currency} is not a supported type`);
  }
  return parseInt((currency * 100).toFixed());
}

module.exports = {
  usd,
  fromUsd
};
