# @fimion/ts-http-status-codes

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> A TypeScript HTTP Status Code Library based on
> [IETF RFC9110 Section 15](https://httpwg.org/specs/rfc9110.html#rfc.section.15)

## Installation

Install package:

```sh
# npm
npm install @fimion/ts-http-status-codes

# pnpm
pnpm install @fimion/ts-http-status-codes
```

## JavaScript Exports

### `HTTP_CODES`

`HTTP_CODES` objects are `"MESSAGE": number` pairs that help convey semantic
meaning when supplying an HTTP status code. For instance, rather than having
`status = 200` in your code base, you can supply `status = HTTP_CODES.OK` to
convey a semantic meaning.

```js
import {
  HTTP_CODES, // Has all defined status codes in RFC 9110
  HTTP_CODES_1XX, // Only has status codes in the 1xx Informational class
  HTTP_CODES_2XX, // Only has status codes in the 2xx Successful class
  HTTP_CODES_3XX, // Only has status codes in the 3xx Redirection class
  HTTP_CODES_4XX, // Only has status codes in the 4xx Client Error class
  HTTP_CODES_5XX, // Only has status codes in the 5xx Server Error class
} from "@fimion/ts-http-status-codes";

console.log(HTTP_CODES.OK) // 200
console.log(HTTP_CODES.NOT_FOUND) // 404

console.log(HTTP_CODES_4XX.NOT_FOUND) // 404
console.log(HTTP_CODES_4XX.OK) // undefined
```

### `HTTP_STATUSES`

`HTTP_STATUSES` are objects that have `number: "MESSAGE"` pairs in the reverse
of the `HTTP_CODES` objects. These are useful if you want to do a reverse look
up of what a status code semantically means, or to check if a status code exists
in a specific class of status codes.

```js
import {
  HTTP_STATUSES, // Has all defined statuses in RFC 9110
  HTTP_STATUSES_1XX, // Only has statuses in the 1xx Informational class
  HTTP_STATUSES_2XX, // Only has statuses in the 2xx Successful class
  HTTP_STATUSES_3XX, // Only has statuses in the 3xx Redirection class
  HTTP_STATUSES_4XX, // Only has statuses in the 4xx Client Error class
  HTTP_STATUSES_5XX, // Only has statuses in the 5xx Server Error class
} from "@fimion/ts-http-status-codes";

console.log(HTTP_STATUSES[200]) // "OK"
console.log(HTTP_STATUSES[404]) // "NOT_FOUND"

console.log(HTTP_STATUSES_4XX[404]) // "NOT_FOUND"
console.log(HTTP_STATUSES_4XX[200]) // undefined
```

### Strict Validators

Strict validators compare the given number to only the **defined** status codes
in a given class of status codes. These methods will also validate as the
correct
`TYPE_HTTP_CODE_XXX` type [defined below](#typescript-exports).

```js
import {
  isStrict1xx, // only valid for defined 1xx Informational class status codes
  isStrict2xx, // only valid for defined 2xx Successful class status codes
  isStrict3xx, // only valid for defined 3xx Redirection class status codes
  isStrict4xx, // only valid for defined 4xx Client Error class status codes
  isStrict5xx, // only valid for defined 5xx Server Error class status codes
} from "@fimion/ts-http-status-codes";

console.log(isStrict1xx(100)); // true
console.log(isStrict1xx(199)); // false
console.log(isStrict1xx(400)); // false

```

### Loose Validators

Loose validators compare the given number to **all** potential status codes
in a given class of status codes. If you are using extended status codes not
defined in RFC 9110, you'll want to use these methods. These methods will also
validate as the correct `LOOSE_TYPE_HTTP_CODE_XXX`
type [defined below](#typescript-exports).

```js
import {
  isLoose1xx, // valid for 100 - 199
  isLoose2xx, // valid for 200 - 299
  isLoose3xx, // valid for 300 - 399
  isLoose4xx, // valid for 400 - 499
  isLoose5xx, // valid for 500 - 599
} from "@fimion/ts-http-status-codes";

console.log(isLoose1xx(100)); // true
console.log(isLoose1xx(199)); // true
console.log(isLoose1xx(400)); // false

```

## TypeScript Exports

### `TYPE_HTTP_CODE`

`TYPE_HTTP_CODE` and the `TYPE_HTTP_CODE_XXX` types are strict types that match
only the defined status codes in RFC 9110.

```typescript
import type {
  TYPE_HTTP_CODE, // Matches all codes specified by RFC 9110
  TYPE_HTTP_CODE_1XX, // Strict, only codes in the 1xx Informational class
  TYPE_HTTP_CODE_2XX, // Strict, only codes in the 2xx Successful class
  TYPE_HTTP_CODE_3XX, // Strict, only codes in the 3xx Redirect class
  TYPE_HTTP_CODE_4XX, // Strict, only codes in the 4xx Client Error class
  TYPE_HTTP_CODE_5XX, // Strict, only codes in the 5xx Server Error class
} from "@fimion/ts-http-status-codes";

const GOOD: TYPE_HTTP_CODE_2XX = 200;
const BAD: TYPE_HTTP_CODE_2XX = 299; // Will result in a type error
const ALSO_BAD: TYPE_HTTP_CODE_2XX = 400; // Will result in a type error
```

### `LOOSE_TYPE_HTTP_CODE`

`LOOSE_TYPE_HTTP_CODE` and the `LOOSE_TYPE_HTTP_CODE_XXX` types are loose types
that match any integer in the defined ranges in RFC 9110.

```typescript
import type {
  LOOSE_TYPE_HTTP_CODE, // Matches all codes 100-599
  LOOSE_TYPE_HTTP_CODE_1XX, // Matches codes 100 - 199
  LOOSE_TYPE_HTTP_CODE_2XX, // Matches codes 200 - 299
  LOOSE_TYPE_HTTP_CODE_3XX, // Matches codes 300 - 399
  LOOSE_TYPE_HTTP_CODE_4XX, // Matches codes 400 - 499
  LOOSE_TYPE_HTTP_CODE_5XX, // Matches codes 500 - 599
} from "@fimion/ts-http-status-codes";

const GOOD: LOOSE_TYPE_HTTP_CODE_2XX = 200;
const ALSO_GOOD: LOOSE_TYPE_HTTP_CODE_2XX = 299;
const STILL_BAD: TYPE_HTTP_CODE_2XX = 400; // Will result in a type error
```

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with ❤️

Published under [MIT License](./LICENCE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@fimion/ts-http-status-codes?style=flat-square

[npm-version-href]: https://npmjs.com/package/@fimion/ts-http-status-codes

[npm-downloads-src]: https://img.shields.io/npm/dm/@fimion/ts-http-status-codes?style=flat-square

[npm-downloads-href]: https://npm.chart.dev/@fimion/ts-http-status-codes

[github-actions-src]: https://img.shields.io/github/actions/workflow/status/fimion/ts-http-status-codes/ci.yml?branch=main&style=flat-square

[github-actions-href]: https://github.com/fimion/ts-http-status-codes/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/gh/fimion/ts-http-status-codes/main?style=flat-square

[codecov-href]: https://codecov.io/gh/fimion/ts-http-status-codes
