[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / JsonRpcSigner

# Class: JsonRpcSigner

[<internal>](../modules/internal_.md).JsonRpcSigner

## Hierarchy

- [`Signer`](internal_.Signer.md)

  ↳ **`JsonRpcSigner`**

  ↳↳ [`UncheckedJsonRpcSigner`](internal_.UncheckedJsonRpcSigner.md)

## Implements

- [`TypedDataSigner`](../interfaces/internal_.TypedDataSigner.md)

## Table of contents

### Constructors

- [constructor](internal_.JsonRpcSigner.md#constructor)

### Properties

- [\_address](internal_.JsonRpcSigner.md#_address)
- [\_index](internal_.JsonRpcSigner.md#_index)
- [\_isSigner](internal_.JsonRpcSigner.md#_issigner)
- [provider](internal_.JsonRpcSigner.md#provider)

### Methods

- [\_checkProvider](internal_.JsonRpcSigner.md#_checkprovider)
- [\_legacySignMessage](internal_.JsonRpcSigner.md#_legacysignmessage)
- [\_signTypedData](internal_.JsonRpcSigner.md#_signtypeddata)
- [call](internal_.JsonRpcSigner.md#call)
- [checkTransaction](internal_.JsonRpcSigner.md#checktransaction)
- [connect](internal_.JsonRpcSigner.md#connect)
- [connectUnchecked](internal_.JsonRpcSigner.md#connectunchecked)
- [estimateGas](internal_.JsonRpcSigner.md#estimategas)
- [getAddress](internal_.JsonRpcSigner.md#getaddress)
- [getBalance](internal_.JsonRpcSigner.md#getbalance)
- [getChainId](internal_.JsonRpcSigner.md#getchainid)
- [getFeeData](internal_.JsonRpcSigner.md#getfeedata)
- [getGasPrice](internal_.JsonRpcSigner.md#getgasprice)
- [getTransactionCount](internal_.JsonRpcSigner.md#gettransactioncount)
- [populateTransaction](internal_.JsonRpcSigner.md#populatetransaction)
- [resolveName](internal_.JsonRpcSigner.md#resolvename)
- [sendTransaction](internal_.JsonRpcSigner.md#sendtransaction)
- [sendUncheckedTransaction](internal_.JsonRpcSigner.md#senduncheckedtransaction)
- [signMessage](internal_.JsonRpcSigner.md#signmessage)
- [signTransaction](internal_.JsonRpcSigner.md#signtransaction)
- [unlock](internal_.JsonRpcSigner.md#unlock)
- [isSigner](internal_.JsonRpcSigner.md#issigner)

## Constructors

### constructor

• **new JsonRpcSigner**(`constructorGuard`, `provider`, `addressOrIndex?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `provider` | [`JsonRpcProvider`](internal_.JsonRpcProvider.md) |
| `addressOrIndex?` | `string` \| `number` |

#### Overrides

[Signer](internal_.Signer.md).[constructor](internal_.Signer.md#constructor)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:13

## Properties

### \_address

• **\_address**: `string`

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:12

___

### \_index

• **\_index**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:11

___

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

[Signer](internal_.Signer.md).[_isSigner](internal_.Signer.md#_issigner)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:29

___

### provider

• `Readonly` **provider**: [`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Overrides

[Signer](internal_.Signer.md).[provider](internal_.Signer.md#provider)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:10

## Methods

### \_checkProvider

▸ **_checkProvider**(`operation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operation?` | `string` |

#### Returns

`void`

#### Inherited from

[Signer](internal_.Signer.md).[_checkProvider](internal_.Signer.md#_checkprovider)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:42

___

### \_legacySignMessage

▸ **_legacySignMessage**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| [`Bytes`](../modules/internal_.md#bytes) |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:21

___

### \_signTypedData

▸ **_signTypedData**(`domain`, `types`, `value`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | [`TypedDataDomain`](../interfaces/internal_.TypedDataDomain.md) |
| `types` | [`Record`](../modules/internal_.md#record)<`string`, [`TypedDataField`](../interfaces/internal_.TypedDataField.md)[]\> |
| `value` | [`Record`](../modules/internal_.md#record)<`string`, `any`\> |

#### Returns

`Promise`<`string`\>

#### Implementation of

[TypedDataSigner](../interfaces/internal_.TypedDataSigner.md).[_signTypedData](../interfaces/internal_.TypedDataSigner.md#_signtypeddata)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:22

___

### call

▸ **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) |

#### Returns

`Promise`<`string`\>

#### Inherited from

[Signer](internal_.Signer.md).[call](internal_.Signer.md#call)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:34

___

### checkTransaction

▸ **checkTransaction**(`transaction`): [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

[`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\>

#### Inherited from

[Signer](internal_.Signer.md).[checkTransaction](internal_.Signer.md#checktransaction)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:40

___

### connect

▸ **connect**(`provider`): [`JsonRpcSigner`](internal_.JsonRpcSigner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`Provider`](internal_.Provider.md) |

#### Returns

[`JsonRpcSigner`](internal_.JsonRpcSigner.md)

#### Overrides

[Signer](internal_.Signer.md).[connect](internal_.Signer.md#connect)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:14

___

### connectUnchecked

▸ **connectUnchecked**(): [`JsonRpcSigner`](internal_.JsonRpcSigner.md)

#### Returns

[`JsonRpcSigner`](internal_.JsonRpcSigner.md)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:15

___

### estimateGas

▸ **estimateGas**(`transaction`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Inherited from

[Signer](internal_.Signer.md).[estimateGas](internal_.Signer.md#estimategas)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:33

___

### getAddress

▸ **getAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Overrides

[Signer](internal_.Signer.md).[getAddress](internal_.Signer.md#getaddress)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:16

___

### getBalance

▸ **getBalance**(`blockTag?`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Inherited from

[Signer](internal_.Signer.md).[getBalance](internal_.Signer.md#getbalance)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:31

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[Signer](internal_.Signer.md).[getChainId](internal_.Signer.md#getchainid)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:36

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Returns

`Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Inherited from

[Signer](internal_.Signer.md).[getFeeData](internal_.Signer.md#getfeedata)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:38

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Inherited from

[Signer](internal_.Signer.md).[getGasPrice](internal_.Signer.md#getgasprice)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:37

___

### getTransactionCount

▸ **getTransactionCount**(`blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) |

#### Returns

`Promise`<`number`\>

#### Inherited from

[Signer](internal_.Signer.md).[getTransactionCount](internal_.Signer.md#gettransactioncount)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:32

___

### populateTransaction

▸ **populateTransaction**(`transaction`): `Promise`<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\>

#### Inherited from

[Signer](internal_.Signer.md).[populateTransaction](internal_.Signer.md#populatetransaction)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:41

___

### resolveName

▸ **resolveName**(`name`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[Signer](internal_.Signer.md).[resolveName](internal_.Signer.md#resolvename)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:39

___

### sendTransaction

▸ **sendTransaction**(`transaction`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Overrides

[Signer](internal_.Signer.md).[sendTransaction](internal_.Signer.md#sendtransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:19

___

### sendUncheckedTransaction

▸ **sendUncheckedTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:17

___

### signMessage

▸ **signMessage**(`message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` \| [`Bytes`](../modules/internal_.md#bytes) |

#### Returns

`Promise`<`string`\>

#### Overrides

[Signer](internal_.Signer.md).[signMessage](internal_.Signer.md#signmessage)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:20

___

### signTransaction

▸ **signTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<`string`\>

#### Overrides

[Signer](internal_.Signer.md).[signTransaction](internal_.Signer.md#signtransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:18

___

### unlock

▸ **unlock**(`password`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `password` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:23

___

### isSigner

▸ `Static` **isSigner**(`value`): value is Signer

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Signer

#### Inherited from

[Signer](internal_.Signer.md).[isSigner](internal_.Signer.md#issigner)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:43
