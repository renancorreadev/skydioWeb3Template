[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / IERC165

# Class: IERC165

## Hierarchy

- [`BaseContract`](internal_.BaseContract.md)

  ↳ **`IERC165`**

## Table of contents

### Constructors

- [constructor](IERC165.md#constructor)

### Properties

- [\_deployedPromise](IERC165.md#_deployedpromise)
- [\_runningEvents](IERC165.md#_runningevents)
- [\_wrappedEmits](IERC165.md#_wrappedemits)
- [address](IERC165.md#address)
- [callStatic](IERC165.md#callstatic)
- [deployTransaction](IERC165.md#deploytransaction)
- [estimateGas](IERC165.md#estimategas)
- [filters](IERC165.md#filters)
- [functions](IERC165.md#functions)
- [interface](IERC165.md#interface)
- [populateTransaction](IERC165.md#populatetransaction)
- [provider](IERC165.md#provider)
- [resolvedAddress](IERC165.md#resolvedaddress)
- [signer](IERC165.md#signer)

### Methods

- [\_checkRunningEvents](IERC165.md#_checkrunningevents)
- [\_deployed](IERC165.md#_deployed)
- [\_wrapEvent](IERC165.md#_wrapevent)
- [attach](IERC165.md#attach)
- [connect](IERC165.md#connect)
- [deployed](IERC165.md#deployed)
- [emit](IERC165.md#emit)
- [fallback](IERC165.md#fallback)
- [listenerCount](IERC165.md#listenercount)
- [listeners](IERC165.md#listeners)
- [off](IERC165.md#off)
- [on](IERC165.md#on)
- [once](IERC165.md#once)
- [queryFilter](IERC165.md#queryfilter)
- [removeAllListeners](IERC165.md#removealllisteners)
- [removeListener](IERC165.md#removelistener)
- [supportsInterface](IERC165.md#supportsinterface)
- [getContractAddress](IERC165.md#getcontractaddress)
- [getInterface](IERC165.md#getinterface)
- [isIndexed](IERC165.md#isindexed)

## Constructors

### constructor

• **new IERC165**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |
| `contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) |
| `signerOrProvider?` | [`Provider`](internal_.Provider.md) \| [`Signer`](internal_.Signer.md) |

#### Inherited from

[BaseContract](internal_.BaseContract.md).[constructor](internal_.BaseContract.md#constructor)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:107

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<[`Contract`](internal_.Contract.md)\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_deployedPromise](internal_.BaseContract.md#_deployedpromise)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: [`RunningEvent`](internal_.RunningEvent.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_runningEvents](internal_.BaseContract.md#_runningevents)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_wrappedEmits](internal_.BaseContract.md#_wrappedemits)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[address](internal_.BaseContract.md#address)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`boolean`\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[callStatic](internal_.BaseContract.md#callstatic)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:94

___

### deployTransaction

• `Readonly` **deployTransaction**: [`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[deployTransaction](internal_.BaseContract.md#deploytransaction)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[estimateGas](internal_.BaseContract.md#estimategas)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:103

___

### filters

• **filters**: `Object`

#### Overrides

[BaseContract](internal_.BaseContract.md).[filters](internal_.BaseContract.md#filters)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:101

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[functions](internal_.BaseContract.md#functions)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:82

___

### interface

• **interface**: [`IERC165Interface`](../interfaces/IERC165Interface.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[interface](internal_.BaseContract.md#interface)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:80

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[populateTransaction](internal_.BaseContract.md#populatetransaction)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:110

___

### provider

• `Readonly` **provider**: [`Provider`](internal_.Provider.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[provider](internal_.BaseContract.md#provider)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[resolvedAddress](internal_.BaseContract.md#resolvedaddress)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: [`Signer`](internal_.Signer.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[signer](internal_.BaseContract.md#signer)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | [`RunningEvent`](internal_.RunningEvent.md) |

#### Returns

`void`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_checkRunningEvents](internal_.BaseContract.md#_checkrunningevents)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:121

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<[`Contract`](internal_.Contract.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) |

#### Returns

`Promise`<[`Contract`](internal_.Contract.md)\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_deployed](internal_.BaseContract.md#_deployed)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:114

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): [`Event`](../interfaces/internal_.Event.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | [`RunningEvent`](internal_.RunningEvent.md) |
| `log` | [`Log`](../interfaces/internal_.Log.md) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Event`](../interfaces/internal_.Event.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[_wrapEvent](internal_.BaseContract.md#_wrapevent)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:122

___

### attach

▸ **attach**(`addressOrName`): [`IERC165`](IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[attach](internal_.BaseContract.md#attach)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:41

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC165`](IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| [`Provider`](internal_.Provider.md) \| [`Signer`](internal_.Signer.md) |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[connect](internal_.BaseContract.md#connect)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:40

___

### deployed

▸ **deployed**(): `Promise`<[`IERC165`](IERC165.md)\>

#### Returns

`Promise`<[`IERC165`](IERC165.md)\>

#### Overrides

[BaseContract](internal_.BaseContract.md).[deployed](internal_.BaseContract.md#deployed)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:42

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[emit](internal_.BaseContract.md#emit)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:127

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`TransactionRequest`](../modules/internal_.md#transactionrequest) |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Inherited from

[BaseContract](internal_.BaseContract.md).[fallback](internal_.BaseContract.md#fallback)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:115

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| [`EventFilter`](../modules/internal_.md#eventfilter) |

#### Returns

`number`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[listenerCount](internal_.BaseContract.md#listenercount)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:128

___

### listeners

▸ **listeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter?`): [`TypedListener`](../modules.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`TypedListener`](../modules.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\>[]

#### Overrides

[BaseContract](internal_.BaseContract.md).[listeners](internal_.BaseContract.md#listeners)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:44

▸ **listeners**(`eventName?`): [`Listener`](../modules/internal_.md#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Listener`](../modules/internal_.md#listener)[]

#### Overrides

BaseContract.listeners

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:67

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165`](IERC165.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[off](internal_.BaseContract.md#off)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:47

▸ **off**(`eventName`, `listener`): [`IERC165`](IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

BaseContract.off

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:68

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165`](IERC165.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[on](internal_.BaseContract.md#on)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:51

▸ **on**(`eventName`, `listener`): [`IERC165`](IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

BaseContract.on

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:69

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165`](IERC165.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[once](internal_.BaseContract.md#once)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:55

▸ **once**(`eventName`, `listener`): [`IERC165`](IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

BaseContract.once

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:70

___

### queryFilter

▸ **queryFilter**<`EventArgsArray`, `EventArgsObject`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<[`TypedEvent`](../interfaces/TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<[`TypedEvent`](../interfaces/TypedEvent.md)<`EventArgsArray` & `EventArgsObject`\>[]\>

#### Overrides

[BaseContract](internal_.BaseContract.md).[queryFilter](internal_.BaseContract.md#queryfilter)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:74

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IERC165`](IERC165.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[removeAllListeners](internal_.BaseContract.md#removealllisteners)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:63

▸ **removeAllListeners**(`eventName?`): [`IERC165`](IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:72

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC165`](IERC165.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventArgsArray` | extends `any`[] |
| `EventArgsObject` | `EventArgsObject` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<`EventArgsArray`, `EventArgsObject`\> |
| `listener` | [`TypedListener`](../modules.md#typedlistener)<`EventArgsArray`, `EventArgsObject`\> |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[removeListener](internal_.BaseContract.md#removelistener)

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:59

▸ **removeListener**(`eventName`, `listener`): [`IERC165`](IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`IERC165`](IERC165.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:71

___

### supportsInterface

▸ **supportsInterface**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/nftTypes/typechain/IERC165.d.ts:89

___

### getContractAddress

▸ `Static` **getContractAddress**(`transaction`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `Object` |
| `transaction.from` | `string` |
| `transaction.nonce` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

`string`

#### Inherited from

[BaseContract](internal_.BaseContract.md).[getContractAddress](internal_.BaseContract.md#getcontractaddress)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:108

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): [`Interface`](internal_.Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) |

#### Returns

[`Interface`](internal_.Interface.md)

#### Inherited from

[BaseContract](internal_.BaseContract.md).[getInterface](internal_.BaseContract.md#getinterface)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:112

___

### isIndexed

▸ `Static` **isIndexed**(`value`): value is Indexed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Indexed

#### Inherited from

[BaseContract](internal_.BaseContract.md).[isIndexed](internal_.BaseContract.md#isindexed)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:118
