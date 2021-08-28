function fromCents(amount) {
  if (!Number.isSafeInteger(amount)) {
    throw new Error('amount needs to be an integer');
  }
  return amount / 100;
}

function toCents(amount) {
  if (Number.isNaN(parseFloat(amount))) {
    throw new Error('amount needs to be a number');
  }
  return parseInt((parseFloat(amount) * 100).toFixed());
}

function usd(amount, asNumber = false) {
  let currency = 0;
  let negative = false;
  if (amount) {
    if (amount < 0) {
      amount = -amount; //convert to positive to later operations
      negative = true;
    }
    currency = fromCents(parseInt(amount));
  }
  if (asNumber) {
    console.log('asNumber is deprecated, use fromCents');
    return currency
  }
  const formatted = `$${currency.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
  return negative ? `(${formatted})` : formatted;
}

function fromUsd(currency) {
  if (!currency) {
    throw new Error('A currency is required');
  }
  if (typeof currency == 'string') {
    currency = parseFloat(currency.replace(/\$/g, '').replace(/,/g, ''));
  } else if (typeof currency != 'number') {
    throw new Error(`${currency} is not a supported type`);
  }
  return toCents(currency);
}

module.exports = {
  fromCents,
  toCents,
  usd,
  fromUsd
};
