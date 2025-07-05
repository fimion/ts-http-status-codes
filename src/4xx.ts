import type { CreateArrayWithLengthX, NumericRange } from "./common.ts";

export type TYPE_HTTP_CODE_4XX =
  /** Bad Request */
  | 400
  /** Unauthorized */
  | 401
  /** Payment Required */
  | 402
  /** Forbidden */
  | 403
  /** Not Found */
  | 404
  /** Method Not Allowed */
  | 405
  /** Not Acceptable */
  | 406
  /** Proxy Authentication Required */
  | 407
  /** Request Timeout */
  | 408
  /** Conflict */
  | 409
  /** Gone */
  | 410
  /** Length Required */
  | 411
  /** Precondition Failed */
  | 412
  /** Content Too Large */
  | 413
  /** URI Too Long */
  | 414
  /** Unsupported Media Type */
  | 415
  /** Range Not Satisfiable */
  | 416
  /** Expectation Failed */
  | 417
  /** @deprecated (Unused) 418 */
  | 418
  /** Misdirected Request */
  | 421
  /** Unprocessable Content */
  | 422
  /** Upgrade Required */
  | 426;

export const HTTP_CODES_4XX = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  UNUSED_418: 418,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  UPGRADE_REQUIRED: 426,
} as const;

export const HTTP_STATUSES_4XX = {
  400: "BAD_REQUEST",
  401: "UNAUTHORIZED",
  402: "PAYMENT_REQUIRED",
  403: "FORBIDDEN",
  404: "NOT_FOUND",
  405: "METHOD_NOT_ALLOWED",
  406: "NOT_ACCEPTABLE",
  407: "PROXY_AUTHENTICATION_REQUIRED",
  408: "REQUEST_TIMEOUT",
  409: "CONFLICT",
  410: "GONE",
  411: "LENGTH_REQUIRED",
  412: "PRECONDITION_FAILED",
  413: "CONTENT_TOO_LARGE",
  414: "URI_TOO_LONG",
  415: "UNSUPPORTED_MEDIA_TYPE",
  416: "RANGE_NOT_SATISFIABLE",
  417: "EXPECTATION_FAILED",
  418: "UNUSED_418",
  421: "MISDIRECTED_REQUEST",
  422: "UNPROCESSABLE_CONTENT",
  426: "UPGRADE_REQUIRED",
} as const;

export function isStrict4xx(value: unknown): value is TYPE_HTTP_CODE_4XX {
  if (typeof value !== "number") return false;
  return value in HTTP_STATUSES_4XX;
}

export type LOOSE_TYPE_HTTP_CODE_4XX = NumericRange<
  CreateArrayWithLengthX<400>,
  499
>;

export function is4xx(value: unknown): value is LOOSE_TYPE_HTTP_CODE_4XX {
  if (typeof value !== "number") return false;
  if (!Number.isInteger(value)) return false;
  return value >= 400 && value <= 499;
}
