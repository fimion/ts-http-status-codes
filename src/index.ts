export * from "./1xx.ts";
export * from "./2xx.ts";
export * from "./3xx.ts";
export * from "./4xx.ts";
export * from "./5xx.ts";

import {
  type LOOSE_TYPE_HTTP_CODE_1XX,
  type TYPE_HTTP_CODE_1XX,
  HTTP_CODES_1XX,
  HTTP_STATUSES_1XX,
} from "./1xx.ts";
import {
  type LOOSE_TYPE_HTTP_CODE_2XX,
  type TYPE_HTTP_CODE_2XX,
  HTTP_CODES_2XX,
  HTTP_STATUSES_2XX,
} from "./2xx.ts";
import {
  type LOOSE_TYPE_HTTP_CODE_3XX,
  type TYPE_HTTP_CODE_3XX,
  HTTP_CODES_3XX,
  HTTP_STATUSES_3XX,
} from "./3xx.ts";
import {
  type LOOSE_TYPE_HTTP_CODE_4XX,
  type TYPE_HTTP_CODE_4XX,
  HTTP_CODES_4XX,
  HTTP_STATUSES_4XX,
} from "./4xx.ts";
import {
  type LOOSE_TYPE_HTTP_CODE_5XX,
  type TYPE_HTTP_CODE_5XX,
  HTTP_CODES_5XX,
  HTTP_STATUSES_5XX,
} from "./5xx.ts";

export type LOOSE_TYPE_HTTP_CODE = LOOSE_TYPE_HTTP_CODE_1XX &
  LOOSE_TYPE_HTTP_CODE_2XX &
  LOOSE_TYPE_HTTP_CODE_3XX &
  LOOSE_TYPE_HTTP_CODE_4XX &
  LOOSE_TYPE_HTTP_CODE_5XX;

export type TYPE_HTTP_CODE = TYPE_HTTP_CODE_1XX &
  TYPE_HTTP_CODE_2XX &
  TYPE_HTTP_CODE_3XX &
  TYPE_HTTP_CODE_4XX &
  TYPE_HTTP_CODE_5XX;

export const HTTP_CODES = {
  ...HTTP_CODES_1XX,
  ...HTTP_CODES_2XX,
  ...HTTP_CODES_3XX,
  ...HTTP_CODES_4XX,
  ...HTTP_CODES_5XX,
} as const;

export const HTTP_STATUSES = {
  ...HTTP_STATUSES_1XX,
  ...HTTP_STATUSES_2XX,
  ...HTTP_STATUSES_3XX,
  ...HTTP_STATUSES_4XX,
  ...HTTP_STATUSES_5XX,
} as const;
