# money

> Display and convert currency amount

## usd

This is the default. The amount needs to be in cents (whole integer).

```js
import { usd, fromUsd } from "@tridnguyen/money";

usd(2020); // $20.20
usd(); // $0.00

fromUsd(20.19); // 2019
fromUsd('$30.30'); // 3030
```
