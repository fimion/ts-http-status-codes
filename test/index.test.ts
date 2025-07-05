import { describe, expect, assertType, it } from "vitest";
import {
  isStrict1xx,
  isLoose1xx,
  HTTP_CODES_1XX,
  isStrict2xx,
  isLoose2xx,
  HTTP_CODES_2XX,
  isStrict3xx,
  isLoose3xx,
  HTTP_CODES_3XX,
  isStrict4xx,
  isLoose4xx,
  HTTP_CODES_4XX,
  isStrict5xx,
  isLoose5xx,
  HTTP_CODES_5XX,
  type LOOSE_TYPE_HTTP_CODE_5XX,
} from "../src";

describe("@fimion/ts-http-status-codes", () => {
  it.each([
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...Object.entries(HTTP_CODES_5XX).map(([_, code]) => ({
      code,
      value: true,
    })),
    { code: 506, value: false },
    { code: 400, value: false },
  ])("isStrict5xx($code) === $value", ({ code, value }) => {
    expect(isStrict5xx(code)).toBe(value);
  });

  it.each([
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...Object.entries(HTTP_CODES_4XX).map(([_, code]) => ({
      code,
      value: true,
    })),
    { code: 450, value: false },
    { code: 300, value: false },
  ])("isStrict4xx($code) === $value", ({ code, value }) => {
    expect(isStrict4xx(code)).toBe(value);
  });

  it.each([
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...Object.entries(HTTP_CODES_3XX).map(([_, code]) => ({
      code,
      value: true,
    })),
    { code: 350, value: false },
    { code: 200, value: false },
  ])("isStrict3xx($code) === $value", ({ code, value }) => {
    expect(isStrict3xx(code)).toBe(value);
  });

  it.each([
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...Object.entries(HTTP_CODES_2XX).map(([_, code]) => ({
      code,
      value: true,
    })),
    { code: 250, value: false },
    { code: 300, value: false },
  ])("isStrict2xx($code) === $value", ({ code, value }) => {
    expect(isStrict2xx(code)).toBe(value);
  });

  it.each([
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...Object.entries(HTTP_CODES_1XX).map(([_, code]) => ({
      code,
      value: true,
    })),
    { code: 150, value: false },
    { code: 300, value: false },
  ])("isStrict1xx($code) === $value", ({ code, value }) => {
    expect(isStrict1xx(code)).toBe(value);
  });

  it("isLoose5xx is only integers between 500 and 599 inclusive", () => {
    expect(isLoose5xx(499)).toBe(false);
    expect(isLoose5xx(600)).toBe(false);
    expect(isLoose5xx(500.1)).toBe(false);
    for (let x = 500; x < 600; x++) {
      expect(isLoose5xx(x)).toBe(true);
    }
  });

  it("isLoose4xx is only integers between 400 and 499 inclusive", () => {
    expect(isLoose4xx(399)).toBe(false);
    expect(isLoose4xx(500)).toBe(false);
    expect(isLoose4xx(400.1)).toBe(false);
    for (let x = 400; x < 500; x++) {
      expect(isLoose4xx(x)).toBe(true);
    }
  });

  it("isLoose3xx is only integers between 300 and 399 inclusive", () => {
    expect(isLoose3xx(299)).toBe(false);
    expect(isLoose3xx(400)).toBe(false);
    expect(isLoose3xx(300.1)).toBe(false);
    for (let x = 300; x < 400; x++) {
      expect(isLoose3xx(x)).toBe(true);
    }
  });

  it("isLoose2xx is only integers between 200 and 299 inclusive", () => {
    expect(isLoose2xx(199)).toBe(false);
    expect(isLoose2xx(300)).toBe(false);
    expect(isLoose2xx(200.1)).toBe(false);
    for (let x = 200; x < 300; x++) {
      expect(isLoose2xx(x)).toBe(true);
    }
  });

  it("isLoose1xx is only integers between 100 and 199 inclusive", () => {
    expect(isLoose1xx(99)).toBe(false);
    expect(isLoose1xx(200)).toBe(false);
    expect(isLoose1xx(100.1)).toBe(false);
    for (let x = 100; x < 200; x++) {
      expect(isLoose1xx(x)).toBe(true);
    }
  });

  it("LOOSE_SERVER_ERROR_CODES are correctly typed", () => {
    assertType<LOOSE_TYPE_HTTP_CODE_5XX>(HTTP_CODES_5XX.INTERNAL_SERVER_ERROR);
  });
});
