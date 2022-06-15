[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Web3Provider

# Class: Web3Provider

[<internal>](../modules/internal_.md).Web3Provider

## Hierarchy

- [`JsonRpcProvider`](internal_.JsonRpcProvider.md)

  ↳ **`Web3Provider`**

## Table of contents

### Constructors

- [constructor](internal_.Web3Provider.md#constructor)

### Properties

- [\_bootstrapPoll](internal_.Web3Provider.md#_bootstrappoll)
- [\_emitted](internal_.Web3Provider.md#_emitted)
- [\_eventLoopCache](internal_.Web3Provider.md#_eventloopcache)
- [\_events](internal_.Web3Provider.md#_events)
- [\_fastBlockNumber](internal_.Web3Provider.md#_fastblocknumber)
- [\_fastBlockNumberPromise](internal_.Web3Provider.md#_fastblocknumberpromise)
- [\_fastQueryDate](internal_.Web3Provider.md#_fastquerydate)
- [\_internalBlockNumber](internal_.Web3Provider.md#_internalblocknumber)
- [\_isProvider](internal_.Web3Provider.md#_isprovider)
- [\_lastBlockNumber](internal_.Web3Provider.md#_lastblocknumber)
- [\_maxFilterBlockRange](internal_.Web3Provider.md#_maxfilterblockrange)
- [\_maxInternalBlockNumber](internal_.Web3Provider.md#_maxinternalblocknumber)
- [\_network](internal_.Web3Provider.md#_network)
- [\_networkPromise](internal_.Web3Provider.md#_networkpromise)
- [\_nextId](internal_.Web3Provider.md#_nextid)
- [\_pendingFilter](internal_.Web3Provider.md#_pendingfilter)
- [\_poller](internal_.Web3Provider.md#_poller)
- [\_pollingInterval](internal_.Web3Provider.md#_pollinginterval)
- [anyNetwork](internal_.Web3Provider.md#anynetwork)
- [connection](internal_.Web3Provider.md#connection)
- [disableCcipRead](internal_.Web3Provider.md#disableccipread)
- [formatter](internal_.Web3Provider.md#formatter)
- [jsonRpcFetchFunc](internal_.Web3Provider.md#jsonrpcfetchfunc)
- [provider](internal_.Web3Provider.md#provider)

### Accessors

- [\_cache](internal_.Web3Provider.md#_cache)
- [blockNumber](internal_.Web3Provider.md#blocknumber)
- [network](internal_.Web3Provider.md#network)
- [polling](internal_.Web3Provider.md#polling)
- [pollingInterval](internal_.Web3Provider.md#pollinginterval)
- [ready](internal_.Web3Provider.md#ready)

### Methods

- [\_addEventListener](internal_.Web3Provider.md#_addeventlistener)
- [\_call](internal_.Web3Provider.md#_call)
- [\_getAddress](internal_.Web3Provider.md#_getaddress)
- [\_getBlock](internal_.Web3Provider.md#_getblock)
- [\_getBlockTag](internal_.Web3Provider.md#_getblocktag)
- [\_getFastBlockNumber](internal_.Web3Provider.md#_getfastblocknumber)
- [\_getFilter](internal_.Web3Provider.md#_getfilter)
- [\_getInternalBlockNumber](internal_.Web3Provider.md#_getinternalblocknumber)
- [\_getResolver](internal_.Web3Provider.md#_getresolver)
- [\_getTransactionRequest](internal_.Web3Provider.md#_gettransactionrequest)
- [\_ready](internal_.Web3Provider.md#_ready)
- [\_setFastBlockNumber](internal_.Web3Provider.md#_setfastblocknumber)
- [\_startEvent](internal_.Web3Provider.md#_startevent)
- [\_startPending](internal_.Web3Provider.md#_startpending)
- [\_stopEvent](internal_.Web3Provider.md#_stopevent)
- [\_uncachedDetectNetwork](internal_.Web3Provider.md#_uncacheddetectnetwork)
- [\_waitForTransaction](internal_.Web3Provider.md#_waitfortransaction)
- [\_wrapTransaction](internal_.Web3Provider.md#_wraptransaction)
- [addListener](internal_.Web3Provider.md#addlistener)
- [call](internal_.Web3Provider.md#call)
- [ccipReadFetch](internal_.Web3Provider.md#ccipreadfetch)
- [detectNetwork](internal_.Web3Provider.md#detectnetwork)
- [emit](internal_.Web3Provider.md#emit)
- [estimateGas](internal_.Web3Provider.md#estimategas)
- [getAvatar](internal_.Web3Provider.md#getavatar)
- [getBalance](internal_.Web3Provider.md#getbalance)
- [getBlock](internal_.Web3Provider.md#getblock)
- [getBlockNumber](internal_.Web3Provider.md#getblocknumber)
- [getBlockWithTransactions](internal_.Web3Provider.md#getblockwithtransactions)
- [getCode](internal_.Web3Provider.md#getcode)
- [getEtherPrice](internal_.Web3Provider.md#getetherprice)
- [getFeeData](internal_.Web3Provider.md#getfeedata)
- [getGasPrice](internal_.Web3Provider.md#getgasprice)
- [getLogs](internal_.Web3Provider.md#getlogs)
- [getNetwork](internal_.Web3Provider.md#getnetwork)
- [getResolver](internal_.Web3Provider.md#getresolver)
- [getSigner](internal_.Web3Provider.md#getsigner)
- [getStorageAt](internal_.Web3Provider.md#getstorageat)
- [getTransaction](internal_.Web3Provider.md#gettransaction)
- [getTransactionCount](internal_.Web3Provider.md#gettransactioncount)
- [getTransactionReceipt](internal_.Web3Provider.md#gettransactionreceipt)
- [getUncheckedSigner](internal_.Web3Provider.md#getuncheckedsigner)
- [listAccounts](internal_.Web3Provider.md#listaccounts)
- [listenerCount](internal_.Web3Provider.md#listenercount)
- [listeners](internal_.Web3Provider.md#listeners)
- [lookupAddress](internal_.Web3Provider.md#lookupaddress)
- [off](internal_.Web3Provider.md#off)
- [on](internal_.Web3Provider.md#on)
- [once](internal_.Web3Provider.md#once)
- [perform](internal_.Web3Provider.md#perform)
- [poll](internal_.Web3Provider.md#poll)
- [prepareRequest](internal_.Web3Provider.md#preparerequest)
- [removeAllListeners](internal_.Web3Provider.md#removealllisteners)
- [removeListener](internal_.Web3Provider.md#removelistener)
- [resetEventsBlock](internal_.Web3Provider.md#reseteventsblock)
- [resolveName](internal_.Web3Provider.md#resolvename)
- [send](internal_.Web3Provider.md#send)
- [sendTransaction](internal_.Web3Provider.md#sendtransaction)
- [waitForTransaction](internal_.Web3Provider.md#waitfortransaction)
- [defaultUrl](internal_.Web3Provider.md#defaulturl)
- [getFormatter](internal_.Web3Provider.md#getformatter)
- [getNetwork](internal_.Web3Provider.md#getnetwork-1)
- [hexlifyTransaction](internal_.Web3Provider.md#hexlifytransaction)
- [isProvider](internal_.Web3Provider.md#isprovider)

## Constructors

### constructor

• **new Web3Provider**(`provider`, `network?`)

 ready

 A Promise<Network> that resolves only once the provider is ready.

 Sub-classes that call the super with a network without a chainId
 MUST set this. Standard named networks have a known chainId.

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`ExternalProvider`](../modules/internal_.md#externalprovider) \| [`JsonRpcFetchFunc`](../modules/internal_.md#jsonrpcfetchfunc) |
| `network?` | [`Networkish`](../modules/internal_.md#networkish) |

#### Overrides

[JsonRpcProvider](internal_.JsonRpcProvider.md).[constructor](internal_.JsonRpcProvider.md#constructor)

#### Defined in

node_modules/@ethersproject/providers/lib/web3-provider.d.ts:25

## Properties

### \_bootstrapPoll

• **\_bootstrapPoll**: [`Timer`](../interfaces/internal_.Timer.md)

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_bootstrapPoll](internal_.JsonRpcProvider.md#_bootstrappoll)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:66

___

### \_emitted

• **\_emitted**: `Object`

#### Index signature

▪ [eventName: `string`]: `number` \| ``"pending"``

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_emitted](internal_.JsonRpcProvider.md#_emitted)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:61

___

### \_eventLoopCache

• **\_eventLoopCache**: [`Record`](../modules/internal_.md#record)<`string`, `Promise`<`any`\>\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_eventLoopCache](internal_.JsonRpcProvider.md#_eventloopcache)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:32

___

### \_events

• **\_events**: [`Event`](internal_.Event.md)[]

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_events](internal_.JsonRpcProvider.md#_events)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:59

___

### \_fastBlockNumber

• **\_fastBlockNumber**: `number`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_fastBlockNumber](internal_.JsonRpcProvider.md#_fastblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:69

___

### \_fastBlockNumberPromise

• **\_fastBlockNumberPromise**: `Promise`<`number`\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_fastBlockNumberPromise](internal_.JsonRpcProvider.md#_fastblocknumberpromise)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:70

___

### \_fastQueryDate

• **\_fastQueryDate**: `number`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_fastQueryDate](internal_.JsonRpcProvider.md#_fastquerydate)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:71

___

### \_internalBlockNumber

• **\_internalBlockNumber**: `Promise`<{ `blockNumber`: `number` ; `reqTime`: `number` ; `respTime`: `number`  }\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_internalBlockNumber](internal_.JsonRpcProvider.md#_internalblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:73

___

### \_isProvider

• `Readonly` **\_isProvider**: `boolean`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_isProvider](internal_.JsonRpcProvider.md#_isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:151

___

### \_lastBlockNumber

• **\_lastBlockNumber**: `number`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_lastBlockNumber](internal_.JsonRpcProvider.md#_lastblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:67

___

### \_maxFilterBlockRange

• **\_maxFilterBlockRange**: `number`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_maxFilterBlockRange](internal_.JsonRpcProvider.md#_maxfilterblockrange)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:68

___

### \_maxInternalBlockNumber

• **\_maxInternalBlockNumber**: `number`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_maxInternalBlockNumber](internal_.JsonRpcProvider.md#_maxinternalblocknumber)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:72

___

### \_network

• **\_network**: [`Network`](../modules/internal_.md#network)

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_network](internal_.JsonRpcProvider.md#_network)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:58

___

### \_networkPromise

• **\_networkPromise**: `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_networkPromise](internal_.JsonRpcProvider.md#_networkpromise)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:57

___

### \_nextId

• **\_nextId**: `number`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_nextId](internal_.JsonRpcProvider.md#_nextid)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:31

___

### \_pendingFilter

• **\_pendingFilter**: `Promise`<`number`\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_pendingFilter](internal_.JsonRpcProvider.md#_pendingfilter)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:30

___

### \_poller

• **\_poller**: [`Timer`](../interfaces/internal_.Timer.md)

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_poller](internal_.JsonRpcProvider.md#_poller)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:65

___

### \_pollingInterval

• **\_pollingInterval**: `number`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_pollingInterval](internal_.JsonRpcProvider.md#_pollinginterval)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:64

___

### anyNetwork

• `Readonly` **anyNetwork**: `boolean`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[anyNetwork](internal_.JsonRpcProvider.md#anynetwork)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:78

___

### connection

• `Readonly` **connection**: [`ConnectionInfo`](../modules/internal_.md#connectioninfo)

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[connection](internal_.JsonRpcProvider.md#connection)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:29

___

### disableCcipRead

• **disableCcipRead**: `boolean`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[disableCcipRead](internal_.JsonRpcProvider.md#disableccipread)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:79

___

### formatter

• **formatter**: [`Formatter`](internal_.Formatter.md)

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[formatter](internal_.JsonRpcProvider.md#formatter)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:60

___

### jsonRpcFetchFunc

• `Readonly` **jsonRpcFetchFunc**: [`JsonRpcFetchFunc`](../modules/internal_.md#jsonrpcfetchfunc)

#### Defined in

node_modules/@ethersproject/providers/lib/web3-provider.d.ts:24

___

### provider

• `Readonly` **provider**: [`ExternalProvider`](../modules/internal_.md#externalprovider)

#### Defined in

node_modules/@ethersproject/providers/lib/web3-provider.d.ts:23

## Accessors

### \_cache

• `get` **_cache**(): [`Record`](../modules/internal_.md#record)<`string`, `Promise`<`any`\>\>

#### Returns

[`Record`](../modules/internal_.md#record)<`string`, `Promise`<`any`\>\>

#### Inherited from

JsonRpcProvider.\_cache

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:33

___

### blockNumber

• `get` **blockNumber**(): `number`

#### Returns

`number`

#### Inherited from

JsonRpcProvider.blockNumber

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:101

___

### network

• `get` **network**(): [`Network`](../modules/internal_.md#network)

#### Returns

[`Network`](../modules/internal_.md#network)

#### Inherited from

JsonRpcProvider.network

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:98

___

### polling

• `get` **polling**(): `boolean`

#### Returns

`boolean`

#### Inherited from

JsonRpcProvider.polling

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

JsonRpcProvider.polling

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:103

___

### pollingInterval

• `get` **pollingInterval**(): `number`

#### Returns

`number`

#### Inherited from

JsonRpcProvider.pollingInterval

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

JsonRpcProvider.pollingInterval

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:105

___

### ready

• `get` **ready**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Inherited from

JsonRpcProvider.ready

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:91

## Methods

### \_addEventListener

▸ **_addEventListener**(`eventName`, `listener`, `once`): [`Web3Provider`](internal_.Web3Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |
| `once` | `boolean` |

#### Returns

[`Web3Provider`](internal_.Web3Provider.md)

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_addEventListener](internal_.JsonRpcProvider.md#_addeventlistener)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_call](internal_.JsonRpcProvider.md#_call)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_getAddress](internal_.JsonRpcProvider.md#_getaddress)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_getBlock](internal_.JsonRpcProvider.md#_getblock)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_getBlockTag](internal_.JsonRpcProvider.md#_getblocktag)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:138

___

### \_getFastBlockNumber

▸ **_getFastBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_getFastBlockNumber](internal_.JsonRpcProvider.md#_getfastblocknumber)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_getFilter](internal_.JsonRpcProvider.md#_getfilter)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_getInternalBlockNumber](internal_.JsonRpcProvider.md#_getinternalblocknumber)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_getResolver](internal_.JsonRpcProvider.md#_getresolver)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_getTransactionRequest](internal_.JsonRpcProvider.md#_gettransactionrequest)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:125

___

### \_ready

▸ **_ready**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_ready](internal_.JsonRpcProvider.md#_ready)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_setFastBlockNumber](internal_.JsonRpcProvider.md#_setfastblocknumber)

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

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_startEvent](internal_.JsonRpcProvider.md#_startevent)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:44

___

### \_startPending

▸ **_startPending**(): `void`

#### Returns

`void`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_startPending](internal_.JsonRpcProvider.md#_startpending)

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

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_stopEvent](internal_.JsonRpcProvider.md#_stopevent)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:46

___

### \_uncachedDetectNetwork

▸ **_uncachedDetectNetwork**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_uncachedDetectNetwork](internal_.JsonRpcProvider.md#_uncacheddetectnetwork)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_waitForTransaction](internal_.JsonRpcProvider.md#_waitfortransaction)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[_wrapTransaction](internal_.JsonRpcProvider.md#_wraptransaction)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[addListener](internal_.JsonRpcProvider.md#addlistener)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[call](internal_.JsonRpcProvider.md#call)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[ccipReadFetch](internal_.JsonRpcProvider.md#ccipreadfetch)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:94

___

### detectNetwork

▸ **detectNetwork**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[detectNetwork](internal_.JsonRpcProvider.md#detectnetwork)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[emit](internal_.JsonRpcProvider.md#emit)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[estimateGas](internal_.JsonRpcProvider.md#estimategas)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getAvatar](internal_.JsonRpcProvider.md#getavatar)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getBalance](internal_.JsonRpcProvider.md#getbalance)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getBlock](internal_.JsonRpcProvider.md#getblock)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:132

___

### getBlockNumber

▸ **getBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getBlockNumber](internal_.JsonRpcProvider.md#getblocknumber)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getBlockWithTransactions](internal_.JsonRpcProvider.md#getblockwithtransactions)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getCode](internal_.JsonRpcProvider.md#getcode)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:121

___

### getEtherPrice

▸ **getEtherPrice**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getEtherPrice](internal_.JsonRpcProvider.md#getetherprice)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:137

___

### getFeeData

▸ **getFeeData**(): `Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Returns

`Promise`<[`FeeData`](../interfaces/internal_.FeeData.md)\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getFeeData](internal_.JsonRpcProvider.md#getfeedata)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:126

___

### getGasPrice

▸ **getGasPrice**(): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getGasPrice](internal_.JsonRpcProvider.md#getgasprice)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getLogs](internal_.JsonRpcProvider.md#getlogs)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:136

___

### getNetwork

▸ **getNetwork**(): `Promise`<[`Network`](../modules/internal_.md#network)\>

#### Returns

`Promise`<[`Network`](../modules/internal_.md#network)\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getNetwork](internal_.JsonRpcProvider.md#getnetwork)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getResolver](internal_.JsonRpcProvider.md#getresolver)

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

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getSigner](internal_.JsonRpcProvider.md#getsigner)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getStorageAt](internal_.JsonRpcProvider.md#getstorageat)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getTransaction](internal_.JsonRpcProvider.md#gettransaction)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getTransactionCount](internal_.JsonRpcProvider.md#gettransactioncount)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getTransactionReceipt](internal_.JsonRpcProvider.md#gettransactionreceipt)

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

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getUncheckedSigner](internal_.JsonRpcProvider.md#getuncheckedsigner)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:39

___

### listAccounts

▸ **listAccounts**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[listAccounts](internal_.JsonRpcProvider.md#listaccounts)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[listenerCount](internal_.JsonRpcProvider.md#listenercount)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[listeners](internal_.JsonRpcProvider.md#listeners)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[lookupAddress](internal_.JsonRpcProvider.md#lookupaddress)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:142

___

### off

▸ **off**(`eventName`, `listener?`): [`Web3Provider`](internal_.Web3Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener?` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Web3Provider`](internal_.Web3Provider.md)

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[off](internal_.JsonRpcProvider.md#off)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:153

___

### on

▸ **on**(`eventName`, `listener`): [`Web3Provider`](internal_.Web3Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Web3Provider`](internal_.Web3Provider.md)

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[on](internal_.JsonRpcProvider.md#on)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:148

___

### once

▸ **once**(`eventName`, `listener`): [`Web3Provider`](internal_.Web3Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | [`EventType`](../modules/internal_.md#eventtype) |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`Web3Provider`](internal_.Web3Provider.md)

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[once](internal_.JsonRpcProvider.md#once)

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

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[perform](internal_.JsonRpcProvider.md#perform)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:43

___

### poll

▸ **poll**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[poll](internal_.JsonRpcProvider.md#poll)

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

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[prepareRequest](internal_.JsonRpcProvider.md#preparerequest)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:42

___

### removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`Web3Provider`](internal_.Web3Provider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | [`EventType`](../modules/internal_.md#eventtype) |

#### Returns

[`Web3Provider`](internal_.Web3Provider.md)

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[removeAllListeners](internal_.JsonRpcProvider.md#removealllisteners)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[removeListener](internal_.JsonRpcProvider.md#removelistener)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[resetEventsBlock](internal_.JsonRpcProvider.md#reseteventsblock)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[resolveName](internal_.JsonRpcProvider.md#resolvename)

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

#### Overrides

[JsonRpcProvider](internal_.JsonRpcProvider.md).[send](internal_.JsonRpcProvider.md#send)

#### Defined in

node_modules/@ethersproject/providers/lib/web3-provider.d.ts:26

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[sendTransaction](internal_.JsonRpcProvider.md#sendtransaction)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[waitForTransaction](internal_.JsonRpcProvider.md#waitfortransaction)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:108

___

### defaultUrl

▸ `Static` **defaultUrl**(): `string`

#### Returns

`string`

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[defaultUrl](internal_.JsonRpcProvider.md#defaulturl)

#### Defined in

node_modules/@ethersproject/providers/lib/json-rpc-provider.d.ts:35

___

### getFormatter

▸ `Static` **getFormatter**(): [`Formatter`](internal_.Formatter.md)

#### Returns

[`Formatter`](internal_.Formatter.md)

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getFormatter](internal_.JsonRpcProvider.md#getformatter)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[getNetwork](internal_.JsonRpcProvider.md#getnetwork-1)

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

#### Inherited from

[JsonRpcProvider](internal_.JsonRpcProvider.md).[hexlifyTransaction](internal_.JsonRpcProvider.md#hexlifytransaction)

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

[JsonRpcProvider](internal_.JsonRpcProvider.md).[isProvider](internal_.JsonRpcProvider.md#isprovider)

#### Defined in

node_modules/@ethersproject/abstract-provider/lib/index.d.ts:153
