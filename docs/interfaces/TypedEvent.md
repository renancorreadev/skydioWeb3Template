[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / TypedEvent

# Interface: TypedEvent<TArgsArray, TArgsObject\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TArgsArray` | extends `any`[] = `any` |
| `TArgsObject` | `any` |

## Hierarchy

- [`Event`](internal_.Event.md)

  ↳ **`TypedEvent`**

## Table of contents

### Properties

- [address](TypedEvent.md#address-1)
- [args](TypedEvent.md#args-1)
- [blockHash](TypedEvent.md#blockhash-1)
- [blockNumber](TypedEvent.md#blocknumber-1)
- [data](TypedEvent.md#data-1)
- [decodeError](TypedEvent.md#decodeerror-1)
- [event](TypedEvent.md#event-1)
- [eventSignature](TypedEvent.md#eventsignature-1)
- [logIndex](TypedEvent.md#logindex-1)
- [removed](TypedEvent.md#removed-1)
- [topics](TypedEvent.md#topics-1)
- [transactionHash](TypedEvent.md#transactionhash-1)
- [transactionIndex](TypedEvent.md#transactionindex-1)

### Methods

- [decode](TypedEvent.md#decode-1)
- [getBlock](TypedEvent.md#getblock-1)
- [getTransaction](TypedEvent.md#gettransaction-1)
- [getTransactionReceipt](TypedEvent.md#gettransactionreceipt-1)
- [removeListener](TypedEvent.md#removelistener-1)

## Properties

### address

• **address**: `string`

#### Inherited from

[Event](internal_.Event.md).[address](internal_.Event.md#address)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:59

___

### args

• **args**: `TArgsArray` & `TArgsObject`

#### Overrides

[Event](internal_.Event.md).[args](internal_.Event.md#args)

#### Defined in

src/contracts/types/common.ts:11

___

### blockHash

• **blockHash**: `string`

#### Inherited from

[Event](internal_.Event.md).[blockHash](internal_.Event.md#blockhash)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:56

___

### blockNumber

• **blockNumber**: `number`

#### Inherited from

[Event](internal_.Event.md).[blockNumber](internal_.Event.md#blocknumber)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:55

___

### data

• **data**: `string`

#### Inherited from

[Event](internal_.Event.md).[data](internal_.Event.md#data)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:60

___

### decodeError

• `Optional` **decodeError**: `Error`

#### Inherited from

[Event](internal_.Event.md).[decodeError](internal_.Event.md#decodeerror)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:50

___

### event

• `Optional` **event**: `string`

#### Inherited from

[Event](internal_.Event.md).[event](internal_.Event.md#event)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:47

___

### eventSignature

• `Optional` **eventSignature**: `string`

#### Inherited from

[Event](internal_.Event.md).[eventSignature](internal_.Event.md#eventsignature)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:48

___

### logIndex

• **logIndex**: `number`

#### Inherited from

[Event](internal_.Event.md).[logIndex](internal_.Event.md#logindex)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:63

___

### removed

• **removed**: `boolean`

#### Inherited from

[Event](internal_.Event.md).[removed](internal_.Event.md#removed)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:58

___

### topics

• **topics**: `string`[]

#### Inherited from

[Event](internal_.Event.md).[topics](internal_.Event.md#topics)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:61

___

### transactionHash

• **transactionHash**: `string`

#### Inherited from

[Event](internal_.Event.md).[transactionHash](internal_.Event.md#transactionhash)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:62

___

### transactionIndex

• **transactionIndex**: `number`

#### Inherited from

[Event](internal_.Event.md).[transactionIndex](internal_.Event.md#transactionindex)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:57

## Methods

### decode

▸ `Optional` **decode**(`data`, `topics?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `topics?` | `string`[] |

#### Returns

`any`

#### Inherited from

[Event](internal_.Event.md).[decode](internal_.Event.md#decode)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:51

___

### getBlock

▸ **getBlock**(): `Promise`<[`Block`](internal_.Block.md)\>

#### Returns

`Promise`<[`Block`](internal_.Block.md)\>

#### Inherited from

[Event](internal_.Event.md).[getBlock](internal_.Event.md#getblock)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:53

___

### getTransaction

▸ **getTransaction**(): `Promise`<[`TransactionResponse`](internal_.TransactionResponse.md)\>

#### Returns

`Promise`<[`TransactionResponse`](internal_.TransactionResponse.md)\>

#### Inherited from

[Event](internal_.Event.md).[getTransaction](internal_.Event.md#gettransaction)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:54

___

### getTransactionReceipt

▸ **getTransactionReceipt**(): `Promise`<[`TransactionReceipt`](internal_.TransactionReceipt.md)\>

#### Returns

`Promise`<[`TransactionReceipt`](internal_.TransactionReceipt.md)\>

#### Inherited from

[Event](internal_.Event.md).[getTransactionReceipt](internal_.Event.md#gettransactionreceipt)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:55

___

### removeListener

▸ **removeListener**(): `void`

#### Returns

`void`

#### Inherited from

[Event](internal_.Event.md).[removeListener](internal_.Event.md#removelistener)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:52
