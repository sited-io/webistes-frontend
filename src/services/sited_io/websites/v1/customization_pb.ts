// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file sited_io/websites/v1/customization.proto (package sited_io.websites.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message sited_io.websites.v1.CustomizationResponse
 */
export class CustomizationResponse extends Message<CustomizationResponse> {
  /**
   * @generated from field: optional string primary_color = 1;
   */
  primaryColor?: string;

  /**
   * @generated from field: optional string secondary_color = 2;
   */
  secondaryColor?: string;

  constructor(data?: PartialMessage<CustomizationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.CustomizationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "primary_color", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "secondary_color", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CustomizationResponse {
    return new CustomizationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CustomizationResponse {
    return new CustomizationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CustomizationResponse {
    return new CustomizationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CustomizationResponse | PlainMessage<CustomizationResponse> | undefined, b: CustomizationResponse | PlainMessage<CustomizationResponse> | undefined): boolean {
    return proto3.util.equals(CustomizationResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.PutCustomizationRequest
 */
export class PutCustomizationRequest extends Message<PutCustomizationRequest> {
  /**
   * @generated from field: string website_id = 1;
   */
  websiteId = "";

  /**
   * @generated from field: optional string primary_color = 2;
   */
  primaryColor?: string;

  /**
   * @generated from field: optional string secondary_color = 3;
   */
  secondaryColor?: string;

  constructor(data?: PartialMessage<PutCustomizationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.PutCustomizationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "primary_color", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "secondary_color", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PutCustomizationRequest {
    return new PutCustomizationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PutCustomizationRequest {
    return new PutCustomizationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PutCustomizationRequest {
    return new PutCustomizationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PutCustomizationRequest | PlainMessage<PutCustomizationRequest> | undefined, b: PutCustomizationRequest | PlainMessage<PutCustomizationRequest> | undefined): boolean {
    return proto3.util.equals(PutCustomizationRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.PutCustomizationResponse
 */
export class PutCustomizationResponse extends Message<PutCustomizationResponse> {
  /**
   * @generated from field: sited_io.websites.v1.CustomizationResponse customization = 1;
   */
  customization?: CustomizationResponse;

  constructor(data?: PartialMessage<PutCustomizationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.PutCustomizationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "customization", kind: "message", T: CustomizationResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PutCustomizationResponse {
    return new PutCustomizationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PutCustomizationResponse {
    return new PutCustomizationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PutCustomizationResponse {
    return new PutCustomizationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: PutCustomizationResponse | PlainMessage<PutCustomizationResponse> | undefined, b: PutCustomizationResponse | PlainMessage<PutCustomizationResponse> | undefined): boolean {
    return proto3.util.equals(PutCustomizationResponse, a, b);
  }
}
