import type { DigitXX } from "./common.ts";

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

/**
 * # [15.5.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5) [Client Error 4xx](https://httpwg.org/specs/rfc9110.html#status.4xx)
 *
 * The 4xx (Client Error) class of status code indicates that the client seems to have erred. Except when responding to a HEAD request, the server _SHOULD_ send a representation containing an explanation of the error situation, and whether it is a temporary or permanent condition. These status codes are applicable to any request method. User agents _SHOULD_ display any included representation to the user.
 */
export const HTTP_CODES_4XX = {
  /**
   * ## [15.5.1.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.1) [400 Bad Request](https://httpwg.org/specs/rfc9110.html#status.400)
   *
   * The 400 (Bad Request) status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
   */
  BAD_REQUEST: 400,
  /**
   * ## [15.5.2.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.2) [401 Unauthorized](https://httpwg.org/specs/rfc9110.html#status.401)
   *
   * The 401 (Unauthorized) status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource. The server generating a 401 response _MUST_ send a [WWW-Authenticate](https://httpwg.org/specs/rfc9110.html#field.www-authenticate) header field ([Section 11.6.1](https://httpwg.org/specs/rfc9110.html#field.www-authenticate "WWW-Authenticate")) containing at least one challenge applicable to the target resource.
   *
   * If the request included authentication credentials, then the 401 response indicates that authorization has been refused for those credentials. The user agent _MAY_ repeat the request with a new or replaced [Authorization](https://httpwg.org/specs/rfc9110.html#field.authorization) header field ([Section 11.6.2](https://httpwg.org/specs/rfc9110.html#field.authorization "Authorization")). If the 401 response contains the same challenge as the prior response, and the user agent has already attempted authentication at least once, then the user agent _SHOULD_ present the enclosed representation to the user, since it usually contains relevant diagnostic information.
   */
  UNAUTHORIZED: 401,
  /**
   * ## [15.5.3.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.3) [402 Payment Required](https://httpwg.org/specs/rfc9110.html#status.402)
   *
   * The 402 (Payment Required) status code is reserved for future use.
   */
  PAYMENT_REQUIRED: 402,
  /**
   * ## [15.5.4.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.4) [403 Forbidden](https://httpwg.org/specs/rfc9110.html#status.403)
   *
   * The 403 (Forbidden) status code indicates that the server understood the request but refuses to fulfill it. A server that wishes to make public why the request has been forbidden can describe that reason in the response content (if any).
   *
   * If authentication credentials were provided in the request, the server considers them insufficient to grant access. The client _SHOULD NOT_ automatically repeat the request with the same credentials. The client _MAY_ repeat the request with new or different credentials. However, a request might be forbidden for reasons unrelated to the credentials.
   *
   * An origin server that wishes to "hide" the current existence of a forbidden [target resource](https://httpwg.org/specs/rfc9110.html#target.resource) _MAY_ instead respond with a status code of [404 (Not Found)](https://httpwg.org/specs/rfc9110.html#status.404).
   */
  FORBIDDEN: 403,
  /**
   * ## [15.5.5.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.5) [404 Not Found](https://httpwg.org/specs/rfc9110.html#status.404)
   *
   * The 404 (Not Found) status code indicates that the origin server did not find a current representation for the [target resource](https://httpwg.org/specs/rfc9110.html#target.resource) or is not willing to disclose that one exists. A 404 status code does not indicate whether this lack of representation is temporary or permanent; the [410 (Gone)](https://httpwg.org/specs/rfc9110.html#status.410) status code is preferred over 404 if the origin server knows, presumably through some configurable means, that the condition is likely to be permanent.
   *
   * A 404 response is heuristically cacheable; i.e., unless otherwise indicated by the method definition or explicit cache controls (see [Section 4.2.2](https://httpwg.org/specs/rfc9111.html#heuristic.freshness "Calculating Heuristic Freshness") of [[CACHING]](https://httpwg.org/specs/rfc9110.html#CACHING)).
   */
  NOT_FOUND: 404,
  /**
   * ## [15.5.6.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.6) [405 Method Not Allowed](https://httpwg.org/specs/rfc9110.html#status.405)
   *
   * The 405 (Method Not Allowed) status code indicates that the method received in the request-line is known by the origin server but not supported by the [target resource](https://httpwg.org/specs/rfc9110.html#target.resource). The origin server _MUST_ generate an [Allow](https://httpwg.org/specs/rfc9110.html#field.allow) header field in a 405 response containing a list of the target resource's currently supported methods.
   *
   * A 405 response is heuristically cacheable; i.e., unless otherwise indicated by the method definition or explicit cache controls (see [Section 4.2.2](https://httpwg.org/specs/rfc9111.html#heuristic.freshness "Calculating Heuristic Freshness") of [[CACHING]](https://httpwg.org/specs/rfc9110.html#CACHING)).
   */
  METHOD_NOT_ALLOWED: 405,
  /**
   * ## [15.5.7.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.7) [406 Not Acceptable](https://httpwg.org/specs/rfc9110.html#status.406)
   *
   * The 406 (Not Acceptable) status code indicates that the [target resource](https://httpwg.org/specs/rfc9110.html#target.resource) does not have a current representation that would be acceptable to the user agent, according to the [proactive negotiation](https://httpwg.org/specs/rfc9110.html#proactive.negotiation) header fields received in the request ([Section 12.1](https://httpwg.org/specs/rfc9110.html#proactive.negotiation "Proactive Negotiation")), and the server is unwilling to supply a default representation.
   *
   * The server _SHOULD_ generate content containing a list of available representation characteristics and corresponding resource identifiers from which the user or user agent can choose the one most appropriate. A user agent _MAY_automatically select the most appropriate choice from that list. However, this specification does not define any standard for such automatic selection, as described in [Section 15.4.1](https://httpwg.org/specs/rfc9110.html#status.300 "300 Multiple Choices").
   */
  NOT_ACCEPTABLE: 406,
  /**
   * ## [15.5.8.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.8) [407 Proxy Authentication Required](https://httpwg.org/specs/rfc9110.html#status.407)
   *
   * The 407 (Proxy Authentication Required) status code is similar to [401 (Unauthorized)](https://httpwg.org/specs/rfc9110.html#status.401), but it indicates that the client needs to authenticate itself in order to use a proxy for this request. The proxy _MUST_ send a [Proxy-Authenticate](https://httpwg.org/specs/rfc9110.html#field.proxy-authenticate)header field ([Section 11.7.1](https://httpwg.org/specs/rfc9110.html#field.proxy-authenticate "Proxy-Authenticate")) containing a challenge applicable to that proxy for the request. The client _MAY_ repeat the request with a new or replaced [Proxy-Authorization](https://httpwg.org/specs/rfc9110.html#field.proxy-authorization) header field ([Section 11.7.2](https://httpwg.org/specs/rfc9110.html#field.proxy-authorization "Proxy-Authorization")).
   */
  PROXY_AUTHENTICATION_REQUIRED: 407,
  /**
   * ## [15.5.9.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.9) [408 Request Timeout](https://httpwg.org/specs/rfc9110.html#status.408)
   *
   * The 408 (Request Timeout) status code indicates that the server did not receive a complete request message within the time that it was prepared to wait.
   *
   * If the client has an outstanding request in transit, it _MAY_ repeat that request. If the current connection is not usable (e.g., as it would be in HTTP/1.1 because request delimitation is lost), a new connection will be used.
   */
  REQUEST_TIMEOUT: 408,
  /**
   * ## [15.5.10.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.10) [409 Conflict](https://httpwg.org/specs/rfc9110.html#status.409)
   *
   * The 409 (Conflict) status code indicates that the request could not be completed due to a conflict with the current state of the target resource. This code is used in situations where the user might be able to resolve the conflict and resubmit the request. The server _SHOULD_ generate content that includes enough information for a user to recognize the source of the conflict.
   *
   * Conflicts are most likely to occur in response to a PUT request. For example, if versioning were being used and the representation being PUT included changes to a resource that conflict with those made by an earlier (third-party) request, the origin server might use a 409 response to indicate that it can't complete the request. In this case, the response representation would likely contain information useful for merging the differences based on the revision history.
   */
  CONFLICT: 409,
  /**
   * ## [15.5.11.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.11) [410 Gone](https://httpwg.org/specs/rfc9110.html#status.410)
   *
   * The 410 (Gone) status code indicates that access to the [target resource](https://httpwg.org/specs/rfc9110.html#target.resource) is no longer available at the origin server and that this condition is likely to be permanent. If the origin server does not know, or has no facility to determine, whether or not the condition is permanent, the status code [404 (Not Found)](https://httpwg.org/specs/rfc9110.html#status.404) ought to be used instead.
   *
   * The 410 response is primarily intended to assist the task of web maintenance by notifying the recipient that the resource is intentionally unavailable and that the server owners desire that remote links to that resource be removed. Such an event is common for limited-time, promotional services and for resources belonging to individuals no longer associated with the origin server's site. It is not necessary to mark all permanently unavailable resources as "gone" or to keep the mark for any length of time — that is left to the discretion of the server owner.
   *
   * A 410 response is heuristically cacheable; i.e., unless otherwise indicated by the method definition or explicit cache controls (see [Section 4.2.2](https://httpwg.org/specs/rfc9111.html#heuristic.freshness "Calculating Heuristic Freshness") of [[CACHING]](https://httpwg.org/specs/rfc9110.html#CACHING)).
   */
  GONE: 410,
  /**
   * ## [15.5.12.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.12) [411 Length Required](https://httpwg.org/specs/rfc9110.html#status.411)
   *
   * The 411 (Length Required) status code indicates that the server refuses to accept the request without a defined [Content-Length](https://httpwg.org/specs/rfc9110.html#field.content-length) ([Section 8.6](https://httpwg.org/specs/rfc9110.html#field.content-length "Content-Length")). The client _MAY_ repeat the request if it adds a valid Content-Length header field containing the length of the request content.
   */
  LENGTH_REQUIRED: 411,
  /**
   * ## [15.5.13.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.13) [412 Precondition Failed](https://httpwg.org/specs/rfc9110.html#status.412)
   *
   * The 412 (Precondition Failed) status code indicates that one or more conditions given in the request header fields evaluated to false when tested on the server ([Section 13](https://httpwg.org/specs/rfc9110.html#conditional.requests "Conditional Requests")). This response status code allows the client to place preconditions on the current resource state (its current representations and metadata) and, thus, prevent the request method from being applied if the target resource is in an unexpected state.
   */
  PRECONDITION_FAILED: 412,
  /**
   * ## [15.5.14.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.14) [413 Content Too Large](https://httpwg.org/specs/rfc9110.html#status.413)
   *
   * The 413 (Content Too Large) status code indicates that the server is refusing to process a request because the request content is larger than the server is willing or able to process. The server _MAY_ terminate the request, if the protocol version in use allows it; otherwise, the server _MAY_ close the connection.
   *
   * If the condition is temporary, the server _SHOULD_ generate a [Retry-After](https://httpwg.org/specs/rfc9110.html#field.retry-after) header field to indicate that it is temporary and after what time the client _MAY_ try again.
   */
  CONTENT_TOO_LARGE: 413,
  /**
   * ## [15.5.15.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.15) [414 URI Too Long](https://httpwg.org/specs/rfc9110.html#status.414)
   *
   * The 414 (URI Too Long) status code indicates that the server is refusing to service the request because the target URI is longer than the server is willing to interpret. This rare condition is only likely to occur when a client has improperly converted a POST request to a GET request with long query information, when the client has descended into an infinite loop of redirection (e.g., a redirected URI prefix that points to a suffix of itself) or when the server is under attack by a client attempting to exploit potential security holes.
   *
   * A 414 response is heuristically cacheable; i.e., unless otherwise indicated by the method definition or explicit cache controls (see [Section 4.2.2](https://httpwg.org/specs/rfc9111.html#heuristic.freshness "Calculating Heuristic Freshness") of [[CACHING]](https://httpwg.org/specs/rfc9110.html#CACHING)).
   */
  URI_TOO_LONG: 414,
  /**
   * ## [15.5.16.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.16) [415 Unsupported Media Type](https://httpwg.org/specs/rfc9110.html#status.415)
   *
   * The 415 (Unsupported Media Type) status code indicates that the origin server is refusing to service the request because the content is in a format not supported by this method on the [target resource](https://httpwg.org/specs/rfc9110.html#target.resource).
   *
   * The format problem might be due to the request's indicated [Content-Type](https://httpwg.org/specs/rfc9110.html#field.content-type) or [Content-Encoding](https://httpwg.org/specs/rfc9110.html#field.content-encoding), or as a result of inspecting the data directly.
   *
   * If the problem was caused by an unsupported content coding, the [Accept-Encoding](https://httpwg.org/specs/rfc9110.html#field.accept-encoding) response header field ([Section 12.5.3](https://httpwg.org/specs/rfc9110.html#field.accept-encoding "Accept-Encoding")) ought to be used to indicate which (if any) content codings would have been accepted in the request.
   *
   * On the other hand, if the cause was an unsupported media type, the [Accept](https://httpwg.org/specs/rfc9110.html#field.accept) response header field ([Section 12.5.1](https://httpwg.org/specs/rfc9110.html#field.accept "Accept")) can be used to indicate which media types would have been accepted in the request.
   */
  UNSUPPORTED_MEDIA_TYPE: 415,
  /**
   * ## [15.5.17.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.17) [416 Range Not Satisfiable](https://httpwg.org/specs/rfc9110.html#status.416)
   *
   * The 416 (Range Not Satisfiable) status code indicates that the set of ranges in the request's [Range](https://httpwg.org/specs/rfc9110.html#field.range) header field ([Section 14.2](https://httpwg.org/specs/rfc9110.html#field.range "Range")) has been rejected either because none of the requested ranges are satisfiable or because the client has requested an excessive number of small or overlapping ranges (a potential denial of service attack).
   *
   * Each range unit defines what is required for its own range sets to be satisfiable. For example, [Section 14.1.2](https://httpwg.org/specs/rfc9110.html#byte.ranges "Byte Ranges") defines what makes a bytes range set satisfiable.
   *
   * A server that generates a 416 response to a byte-range request _SHOULD_ generate a [Content-Range](https://httpwg.org/specs/rfc9110.html#field.content-range) header field specifying the current length of the selected representation ([Section 14.4](https://httpwg.org/specs/rfc9110.html#field.content-range "Content-Range")).
   *
   * For example:
   *
   * HTTP/1.1 416 Range Not Satisfiable
   * Date: Fri, 20 Jan 2012 15:41:54 GMT
   * Content-Range: bytes * /47022
   *
   * ** Note: ** Because servers are free to ignore [Range](https://httpwg.org/specs/rfc9110.html#field.range), many implementations will respond with the entire selected representation in a [200 (OK)](https://httpwg.org/specs/rfc9110.html#status.200) response. That is partly because most clients are prepared to receive a [200 (OK)](https://httpwg.org/specs/rfc9110.html#status.200) to complete the task (albeit less efficiently) and partly because clients might not stop making an invalid range request until they have received a complete representation. Thus, clients cannot depend on receiving a [416 (Range Not Satisfiable)](https://httpwg.org/specs/rfc9110.html#status.416) response even when it is most appropriate.
   */
  RANGE_NOT_SATISFIABLE: 416,
  /**
   * ## [15.5.18.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.18) [417 Expectation Failed](https://httpwg.org/specs/rfc9110.html#status.417)
   *
   * The 417 (Expectation Failed) status code indicates that the expectation given in the request's [Expect](https://httpwg.org/specs/rfc9110.html#field.expect) header field ([Section 10.1.1](https://httpwg.org/specs/rfc9110.html#field.expect "Expect")) could not be met by at least one of the inbound servers.
   */
  EXPECTATION_FAILED: 417,
  /**
   * ## [15.5.19.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.19) [418 (Unused)](https://httpwg.org/specs/rfc9110.html#status.418)
   *
   * [[RFC2324]](https://httpwg.org/specs/rfc9110.html#RFC2324) was an April 1 RFC that lampooned the various ways HTTP was abused; one such abuse was the definition of an application-specific 418 status code, which has been deployed as a joke often enough for the code to be unusable for any future use.
   *
   * Therefore, the 418 status code is reserved in the IANA HTTP Status Code Registry. This indicates that the status code cannot be assigned to other applications currently. If future circumstances require its use (e.g., exhaustion of 4NN status codes), it can be re-assigned to another use.
   * @deprecated
   */
  UNUSED_418: 418,
  /**
   * ## [15.5.20.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.20) [421 Misdirected Request](https://httpwg.org/specs/rfc9110.html#status.421)
   *
   * The 421 (Misdirected Request) status code indicates that the request was directed at a server that is unable or unwilling to produce an authoritative response for the target URI. An origin server (or gateway acting on behalf of the origin server) sends 421 to reject a target URI that does not match an [origin](https://httpwg.org/specs/rfc9110.html#origin) for which the server has been configured ([Section 4.3.1](https://httpwg.org/specs/rfc9110.html#origin "URI Origin")) or does not match the connection context over which the request was received ([Section 7.4](https://httpwg.org/specs/rfc9110.html#routing.reject "Rejecting Misdirected Requests")).
   *
   * A client that receives a 421 (Misdirected Request) response _MAY_ retry the request, whether or not the request method is idempotent, over a different connection, such as a fresh connection specific to the target resource's origin, or via an alternative service [[ALTSVC]](https://httpwg.org/specs/rfc9110.html#ALTSVC).
   *
   * A proxy _MUST NOT_ generate a 421 response.
   */
  MISDIRECTED_REQUEST: 421,
  /**
   * ## [15.5.21.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.21) [422 Unprocessable Content](https://httpwg.org/specs/rfc9110.html#status.422)
   *
   * The 422 (Unprocessable Content) status code indicates that the server understands the content type of the request content (hence a [415 (Unsupported Media Type)](https://httpwg.org/specs/rfc9110.html#status.415) status code is inappropriate), and the syntax of the request content is correct, but it was unable to process the contained instructions. For example, this status code can be sent if an XML request content contains well-formed (i.e., syntactically correct), but semantically erroneous XML instructions.
   */
  UNPROCESSABLE_CONTENT: 422,
  /**
   * ## [15.5.22.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.5.22) [426 Upgrade Required](https://httpwg.org/specs/rfc9110.html#status.426)
   *
   * The 426 (Upgrade Required) status code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server _MUST_ send an [Upgrade](https://httpwg.org/specs/rfc9110.html#field.upgrade) header field in a 426 response to indicate the required protocol(s) ([Section 7.8](https://httpwg.org/specs/rfc9110.html#field.upgrade "Upgrade")).
   *
   * Example:
   *
   * HTTP/1.1 426 Upgrade Required
   * Upgrade: HTTP/3.0
   * Connection: Upgrade
   * Content-Length: 53
   * Content-Type: text/plain
   *
   * This service requires use of the HTTP/3.0 protocol.
   */
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

export type LOOSE_TYPE_HTTP_CODE_4XX = DigitXX<4>;

export function isLoose4xx(value: unknown): value is LOOSE_TYPE_HTTP_CODE_4XX {
  if (typeof value !== "number") return false;
  if (!Number.isInteger(value)) return false;
  return value >= 400 && value <= 499;
}
