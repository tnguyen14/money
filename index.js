export function usd(amount, asNumber = false) {
  let currency = 0;
  if (amount) {
    currency = amount / 100;
  }
  if (asNumber) {
    return currency
  }
  return `$${currency.toFixed(2)}`;
}

export function fromUsd(currency) {
  if (typeof currency == 'string') {
    currency = parseInt(currency.replace('$', ''));
  } else if (typeof currency != 'number') {
    throw new Error(`${currency} is not a supported type`);
  }
  return Math.floor(currency * 100);
}
