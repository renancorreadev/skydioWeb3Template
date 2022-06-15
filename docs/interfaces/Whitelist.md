[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / Whitelist

# Interface: Whitelist

## Hierarchy

- [`BaseContract`](../classes/internal_.BaseContract.md)

  ↳ **`Whitelist`**

## Table of contents

### Properties

- [\_deployedPromise](Whitelist.md#_deployedpromise)
- [\_runningEvents](Whitelist.md#_runningevents)
- [\_wrappedEmits](Whitelist.md#_wrappedemits)
- [address](Whitelist.md#address)
- [callStatic](Whitelist.md#callstatic)
- [contractName](Whitelist.md#contractname)
- [deployTransaction](Whitelist.md#deploytransaction)
- [estimateGas](Whitelist.md#estimategas)
- [filters](Whitelist.md#filters)
- [functions](Whitelist.md#functions)
- [interface](Whitelist.md#interface)
- [off](Whitelist.md#off)
- [on](Whitelist.md#on)
- [once](Whitelist.md#once)
- [populateTransaction](Whitelist.md#populatetransaction)
- [provider](Whitelist.md#provider)
- [removeListener](Whitelist.md#removelistener)
- [resolvedAddress](Whitelist.md#resolvedaddress)
- [signer](Whitelist.md#signer)

### Methods

- [\_checkRunningEvents](Whitelist.md#_checkrunningevents)
- [\_deployed](Whitelist.md#_deployed)
- [\_wrapEvent](Whitelist.md#_wrapevent)
- [attach](Whitelist.md#attach)
- [connect](Whitelist.md#connect)
- [deployed](Whitelist.md#deployed)
- [emit](Whitelist.md#emit)
- [fallback](Whitelist.md#fallback)
- [listenerCount](Whitelist.md#listenercount)
- [listeners](Whitelist.md#listeners)
- [queryFilter](Whitelist.md#queryfilter)
- [removeAllListeners](Whitelist.md#removealllisteners)

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<[`Contract`](../classes/internal_.Contract.md)\>

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[_deployedPromise](../classes/internal_.BaseContract.md#_deployedpromise)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: [`RunningEvent`](../classes/internal_.RunningEvent.md)

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[_runningEvents](../classes/internal_.BaseContract.md#_runningevents)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[_wrappedEmits](../classes/internal_.BaseContract.md#_wrappedemits)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[address](../classes/internal_.BaseContract.md#address)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• **callStatic**: `Object`

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[callStatic](../classes/internal_.BaseContract.md#callstatic)

#### Defined in

src/contracts/types/Whitelist.ts:45

___

### contractName

• **contractName**: ``"Whitelist"``

#### Defined in

src/contracts/types/Whitelist.ts:17

___

### deployTransaction

• `Readonly` **deployTransaction**: [`TransactionResponse`](internal_.TransactionResponse.md)

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[deployTransaction](../classes/internal_.BaseContract.md#deploytransaction)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• **estimateGas**: `Object`

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[estimateGas](../classes/internal_.BaseContract.md#estimategas)

#### Defined in

src/contracts/types/Whitelist.ts:49

___

### filters

• **filters**: `Object`

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[filters](../classes/internal_.BaseContract.md#filters)

#### Defined in

src/contracts/types/Whitelist.ts:47

___

### functions

• **functions**: `Object`

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[functions](../classes/internal_.BaseContract.md#functions)

#### Defined in

src/contracts/types/Whitelist.ts:43

___

### interface

• **interface**: [`WhitelistInterface`](WhitelistInterface.md)

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[interface](../classes/internal_.BaseContract.md#interface)

#### Defined in

src/contracts/types/Whitelist.ts:22

___

### off

• **off**: [`OnEvent`](OnEvent.md)<[`Whitelist`](Whitelist.md)\>

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[off](../classes/internal_.BaseContract.md#off)

#### Defined in

src/contracts/types/Whitelist.ts:38

___

### on

• **on**: [`OnEvent`](OnEvent.md)<[`Whitelist`](Whitelist.md)\>

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[on](../classes/internal_.BaseContract.md#on)

#### Defined in

src/contracts/types/Whitelist.ts:39

___

### once

• **once**: [`OnEvent`](OnEvent.md)<[`Whitelist`](Whitelist.md)\>

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[once](../classes/internal_.BaseContract.md#once)

#### Defined in

src/contracts/types/Whitelist.ts:40

___

### populateTransaction

• **populateTransaction**: `Object`

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[populateTransaction](../classes/internal_.BaseContract.md#populatetransaction)

#### Defined in

src/contracts/types/Whitelist.ts:51

___

### provider

• `Readonly` **provider**: [`Provider`](../classes/internal_.Provider.md)

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[provider](../classes/internal_.BaseContract.md#provider)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: [`OnEvent`](OnEvent.md)<[`Whitelist`](Whitelist.md)\>

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[removeListener](../classes/internal_.BaseContract.md#removelistener)

#### Defined in

src/contracts/types/Whitelist.ts:41

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[resolvedAddress](../classes/internal_.BaseContract.md#resolvedaddress)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: [`Signer`](../classes/internal_.Signer.md)

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[signer](../classes/internal_.BaseContract.md#signer)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | [`RunningEvent`](../classes/internal_.RunningEvent.md) |

#### Returns

`void`

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[_checkRunningEvents](../classes/internal_.BaseContract.md#_checkrunningevents)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:121

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<[`Contract`](../classes/internal_.Contract.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) |

#### Returns

`Promise`<[`Contract`](../classes/internal_.Contract.md)\>

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[_deployed](../classes/internal_.BaseContract.md#_deployed)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:114

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): [`Event`](internal_.Event.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | [`RunningEvent`](../classes/internal_.RunningEvent.md) |
| `log` | [`Log`](internal_.Log.md) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Event`](internal_.Event.md)

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[_wrapEvent](../classes/internal_.BaseContract.md#_wrapevent)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:122

___

### attach

▸ **attach**(`addressOrName`): [`Whitelist`](Whitelist.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Whitelist`](Whitelist.md)

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[attach](../classes/internal_.BaseContract.md#attach)

#### Defined in

src/contracts/types/Whitelist.ts:19

___

### connect

▸ **connect**(`signerOrProvider`): [`Whitelist`](Whitelist.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| [`Provider`](../classes/internal_.Provider.md) \| [`Signer`](../classes/internal_.Signer.md) |

#### Returns

[`Whitelist`](Whitelist.md)

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[connect](../classes/internal_.BaseContract.md#connect)

#### Defined in

src/contracts/types/Whitelist.ts:18

___

### deployed

▸ **deployed**(): `Promise`<[`Whitelist`](Whitelist.md)\>

#### Returns

`Promise`<[`Whitelist`](Whitelist.md)\>

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[deployed](../classes/internal_.BaseContract.md#deployed)

#### Defined in

src/contracts/types/Whitelist.ts:20

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

[BaseContract](../classes/internal_.BaseContract.md).[emit](../classes/internal_.BaseContract.md#emit)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:127

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<[`TransactionResponse`](internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`TransactionRequest`](../modules/internal_.md#transactionrequest) |

#### Returns

`Promise`<[`TransactionResponse`](internal_.TransactionResponse.md)\>

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[fallback](../classes/internal_.BaseContract.md#fallback)

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

[BaseContract](../classes/internal_.BaseContract.md).[listenerCount](../classes/internal_.BaseContract.md#listenercount)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:128

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): [`TypedListener`](TypedListener.md)<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends [`TypedEvent`](TypedEvent.md)<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | [`TypedEventFilter`](TypedEventFilter.md)<`TEvent`\> |

#### Returns

[`TypedListener`](TypedListener.md)<`TEvent`\>[]

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[listeners](../classes/internal_.BaseContract.md#listeners)

#### Defined in

src/contracts/types/Whitelist.ts:30

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

src/contracts/types/Whitelist.ts:33

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends [`TypedEvent`](TypedEvent.md)<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TypedEventFilter`](TypedEventFilter.md)<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[queryFilter](../classes/internal_.BaseContract.md#queryfilter)

#### Defined in

src/contracts/types/Whitelist.ts:24

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`Whitelist`](Whitelist.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends [`TypedEvent`](TypedEvent.md)<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](TypedEventFilter.md)<`TEvent`\> |

#### Returns

[`Whitelist`](Whitelist.md)

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[removeAllListeners](../classes/internal_.BaseContract.md#removealllisteners)

#### Defined in

src/contracts/types/Whitelist.ts:34

▸ **removeAllListeners**(`eventName?`): [`Whitelist`](Whitelist.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Whitelist`](Whitelist.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/contracts/types/Whitelist.ts:37
