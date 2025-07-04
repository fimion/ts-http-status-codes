import { describe, expect, it } from "vitest";
import { welcome, isStrict5xx } from "../src";

describe("@fimion/ts-http-status-codes", () => {
  it("works", () => {
    expect(welcome()).toMatchInlineSnapshot('"hello world"');
  });
  it.each([
    { code: 500, value: true },
    { code: 501, value: true },
    { code: 502, value: true },
    { code: 503, value: true },
    { code: 504, value: true },
    { code: 505, value: true },
    { code: 506, value: false },
    { code: 400, value: false },
  ])("isStrict5xx($code) === $value", ({ code, value }) => {
    expect(isStrict5xx(code)).toBe(value);
  });
});
