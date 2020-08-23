export function usd(amount) {
  if (!amount) {
    return '$0.00';
  } else {
    return `$${(amount / 100).toFixed(2)}`;
  }
}

export default usd;
