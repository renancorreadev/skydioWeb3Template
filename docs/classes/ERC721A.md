[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / ERC721A

# Class: ERC721A

## Hierarchy

- [`BaseContract`](internal_.BaseContract.md)

  ↳ **`ERC721A`**

## Table of contents

### Constructors

- [constructor](ERC721A.md#constructor)

### Properties

- [\_deployedPromise](ERC721A.md#_deployedpromise)
- [\_runningEvents](ERC721A.md#_runningevents)
- [\_wrappedEmits](ERC721A.md#_wrappedemits)
- [address](ERC721A.md#address)
- [callStatic](ERC721A.md#callstatic)
- [deployTransaction](ERC721A.md#deploytransaction)
- [estimateGas](ERC721A.md#estimategas)
- [filters](ERC721A.md#filters)
- [functions](ERC721A.md#functions)
- [interface](ERC721A.md#interface)
- [populateTransaction](ERC721A.md#populatetransaction)
- [provider](ERC721A.md#provider)
- [resolvedAddress](ERC721A.md#resolvedaddress)
- [signer](ERC721A.md#signer)

### Methods

- [\_checkRunningEvents](ERC721A.md#_checkrunningevents)
- [\_deployed](ERC721A.md#_deployed)
- [\_wrapEvent](ERC721A.md#_wrapevent)
- [approve](ERC721A.md#approve)
- [attach](ERC721A.md#attach)
- [balanceOf](ERC721A.md#balanceof)
- [connect](ERC721A.md#connect)
- [deployed](ERC721A.md#deployed)
- [emit](ERC721A.md#emit)
- [fallback](ERC721A.md#fallback)
- [getApproved](ERC721A.md#getapproved)
- [isApprovedForAll](ERC721A.md#isapprovedforall)
- [listenerCount](ERC721A.md#listenercount)
- [listeners](ERC721A.md#listeners)
- [name](ERC721A.md#name)
- [off](ERC721A.md#off)
- [on](ERC721A.md#on)
- [once](ERC721A.md#once)
- [ownerOf](ERC721A.md#ownerof)
- [queryFilter](ERC721A.md#queryfilter)
- [removeAllListeners](ERC721A.md#removealllisteners)
- [removeListener](ERC721A.md#removelistener)
- [safeTransferFrom(address,address,uint256)](ERC721A.md#safetransferfrom(address,address,uint256))
- [safeTransferFrom(address,address,uint256,bytes)](ERC721A.md#safetransferfrom(address,address,uint256,bytes))
- [setApprovalForAll](ERC721A.md#setapprovalforall)
- [supportsInterface](ERC721A.md#supportsinterface)
- [symbol](ERC721A.md#symbol)
- [tokenURI](ERC721A.md#tokenuri)
- [totalSupply](ERC721A.md#totalsupply)
- [transferFrom](ERC721A.md#transferfrom)
- [getContractAddress](ERC721A.md#getcontractaddress)
- [getInterface](ERC721A.md#getinterface)
- [isIndexed](ERC721A.md#isindexed)

## Constructors

### constructor

• **new ERC721A**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `name` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `symbol` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `tokenURI` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[callStatic](internal_.BaseContract.md#callstatic)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:324

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
| `name` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `symbol` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `tokenURI` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[estimateGas](internal_.BaseContract.md#estimategas)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:444

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:388

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](internal_.BigNumber.md)]\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `name` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `symbol` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `tokenURI` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](internal_.BigNumber.md)]\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[functions](internal_.BaseContract.md#functions)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:192

___

### interface

• **interface**: [`ERC721AInterface`](../interfaces/ERC721AInterface.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[interface](internal_.BaseContract.md#interface)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:190

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
| `name` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `symbol` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `tokenURI` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[populateTransaction](internal_.BaseContract.md#populatetransaction)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:514

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:262

___

### attach

▸ **attach**(`addressOrName`): [`ERC721A`](ERC721A.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`ERC721A`](ERC721A.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[attach](internal_.BaseContract.md#attach)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:151

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:268

___

### connect

▸ **connect**(`signerOrProvider`): [`ERC721A`](ERC721A.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| [`Provider`](internal_.Provider.md) \| [`Signer`](internal_.Signer.md) |

#### Returns

[`ERC721A`](ERC721A.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[connect](internal_.BaseContract.md#connect)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:150

___

### deployed

▸ **deployed**(): `Promise`<[`ERC721A`](ERC721A.md)\>

#### Returns

`Promise`<[`ERC721A`](ERC721A.md)\>

#### Overrides

[BaseContract](internal_.BaseContract.md).[deployed](internal_.BaseContract.md#deployed)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:152

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:270

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:275

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:154

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:177

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:281

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC721A`](ERC721A.md)

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

[`ERC721A`](ERC721A.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[off](internal_.BaseContract.md#off)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:157

▸ **off**(`eventName`, `listener`): [`ERC721A`](ERC721A.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`ERC721A`](ERC721A.md)

#### Overrides

BaseContract.off

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:178

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC721A`](ERC721A.md)

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

[`ERC721A`](ERC721A.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[on](internal_.BaseContract.md#on)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:161

▸ **on**(`eventName`, `listener`): [`ERC721A`](ERC721A.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`ERC721A`](ERC721A.md)

#### Overrides

BaseContract.on

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:179

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC721A`](ERC721A.md)

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

[`ERC721A`](ERC721A.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[once](internal_.BaseContract.md#once)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:165

▸ **once**(`eventName`, `listener`): [`ERC721A`](ERC721A.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`ERC721A`](ERC721A.md)

#### Overrides

BaseContract.once

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:180

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:283

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:184

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`ERC721A`](ERC721A.md)

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

[`ERC721A`](ERC721A.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[removeAllListeners](internal_.BaseContract.md#removealllisteners)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:173

▸ **removeAllListeners**(`eventName?`): [`ERC721A`](ERC721A.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`ERC721A`](ERC721A.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:182

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`ERC721A`](ERC721A.md)

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

[`ERC721A`](ERC721A.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[removeListener](internal_.BaseContract.md#removelistener)

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:169

▸ **removeListener**(`eventName`, `listener`): [`ERC721A`](ERC721A.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`ERC721A`](ERC721A.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:181

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:285

___

### safeTransferFrom(address,address,uint256,bytes)

▸ **safeTransferFrom(address,address,uint256,bytes)**(`from`, `to`, `tokenId`, `_data`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `_data` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:292

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `approved`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `approved` | `boolean` |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:300

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:306

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:311

___

### tokenURI

▸ **tokenURI**(`tokenId`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:313

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

src/contracts/nftTypes/typechain/ERC721A.d.ts:315

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

src/contracts/nftTypes/typechain/ERC721A.d.ts:317

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
