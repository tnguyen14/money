# money

> Display and convert currency amount

## usd

This is the default. The amount needs to be in cents (whole integer).

```js
import { usd, fromUsd } from "@tridnguyen/money";

usd(2020); // $20.20
usd(145230); // $1,452.30
usd(-43674); // ($436.74)
usd(); // $0.00

usd(10032, true); // 100.32

fromUsd(20.19); // 2019
fromUsd('$30.30'); // 3030

fromCents(2021); // 20.21
toCents(335.67); // 33567
```
