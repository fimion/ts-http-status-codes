import type { CreateArrayWithLengthX, NumericRange } from "./common.ts";

export type TYPE_HTTP_CODE_1XX =
  /** Continue */
  | 100
  /** Switching Protocols */
  | 101;

/**
 * # [15.2.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.2)
 * [Informational 1xx](https://httpwg.org/specs/rfc9110.html#status.1xx)
 *
 * The 1xx (Informational) class of status code indicates an interim response
 * for communicating connection status or request progress prior to completing
 * the requested action and sending a final response. Since HTTP/1.0 did not
 * define any 1xx status codes, a server _MUST NOT_ send a 1xx response
 * to an HTTP/1.0 client.
 *
 * A 1xx response is terminated by the end of the header section; it cannot
 * contain content or trailers.
 *
 * A client _MUST_ be able to parse one or more 1xx responses received
 * prior to a final response, even if the client does not expect one. A user
 * agent _MAY_ ignore unexpected 1xx responses.
 *
 * A proxy _MUST_ forward 1xx responses unless the proxy itself requested
 * the generation of the 1xx response. For example, if a proxy adds an
 * "Expect: 100-continue" header field when it forwards a request, then it need
 * not forward the corresponding
 * [100 (Continue)](https://httpwg.org/specs/rfc9110.html#status.100)
 * response(s).
 */
export const HTTP_CODES_1XX = {
  /**
   * ## [15.2.1.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.2.1)
   * [100 Continue](https://httpwg.org/specs/rfc9110.html#status.100)
   *
   * The 100 (Continue) status code indicates that the initial part of a request
   * has been received and has not yet been rejected by the server. The server
   * intends to send a final response after the request has been fully received
   * and acted upon.
   *
   * When the request contains an
   * [Expect](https://httpwg.org/specs/rfc9110.html#field.expect) header field
   * that includes a
   * [100-continue](https://httpwg.org/specs/rfc9110.html#field.expect)
   * expectation, the 100 response indicates that the server wishes to receive
   * the request content, as described in
   * [Section 10.1.1](https://httpwg.org/specs/rfc9110.html#field.expect).
   * The client ought to continue sending the request and discard the 100
   * response.
   *
   * If the request did not contain an
   * [Expect](https://httpwg.org/specs/rfc9110.html#field.expect) header field
   * containing the
   * [100-continue](https://httpwg.org/specs/rfc9110.html#field.expect)
   * expectation, the client can simply discard this interim response.
   */
  CONTINUE: 100,
  /**
   * ## [15.2.2.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.2.2)
   * [101 Switching Protocols](https://httpwg.org/specs/rfc9110.html#status.101)
   *
   * The 101 (Switching Protocols) status code indicates that the server
   * understands and is willing to comply with the client's request, via the
   * [Upgrade](https://httpwg.org/specs/rfc9110.html#field.upgrade) header field
   * ([Section 7.8](https://httpwg.org/specs/rfc9110.html#field.upgrade)), for a
   * change in the application protocol being used on this connection. The
   * server _MUST_ generate an Upgrade header field in the response that
   * indicates which protocol(s) will be in effect after this response.
   *
   * It is assumed that the server will only agree to switch protocols when it
   * is advantageous to do so. For example, switching to a newer version of HTTP
   * might be advantageous over older versions, and switching to a real-time,
   * synchronous protocol might be advantageous when delivering resources that
   * use such features.
   */
  SWITCHING_PROTOCOLS: 101,
} as const;

export const HTTP_STATUSES_1XX = {
  100: "CONTINUE",
  101: "SWITCHING_PROTOCOL",
} as const;

export function isStrict1xx(value: unknown): value is TYPE_HTTP_CODE_1XX {
  if (typeof value !== "number") return false;
  return value in HTTP_STATUSES_1XX;
}

export type LOOSE_TYPE_HTTP_CODE_1XX = NumericRange<
  CreateArrayWithLengthX<100>,
  199
>;

export function isLoose1xx(value: unknown): value is LOOSE_TYPE_HTTP_CODE_1XX {
  if (typeof value !== "number") return false;
  if (!Number.isInteger(value)) return false;
  return value >= 100 && value <= 199;
}
