// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file sited_io/websites/v1/page.proto (package sited_io.websites.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { PaginationRequest, PaginationResponse } from "../../pagination/v1/pagination_pb.js";

/**
 * @generated from enum sited_io.websites.v1.PageType
 */
export enum PageType {
  /**
   * @generated from enum value: PAGE_TYPE_USPECIFIED = 0;
   */
  USPECIFIED = 0,

  /**
   * @generated from enum value: PAGE_TYPE_STATIC = 1;
   */
  STATIC = 1,

  /**
   * @generated from enum value: PAGE_TYPE_SHOP = 2;
   */
  SHOP = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(PageType)
proto3.util.setEnumType(PageType, "sited_io.websites.v1.PageType", [
  { no: 0, name: "PAGE_TYPE_USPECIFIED" },
  { no: 1, name: "PAGE_TYPE_STATIC" },
  { no: 2, name: "PAGE_TYPE_SHOP" },
]);

/**
 * @generated from message sited_io.websites.v1.PageResponse
 */
export class PageResponse extends Message<PageResponse> {
  /**
   * @generated from field: int64 page_id = 1;
   */
  pageId = protoInt64.zero;

  /**
   * @generated from field: sited_io.websites.v1.PageType page_type = 2;
   */
  pageType = PageType.USPECIFIED;

  /**
   * @generated from field: string content_id = 3;
   */
  contentId = "";

  /**
   * @generated from field: string title = 4;
   */
  title = "";

  /**
   * @generated from field: string path = 5;
   */
  path = "";

  constructor(data?: PartialMessage<PageResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.PageResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "page_type", kind: "enum", T: proto3.getEnumType(PageType) },
    { no: 3, name: "content_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PageResponse {
    return new PageResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PageResponse {
    return new PageResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PageResponse {
    return new PageResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PageResponse | PlainMessage<PageResponse> | undefined, b: PageResponse | PlainMessage<PageResponse> | undefined): boolean {
    return proto3.util.equals(PageResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.CreatePageRequest
 */
export class CreatePageRequest extends Message<CreatePageRequest> {
  /**
   * @generated from field: string website_id = 1;
   */
  websiteId = "";

  /**
   * @generated from field: sited_io.websites.v1.PageType page_type = 2;
   */
  pageType = PageType.USPECIFIED;

  /**
   * @generated from field: string content_id = 3;
   */
  contentId = "";

  /**
   * @generated from field: string title = 4;
   */
  title = "";

  /**
   * @generated from field: bool is_home_page = 5;
   */
  isHomePage = false;

  constructor(data?: PartialMessage<CreatePageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.CreatePageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_type", kind: "enum", T: proto3.getEnumType(PageType) },
    { no: 3, name: "content_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "is_home_page", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePageRequest {
    return new CreatePageRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePageRequest {
    return new CreatePageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePageRequest {
    return new CreatePageRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreatePageRequest | PlainMessage<CreatePageRequest> | undefined, b: CreatePageRequest | PlainMessage<CreatePageRequest> | undefined): boolean {
    return proto3.util.equals(CreatePageRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.CreatePageResponse
 */
export class CreatePageResponse extends Message<CreatePageResponse> {
  /**
   * @generated from field: sited_io.websites.v1.PageResponse page = 1;
   */
  page?: PageResponse;

  constructor(data?: PartialMessage<CreatePageResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.CreatePageResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePageResponse {
    return new CreatePageResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePageResponse {
    return new CreatePageResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePageResponse {
    return new CreatePageResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreatePageResponse | PlainMessage<CreatePageResponse> | undefined, b: CreatePageResponse | PlainMessage<CreatePageResponse> | undefined): boolean {
    return proto3.util.equals(CreatePageResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.GetPageRequest
 */
export class GetPageRequest extends Message<GetPageRequest> {
  /**
   * @generated from field: optional int64 page_id = 1;
   */
  pageId?: bigint;

  /**
   * @generated from field: optional string website_id = 2;
   */
  websiteId?: string;

  /**
   * @generated from field: optional string path = 3;
   */
  path?: string;

  constructor(data?: PartialMessage<GetPageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.GetPageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 2, name: "website_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPageRequest {
    return new GetPageRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPageRequest {
    return new GetPageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPageRequest {
    return new GetPageRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetPageRequest | PlainMessage<GetPageRequest> | undefined, b: GetPageRequest | PlainMessage<GetPageRequest> | undefined): boolean {
    return proto3.util.equals(GetPageRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.GetPageResponse
 */
export class GetPageResponse extends Message<GetPageResponse> {
  /**
   * @generated from field: sited_io.websites.v1.PageResponse page = 1;
   */
  page?: PageResponse;

  constructor(data?: PartialMessage<GetPageResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.GetPageResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPageResponse {
    return new GetPageResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPageResponse {
    return new GetPageResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPageResponse {
    return new GetPageResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetPageResponse | PlainMessage<GetPageResponse> | undefined, b: GetPageResponse | PlainMessage<GetPageResponse> | undefined): boolean {
    return proto3.util.equals(GetPageResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.ListPagesRequest
 */
export class ListPagesRequest extends Message<ListPagesRequest> {
  /**
   * @generated from field: optional string website_id = 1;
   */
  websiteId?: string;

  /**
   * @generated from field: optional sited_io.pagination.v1.PaginationRequest pagination = 2;
   */
  pagination?: PaginationRequest;

  constructor(data?: PartialMessage<ListPagesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.ListPagesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "pagination", kind: "message", T: PaginationRequest, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPagesRequest {
    return new ListPagesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPagesRequest {
    return new ListPagesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPagesRequest {
    return new ListPagesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListPagesRequest | PlainMessage<ListPagesRequest> | undefined, b: ListPagesRequest | PlainMessage<ListPagesRequest> | undefined): boolean {
    return proto3.util.equals(ListPagesRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.ListPagesResponse
 */
export class ListPagesResponse extends Message<ListPagesResponse> {
  /**
   * @generated from field: repeated sited_io.websites.v1.PageResponse pages = 1;
   */
  pages: PageResponse[] = [];

  /**
   * @generated from field: sited_io.pagination.v1.PaginationResponse pagination = 2;
   */
  pagination?: PaginationResponse;

  constructor(data?: PartialMessage<ListPagesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.ListPagesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pages", kind: "message", T: PageResponse, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PaginationResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPagesResponse {
    return new ListPagesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPagesResponse {
    return new ListPagesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPagesResponse {
    return new ListPagesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListPagesResponse | PlainMessage<ListPagesResponse> | undefined, b: ListPagesResponse | PlainMessage<ListPagesResponse> | undefined): boolean {
    return proto3.util.equals(ListPagesResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.UpdatePageRequest
 */
export class UpdatePageRequest extends Message<UpdatePageRequest> {
  /**
   * @generated from field: int64 page_id = 1;
   */
  pageId = protoInt64.zero;

  /**
   * @generated from field: optional sited_io.websites.v1.PageType page_type = 2;
   */
  pageType?: PageType;

  /**
   * @generated from field: optional string content_id = 3;
   */
  contentId?: string;

  /**
   * @generated from field: optional string title = 4;
   */
  title?: string;

  /**
   * @generated from field: optional bool is_home_page = 5;
   */
  isHomePage?: boolean;

  constructor(data?: PartialMessage<UpdatePageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.UpdatePageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "page_type", kind: "enum", T: proto3.getEnumType(PageType), opt: true },
    { no: 3, name: "content_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "is_home_page", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePageRequest {
    return new UpdatePageRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePageRequest {
    return new UpdatePageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePageRequest {
    return new UpdatePageRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdatePageRequest | PlainMessage<UpdatePageRequest> | undefined, b: UpdatePageRequest | PlainMessage<UpdatePageRequest> | undefined): boolean {
    return proto3.util.equals(UpdatePageRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.UpdatePageResponse
 */
export class UpdatePageResponse extends Message<UpdatePageResponse> {
  /**
   * @generated from field: sited_io.websites.v1.PageResponse page = 1;
   */
  page?: PageResponse;

  constructor(data?: PartialMessage<UpdatePageResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.UpdatePageResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePageResponse {
    return new UpdatePageResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePageResponse {
    return new UpdatePageResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePageResponse {
    return new UpdatePageResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdatePageResponse | PlainMessage<UpdatePageResponse> | undefined, b: UpdatePageResponse | PlainMessage<UpdatePageResponse> | undefined): boolean {
    return proto3.util.equals(UpdatePageResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.DeletePageRequest
 */
export class DeletePageRequest extends Message<DeletePageRequest> {
  /**
   * @generated from field: int64 page_id = 1;
   */
  pageId = protoInt64.zero;

  constructor(data?: PartialMessage<DeletePageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.DeletePageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "page_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePageRequest {
    return new DeletePageRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePageRequest {
    return new DeletePageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePageRequest {
    return new DeletePageRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeletePageRequest | PlainMessage<DeletePageRequest> | undefined, b: DeletePageRequest | PlainMessage<DeletePageRequest> | undefined): boolean {
    return proto3.util.equals(DeletePageRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.DeletePageResponse
 */
export class DeletePageResponse extends Message<DeletePageResponse> {
  constructor(data?: PartialMessage<DeletePageResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.DeletePageResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePageResponse {
    return new DeletePageResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePageResponse {
    return new DeletePageResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePageResponse {
    return new DeletePageResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeletePageResponse | PlainMessage<DeletePageResponse> | undefined, b: DeletePageResponse | PlainMessage<DeletePageResponse> | undefined): boolean {
    return proto3.util.equals(DeletePageResponse, a, b);
  }
}

