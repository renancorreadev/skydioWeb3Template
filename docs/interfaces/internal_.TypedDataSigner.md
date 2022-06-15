[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / TypedDataSigner

# Interface: TypedDataSigner

[<internal>](../modules/internal_.md).TypedDataSigner

## Implemented by

- [`JsonRpcSigner`](../classes/internal_.JsonRpcSigner.md)

## Table of contents

### Methods

- [\_signTypedData](internal_.TypedDataSigner.md#_signtypeddata)

## Methods

### \_signTypedData

▸ **_signTypedData**(`domain`, `types`, `value`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | [`TypedDataDomain`](internal_.TypedDataDomain.md) |
| `types` | [`Record`](../modules/internal_.md#record)<`string`, [`TypedDataField`](internal_.TypedDataField.md)[]\> |
| `value` | [`Record`](../modules/internal_.md#record)<`string`, `any`\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:21
