const tap = require('tap');
const { fromCents, toCents, usd, fromUsd } = require('./');

tap.test('money', (t) => {
  t.test('fromCents', (t) => {
    t.throws(() => {fromCents()});
    t.throws(() => {fromCents('50')});
    t.equal(fromCents(504), 5.04);
    t.equal(fromCents(-2040), -20.40)
    t.equal(fromCents(0), 0);
    t.end();
  });
  t.test('toCents', (t) => {
    t.throws(() => {toCents([])});
    t.throws(() => {toCents()});
    t.throws(() => {toCents('$1')});
    t.equal(toCents(45.24), 4524);
    t.equal(toCents('45.24'), 4524);
    t.equal(toCents(31.39999), 3140);
    t.equal(toCents(0), 0);
    t.end();
  })
  t.test('usd', (t) => {
    t.test('get currency', (t) => {
      t.equal(usd(), '$0.00');
      t.equal(usd(4300), '$43.00');
      t.equal(usd(45), '$0.45');
      t.equal(usd(154300), '$1,543.00');
      t.equal(usd(984.3), '$9.84');
      t.equal(usd(984.9), '$9.84');
      t.end();
    });
    t.test('get currency as number', (t) => {
      t.equal(usd(null, true), 0);
      t.equal(usd(2303, true), 23.03);
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
