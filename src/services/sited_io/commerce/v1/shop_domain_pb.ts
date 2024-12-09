// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file sited_io/commerce/v1/shop_domain.proto (package sited_io.commerce.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum sited_io.commerce.v1.DomainStatus
 */
export enum DomainStatus {
  /**
   * @generated from enum value: DOMAIN_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: DOMAIN_STATUS_PENDING = 1;
   */
  PENDING = 1,

  /**
   * @generated from enum value: DOMAIN_STATUS_ACTIVE = 2;
   */
  ACTIVE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(DomainStatus)
proto3.util.setEnumType(DomainStatus, "sited_io.commerce.v1.DomainStatus", [
  { no: 0, name: "DOMAIN_STATUS_UNSPECIFIED" },
  { no: 1, name: "DOMAIN_STATUS_PENDING" },
  { no: 2, name: "DOMAIN_STATUS_ACTIVE" },
]);

/**
 * @generated from message sited_io.commerce.v1.DomainStatusResponse
 */
export class DomainStatusResponse extends Message<DomainStatusResponse> {
  /**
   * @generated from field: string shop_id = 1;
   */
  shopId = "";

  /**
   * @generated from field: string domain = 2;
   */
  domain = "";

  /**
   * @generated from field: sited_io.commerce.v1.DomainStatus status = 3;
   */
  status = DomainStatus.UNSPECIFIED;

  /**
   * @generated from field: optional string client_id = 4;
   */
  clientId?: string;

  constructor(data?: PartialMessage<DomainStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v1.DomainStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shop_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(DomainStatus) },
    { no: 4, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DomainStatusResponse {
    return new DomainStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DomainStatusResponse {
    return new DomainStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DomainStatusResponse {
    return new DomainStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DomainStatusResponse | PlainMessage<DomainStatusResponse> | undefined, b: DomainStatusResponse | PlainMessage<DomainStatusResponse> | undefined): boolean {
    return proto3.util.equals(DomainStatusResponse, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v1.AddDomainToShopRequest
 */
export class AddDomainToShopRequest extends Message<AddDomainToShopRequest> {
  /**
   * @generated from field: string shop_id = 1;
   */
  shopId = "";

  /**
   * @generated from field: string domain = 2;
   */
  domain = "";

  constructor(data?: PartialMessage<AddDomainToShopRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v1.AddDomainToShopRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shop_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddDomainToShopRequest {
    return new AddDomainToShopRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddDomainToShopRequest {
    return new AddDomainToShopRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddDomainToShopRequest {
    return new AddDomainToShopRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AddDomainToShopRequest | PlainMessage<AddDomainToShopRequest> | undefined, b: AddDomainToShopRequest | PlainMessage<AddDomainToShopRequest> | undefined): boolean {
    return proto3.util.equals(AddDomainToShopRequest, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v1.AddDomainToShopResponse
 */
export class AddDomainToShopResponse extends Message<AddDomainToShopResponse> {
  constructor(data?: PartialMessage<AddDomainToShopResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v1.AddDomainToShopResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddDomainToShopResponse {
    return new AddDomainToShopResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddDomainToShopResponse {
    return new AddDomainToShopResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddDomainToShopResponse {
    return new AddDomainToShopResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AddDomainToShopResponse | PlainMessage<AddDomainToShopResponse> | undefined, b: AddDomainToShopResponse | PlainMessage<AddDomainToShopResponse> | undefined): boolean {
    return proto3.util.equals(AddDomainToShopResponse, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v1.GetDomainStatusRequest
 */
export class GetDomainStatusRequest extends Message<GetDomainStatusRequest> {
  /**
   * @generated from field: string shop_id = 1;
   */
  shopId = "";

  constructor(data?: PartialMessage<GetDomainStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v1.GetDomainStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shop_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDomainStatusRequest {
    return new GetDomainStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDomainStatusRequest {
    return new GetDomainStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDomainStatusRequest {
    return new GetDomainStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetDomainStatusRequest | PlainMessage<GetDomainStatusRequest> | undefined, b: GetDomainStatusRequest | PlainMessage<GetDomainStatusRequest> | undefined): boolean {
    return proto3.util.equals(GetDomainStatusRequest, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v1.GetDomainStatusResponse
 */
export class GetDomainStatusResponse extends Message<GetDomainStatusResponse> {
  /**
   * @generated from field: sited_io.commerce.v1.DomainStatusResponse domain_status = 1;
   */
  domainStatus?: DomainStatusResponse;

  constructor(data?: PartialMessage<GetDomainStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v1.GetDomainStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "domain_status", kind: "message", T: DomainStatusResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDomainStatusResponse {
    return new GetDomainStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDomainStatusResponse {
    return new GetDomainStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDomainStatusResponse {
    return new GetDomainStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetDomainStatusResponse | PlainMessage<GetDomainStatusResponse> | undefined, b: GetDomainStatusResponse | PlainMessage<GetDomainStatusResponse> | undefined): boolean {
    return proto3.util.equals(GetDomainStatusResponse, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v1.GetClientIdForDomainRequest
 */
export class GetClientIdForDomainRequest extends Message<GetClientIdForDomainRequest> {
  /**
   * @generated from field: string domain = 1;
   */
  domain = "";

  constructor(data?: PartialMessage<GetClientIdForDomainRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v1.GetClientIdForDomainRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetClientIdForDomainRequest {
    return new GetClientIdForDomainRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetClientIdForDomainRequest {
    return new GetClientIdForDomainRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetClientIdForDomainRequest {
    return new GetClientIdForDomainRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetClientIdForDomainRequest | PlainMessage<GetClientIdForDomainRequest> | undefined, b: GetClientIdForDomainRequest | PlainMessage<GetClientIdForDomainRequest> | undefined): boolean {
    return proto3.util.equals(GetClientIdForDomainRequest, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v1.GetClientIdForDomainResponse
 */
export class GetClientIdForDomainResponse extends Message<GetClientIdForDomainResponse> {
  /**
   * @generated from field: optional string client_id = 1;
   */
  clientId?: string;

  constructor(data?: PartialMessage<GetClientIdForDomainResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v1.GetClientIdForDomainResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetClientIdForDomainResponse {
    return new GetClientIdForDomainResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetClientIdForDomainResponse {
    return new GetClientIdForDomainResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetClientIdForDomainResponse {
    return new GetClientIdForDomainResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetClientIdForDomainResponse | PlainMessage<GetClientIdForDomainResponse> | undefined, b: GetClientIdForDomainResponse | PlainMessage<GetClientIdForDomainResponse> | undefined): boolean {
    return proto3.util.equals(GetClientIdForDomainResponse, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v1.UpdateDomainStatusRequest
 */
export class UpdateDomainStatusRequest extends Message<UpdateDomainStatusRequest> {
  /**
   * @generated from field: string shop_id = 1;
   */
  shopId = "";

  /**
   * @generated from field: string domain = 2;
   */
  domain = "";

  /**
   * @generated from field: sited_io.commerce.v1.DomainStatus status = 3;
   */
  status = DomainStatus.UNSPECIFIED;

  /**
   * @generated from field: string client_id = 4;
   */
  clientId = "";

  constructor(data?: PartialMessage<UpdateDomainStatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v1.UpdateDomainStatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shop_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "status", kind: "enum", T: proto3.getEnumType(DomainStatus) },
    { no: 4, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDomainStatusRequest {
    return new UpdateDomainStatusRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDomainStatusRequest {
    return new UpdateDomainStatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDomainStatusRequest {
    return new UpdateDomainStatusRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateDomainStatusRequest | PlainMessage<UpdateDomainStatusRequest> | undefined, b: UpdateDomainStatusRequest | PlainMessage<UpdateDomainStatusRequest> | undefined): boolean {
    return proto3.util.equals(UpdateDomainStatusRequest, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v1.UpdateDomainStatusResponse
 */
export class UpdateDomainStatusResponse extends Message<UpdateDomainStatusResponse> {
  constructor(data?: PartialMessage<UpdateDomainStatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v1.UpdateDomainStatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateDomainStatusResponse {
    return new UpdateDomainStatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateDomainStatusResponse {
    return new UpdateDomainStatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateDomainStatusResponse {
    return new UpdateDomainStatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateDomainStatusResponse | PlainMessage<UpdateDomainStatusResponse> | undefined, b: UpdateDomainStatusResponse | PlainMessage<UpdateDomainStatusResponse> | undefined): boolean {
    return proto3.util.equals(UpdateDomainStatusResponse, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v1.RemoveDomainFromShopRequest
 */
export class RemoveDomainFromShopRequest extends Message<RemoveDomainFromShopRequest> {
  /**
   * @generated from field: string shop_id = 1;
   */
  shopId = "";

  /**
   * @generated from field: string domain = 2;
   */
  domain = "";

  constructor(data?: PartialMessage<RemoveDomainFromShopRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v1.RemoveDomainFromShopRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "shop_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveDomainFromShopRequest {
    return new RemoveDomainFromShopRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveDomainFromShopRequest {
    return new RemoveDomainFromShopRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveDomainFromShopRequest {
    return new RemoveDomainFromShopRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveDomainFromShopRequest | PlainMessage<RemoveDomainFromShopRequest> | undefined, b: RemoveDomainFromShopRequest | PlainMessage<RemoveDomainFromShopRequest> | undefined): boolean {
    return proto3.util.equals(RemoveDomainFromShopRequest, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v1.RemoveDomainFromShopResponse
 */
export class RemoveDomainFromShopResponse extends Message<RemoveDomainFromShopResponse> {
  constructor(data?: PartialMessage<RemoveDomainFromShopResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v1.RemoveDomainFromShopResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveDomainFromShopResponse {
    return new RemoveDomainFromShopResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveDomainFromShopResponse {
    return new RemoveDomainFromShopResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveDomainFromShopResponse {
    return new RemoveDomainFromShopResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RemoveDomainFromShopResponse | PlainMessage<RemoveDomainFromShopResponse> | undefined, b: RemoveDomainFromShopResponse | PlainMessage<RemoveDomainFromShopResponse> | undefined): boolean {
    return proto3.util.equals(RemoveDomainFromShopResponse, a, b);
  }
}

