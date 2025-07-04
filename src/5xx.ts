import type { CreateArrayWithLengthX, NumericRange } from "./common.ts";

export type TYPE_CODE_5XX =
  /** Internal Server Error */
  | 500
  /** Not Implemented */
  | 501
  /** Bad Gateway */
  | 502
  /** Service Unavailable */
  | 503
  /** Gateway Timeout */
  | 504
  /** "HTTP Version Not Supported" */
  | 505;
/**
 * # [15.6. Server Error 5xx](https://httpwg.org/specs/rfc9110.html#status.5xx)
 * The 5xx (Server Error) class of status code indicates that the server is aware
 * that it has erred or is incapable of performing the requested method. Except
 * when responding to a HEAD request, the server SHOULD send a representation
 * containing an explanation of the error situation, and whether it is a
 * temporary or permanent condition. A user agent SHOULD display any included
 * representation to the user. These status codes are applicable to any request
 * method.
 */
export const CODES_5XX = {
  /**
   * ## [15.6.1. 500 Internal Server Error](https://httpwg.org/specs/rfc9110.html#status.500)
   * The 500 (Internal Server Error) status code indicates that the server
   * encountered an unexpected condition that prevented it from fulfilling
   * the request.
   */
  INTERNAL_SERVER_ERROR: 500,
  /**
   * ## [15.6.2. 501 Not Implemented](https://httpwg.org/specs/rfc9110.html#status.501)
   * The 501 (Not Implemented) status code indicates that the server does not
   * support the functionality required to fulfill the request. This is the
   * appropriate response when the server does not recognize the request method
   * and is not capable of supporting it for any resource.
   *
   * A 501 response is heuristically cacheable; i.e., unless otherwise indicated
   * by the method definition or explicit cache controls
   * (see [Section 4.2.2 of CACHING](https://httpwg.org/specs/rfc9111.html#heuristic.freshness)).
   */
  NOT_IMPLEMENTED: 501,
  /**
   * ## [15.6.3. 502 Bad Gateway](https://httpwg.org/specs/rfc9110.html#status.502)
   * The 502 (Bad Gateway) status code indicates that the server, while acting
   * as a gateway or proxy, received an invalid response from an inbound server
   * it accessed while attempting to fulfill the request.
   */
  BAD_GATEWAY: 502,
  /**
   * ## [15.6.4. 503 Service Unavailable](https://httpwg.org/specs/rfc9110.html#status.503)
   * The 503 (Service Unavailable) status code indicates that the server is
   * currently unable to handle the request due to a temporary overload or
   * scheduled maintenance, which will likely be alleviated after some delay.
   * The server MAY send a
   * [Retry-After](https://httpwg.org/specs/rfc9110.html#field.retry-after)
   * header field [(Section 10.2.3)](https://httpwg.org/specs/rfc9110.html#field.retry-after) to suggest
   * an appropriate amount of time for the client to wait before retrying the
   * request.
   *
   * **Note:** The existence of the 503 status code does not imply that a server has
   * to use it when becoming overloaded. Some servers might simply refuse the
   * connection.
   */
  SERVICE_UNAVAILABLE: 503,
  /**
   * ## [15.6.5. 504 Gateway Timeout](https://httpwg.org/specs/rfc9110.html#status.504)
   *
   * The 504 (Gateway Timeout) status code indicates that the server, while
   * acting as a gateway or proxy, did not receive a timely response from an
   * upstream server it needed to access in order to complete the request.
   */
  GATEWAY_TIMEOUT: 504,
  /**
   * ## [15.6.6. 505 HTTP Version Not Supported](https://httpwg.org/specs/rfc9110.html#status.505)
   * The 505 (HTTP Version Not Supported) status code indicates that the server does not support, or refuses to support, the major version of HTTP that was used in the request message. The server is indicating that it is unable or unwilling to complete the request using the same major version as the client, as described in Section 2.5, other than with this error message. The server SHOULD generate a representation for the 505 response that describes why that version is not supported and what other protocols are supported by that server.
   */
  HTTP_VERSION_NOT_SUPPORTED: 505,
} as const;

export const STATUSES_5XX = {
  500: "INTERNAL_SERVER_ERROR",
  501: "NOT_IMPLEMENTED",
  502: "BAD_GATEWAY",
  503: "SERVICE_UNAVAILABLE",
  504: "GATEWAY_TIMEOUT",
  505: "HTTP_VERSION_NOT_SUPPORTED",
} as const;

export function isStrict5xx(value: unknown): value is TYPE_CODE_5XX {
  if (typeof value !== "number") return false;
  return value in STATUSES_5XX;
}

export type LOOSE_TYPE_CODE_5XX = NumericRange<
  CreateArrayWithLengthX<500>,
  599
>;

export function is5xx(value: unknown): value is LOOSE_TYPE_CODE_5XX {
  if (typeof value !== "number") return false;
  if (!Number.isInteger(value)) return false;
  return value >= 500 && value <= 599;
}
