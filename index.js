export function usd(amount) {
  if (!amount) {
    return '$0.00';
  } else {
    return `$${(amount / 100).toFixed(2)}`;
  }
}

export function fromUsd(currency) {
  if (typeof currency == 'string') {
    currency = parseInt(currency.replace('$', ''));
  } else if (typeof currency != 'number') {
    throw new Error(`${currency} is not a supported type`);
  }
  return Math.floor(currency * 100);
}
