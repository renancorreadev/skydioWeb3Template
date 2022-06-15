[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / JsonRpcProvider

# Class: JsonRpcProvider

[<internal>](../modules/internal_.md).JsonRpcProvider

## Hierarchy

- [`BaseProvider`](internal_.BaseProvider.md)

  ↳ **`JsonRpcProvider`**

  ↳↳ [`Web3Provider`](internal_.Web3Provider.md)

## Table of contents

### Constructors

- [constructor](internal_.JsonRpcProvider.md#constructor)

### Properties

- [\_bootstrapPoll](internal_.JsonRpcProvider.md#_bootstrappoll)
- [\_emitted](internal_.JsonRpcProvider.md#_emitted)
- [\_eventLoopCache](internal_.JsonRpcProvider.md#_eventloopcache)
- [\_events](internal_.JsonRpcProvider.md#_events)
- [\_fastBlockNumber](internal_.JsonRpcProvider.md#_fastblocknumber)
- [\_fastBlockNumberPromise](internal_.JsonRpcProvider.md#_fastblocknumberpromise)
- [\_fastQueryDate](internal_.JsonRpcProvider.md#_fastquerydate)
- [\_internalBlockNumber](internal_.JsonRpcProvider.md#_internalblocknumber)
- [\_isProvider](internal_.JsonRpcProvider.md#_isprovider)
- [\_lastBlockNumber](internal_.JsonRpcProvider.md#_lastblocknumber)
- [\_maxFilterBlockRange](internal_.JsonRpcProvider.md#_maxfilterblockrange)
- [\_maxInternalBlockNumber](internal_.JsonRpcProvider.md#_maxinternalblocknumber)
- [\_network](internal_.JsonRpcProvider.md#_network)
- [\_networkPromise](internal_.JsonRpcProvider.md#_networkpromise)
- [\_nextId](internal_.JsonRpcProvider.md#_nextid)
- [\_pendingFilter](internal_.JsonRpcProvider.md#_pendingfilter)
- [\_poller](internal_.JsonRpcProvider.md#_poller)
- [\_pollingInterval](internal_.JsonRpcProvider.md#_pollinginterval)
- [anyNetwork](internal_.JsonRpcProvider.md#anynetwork)
- [connection](internal_.JsonRpcProvider.md#connection)
- [disableCcipRead](internal_.JsonRpcProvider.md#disableccipread)
- [formatter](internal_.JsonRpcProvider.md#formatter)

### Accessors

- [\_cache](internal_.JsonRpcProvider.md#_cache)
- [blockNumber](internal_.JsonRpcProvider.md#blocknumber)
- [network](internal_.JsonRpcProvider.md#network)
- [polling](internal_.JsonRpcProvider.md#polling)
- [pollingInterval](internal_.JsonRpcProvider.md#pollinginterval)
- [ready](internal_.JsonRpcProvider.md#ready)

### Methods

- [\_addEventListener](internal_.JsonRpcProvider.md#_addeventlistener)
- [\_call](internal_.JsonRpcProvider.md#_call)
- [\_getAddress](internal_.JsonRpcProvider.md#_getaddress)
- [\_getBlock](internal_.JsonRpcProvider.md#_getblock)
- [\_getBlockTag](internal_.JsonRpcProvider.md#_getblocktag)
- [\_getFastBlockNumber](internal_.JsonRpcProvider.md#_getfastblocknumber)
- [\_getFilter](internal_.JsonRpcProvider.md#_getfilter)
- [\_getInternalBlockNumber](internal_.JsonRpcProvider.md#_getinternalblocknumber)
- [\_getResolver](internal_.JsonRpcProvider.md#_getresolver)
- [\_getTransactionRequest](internal_.JsonRpcProvider.md#_gettransactionrequest)
- [\_ready](internal_.JsonRpcProvider.md#_ready)
- [\_setFastBlockNumber](internal_.JsonRpcProvider.md#_setfastblocknumber)
- [\_startEvent](internal_.JsonRpcProvider.md#_startevent)
- [\_startPending](internal_.JsonRpcProvider.md#_startpending)
- [\_stopEvent](internal_.JsonRpcProvider.md#_stopevent)
- [\_uncachedDetectNetwork](internal_.JsonRpcProvider.md#_uncacheddetectnetwork)
- [\_waitForTransaction](internal_.JsonRpcProvider.md#_waitfortransaction)
- [\_wrapTransaction](internal_.JsonRpcProvider.md#_wraptransaction)
- [addListener](internal_.JsonRpcProvider.md#addlistener)
- [call](internal_.JsonRpcProvider.md#call)
- [ccipReadFetch](internal_.JsonRpcProvider.md#ccipreadfetch)
- [detectNetwork](internal_.JsonRpcProvider.md#detectnetwork)
- [emit](internal_.JsonRpcProvider.md#emit)
- [estimateGas](internal_.JsonRpcProvider.md#estimategas)
- [getAvatar](internal_.JsonRpcProvider.md#getavatar)
- [getBalance](internal_.JsonRpcProvider.md#getbalance)
- [getBlock](internal_.JsonRpcProvider.md#getblock)
- [getBlockNumber](internal_.JsonRpcProvider.md#getblocknumber)
- [getBlockWithTransactions](internal_.JsonRpcProvider.md#getblockwithtransactions)
- [getCode](internal_.JsonRpcProvider.md#getcode)
- [getEtherPrice](internal_.JsonRpcProvider.md#getetherprice)
- [getFeeData](internal_.JsonRpcProvider.md#getfeedata)
- [getGasPrice](internal_.JsonRpcProvider.md#getgasprice)
- [getLogs](internal_.JsonRpcProvider.md#getlogs)
- [getNetwork](internal_.JsonRpcProvider.md#getnetwork)
- [getResolver](internal_.JsonRpcProvider.md#getresolver)
- [getSigner](internal_.JsonRpcProvider.md#getsigner)
- [getStorageAt](internal_.JsonRpcProvider.md#getstorageat)
- [getTransaction](internal_.JsonRpcProvider.md#gettransaction)
- [getTransactionCount](internal_.JsonRpcProvider.md#gettransactioncount)
- [getTransactionReceipt](internal_.JsonRpcProvider.md#gettransactionreceipt)
- [getUncheckedSigner](internal_.JsonRpcProvider.md#getuncheckedsigner)
- [listAccounts](internal_.JsonRpcProvider.md#listaccounts)
- [listenerCount](internal_.JsonRpcProvider.md#listenercount)
- [listeners](internal_.JsonRpcProvider.md#listeners)
- [lookupAddress](internal_.JsonRpcProvider.md#lookupaddress)
- [off](internal_.JsonRpcProvider.md#off)
- [on](internal_.JsonRpcProvider.md#on)
- [once](internal_.JsonRpcProvider.md#once)
- [perform](internal_.JsonRpcProvider.md#perform)
- [poll](internal_.JsonRpcProvider.md#poll)
- [prepareRequest](internal_.JsonRpcProvider.md#preparerequest)
- [removeAllListeners](internal_.JsonRpcProvider.md#removealllisteners)
- [removeListener](internal_.JsonRpcProvider.md#removelistener)
- [resetEventsBlock](internal_.JsonRpcProvider.md#reseteventsblock)
- [resolveName](internal_.JsonRpcProvider.md#resolvename)
- [send](internal_.JsonRpcProvider.md#send)
- [sendTransaction](internal_.JsonRpcProvider.md#sendtransaction)
- [waitForTransaction](internal_.JsonRpcProvider.md#waitfortransaction)
- [defaultUrl](internal_.JsonRpcProvider.md#defaulturl)
- [getFormatter](internal_.JsonRpcProvider.md#getformatter)
- [getNetwork](internal_.JsonRpcProvider.md#getnetwork-1)
- [hexlifyTransaction](internal_.JsonRpcProvider.md#hexlifytransaction)
- [isProvider](internal_.JsonRpcProvider.md#isprovider)

## Constructors

### constructor

• **new JsonRpcProvider**(`url?`, `network?`)

 ready

 A Promise<Network> that resolves only once the provider is ready.

 Sub-classes that call the super with a network without a chainId
 MUST set this. Standard named networks have a known chainId.

#### Parameters

| Name | Type |
| :------ | :------ |
| `url?` | `string` \| [`ConnectionInfo`](../modules/internal_.md#connectioninfo) |
| `network?` | [`Networkish`](../modules/internal_.md#networkish) |

#### Overrides

[BaseProvider](internal_.BaseProvider.md).[constructor](internal_.BaseProvider.md#constructor)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:34

## Properties

### \_bootstrapPoll

• **\_bootstrapPoll**: [`Timer`](../interfaces/internal_.Timer.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_bootstrapPoll](internal_.BaseProvider.md#_bootstrappoll)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:66

___

### \_emitted

• **\_emitted**: `Object`

#### Index signature

▪ [eventName: `string`]: `number` \| ``"pending"``

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_emitted](internal_.BaseProvider.md#_emitted)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:61

___

### \_eventLoopCache

• **\_eventLoopCache**: [`Record`](../modules/internal_.md#record)<`string`, `Promise`<`any`\>\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:32

___

### \_events

• **\_events**: [`Event`](internal_.Event.md)[]

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_events](internal_.BaseProvider.md#_events)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:59

___

### \_fastBlockNumber

• **\_fastBlockNumber**: `number`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_fastBlockNumber](internal_.BaseProvider.md#_fastblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:69

___

### \_fastBlockNumberPromise

• **\_fastBlockNumberPromise**: `Promise`<`number`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_fastBlockNumberPromise](internal_.BaseProvider.md#_fastblocknumberpromise)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:70

___

### \_fastQueryDate

• **\_fastQueryDate**: `number`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_fastQueryDate](internal_.BaseProvider.md#_fastquerydate)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:71

___

### \_internalBlockNumber

• **\_internalBlockNumber**: `Promise`<{ `blockNumber`: `number` ; `reqTime`: `number` ; `respTime`: `number`  }\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_internalBlockNumber](internal_.BaseProvider.md#_internalblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:73

___

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_isProvider](internal_.BaseProvider.md#_isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:151

___

### \_lastBlockNumber

• **\_lastBlockNumber**: `number`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_lastBlockNumber](internal_.BaseProvider.md#_lastblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:67

___

### \_maxFilterBlockRange

• **\_maxFilterBlockRange**: `number`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_maxFilterBlockRange](internal_.BaseProvider.md#_maxfilterblockrange)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:68

___

### \_maxInternalBlockNumber

• **\_maxInternalBlockNumber**: `number`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_maxInternalBlockNumber](internal_.BaseProvider.md#_maxinternalblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:72

___

### \_network

• **\_network**: [`Network`](../modules/internal_.md#network)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_network](internal_.BaseProvider.md#_network)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:58

___

### \_networkPromise

• **\_networkPromise**: `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_networkPromise](internal_.BaseProvider.md#_networkpromise)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:57

___

### \_nextId

• **\_nextId**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:31

___

### \_pendingFilter

• **\_pendingFilter**: `Promise`<`number`\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:30

___

### \_poller

• **\_poller**: [`Timer`](../interfaces/internal_.Timer.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_poller](internal_.BaseProvider.md#_poller)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:65

___

### \_pollingInterval

• **\_pollingInterval**: `number`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_pollingInterval](internal_.BaseProvider.md#_pollinginterval)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:64

___

### anyNetwork

• `Readonly` **anyNetwork**: `boolean`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[anyNetwork](internal_.BaseProvider.md#anynetwork)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:78

___

### connection

• `Readonly` **connection**: [`ConnectionInfo`](../modules/internal_.md#connectioninfo)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:29

___

### disableCcipRead

• **disableCcipRead**: `boolean`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[disableCcipRead](internal_.BaseProvider.md#disableccipread)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:79

___

### formatter

• **formatter**: [`Formatter`](internal_.Formatter.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[formatter](internal_.BaseProvider.md#formatter)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:60

## Accessors

### \_cache

• `get` **_cache**(): [`Record`](../modules/internal_.md#record)<`string`, `Promise`<`any`\>\>

#### Returns

[`Record`](../modules/internal_.md#record)<`string`, `Promise`<`any`\>\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:33

___

### blockNumber

• `get` **blockNumber**(): `number`

#### Returns

`number`

#### Inherited from

BaseProvider.blockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:101

___

### network

• `get` **network**(): [`Network`](../modules/internal_.md#network)

#### Returns

[`Network`](../modules/internal_.md#network)

#### Inherited from

BaseProvider.network

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:98

___

### polling

• `get` **polling**(): `boolean`

#### Returns

`boolean`

#### Inherited from

BaseProvider.polling

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:102

• `set` **polling**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

BaseProvider.polling

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:103

___

### pollingInterval

• `get` **pollingInterval**(): `number`

#### Returns

`number`

#### Inherited from

BaseProvider.pollingInterval

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:104

• `set` **pollingInterval**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

BaseProvider.pollingInterval

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:105

___

### ready

• `get` **ready**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Inherited from

BaseProvider.ready

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:91

## Methods

### \_addEventListener

▸ **_addEventListener**(`eventName`, `listener`, `once`): [`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |
| `once` | `boolean` |

#### Returns

[`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_addEventListener](internal_.BaseProvider.md#_addeventlistener)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:147

___

### \_call

▸ **_call**(`transaction`, `blockTag`, `attempt`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`TransactionRequest`](../modules/internal_.md#transactionrequest) |
| `blockTag` | [`BlockTag`](../modules/internal_.md#blocktag) |
| `attempt` | `number` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_call](internal_.BaseProvider.md#_call)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:127

___

### \_getAddress

▸ **_getAddress**(`addressOrName`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_getAddress](internal_.BaseProvider.md#_getaddress)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:130

___

### \_getBlock

▸ **_getBlock**(`blockHashOrBlockTag`, `includeTransactions?`): `Promise`<[`Block`](../interfaces/internal_.Block.md) \| [`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |
| `includeTransactions?` | `boolean` |

#### Returns

`Promise`<[`Block`](../interfaces/internal_.Block.md) \| [`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_getBlock](internal_.BaseProvider.md#_getblock)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:131

___

### \_getBlockTag

▸ **_getBlockTag**(`blockTag`): `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_getBlockTag](internal_.BaseProvider.md#_getblocktag)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:138

___

### \_getFastBlockNumber

▸ **_getFastBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_getFastBlockNumber](internal_.BaseProvider.md#_getfastblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:106

___

### \_getFilter

▸ **_getFilter**(`filter`): `Promise`<[`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md) \| `Promise`<[`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md)\> |

#### Returns

`Promise`<[`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_getFilter](internal_.BaseProvider.md#_getfilter)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:126

___

### \_getInternalBlockNumber

▸ **_getInternalBlockNumber**(`maxAge`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxAge` | `number` |

#### Returns

`Promise`<`number`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_getInternalBlockNumber](internal_.BaseProvider.md#_getinternalblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:95

___

### \_getResolver

▸ **_getResolver**(`name`, `operation?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `operation?` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_getResolver](internal_.BaseProvider.md#_getresolver)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:140

___

### \_getTransactionRequest

▸ **_getTransactionRequest**(`transaction`): `Promise`<[`Transaction`](../interfaces/internal_.Transaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |

#### Returns

`Promise`<[`Transaction`](../interfaces/internal_.Transaction.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_getTransactionRequest](internal_.BaseProvider.md#_gettransactionrequest)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:125

___

### \_ready

▸ **_ready**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_ready](internal_.BaseProvider.md#_ready)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:90

___

### \_setFastBlockNumber

▸ **_setFastBlockNumber**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |

#### Returns

`void`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_setFastBlockNumber](internal_.BaseProvider.md#_setfastblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:107

___

### \_startEvent

▸ **_startEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](internal_.Event.md) |

#### Returns

`void`

#### Overrides

[BaseProvider](internal_.BaseProvider.md).[_startEvent](internal_.BaseProvider.md#_startevent)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:44

___

### \_startPending

▸ **_startPending**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:45

___

### \_stopEvent

▸ **_stopEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](internal_.Event.md) |

#### Returns

`void`

#### Overrides

[BaseProvider](internal_.BaseProvider.md).[_stopEvent](internal_.BaseProvider.md#_stopevent)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:46

___

### \_uncachedDetectNetwork

▸ **_uncachedDetectNetwork**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:37

___

### \_waitForTransaction

▸ **_waitForTransaction**(`transactionHash`, `confirmations`, `timeout`, `replaceable`): `Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations` | `number` |
| `timeout` | `number` |
| `replaceable` | `Object` |
| `replaceable.data` | `string` |
| `replaceable.from` | `string` |
| `replaceable.nonce` | `number` |
| `replaceable.startBlock` | `number` |
| `replaceable.to` | `string` |
| `replaceable.value` | [`BigNumber`](internal_.BigNumber.md) |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_waitForTransaction](internal_.BaseProvider.md#_waitfortransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:109

___

### \_wrapTransaction

▸ **_wrapTransaction**(`tx`, `hash?`, `startBlock?`): [`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](../interfaces/internal_.Transaction.md) |
| `hash?` | `string` |
| `startBlock?` | `number` |

#### Returns

[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_wrapTransaction](internal_.BaseProvider.md#_wraptransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:123

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[addListener](internal_.BaseProvider.md#addlistener)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:148

___

### call

▸ **call**(`transaction`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`Deferrable`](../modules/internal_.md#deferrable)<[`TransactionRequest`](../modules/internal_.md#transactionrequest)\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[call](internal_.BaseProvider.md#call)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:128

___

### ccipReadFetch

▸ **ccipReadFetch**(`tx`, `calldata`, `urls`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](../interfaces/internal_.Transaction.md) |
| `calldata` | `string` |
| `urls` | `string`[] |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[ccipReadFetch](internal_.BaseProvider.md#ccipreadfetch)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:94

___

### detectNetwork

▸ **detectNetwork**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Overrides

[BaseProvider](internal_.BaseProvider.md).[detectNetwork](internal_.BaseProvider.md#detectnetwork)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:36

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[emit](internal_.BaseProvider.md#emit)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:150

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

[BaseProvider](internal_.BaseProvider.md).[estimateGas](internal_.BaseProvider.md#estimategas)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:129

___

### getAvatar

▸ **getAvatar**(`nameOrAddress`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrAddress` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getAvatar](internal_.BaseProvider.md#getavatar)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:143

___

### getBalance

▸ **getBalance**(`addressOrName`, `blockTag?`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getBalance](internal_.BaseProvider.md#getbalance)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:119

___

### getBlock

▸ **getBlock**(`blockHashOrBlockTag`): `Promise`<[`Block`](../interfaces/internal_.Block.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`Block`](../interfaces/internal_.Block.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getBlock](internal_.BaseProvider.md#getblock)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:132

___

### getBlockNumber

▸ **getBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getBlockNumber](internal_.BaseProvider.md#getblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:117

___

### getBlockWithTransactions

▸ **getBlockWithTransactions**(`blockHashOrBlockTag`): `Promise`<[`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHashOrBlockTag` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<[`BlockWithTransactions`](../interfaces/internal_.BlockWithTransactions.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getBlockWithTransactions](internal_.BaseProvider.md#getblockwithtransactions)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:133

___

### getCode

▸ **getCode**(`addressOrName`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getCode](internal_.BaseProvider.md#getcode)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:121

___

### getEtherPrice

▸ **getEtherPrice**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getEtherPrice](internal_.BaseProvider.md#getetherprice)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:137

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Returns

`Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getFeeData](internal_.BaseProvider.md#getfeedata)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:126

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getGasPrice](internal_.BaseProvider.md#getgasprice)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:118

___

### getLogs

▸ **getLogs**(`filter`): `Promise`<[`Log`](../interfaces/internal_.Log.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md) \| `Promise`<[`Filter`](../interfaces/internal_.Filter.md) \| [`FilterByBlockHash`](../interfaces/internal_.FilterByBlockHash.md)\> |

#### Returns

`Promise`<[`Log`](../interfaces/internal_.Log.md)[]\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getLogs](internal_.BaseProvider.md#getlogs)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:136

___

### getNetwork

▸ **getNetwork**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getNetwork](internal_.BaseProvider.md#getnetwork)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:100

___

### getResolver

▸ **getResolver**(`name`): `Promise`<``null`` \| [`Resolver`](internal_.Resolver.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<``null`` \| [`Resolver`](internal_.Resolver.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getResolver](internal_.BaseProvider.md#getresolver)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:139

___

### getSigner

▸ **getSigner**(`addressOrIndex?`): [`JsonRpcSigner`](internal_.JsonRpcSigner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrIndex?` | `string` \| `number` |

#### Returns

[`JsonRpcSigner`](internal_.JsonRpcSigner.md)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:38

___

### getStorageAt

▸ **getStorageAt**(`addressOrName`, `position`, `blockTag?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `position` | [`BigNumberish`](../modules/internal_.md#bignumberish) \| `Promise`<[`BigNumberish`](../modules/internal_.md#bignumberish)\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`string`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getStorageAt](internal_.BaseProvider.md#getstorageat)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:122

___

### getTransaction

▸ **getTransaction**(`transactionHash`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getTransaction](internal_.BaseProvider.md#gettransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:134

___

### getTransactionCount

▸ **getTransactionCount**(`addressOrName`, `blockTag?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` \| `Promise`<`string`\> |
| `blockTag?` | [`BlockTag`](../modules/internal_.md#blocktag) \| `Promise`<[`BlockTag`](../modules/internal_.md#blocktag)\> |

#### Returns

`Promise`<`number`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getTransactionCount](internal_.BaseProvider.md#gettransactioncount)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:120

___

### getTransactionReceipt

▸ **getTransactionReceipt**(`transactionHash`): `Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getTransactionReceipt](internal_.BaseProvider.md#gettransactionreceipt)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:135

___

### getUncheckedSigner

▸ **getUncheckedSigner**(`addressOrIndex?`): [`UncheckedJsonRpcSigner`](internal_.UncheckedJsonRpcSigner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrIndex?` | `string` \| `number` |

#### Returns

[`UncheckedJsonRpcSigner`](internal_.UncheckedJsonRpcSigner.md)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:39

___

### listAccounts

▸ **listAccounts**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:40

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

`number`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[listenerCount](internal_.BaseProvider.md#listenercount)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:151

___

### listeners

▸ **listeners**(`eventName?`): [`Listener`](../modules/internal_.md#listener)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

[`Listener`](../modules/internal_.md#listener)[]

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[listeners](internal_.BaseProvider.md#listeners)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:152

___

### lookupAddress

▸ **lookupAddress**(`address`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[lookupAddress](internal_.BaseProvider.md#lookupaddress)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:142

___

### off

▸ **off**(`eventName`, `listener?`): [`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener?` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[off](internal_.BaseProvider.md#off)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:153

___

### on

▸ **on**(`eventName`, `listener`): [`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[on](internal_.BaseProvider.md#on)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:148

___

### once

▸ **once**(`eventName`, `listener`): [`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[once](internal_.BaseProvider.md#once)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:149

___

### perform

▸ **perform**(`method`, `params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any` |

#### Returns

`Promise`<`any`\>

#### Overrides

[BaseProvider](internal_.BaseProvider.md).[perform](internal_.BaseProvider.md#perform)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:43

___

### poll

▸ **poll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[poll](internal_.BaseProvider.md#poll)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:96

___

### prepareRequest

▸ **prepareRequest**(`method`, `params`): [`string`, `any`[]]

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any` |

#### Returns

[`string`, `any`[]]

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:42

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

[`JsonRpcProvider`](internal_.JsonRpcProvider.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[removeAllListeners](internal_.BaseProvider.md#removealllisteners)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:154

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Provider`](internal_.Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Provider`](internal_.Provider.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[removeListener](internal_.BaseProvider.md#removelistener)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:149

___

### resetEventsBlock

▸ **resetEventsBlock**(`blockNumber`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |

#### Returns

`void`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[resetEventsBlock](internal_.BaseProvider.md#reseteventsblock)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:97

___

### resolveName

▸ **resolveName**(`name`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<``null`` \| `string`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[resolveName](internal_.BaseProvider.md#resolvename)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:141

___

### send

▸ **send**(`method`, `params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:41

___

### sendTransaction

▸ **sendTransaction**(`signedTransaction`): `Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signedTransaction` | `string` \| `Promise`<`string`\> |

#### Returns

`Promise`<[`TransactionResponse`](../interfaces/internal_.TransactionResponse.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[sendTransaction](internal_.BaseProvider.md#sendtransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:124

___

### waitForTransaction

▸ **waitForTransaction**(`transactionHash`, `confirmations?`, `timeout?`): `Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactionHash` | `string` |
| `confirmations?` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`<[`TransactionReceipt`](../interfaces/internal_.TransactionReceipt.md)\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[waitForTransaction](internal_.BaseProvider.md#waitfortransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:108

___

### defaultUrl

▸ `Static` **defaultUrl**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:35

___

### getFormatter

▸ `Static` **getFormatter**(): [`Formatter`](internal_.Formatter.md)

#### Returns

[`Formatter`](internal_.Formatter.md)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getFormatter](internal_.BaseProvider.md#getformatter)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:92

___

### getNetwork

▸ `Static` **getNetwork**(`network`): [`Network`](../modules/internal_.md#network)

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | [`Networkish`](../modules/internal_.md#networkish) |

#### Returns

[`Network`](../modules/internal_.md#network)

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[getNetwork](internal_.BaseProvider.md#getnetwork-1)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:93

___

### hexlifyTransaction

▸ `Static` **hexlifyTransaction**(`transaction`, `allowExtra?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | [`TransactionRequest`](../modules/internal_.md#transactionrequest) |
| `allowExtra?` | `Object` |

#### Returns

`Object`

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:47

___

### isProvider

▸ `Static` **isProvider**(`value`): value is Provider

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Provider

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[isProvider](internal_.BaseProvider.md#isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:153
