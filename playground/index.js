import assert from "node:assert";
import * as pkg from "@fimion/ts-http-status-codes";

globalThis.console.log(pkg.welcome());

assert.strictEqual(pkg.welcome(), "hello world");

assert.strictEqual(pkg.isStrict5xx(500), true);
