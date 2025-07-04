export type SERVER_ERROR_CODES =
  | 500 /** Internal Server Error */
  | 501 /** Not Implemented */
  | 502 /** Bad Gateway */
  | 503 /** Service Unavailable */
  | 504 /** Gateway Timeout */
  | 505 /** HTTP Version Not Supported */;

export const CODES_5XX: Record<string, SERVER_ERROR_CODES> = {
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
} as const;

export const STATUSES_5XX: Record<SERVER_ERROR_CODES, string> = {
  500: "INTERNAL_SERVER_ERROR",
  501: "NOT_IMPLEMENTED",
  502: "BAD_GATEWAY",
  503: "SERVICE_UNAVAILABLE",
  504: "GATEWAY_TIMEOUT",
  505: "HTTP_VERSION_NOT_SUPPORTED",
} as const;

export function isStrict5xx(value: unknown): value is SERVER_ERROR_CODES {
  if (typeof value !== "number") return false;
  return value in STATUSES_5XX;
}
