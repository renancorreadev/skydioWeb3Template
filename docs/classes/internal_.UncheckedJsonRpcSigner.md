[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / UncheckedJsonRpcSigner

# Class: UncheckedJsonRpcSigner

[<internal>](../modules/internal_.md).UncheckedJsonRpcSigner

## Hierarchy

- [`JsonRpcSigner`](internal_.JsonRpcSigner.md)

  ↳ **`UncheckedJsonRpcSigner`**

## Table of contents

### Constructors

- [constructor](internal_.UncheckedJsonRpcSigner.md#constructor)

### Properties

- [\_address](internal_.UncheckedJsonRpcSigner.md#_address)
- [\_index](internal_.UncheckedJsonRpcSigner.md#_index)
- [\_isSigner](internal_.UncheckedJsonRpcSigner.md#_issigner)
- [provider](internal_.UncheckedJsonRpcSigner.md#provider)

### Methods

- [\_checkProvider](internal_.UncheckedJsonRpcSigner.md#_checkprovider)
- [\_legacySignMessage](internal_.UncheckedJsonRpcSigner.md#_legacysignmessage)
- [\_signTypedData](internal_.UncheckedJsonRpcSigner.md#_signtypeddata)
- [call](internal_.UncheckedJsonRpcSigner.md#call)
- [checkTransaction](internal_.UncheckedJsonRpcSigner.md#checktransaction)
- [connect](internal_.UncheckedJsonRpcSigner.md#connect)
- [connectUnchecked](internal_.UncheckedJsonRpcSigner.md#connectunchecked)
- [estimateGas](internal_.UncheckedJsonRpcSigner.md#estimategas)
- [getAddress](internal_.UncheckedJsonRpcSigner.md#getaddress)
- [getBalance](internal_.UncheckedJsonRpcSigner.md#getbalance)
- [getChainId](internal_.UncheckedJsonRpcSigner.md#getchainid)
- [getFeeData](internal_.UncheckedJsonRpcSigner.md#getfeedata)
- [getGasPrice](internal_.UncheckedJsonRpcSigner.md#getgasprice)
- [getTransactionCount](internal_.UncheckedJsonRpcSigner.md#gettransactioncount)
- [populateTransaction](internal_.UncheckedJsonRpcSigner.md#populatetransaction)
- [resolveName](internal_.UncheckedJsonRpcSigner.md#resolvename)
- [sendTransaction](internal_.UncheckedJsonRpcSigner.md#sendtransaction)
- [sendUncheckedTransaction](internal_.UncheckedJsonRpcSigner.md#senduncheckedtransaction)
- [signMessage](internal_.UncheckedJsonRpcSigner.md#signmessage)
- [signTransaction](internal_.UncheckedJsonRpcSigner.md#signtransaction)
- [unlock](internal_.UncheckedJsonRpcSigner.md#unlock)
- [isSigner](internal_.UncheckedJsonRpcSigner.md#issigner)

## Constructors

### constructor

• **new UncheckedJsonRpcSigner**(`constructorGuard`, `provider`, `addressOrIndex?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `provider` | [`JsonRpcProvider`](internal_.JsonRpcProvider.md) |
| `addressOrIndex?` | `string` \| `number` |

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[constructor](internal_.JsonRpcSigner.md#constructor)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:13

## Properties

### \_address

• **\_address**: `string`

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[_address](internal_.JsonRpcSigner.md#_address)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:12

___

### \_index

• **\_index**: `number`

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[_index](internal_.JsonRpcSigner.md#_index)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:11

___

### \_isSigner

• `Readonly` **\_isSigner**: `boolean`

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[_isSigner](internal_.JsonRpcSigner.md#_issigner)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:29

___

### provider

• `Readonly` **provider**: [`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[provider](internal_.JsonRpcSigner.md#provider)

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

[JsonRpcSigner](internal_.JsonRpcSigner.md).[_checkProvider](internal_.JsonRpcSigner.md#_checkprovider)

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

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[_legacySignMessage](internal_.JsonRpcSigner.md#_legacysignmessage)

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

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[_signTypedData](internal_.JsonRpcSigner.md#_signtypeddata)

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

[JsonRpcSigner](internal_.JsonRpcSigner.md).[call](internal_.JsonRpcSigner.md#call)

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

[JsonRpcSigner](internal_.JsonRpcSigner.md).[checkTransaction](internal_.JsonRpcSigner.md#checktransaction)

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

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[connect](internal_.JsonRpcSigner.md#connect)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:14

___

### connectUnchecked

▸ **connectUnchecked**(): [`JsonRpcSigner`](internal_.JsonRpcSigner.md)

#### Returns

[`JsonRpcSigner`](internal_.JsonRpcSigner.md)

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[connectUnchecked](internal_.JsonRpcSigner.md#connectunchecked)

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

[JsonRpcSigner](internal_.JsonRpcSigner.md).[estimateGas](internal_.JsonRpcSigner.md#estimategas)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:33

___

### getAddress

▸ **getAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[getAddress](internal_.JsonRpcSigner.md#getaddress)

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

[JsonRpcSigner](internal_.JsonRpcSigner.md).[getBalance](internal_.JsonRpcSigner.md#getbalance)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:31

___

### getChainId

▸ **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[getChainId](internal_.JsonRpcSigner.md#getchainid)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:36

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Returns

`Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[getFeeData](internal_.JsonRpcSigner.md#getfeedata)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:38

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[getGasPrice](internal_.JsonRpcSigner.md#getgasprice)

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

[JsonRpcSigner](internal_.JsonRpcSigner.md).[getTransactionCount](internal_.JsonRpcSigner.md#gettransactioncount)

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

[JsonRpcSigner](internal_.JsonRpcSigner.md).[populateTransaction](internal_.JsonRpcSigner.md#populatetransaction)

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

[JsonRpcSigner](internal_.JsonRpcSigner.md).[resolveName](internal_.JsonRpcSigner.md#resolvename)

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

[JsonRpcSigner](internal_.JsonRpcSigner.md).[sendTransaction](internal_.JsonRpcSigner.md#sendtransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:26

___

### sendUncheckedTransaction

▸ **sendUncheckedTransaction**(`transaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[sendUncheckedTransaction](internal_.JsonRpcSigner.md#senduncheckedtransaction)

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

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[signMessage](internal_.JsonRpcSigner.md#signmessage)

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

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[signTransaction](internal_.JsonRpcSigner.md#signtransaction)

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

#### Inherited from

[JsonRpcSigner](internal_.JsonRpcSigner.md).[unlock](internal_.JsonRpcSigner.md#unlock)

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

[JsonRpcSigner](internal_.JsonRpcSigner.md).[isSigner](internal_.JsonRpcSigner.md#issigner)

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:43
