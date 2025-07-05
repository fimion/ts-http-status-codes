# @fimion/ts-http-status-codes

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![Codecov][codecov-src]][codecov-href]

> A TypeScript HTTP Status Code Library based on
> [IETF RFC9110 Section 15](https://httpwg.org/specs/rfc9110.html#rfc.section.15)

## Usage

Install package:

```sh
# npm
npm install @fimion/ts-http-status-codes

# pnpm
pnpm install @fimion/ts-http-status-codes
```

### JavaScript Usage

```js
import {
  HTTP_CODES, // Has names for all codes in RFC 9110
  HTTP_CODES_4XX, // Only has names for codes in the 4xx block
} from "@fimion/ts-http-status-codes";

console.log(HTTP_CODES.OK) // 200
console.log(HTTP_CODES.NOT_FOUND) // 404

console.log(HTTP_CODES_4XX.NOT_FOUND) // 404
console.log(HTTP_CODES_4XX.OK) // undefined
```

### TypeScript Usage

```typescript
import type {
  TYPE_HTTP_CODE, // Matches all codes specified by RFC 9110
  LOOSE_TYPE_HTTP_CODE, // Matches integers 100 to 599
  TYPE_HTTP_CODE_2XX, // Strict, only codes in the 2xx range specified by RFC 9110
  LOOSE_TYPE_HTTP_CODE_2XX, // Matches integers 200 to 299
} from "@fimion/ts-http-status-codes";
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
