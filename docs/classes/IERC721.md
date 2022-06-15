[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / IERC721

# Class: IERC721

## Hierarchy

- [`BaseContract`](internal_.BaseContract.md)

  ↳ **`IERC721`**

## Table of contents

### Constructors

- [constructor](IERC721.md#constructor)

### Properties

- [\_deployedPromise](IERC721.md#_deployedpromise)
- [\_runningEvents](IERC721.md#_runningevents)
- [\_wrappedEmits](IERC721.md#_wrappedemits)
- [address](IERC721.md#address)
- [callStatic](IERC721.md#callstatic)
- [deployTransaction](IERC721.md#deploytransaction)
- [estimateGas](IERC721.md#estimategas)
- [filters](IERC721.md#filters)
- [functions](IERC721.md#functions)
- [interface](IERC721.md#interface)
- [populateTransaction](IERC721.md#populatetransaction)
- [provider](IERC721.md#provider)
- [resolvedAddress](IERC721.md#resolvedaddress)
- [signer](IERC721.md#signer)

### Methods

- [\_checkRunningEvents](IERC721.md#_checkrunningevents)
- [\_deployed](IERC721.md#_deployed)
- [\_wrapEvent](IERC721.md#_wrapevent)
- [approve](IERC721.md#approve)
- [attach](IERC721.md#attach)
- [balanceOf](IERC721.md#balanceof)
- [connect](IERC721.md#connect)
- [deployed](IERC721.md#deployed)
- [emit](IERC721.md#emit)
- [fallback](IERC721.md#fallback)
- [getApproved](IERC721.md#getapproved)
- [isApprovedForAll](IERC721.md#isapprovedforall)
- [listenerCount](IERC721.md#listenercount)
- [listeners](IERC721.md#listeners)
- [off](IERC721.md#off)
- [on](IERC721.md#on)
- [once](IERC721.md#once)
- [ownerOf](IERC721.md#ownerof)
- [queryFilter](IERC721.md#queryfilter)
- [removeAllListeners](IERC721.md#removealllisteners)
- [removeListener](IERC721.md#removelistener)
- [safeTransferFrom(address,address,uint256)](IERC721.md#safetransferfrom(address,address,uint256))
- [safeTransferFrom(address,address,uint256,bytes)](IERC721.md#safetransferfrom(address,address,uint256,bytes))
- [setApprovalForAll](IERC721.md#setapprovalforall)
- [supportsInterface](IERC721.md#supportsinterface)
- [transferFrom](IERC721.md#transferfrom)
- [getContractAddress](IERC721.md#getcontractaddress)
- [getInterface](IERC721.md#getinterface)
- [isIndexed](IERC721.md#isindexed)

## Constructors

### constructor

• **new IERC721**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `approve` | (`to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[callStatic](internal_.BaseContract.md#callstatic)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:287

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
| `approve` | (`to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[estimateGas](internal_.BaseContract.md#estimategas)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:399

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `approved?`: ``null`` \| `string`, `tokenId?`: ``null`` \| [`BigNumberish`](../modules/internal_.md#bignumberish)) => [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<[`string`, `string`, [`BigNumber`](internal_.BigNumber.md)], { `approved`: `string` ; `owner`: `string` ; `tokenId`: [`BigNumber`](internal_.BigNumber.md)  }\> |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `approved?`: ``null`` \| `string`, `tokenId?`: ``null`` \| [`BigNumberish`](../modules/internal_.md#bignumberish)) => [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<[`string`, `string`, [`BigNumber`](internal_.BigNumber.md)], { `approved`: `string` ; `owner`: `string` ; `tokenId`: [`BigNumber`](internal_.BigNumber.md)  }\> |
| `ApprovalForAll` | (`owner?`: ``null`` \| `string`, `operator?`: ``null`` \| `string`, `approved?`: ``null``) => [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<[`string`, `string`, `boolean`], { `approved`: `boolean` ; `operator`: `string` ; `owner`: `string`  }\> |
| `ApprovalForAll(address,address,bool)` | (`owner?`: ``null`` \| `string`, `operator?`: ``null`` \| `string`, `approved?`: ``null``) => [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<[`string`, `string`, `boolean`], { `approved`: `boolean` ; `operator`: `string` ; `owner`: `string`  }\> |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `tokenId?`: ``null`` \| [`BigNumberish`](../modules/internal_.md#bignumberish)) => [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<[`string`, `string`, [`BigNumber`](internal_.BigNumber.md)], { `from`: `string` ; `to`: `string` ; `tokenId`: [`BigNumber`](internal_.BigNumber.md)  }\> |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `tokenId?`: ``null`` \| [`BigNumberish`](../modules/internal_.md#bignumberish)) => [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<[`string`, `string`, [`BigNumber`](internal_.BigNumber.md)], { `from`: `string` ; `to`: `string` ; `tokenId`: [`BigNumber`](internal_.BigNumber.md)  }\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[filters](internal_.BaseContract.md#filters)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:343

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](internal_.BigNumber.md)] & { `balance`: [`BigNumber`](internal_.BigNumber.md)  }\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`] & { `operator`: `string`  }\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`] & { `owner`: `string`  }\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[functions](internal_.BaseContract.md#functions)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:171

___

### interface

• **interface**: [`IERC721Interface`](../interfaces/IERC721Interface.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[interface](internal_.BaseContract.md#interface)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:169

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[populateTransaction](internal_.BaseContract.md#populatetransaction)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:458

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

### approve

▸ **approve**(`to`, `tokenId`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:233

___

### attach

▸ **attach**(`addressOrName`): [`IERC721`](IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC721`](IERC721.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[attach](internal_.BaseContract.md#attach)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:130

___

### balanceOf

▸ **balanceOf**(`owner`, `overrides?`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:239

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC721`](IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| [`Provider`](internal_.Provider.md) \| [`Signer`](internal_.Signer.md) |

#### Returns

[`IERC721`](IERC721.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[connect](internal_.BaseContract.md#connect)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:129

___

### deployed

▸ **deployed**(): `Promise`<[`IERC721`](IERC721.md)\>

#### Returns

`Promise`<[`IERC721`](IERC721.md)\>

#### Overrides

[BaseContract](internal_.BaseContract.md).[deployed](internal_.BaseContract.md#deployed)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:131

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

### getApproved

▸ **getApproved**(`tokenId`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:241

___

### isApprovedForAll

▸ **isApprovedForAll**(`owner`, `operator`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `operator` | `string` |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:246

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

src/contracts/nftTypes/typechain/IERC721.d.ts:133

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

src/contracts/nftTypes/typechain/IERC721.d.ts:156

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721`](IERC721.md)

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

[`IERC721`](IERC721.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[off](internal_.BaseContract.md#off)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:136

▸ **off**(`eventName`, `listener`): [`IERC721`](IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`IERC721`](IERC721.md)

#### Overrides

BaseContract.off

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:157

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721`](IERC721.md)

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

[`IERC721`](IERC721.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[on](internal_.BaseContract.md#on)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:140

▸ **on**(`eventName`, `listener`): [`IERC721`](IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`IERC721`](IERC721.md)

#### Overrides

BaseContract.on

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:158

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721`](IERC721.md)

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

[`IERC721`](IERC721.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[once](internal_.BaseContract.md#once)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:144

▸ **once**(`eventName`, `listener`): [`IERC721`](IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`IERC721`](IERC721.md)

#### Overrides

BaseContract.once

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:159

___

### ownerOf

▸ **ownerOf**(`tokenId`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:252

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

src/contracts/nftTypes/typechain/IERC721.d.ts:163

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`IERC721`](IERC721.md)

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

[`IERC721`](IERC721.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[removeAllListeners](internal_.BaseContract.md#removealllisteners)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:152

▸ **removeAllListeners**(`eventName?`): [`IERC721`](IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC721`](IERC721.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:161

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`IERC721`](IERC721.md)

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

[`IERC721`](IERC721.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[removeListener](internal_.BaseContract.md#removelistener)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:148

▸ **removeListener**(`eventName`, `listener`): [`IERC721`](IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`IERC721`](IERC721.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:160

___

### safeTransferFrom(address,address,uint256)

▸ **safeTransferFrom(address,address,uint256)**(`from`, `to`, `tokenId`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:254

___

### safeTransferFrom(address,address,uint256,bytes)

▸ **safeTransferFrom(address,address,uint256,bytes)**(`from`, `to`, `tokenId`, `data`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:261

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `_approved`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `_approved` | `boolean` |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:269

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

src/contracts/nftTypes/typechain/IERC721.d.ts:275

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `tokenId`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:280

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
