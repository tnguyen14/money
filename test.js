const tap = require('tap');
const { usd, fromUsd } = require('./');

tap.test('money', (t) => {
  t.test('usd', (t) => {
    t.test('get currency', (t) => {
      t.equal(usd(), '$0.00');
      t.equal(usd(4300), '$43.00');
      t.equal(usd(45), '$0.45');
      t.end();
    });
    t.test('get currency as number', (t) => {
      t.equal(usd(null, true), 0);
      t.equal(usd(2303, true), 23.03);
      t.equal(usd(99, true), 0.99);
      t.end();
    });
    t.end();
  });
  t.test('fromUsd', (t) => {
    t.equal(fromUsd(10.03), 1003);
    t.equal(fromUsd('540.32$'), 54032);
    t.equal(fromUsd('$1,234.43'), 123443);
    try {
      fromUsd();
      t.ok(false);
    } catch (e) {
      t.ok(true);
    }
    try {
      fromUsd([]);
      t.ok(false);
    } catch (e) {
      t.ok(true);
    }
    t.end();
  })
  t.end();
});
