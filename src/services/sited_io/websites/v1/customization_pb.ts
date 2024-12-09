// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file sited_io/websites/v1/customization.proto (package sited_io.websites.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { MediaUpload } from "../../media/v1/media_pb.js";

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

  /**
   * @generated from field: optional string logo_image_url = 3;
   */
  logoImageUrl?: string;

  constructor(data?: PartialMessage<CustomizationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.CustomizationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "primary_color",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    {
      no: 2,
      name: "secondary_color",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    {
      no: 3,
      name: "logo_image_url",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): CustomizationResponse {
    return new CustomizationResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): CustomizationResponse {
    return new CustomizationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): CustomizationResponse {
    return new CustomizationResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: CustomizationResponse | PlainMessage<CustomizationResponse> | undefined,
    b: CustomizationResponse | PlainMessage<CustomizationResponse> | undefined,
  ): boolean {
    return proto3.util.equals(CustomizationResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.UpdateCustomizationRequest
 */
export class UpdateCustomizationRequest extends Message<UpdateCustomizationRequest> {
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

  constructor(data?: PartialMessage<UpdateCustomizationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.UpdateCustomizationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: "primary_color",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
    {
      no: 3,
      name: "secondary_color",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
      opt: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): UpdateCustomizationRequest {
    return new UpdateCustomizationRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): UpdateCustomizationRequest {
    return new UpdateCustomizationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): UpdateCustomizationRequest {
    return new UpdateCustomizationRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | UpdateCustomizationRequest
      | PlainMessage<UpdateCustomizationRequest>
      | undefined,
    b:
      | UpdateCustomizationRequest
      | PlainMessage<UpdateCustomizationRequest>
      | undefined,
  ): boolean {
    return proto3.util.equals(UpdateCustomizationRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.UpdateCustomizationResponse
 */
export class UpdateCustomizationResponse extends Message<UpdateCustomizationResponse> {
  /**
   * @generated from field: sited_io.websites.v1.CustomizationResponse customization = 1;
   */
  customization?: CustomizationResponse;

  constructor(data?: PartialMessage<UpdateCustomizationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.UpdateCustomizationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "customization", kind: "message", T: CustomizationResponse },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): UpdateCustomizationResponse {
    return new UpdateCustomizationResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): UpdateCustomizationResponse {
    return new UpdateCustomizationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): UpdateCustomizationResponse {
    return new UpdateCustomizationResponse().fromJsonString(
      jsonString,
      options,
    );
  }

  static equals(
    a:
      | UpdateCustomizationResponse
      | PlainMessage<UpdateCustomizationResponse>
      | undefined,
    b:
      | UpdateCustomizationResponse
      | PlainMessage<UpdateCustomizationResponse>
      | undefined,
  ): boolean {
    return proto3.util.equals(UpdateCustomizationResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.PutLogoImageRequest
 */
export class PutLogoImageRequest extends Message<PutLogoImageRequest> {
  /**
   * @generated from field: string website_id = 1;
   */
  websiteId = "";

  /**
   * @generated from field: sited_io.media.v1.MediaUpload image = 2;
   */
  image?: MediaUpload;

  constructor(data?: PartialMessage<PutLogoImageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.PutLogoImageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "image", kind: "message", T: MediaUpload },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PutLogoImageRequest {
    return new PutLogoImageRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PutLogoImageRequest {
    return new PutLogoImageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PutLogoImageRequest {
    return new PutLogoImageRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: PutLogoImageRequest | PlainMessage<PutLogoImageRequest> | undefined,
    b: PutLogoImageRequest | PlainMessage<PutLogoImageRequest> | undefined,
  ): boolean {
    return proto3.util.equals(PutLogoImageRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.PutLogoImageResponse
 */
export class PutLogoImageResponse extends Message<PutLogoImageResponse> {
  constructor(data?: PartialMessage<PutLogoImageResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.PutLogoImageResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): PutLogoImageResponse {
    return new PutLogoImageResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): PutLogoImageResponse {
    return new PutLogoImageResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): PutLogoImageResponse {
    return new PutLogoImageResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: PutLogoImageResponse | PlainMessage<PutLogoImageResponse> | undefined,
    b: PutLogoImageResponse | PlainMessage<PutLogoImageResponse> | undefined,
  ): boolean {
    return proto3.util.equals(PutLogoImageResponse, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.RemoveLogoImageRequest
 */
export class RemoveLogoImageRequest extends Message<RemoveLogoImageRequest> {
  /**
   * @generated from field: string website_id = 1;
   */
  websiteId = "";

  constructor(data?: PartialMessage<RemoveLogoImageRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.RemoveLogoImageRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "website_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): RemoveLogoImageRequest {
    return new RemoveLogoImageRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): RemoveLogoImageRequest {
    return new RemoveLogoImageRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): RemoveLogoImageRequest {
    return new RemoveLogoImageRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | RemoveLogoImageRequest
      | PlainMessage<RemoveLogoImageRequest>
      | undefined,
    b:
      | RemoveLogoImageRequest
      | PlainMessage<RemoveLogoImageRequest>
      | undefined,
  ): boolean {
    return proto3.util.equals(RemoveLogoImageRequest, a, b);
  }
}

/**
 * @generated from message sited_io.websites.v1.RemoveLogoImageResponse
 */
export class RemoveLogoImageResponse extends Message<RemoveLogoImageResponse> {
  constructor(data?: PartialMessage<RemoveLogoImageResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.websites.v1.RemoveLogoImageResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): RemoveLogoImageResponse {
    return new RemoveLogoImageResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): RemoveLogoImageResponse {
    return new RemoveLogoImageResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): RemoveLogoImageResponse {
    return new RemoveLogoImageResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | RemoveLogoImageResponse
      | PlainMessage<RemoveLogoImageResponse>
      | undefined,
    b:
      | RemoveLogoImageResponse
      | PlainMessage<RemoveLogoImageResponse>
      | undefined,
  ): boolean {
    return proto3.util.equals(RemoveLogoImageResponse, a, b);
  }
}
