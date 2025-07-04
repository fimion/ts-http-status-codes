import { describe, expect, assertType, it } from "vitest";
import {
  welcome,
  isStrict5xx,
  is5xx,
  CODES_5XX,
  type LOOSE_TYPE_CODE_5XX,
} from "../src";

describe("@fimion/ts-http-status-codes", () => {
  it("works", () => {
    expect(welcome()).toMatchInlineSnapshot('"hello world"');
  });
  it.each([
    { code: CODES_5XX.INTERNAL_SERVER_ERROR, value: true },
    { code: CODES_5XX.NOT_IMPLEMENTED, value: true },
    { code: CODES_5XX.BAD_GATEWAY, value: true },
    { code: CODES_5XX.SERVICE_UNAVAILABLE, value: true },
    { code: CODES_5XX.GATEWAY_TIMEOUT, value: true },
    { code: CODES_5XX.HTTP_VERSION_NOT_SUPPORTED, value: true },
    { code: 506, value: false },
    { code: 400, value: false },
  ])("isStrict5xx($code) === $value", ({ code, value }) => {
    expect(isStrict5xx(code)).toBe(value);
  });

  it("is5xx is only 500s", () => {
    expect(is5xx(499)).toBe(false);
    expect(is5xx(600)).toBe(false);
    for (let x = 500; x < 600; x++) {
      expect(is5xx(x)).toBe(true);
    }
  });

  it("LOOSE_SERVER_ERROR_CODES are correctly typed", () => {
    assertType<LOOSE_TYPE_CODE_5XX>(CODES_5XX.INTERNAL_SERVER_ERROR);
  });
});
