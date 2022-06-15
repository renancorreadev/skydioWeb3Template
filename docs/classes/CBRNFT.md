[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / CBRNFT

# Class: CBRNFT

## Hierarchy

- [`BaseContract`](internal_.BaseContract.md)

  ↳ **`CBRNFT`**

## Table of contents

### Constructors

- [constructor](CBRNFT.md#constructor)

### Properties

- [\_deployedPromise](CBRNFT.md#_deployedpromise)
- [\_runningEvents](CBRNFT.md#_runningevents)
- [\_wrappedEmits](CBRNFT.md#_wrappedemits)
- [address](CBRNFT.md#address)
- [callStatic](CBRNFT.md#callstatic)
- [deployTransaction](CBRNFT.md#deploytransaction)
- [estimateGas](CBRNFT.md#estimategas)
- [filters](CBRNFT.md#filters)
- [functions](CBRNFT.md#functions)
- [interface](CBRNFT.md#interface)
- [populateTransaction](CBRNFT.md#populatetransaction)
- [provider](CBRNFT.md#provider)
- [resolvedAddress](CBRNFT.md#resolvedaddress)
- [signer](CBRNFT.md#signer)

### Methods

- [\_checkRunningEvents](CBRNFT.md#_checkrunningevents)
- [\_deployed](CBRNFT.md#_deployed)
- [\_wrapEvent](CBRNFT.md#_wrapevent)
- [approve](CBRNFT.md#approve)
- [attach](CBRNFT.md#attach)
- [balanceOf](CBRNFT.md#balanceof)
- [connect](CBRNFT.md#connect)
- [cost](CBRNFT.md#cost)
- [deployed](CBRNFT.md#deployed)
- [emit](CBRNFT.md#emit)
- [fallback](CBRNFT.md#fallback)
- [getApproved](CBRNFT.md#getapproved)
- [hiddenMetadataUri](CBRNFT.md#hiddenmetadatauri)
- [isApprovedForAll](CBRNFT.md#isapprovedforall)
- [listenerCount](CBRNFT.md#listenercount)
- [listeners](CBRNFT.md#listeners)
- [maxMintAmountPerTx](CBRNFT.md#maxmintamountpertx)
- [maxSupply](CBRNFT.md#maxsupply)
- [merkleRoot](CBRNFT.md#merkleroot)
- [mint](CBRNFT.md#mint)
- [mintForAddress](CBRNFT.md#mintforaddress)
- [name](CBRNFT.md#name)
- [off](CBRNFT.md#off)
- [on](CBRNFT.md#on)
- [once](CBRNFT.md#once)
- [owner](CBRNFT.md#owner)
- [ownerOf](CBRNFT.md#ownerof)
- [paused](CBRNFT.md#paused)
- [queryFilter](CBRNFT.md#queryfilter)
- [removeAllListeners](CBRNFT.md#removealllisteners)
- [removeListener](CBRNFT.md#removelistener)
- [renounceOwnership](CBRNFT.md#renounceownership)
- [revealed](CBRNFT.md#revealed)
- [safeTransferFrom(address,address,uint256)](CBRNFT.md#safetransferfrom(address,address,uint256))
- [safeTransferFrom(address,address,uint256,bytes)](CBRNFT.md#safetransferfrom(address,address,uint256,bytes))
- [setApprovalForAll](CBRNFT.md#setapprovalforall)
- [setCost](CBRNFT.md#setcost)
- [setHiddenMetadataUri](CBRNFT.md#sethiddenmetadatauri)
- [setMaxMintAmountPerTx](CBRNFT.md#setmaxmintamountpertx)
- [setMerkleRoot](CBRNFT.md#setmerkleroot)
- [setPaused](CBRNFT.md#setpaused)
- [setRevealed](CBRNFT.md#setrevealed)
- [setUriPrefix](CBRNFT.md#seturiprefix)
- [setUriSuffix](CBRNFT.md#seturisuffix)
- [setWhitelistMintEnabled](CBRNFT.md#setwhitelistmintenabled)
- [supportsInterface](CBRNFT.md#supportsinterface)
- [symbol](CBRNFT.md#symbol)
- [tokenURI](CBRNFT.md#tokenuri)
- [totalSupply](CBRNFT.md#totalsupply)
- [transferFrom](CBRNFT.md#transferfrom)
- [transferOwnership](CBRNFT.md#transferownership)
- [uriPrefix](CBRNFT.md#uriprefix)
- [uriSuffix](CBRNFT.md#urisuffix)
- [walletOfOwner](CBRNFT.md#walletofowner)
- [whitelistClaimed](CBRNFT.md#whitelistclaimed)
- [whitelistMint](CBRNFT.md#whitelistmint)
- [whitelistMintEnabled](CBRNFT.md#whitelistmintenabled)
- [withdraw](CBRNFT.md#withdraw)
- [getContractAddress](CBRNFT.md#getcontractaddress)
- [getInterface](CBRNFT.md#getinterface)
- [isIndexed](CBRNFT.md#isindexed)

## Constructors

### constructor

• **new CBRNFT**(`addressOrName`, `contractInterface`, `signerOrProvider?`)

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
| `cost` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `hiddenMetadataUri` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `maxMintAmountPerTx` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `maxSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `merkleRoot` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `mint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `mintForAddress` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_receiver`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `name` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `owner` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `paused` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `renounceOwnership` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `revealed` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setCost` | (`_cost`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setHiddenMetadataUri` | (`_hiddenMetadataUri`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setMaxMintAmountPerTx` | (`_maxMintAmountPerTx`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setMerkleRoot` | (`_merkleRoot`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setPaused` | (`_state`: `boolean`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setRevealed` | (`_state`: `boolean`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setUriPrefix` | (`_uriPrefix`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setUriSuffix` | (`_uriSuffix`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setWhitelistMintEnabled` | (`_state`: `boolean`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `symbol` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `tokenURI` | (`_tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `uriPrefix` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `uriSuffix` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `walletOfOwner` | (`_owner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)[]\> |
| `whitelistClaimed` | (`arg0`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `whitelistMint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_merkleProof`: [`BytesLike`](../modules/internal_.md#byteslike)[], `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `whitelistMintEnabled` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `withdraw` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<`void`\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[callStatic](internal_.BaseContract.md#callstatic)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:728

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
| `cost` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `hiddenMetadataUri` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `maxMintAmountPerTx` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `maxSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `merkleRoot` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `mint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`PayableOverrides`](../interfaces/internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `mintForAddress` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_receiver`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `name` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `owner` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `paused` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `renounceOwnership` | (`overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `revealed` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setCost` | (`_cost`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setHiddenMetadataUri` | (`_hiddenMetadataUri`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setMaxMintAmountPerTx` | (`_maxMintAmountPerTx`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setMerkleRoot` | (`_merkleRoot`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setPaused` | (`_state`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setRevealed` | (`_state`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setUriPrefix` | (`_uriPrefix`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setUriSuffix` | (`_uriSuffix`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `setWhitelistMintEnabled` | (`_state`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `symbol` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `tokenURI` | (`_tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `uriPrefix` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `uriSuffix` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `walletOfOwner` | (`_owner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `whitelistClaimed` | (`arg0`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `whitelistMint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_merkleProof`: [`BytesLike`](../modules/internal_.md#byteslike)[], `overrides?`: [`PayableOverrides`](../interfaces/internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `whitelistMintEnabled` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |
| `withdraw` | (`overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](internal_.BigNumber.md)\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[estimateGas](internal_.BaseContract.md#estimategas)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:949

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
| `OwnershipTransferred` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `OwnershipTransferred(address,address)` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<[`string`, `string`], { `newOwner`: `string` ; `previousOwner`: `string`  }\> |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `tokenId?`: ``null`` \| [`BigNumberish`](../modules/internal_.md#bignumberish)) => [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<[`string`, `string`, [`BigNumber`](internal_.BigNumber.md)], { `from`: `string` ; `to`: `string` ; `tokenId`: [`BigNumber`](internal_.BigNumber.md)  }\> |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `tokenId?`: ``null`` \| [`BigNumberish`](../modules/internal_.md#bignumberish)) => [`TypedEventFilter`](../interfaces/TypedEventFilter.md)<[`string`, `string`, [`BigNumber`](internal_.BigNumber.md)], { `from`: `string` ; `to`: `string` ; `tokenId`: [`BigNumber`](internal_.BigNumber.md)  }\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[filters](internal_.BaseContract.md#filters)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:877

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](internal_.BigNumber.md)]\> |
| `cost` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](internal_.BigNumber.md)]\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `hiddenMetadataUri` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `maxMintAmountPerTx` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](internal_.BigNumber.md)]\> |
| `maxSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](internal_.BigNumber.md)]\> |
| `merkleRoot` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `mint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`PayableOverrides`](../interfaces/internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `mintForAddress` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_receiver`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `name` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `owner` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `paused` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `renounceOwnership` | (`overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `revealed` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setCost` | (`_cost`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setHiddenMetadataUri` | (`_hiddenMetadataUri`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setMaxMintAmountPerTx` | (`_maxMintAmountPerTx`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setMerkleRoot` | (`_merkleRoot`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setPaused` | (`_state`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setRevealed` | (`_state`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setUriPrefix` | (`_uriPrefix`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setUriSuffix` | (`_uriSuffix`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `setWhitelistMintEnabled` | (`_state`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `symbol` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `tokenURI` | (`_tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](internal_.BigNumber.md)]\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `uriPrefix` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `uriSuffix` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `walletOfOwner` | (`_owner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](internal_.BigNumber.md)[]]\> |
| `whitelistClaimed` | (`arg0`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `whitelistMint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_merkleProof`: [`BytesLike`](../modules/internal_.md#byteslike)[], `overrides?`: [`PayableOverrides`](../interfaces/internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |
| `whitelistMintEnabled` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `withdraw` | (`overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[functions](internal_.BaseContract.md#functions)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:385

___

### interface

• **interface**: [`CBRNFTInterface`](../interfaces/CBRNFTInterface.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[interface](internal_.BaseContract.md#interface)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:383

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `cost` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `hiddenMetadataUri` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `maxMintAmountPerTx` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `maxSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `merkleRoot` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `mint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`PayableOverrides`](../interfaces/internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `mintForAddress` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_receiver`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `name` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `owner` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `paused` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `renounceOwnership` | (`overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `revealed` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setCost` | (`_cost`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setHiddenMetadataUri` | (`_hiddenMetadataUri`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setMaxMintAmountPerTx` | (`_maxMintAmountPerTx`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setMerkleRoot` | (`_merkleRoot`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setPaused` | (`_state`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setRevealed` | (`_state`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setUriPrefix` | (`_uriPrefix`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setUriSuffix` | (`_uriSuffix`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `setWhitelistMintEnabled` | (`_state`: `boolean`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `symbol` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `tokenURI` | (`_tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `uriPrefix` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `uriSuffix` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `walletOfOwner` | (`_owner`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `whitelistClaimed` | (`arg0`: `string`, `overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `whitelistMint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_merkleProof`: [`BytesLike`](../modules/internal_.md#byteslike)[], `overrides?`: [`PayableOverrides`](../interfaces/internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `whitelistMintEnabled` | (`overrides?`: [`CallOverrides`](../interfaces/internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |
| `withdraw` | (`overrides?`: [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](../interfaces/internal_.PopulatedTransaction.md)\> |

#### Overrides

[BaseContract](internal_.BaseContract.md).[populateTransaction](internal_.BaseContract.md#populatetransaction)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:1126

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:562

___

### attach

▸ **attach**(`addressOrName`): [`CBRNFT`](CBRNFT.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`CBRNFT`](CBRNFT.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[attach](internal_.BaseContract.md#attach)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:344

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:568

___

### connect

▸ **connect**(`signerOrProvider`): [`CBRNFT`](CBRNFT.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| [`Provider`](internal_.Provider.md) \| [`Signer`](internal_.Signer.md) |

#### Returns

[`CBRNFT`](CBRNFT.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[connect](internal_.BaseContract.md#connect)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:343

___

### cost

▸ **cost**(`overrides?`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:570

___

### deployed

▸ **deployed**(): `Promise`<[`CBRNFT`](CBRNFT.md)\>

#### Returns

`Promise`<[`CBRNFT`](CBRNFT.md)\>

#### Overrides

[BaseContract](internal_.BaseContract.md).[deployed](internal_.BaseContract.md#deployed)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:345

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:572

___

### hiddenMetadataUri

▸ **hiddenMetadataUri**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:577

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:579

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:347

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:370

___

### maxMintAmountPerTx

▸ **maxMintAmountPerTx**(`overrides?`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:585

___

### maxSupply

▸ **maxSupply**(`overrides?`): `Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:587

___

### merkleRoot

▸ **merkleRoot**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:589

___

### mint

▸ **mint**(`_mintAmount`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mintAmount` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`PayableOverrides`](../interfaces/internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:591

___

### mintForAddress

▸ **mintForAddress**(`_mintAmount`, `_receiver`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mintAmount` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `_receiver` | `string` |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:596

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:602

___

### off

▸ **off**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CBRNFT`](CBRNFT.md)

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

[`CBRNFT`](CBRNFT.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[off](internal_.BaseContract.md#off)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:350

▸ **off**(`eventName`, `listener`): [`CBRNFT`](CBRNFT.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`CBRNFT`](CBRNFT.md)

#### Overrides

BaseContract.off

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:371

___

### on

▸ **on**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CBRNFT`](CBRNFT.md)

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

[`CBRNFT`](CBRNFT.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[on](internal_.BaseContract.md#on)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:354

▸ **on**(`eventName`, `listener`): [`CBRNFT`](CBRNFT.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`CBRNFT`](CBRNFT.md)

#### Overrides

BaseContract.on

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:372

___

### once

▸ **once**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CBRNFT`](CBRNFT.md)

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

[`CBRNFT`](CBRNFT.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[once](internal_.BaseContract.md#once)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:358

▸ **once**(`eventName`, `listener`): [`CBRNFT`](CBRNFT.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`CBRNFT`](CBRNFT.md)

#### Overrides

BaseContract.once

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:373

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:604

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:606

___

### paused

▸ **paused**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:608

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:377

___

### removeAllListeners

▸ **removeAllListeners**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`): [`CBRNFT`](CBRNFT.md)

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

[`CBRNFT`](CBRNFT.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[removeAllListeners](internal_.BaseContract.md#removealllisteners)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:366

▸ **removeAllListeners**(`eventName?`): [`CBRNFT`](CBRNFT.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`CBRNFT`](CBRNFT.md)

#### Overrides

BaseContract.removeAllListeners

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:375

___

### removeListener

▸ **removeListener**<`EventArgsArray`, `EventArgsObject`\>(`eventFilter`, `listener`): [`CBRNFT`](CBRNFT.md)

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

[`CBRNFT`](CBRNFT.md)

#### Overrides

[BaseContract](internal_.BaseContract.md).[removeListener](internal_.BaseContract.md#removelistener)

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:362

▸ **removeListener**(`eventName`, `listener`): [`CBRNFT`](CBRNFT.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

[`CBRNFT`](CBRNFT.md)

#### Overrides

BaseContract.removeListener

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:374

___

### renounceOwnership

▸ **renounceOwnership**(`overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:610

___

### revealed

▸ **revealed**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:614

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:616

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:623

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:631

___

### setCost

▸ **setCost**(`_cost`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cost` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:637

___

### setHiddenMetadataUri

▸ **setHiddenMetadataUri**(`_hiddenMetadataUri`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_hiddenMetadataUri` | `string` |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:642

___

### setMaxMintAmountPerTx

▸ **setMaxMintAmountPerTx**(`_maxMintAmountPerTx`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_maxMintAmountPerTx` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:647

___

### setMerkleRoot

▸ **setMerkleRoot**(`_merkleRoot`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_merkleRoot` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:652

___

### setPaused

▸ **setPaused**(`_state`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_state` | `boolean` |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:657

___

### setRevealed

▸ **setRevealed**(`_state`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_state` | `boolean` |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:662

___

### setUriPrefix

▸ **setUriPrefix**(`_uriPrefix`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_uriPrefix` | `string` |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:667

___

### setUriSuffix

▸ **setUriSuffix**(`_uriSuffix`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_uriSuffix` | `string` |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:672

___

### setWhitelistMintEnabled

▸ **setWhitelistMintEnabled**(`_state`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_state` | `boolean` |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:677

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:682

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:687

___

### tokenURI

▸ **tokenURI**(`_tokenId`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:689

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:691

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

src/contracts/nftTypes/typechain/CBRNFT.d.ts:693

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:700

___

### uriPrefix

▸ **uriPrefix**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:705

___

### uriSuffix

▸ **uriSuffix**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:707

___

### walletOfOwner

▸ **walletOfOwner**(`_owner`, `overrides?`): `Promise`<[`BigNumber`](internal_.BigNumber.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](internal_.BigNumber.md)[]\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:709

___

### whitelistClaimed

▸ **whitelistClaimed**(`arg0`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:714

___

### whitelistMint

▸ **whitelistMint**(`_mintAmount`, `_merkleProof`, `overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mintAmount` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `_merkleProof` | [`BytesLike`](../modules/internal_.md#byteslike)[] |
| `overrides?` | [`PayableOverrides`](../interfaces/internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:716

___

### whitelistMintEnabled

▸ **whitelistMintEnabled**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](../interfaces/internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:722

___

### withdraw

▸ **withdraw**(`overrides?`): `Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`Overrides`](../interfaces/internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](../interfaces/internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/nftTypes/typechain/CBRNFT.d.ts:724

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
