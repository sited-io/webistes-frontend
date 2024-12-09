// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file sited_io/commerce/v2/stripe.proto (package sited_io.commerce.v2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message sited_io.commerce.v2.StripeAccount
 */
export class StripeAccount extends Message<StripeAccount> {
  /**
   * @generated from field: string stripe_account_id = 1;
   */
  stripeAccountId = "";

  /**
   * @generated from oneof sited_io.commerce.v2.StripeAccount.status
   */
  status: {
    /**
     * @generated from field: sited_io.commerce.v2.StripeAccount.Pending pending = 2;
     */
    value: StripeAccount_Pending;
    case: "pending";
  } | {
    /**
     * @generated from field: sited_io.commerce.v2.StripeAccount.Configured configured = 3;
     */
    value: StripeAccount_Configured;
    case: "configured";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<StripeAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v2.StripeAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "stripe_account_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pending", kind: "message", T: StripeAccount_Pending, oneof: "status" },
    { no: 3, name: "configured", kind: "message", T: StripeAccount_Configured, oneof: "status" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StripeAccount {
    return new StripeAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StripeAccount {
    return new StripeAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StripeAccount {
    return new StripeAccount().fromJsonString(jsonString, options);
  }

  static equals(a: StripeAccount | PlainMessage<StripeAccount> | undefined, b: StripeAccount | PlainMessage<StripeAccount> | undefined): boolean {
    return proto3.util.equals(StripeAccount, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v2.StripeAccount.Pending
 */
export class StripeAccount_Pending extends Message<StripeAccount_Pending> {
  /**
   * @generated from field: string link = 1;
   */
  link = "";

  constructor(data?: PartialMessage<StripeAccount_Pending>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v2.StripeAccount.Pending";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StripeAccount_Pending {
    return new StripeAccount_Pending().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StripeAccount_Pending {
    return new StripeAccount_Pending().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StripeAccount_Pending {
    return new StripeAccount_Pending().fromJsonString(jsonString, options);
  }

  static equals(a: StripeAccount_Pending | PlainMessage<StripeAccount_Pending> | undefined, b: StripeAccount_Pending | PlainMessage<StripeAccount_Pending> | undefined): boolean {
    return proto3.util.equals(StripeAccount_Pending, a, b);
  }
}

/**
 * @generated from message sited_io.commerce.v2.StripeAccount.Configured
 */
export class StripeAccount_Configured extends Message<StripeAccount_Configured> {
  /**
   * @generated from field: bool charges_enabled = 1;
   */
  chargesEnabled = false;

  /**
   * @generated from field: bool details_submitted = 2;
   */
  detailsSubmitted = false;

  constructor(data?: PartialMessage<StripeAccount_Configured>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sited_io.commerce.v2.StripeAccount.Configured";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "charges_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "details_submitted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StripeAccount_Configured {
    return new StripeAccount_Configured().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StripeAccount_Configured {
    return new StripeAccount_Configured().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StripeAccount_Configured {
    return new StripeAccount_Configured().fromJsonString(jsonString, options);
  }

  static equals(a: StripeAccount_Configured | PlainMessage<StripeAccount_Configured> | undefined, b: StripeAccount_Configured | PlainMessage<StripeAccount_Configured> | undefined): boolean {
    return proto3.util.equals(StripeAccount_Configured, a, b);
  }
}
