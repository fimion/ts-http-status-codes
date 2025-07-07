import type { DigitXX } from "./common.ts";

export type TYPE_HTTP_CODE_2XX =
  /** OK */
  | 200
  /** Created */
  | 201
  /** Accepted */
  | 202
  /** Non-Authoritative Information */
  | 203
  /** No Content */
  | 204
  /** Reset Content */
  | 205
  /** Partial Content */
  | 206;

/**
 * # [15.3.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.3)
 * [Successful 2xx](https://httpwg.org/specs/rfc9110.html#status.2xx)
 *
 * The 2xx (Successful) class of status code indicates that the client's request
 * was successfully received, understood, and accepted.
 */
export const HTTP_CODES_2XX = {
  /**
   * ## [15.3.1.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.3.1)
   * [200 OK](https://httpwg.org/specs/rfc9110.html#status.200)
   *
   * The 200 (OK) status code indicates that the request has succeeded. The
   * content sent in a 200 response depends on the request method. For the
   * methods defined by this specification, the intended meaning of the content
   * can be summarized as:
   *
   * Table 6
   * |Request Method|Response content is a representation of:|
   * |---|---|
   * |GET|the [target resource](https://httpwg.org/specs/rfc9110.html#target.resource)|
   * |HEAD|the [target resource](https://httpwg.org/specs/rfc9110.html#target.resource), like GET, but without transferring the representation data|
   * |POST|the status of, or results obtained from, the action|
   * |PUT, DELETE|the status of the action|
   * |OPTIONS|communication options for the target resource|
   * |TRACE|the request message as received by the server returning the trace|
   *
   * Aside from responses to CONNECT, a 200 response is expected to contain
   * message content unless the message framing explicitly indicates that the
   * content has zero length. If some aspect of the request indicates a
   * preference for no content upon success, the origin server ought to send a
   * [204 (No Content)](https://httpwg.org/specs/rfc9110.html#status.204)
   * response instead. For CONNECT, there is no content because the successful
   * result is a tunnel, which begins immediately after the 200 response header
   * section.
   *
   * A 200 response is heuristically cacheable; i.e., unless otherwise indicated
   * by the method definition or explicit cache controls (see
   * [Section 4.2.2](https://httpwg.org/specs/rfc9111.html#heuristic.freshness "Calculating Heuristic Freshness")
   * of [[CACHING]](https://httpwg.org/specs/rfc9110.html#CACHING)).
   *
   * In 200 responses to GET or HEAD, an origin server _SHOULD_ send any available
   * validator fields ([Section 8.8](https://httpwg.org/specs/rfc9110.html#response.validator "Validator Fields"))
   * for the [selected representation](https://httpwg.org/specs/rfc9110.html#selected.representation),
   * with both a strong entity tag and a [Last-Modified](https://httpwg.org/specs/rfc9110.html#field.last-modified)
   * date being preferred.
   *
   * In 200 responses to state-changing methods, any validator fields
   * ([Section 8.8](https://httpwg.org/specs/rfc9110.html#response.validator "Validator Fields"))
   * sent in the response convey the current validators for the new
   * representation formed as a result of successfully applying the request
   * semantics. Note that the PUT method
   * ([Section 9.3.4](https://httpwg.org/specs/rfc9110.html#PUT "PUT")) has
   * additional requirements that might preclude sending such validators.
   */
  OK: 200,
  /**
   * ## [15.3.2.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.3.2) [201 Created](https://httpwg.org/specs/rfc9110.html#status.201)
   *
   * The 201 (Created) status code indicates that the request has been fulfilled and has resulted in one or more new resources being created. The primary resource created by the request is identified by either a [Location](https://httpwg.org/specs/rfc9110.html#field.location) header field in the response or, if no [Location](https://httpwg.org/specs/rfc9110.html#field.location) header field is received, by the target URI.
   *
   * The 201 response content typically describes and links to the resource(s) created. Any validator fields ([Section 8.8](https://httpwg.org/specs/rfc9110.html#response.validator "Validator Fields")) sent in the response convey the current validators for a new representation created by the request. Note that the PUT method ([Section 9.3.4](https://httpwg.org/specs/rfc9110.html#PUT "PUT")) has additional requirements that might preclude sending such validators.
   */
  CREATED: 201,
  /**
   * ## [15.3.3.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.3.3) [202 Accepted](https://httpwg.org/specs/rfc9110.html#status.202)
   *
   * The 202 (Accepted) status code indicates that the request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place. There is no facility in HTTP for re-sending a status code from an asynchronous operation.
   *
   * The 202 response is intentionally noncommittal. Its purpose is to allow a server to accept a request for some other process (perhaps a batch-oriented process that is only run once per day) without requiring that the user agent's connection to the server persist until the process is completed. The representation sent with this response ought to describe the request's current status and point to (or embed) a status monitor that can provide the user with an estimate of when the request will be fulfilled.
   */
  ACCEPTED: 202,
  /**
   * ## [15.3.4.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.3.4) [203 Non-Authoritative Information](https://httpwg.org/specs/rfc9110.html#status.203)
   *
   * The 203 (Non-Authoritative Information) status code indicates that the request was successful but the enclosed content has been modified from that of the origin server's [200 (OK)](https://httpwg.org/specs/rfc9110.html#status.200) response by a transforming proxy ([Section 7.7](https://httpwg.org/specs/rfc9110.html#message.transformations "Message Transformations")). This status code allows the proxy to notify recipients when a transformation has been applied, since that knowledge might impact later decisions regarding the content. For example, future cache validation requests for the content might only be applicable along the same request path (through the same proxies).
   *
   * A 203 response is heuristically cacheable; i.e., unless otherwise indicated by the method definition or explicit cache controls (see [Section 4.2.2](https://httpwg.org/specs/rfc9111.html#heuristic.freshness "Calculating Heuristic Freshness") of [[CACHING]](https://httpwg.org/specs/rfc9110.html#CACHING)).
   */
  NON_AUTHORITATIVE_INFORMATION: 203,
  /**
   * ## [15.3.5.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.3.5) [204 No Content](https://httpwg.org/specs/rfc9110.html#status.204)
   *
   * The 204 (No Content) status code indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response content. Metadata in the response header fields refer to the [target resource](https://httpwg.org/specs/rfc9110.html#target.resource)and its [selected representation](https://httpwg.org/specs/rfc9110.html#selected.representation) after the requested action was applied.
   *
   * For example, if a 204 status code is received in response to a PUT request and the response contains an [ETag](https://httpwg.org/specs/rfc9110.html#field.etag) field, then the PUT was successful and the ETag field value contains the entity tag for the new representation of that target resource.
   *
   * The 204 response allows a server to indicate that the action has been successfully applied to the target resource, while implying that the user agent does not need to traverse away from its current "document view" (if any). The server assumes that the user agent will provide some indication of the success to its user, in accord with its own interface, and apply any new or updated metadata in the response to its active representation.
   *
   * For example, a 204 status code is commonly used with document editing interfaces corresponding to a "save" action, such that the document being saved remains available to the user for editing. It is also frequently used with interfaces that expect automated data transfers to be prevalent, such as within distributed version control systems.
   *
   * A 204 response is terminated by the end of the header section; it cannot contain content or trailers.
   *
   * A 204 response is heuristically cacheable; i.e., unless otherwise indicated by the method definition or explicit cache controls (see [Section 4.2.2](https://httpwg.org/specs/rfc9111.html#heuristic.freshness "Calculating Heuristic Freshness") of [[CACHING]](https://httpwg.org/specs/rfc9110.html#CACHING)).
   */
  NO_CONTENT: 204,
  /**
   * ## [15.3.6.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.3.6) [205 Reset Content](https://httpwg.org/specs/rfc9110.html#status.205)
   *
   * The 205 (Reset Content) status code indicates that the server has fulfilled the request and desires that the user agent reset the "document view", which caused the request to be sent, to its original state as received from the origin server.
   *
   * This response is intended to support a common data entry use case where the user receives content that supports data entry (a form, notepad, canvas, etc.), enters or manipulates data in that space, causes the entered data to be submitted in a request, and then the data entry mechanism is reset for the next entry so that the user can easily initiate another input action.
   *
   * Since the 205 status code implies that no additional content will be provided, a server _MUST NOT_ generate content in a 205 response.
   */
  RESET_CONTENT: 205,
  /**
   * ## [15.3.7.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.3.7) [206 Partial Content](https://httpwg.org/specs/rfc9110.html#status.206)
   *
   * The 206 (Partial Content) status code indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the [selected representation](https://httpwg.org/specs/rfc9110.html#selected.representation).
   *
   * A server that supports range requests ([Section 14](https://httpwg.org/specs/rfc9110.html#range.requests "Range Requests")) will usually attempt to satisfy all of the requested ranges, since sending less data will likely result in another client request for the remainder. However, a server might want to send only a subset of the data requested for reasons of its own, such as temporary unavailability, cache efficiency, load balancing, etc. Since a 206 response is self-descriptive, the client can still understand a response that only partially satisfies its range request.
   *
   * A client _MUST_ inspect a 206 response's [Content-Type](https://httpwg.org/specs/rfc9110.html#field.content-type) and [Content-Range](https://httpwg.org/specs/rfc9110.html#field.content-range) field(s) to determine what parts are enclosed and whether additional requests are needed.
   *
   * A server that generates a 206 response _MUST_ generate the following header fields, in addition to those required in the subsections below, if the field would have been sent in a [200 (OK)](https://httpwg.org/specs/rfc9110.html#status.200) response to the same request: [Date](https://httpwg.org/specs/rfc9110.html#field.date), [Cache-Control](https://httpwg.org/specs/rfc9111.html#field.cache-control), [ETag](https://httpwg.org/specs/rfc9110.html#field.etag), [Expires](https://httpwg.org/specs/rfc9111.html#field.expires), [Content-Location](https://httpwg.org/specs/rfc9110.html#field.content-location), and [Vary](https://httpwg.org/specs/rfc9110.html#field.vary).
   *
   * A [Content-Length](https://httpwg.org/specs/rfc9110.html#field.content-length) header field present in a 206 response indicates the number of octets in the content of this message, which is usually not the complete length of the selected representation. Each [Content-Range](https://httpwg.org/specs/rfc9110.html#field.content-range) header field includes information about the selected representation's complete length.
   *
   * A sender that generates a 206 response to a request with an [If-Range](https://httpwg.org/specs/rfc9110.html#field.if-range) header field _SHOULD NOT_ generate other representation header fields beyond those required because the client already has a prior response containing those header fields. Otherwise, a sender _MUST_ generate all of the representation header fields that would have been sent in a [200 (OK)](https://httpwg.org/specs/rfc9110.html#status.200) response to the same request.
   *
   * A 206 response is heuristically cacheable; i.e., unless otherwise indicated by explicit cache controls (see [Section 4.2.2](https://httpwg.org/specs/rfc9111.html#heuristic.freshness "Calculating Heuristic Freshness")of [[CACHING]](https://httpwg.org/specs/rfc9110.html#CACHING)).
   *
   * ##### [15.3.7.1.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.3.7.1) [Single Part](https://httpwg.org/specs/rfc9110.html#partial.single)
   *
   * If a single part is being transferred, the server generating the 206 response _MUST_ generate a [Content-Range](https://httpwg.org/specs/rfc9110.html#field.content-range) header field, describing what range of the selected representation is enclosed, and a content consisting of the range. For example:
   *
   * HTTP/1.1 206 Partial Content
   * Date: Wed, 15 Nov 1995 06:25:24 GMT
   * Last-Modified: Wed, 15 Nov 1995 04:58:08 GMT
   * Content-Range: bytes 21010-47021/47022
   * Content-Length: 26012
   * Content-Type: image/gif
   *
   * ... 26012 bytes of partial image data ...
   *
   * ##### [15.3.7.2.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.3.7.2) [Multiple Parts](https://httpwg.org/specs/rfc9110.html#partial.multipart)
   *
   * If multiple parts are being transferred, the server generating the 206 response _MUST_ generate "multipart/byteranges" content, as defined in [Section 14.6](https://httpwg.org/specs/rfc9110.html#multipart.byteranges "Media Type multipart/byteranges"), and a [Content-Type](https://httpwg.org/specs/rfc9110.html#field.content-type) header field containing the "multipart/byteranges" media type and its required boundary parameter. To avoid confusion with single-part responses, a server _MUST NOT_ generate a [Content-Range](https://httpwg.org/specs/rfc9110.html#field.content-range) header field in the HTTP header section of a multiple part response (this field will be sent in each part instead).
   *
   * Within the header area of each body part in the multipart content, the server _MUST_ generate a [Content-Range](https://httpwg.org/specs/rfc9110.html#field.content-range) header field corresponding to the range being enclosed in that body part. If the selected representation would have had a [Content-Type](https://httpwg.org/specs/rfc9110.html#field.content-type) header field in a [200 (OK)](https://httpwg.org/specs/rfc9110.html#status.200) response, the server _SHOULD_ generate that same [Content-Type](https://httpwg.org/specs/rfc9110.html#field.content-type) header field in the header area of each body part. For example:
   *
   * HTTP/1.1 206 Partial Content
   * Date: Wed, 15 Nov 1995 06:25:24 GMT
   * Last-Modified: Wed, 15 Nov 1995 04:58:08 GMT
   * Content-Length: 1741
   * Content-Type: multipart/byteranges; boundary=THIS_STRING_SEPARATES
   *
   * --THIS_STRING_SEPARATES
   * Content-Type: application/pdf
   * Content-Range: bytes 500-999/8000
   *
   * ...the first range...
   * --THIS_STRING_SEPARATES
   * Content-Type: application/pdf
   * Content-Range: bytes 7000-7999/8000
   *
   * ...the second range
   * --THIS_STRING_SEPARATES--
   *
   * When multiple ranges are requested, a server _MAY_ coalesce any of the ranges that overlap, or that are separated by a gap that is smaller than the overhead of sending multiple parts, regardless of the order in which the corresponding range-spec appeared in the received [Range](https://httpwg.org/specs/rfc9110.html#field.range) header field. Since the typical overhead between each part of a "multipart/byteranges" is around 80 bytes, depending on the selected representation's media type and the chosen boundary parameter length, it can be less efficient to transfer many small disjoint parts than it is to transfer the entire selected representation.
   *
   * A server _MUST NOT_ generate a multipart response to a request for a single range, since a client that does not request multiple parts might not support multipart responses. However, a server _MAY_ generate a "multipart/byteranges" response with only a single body part if multiple ranges were requested and only one range was found to be satisfiable or only one range remained after coalescing. A client that cannot process a "multipart/byteranges" response _MUST NOT_ generate a request that asks for multiple ranges.
   *
   * A server that generates a multipart response _SHOULD_ send the parts in the same order that the corresponding range-spec appeared in the received [Range](https://httpwg.org/specs/rfc9110.html#field.range) header field, excluding those ranges that were deemed unsatisfiable or that were coalesced into other ranges. A client that receives a multipart response _MUST_ inspect the [Content-Range](https://httpwg.org/specs/rfc9110.html#field.content-range)header field present in each body part in order to determine which range is contained in that body part; a client cannot rely on receiving the same ranges that it requested, nor the same order that it requested.
   *
   * ##### [15.3.7.3.](https://httpwg.org/specs/rfc9110.html#rfc.section.15.3.7.3) [Combining Parts](https://httpwg.org/specs/rfc9110.html#combining.byte.ranges)
   *
   * A response might transfer only a subrange of a representation if the connection closed prematurely or if the request used one or more Range specifications. After several such transfers, a client might have received several ranges of the same representation. These ranges can only be safely combined if they all have in common the same strong validator ([Section 8.8.1](https://httpwg.org/specs/rfc9110.html#weak.and.strong.validators "Weak versus Strong")).
   *
   * A client that has received multiple partial responses to GET requests on a target resource _MAY_ combine those responses into a larger continuous range if they share the same strong validator.
   *
   * If the most recent response is an incomplete [200 (OK)](https://httpwg.org/specs/rfc9110.html#status.200) response, then the header fields of that response are used for any combined response and replace those of the matching stored responses.
   *
   * If the most recent response is a [206 (Partial Content)](https://httpwg.org/specs/rfc9110.html#status.206) response and at least one of the matching stored responses is a [200 (OK)](https://httpwg.org/specs/rfc9110.html#status.200), then the combined response header fields consist of the most recent 200 response's header fields. If all of the matching stored responses are 206 responses, then the stored response with the most recent header fields is used as the source of header fields for the combined response, except that the client _MUST_ use other header fields provided in the new response, aside from [Content-Range](https://httpwg.org/specs/rfc9110.html#field.content-range), to replace all instances of the corresponding header fields in the stored response.
   *
   * The combined response content consists of the union of partial content ranges within the new response and all of the matching stored responses. If the union consists of the entire range of the representation, then the client _MUST_process the combined response as if it were a complete [200 (OK)](https://httpwg.org/specs/rfc9110.html#status.200) response, including a [Content-Length](https://httpwg.org/specs/rfc9110.html#field.content-length) header field that reflects the complete length. Otherwise, the client _MUST_ process the set of continuous ranges as one of the following: an incomplete [200 (OK)](https://httpwg.org/specs/rfc9110.html#status.200) response if the combined response is a prefix of the representation, a single [206 (Partial Content)](https://httpwg.org/specs/rfc9110.html#status.206) response containing "multipart/byteranges" content, or multiple [206 (Partial Content)](https://httpwg.org/specs/rfc9110.html#status.206) responses, each with one continuous range that is indicated by a [Content-Range](https://httpwg.org/specs/rfc9110.html#field.content-range) header field.
   */
  PARTIAL_CONTENT: 206,
} as const;

export const HTTP_STATUSES_2XX = {
  200: "OK",
  201: "CREATED",
  202: "ACCEPTED",
  203: "NON_AUTHORITATIVE_INFORMATION",
  204: "NO_CONTENT",
  205: "RESET_CONTENT",
  206: "PARTIAL_CONTENT",
} as const;

export function isStrict2xx(value: unknown): value is TYPE_HTTP_CODE_2XX {
  if (typeof value !== "number") return false;
  return value in HTTP_STATUSES_2XX;
}

export type LOOSE_TYPE_HTTP_CODE_2XX = DigitXX<2>;

export function isLoose2xx(value: unknown): value is LOOSE_TYPE_HTTP_CODE_2XX {
  if (typeof value !== "number") return false;
  if (!Number.isInteger(value)) return false;
  return value >= 200 && value <= 299;
}
