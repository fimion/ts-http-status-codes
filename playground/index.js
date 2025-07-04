import assert from "node:assert";
import * as pkg from "package-name";

globalThis.console.log(pkg.welcome());

assert.strictEqual(pkg.welcome(), "hello world");
