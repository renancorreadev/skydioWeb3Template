[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / CBRNFT

# Interface: CBRNFT

## Hierarchy

- [`BaseContract`](../classes/internal_.BaseContract.md)

  ↳ **`CBRNFT`**

## Table of contents

### Properties

- [\_deployedPromise](CBRNFT.md#_deployedpromise)
- [\_runningEvents](CBRNFT.md#_runningevents)
- [\_wrappedEmits](CBRNFT.md#_wrappedemits)
- [address](CBRNFT.md#address)
- [callStatic](CBRNFT.md#callstatic)
- [contractName](CBRNFT.md#contractname)
- [deployTransaction](CBRNFT.md#deploytransaction)
- [estimateGas](CBRNFT.md#estimategas)
- [filters](CBRNFT.md#filters)
- [functions](CBRNFT.md#functions)
- [interface](CBRNFT.md#interface)
- [off](CBRNFT.md#off)
- [on](CBRNFT.md#on)
- [once](CBRNFT.md#once)
- [populateTransaction](CBRNFT.md#populatetransaction)
- [provider](CBRNFT.md#provider)
- [removeListener](CBRNFT.md#removelistener)
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
- [owner](CBRNFT.md#owner)
- [ownerOf](CBRNFT.md#ownerof)
- [paused](CBRNFT.md#paused)
- [queryFilter](CBRNFT.md#queryfilter)
- [removeAllListeners](CBRNFT.md#removealllisteners)
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

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `cost` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `hiddenMetadataUri` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `maxMintAmountPerTx` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `maxSupply` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `merkleRoot` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `mint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `mintForAddress` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_receiver`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `name` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `owner` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `paused` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `renounceOwnership` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `revealed` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setCost` | (`_cost`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setHiddenMetadataUri` | (`_hiddenMetadataUri`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setMaxMintAmountPerTx` | (`_maxMintAmountPerTx`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setMerkleRoot` | (`_merkleRoot`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setPaused` | (`_state`: `boolean`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setRevealed` | (`_state`: `boolean`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setUriPrefix` | (`_uriPrefix`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setUriSuffix` | (`_uriSuffix`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `setWhitelistMintEnabled` | (`_state`: `boolean`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `symbol` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `tokenURI` | (`_tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `uriPrefix` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `uriSuffix` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`string`\> |
| `walletOfOwner` | (`_owner`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)[]\> |
| `whitelistClaimed` | (`arg0`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `whitelistMint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_merkleProof`: [`BytesLike`](../modules/internal_.md#byteslike)[], `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |
| `whitelistMintEnabled` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`boolean`\> |
| `withdraw` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<`void`\> |

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[callStatic](../classes/internal_.BaseContract.md#callstatic)

#### Defined in

src/contracts/types/CBRNFT.ts:716

___

### contractName

• **contractName**: ``"CBRNFT"``

#### Defined in

src/contracts/types/CBRNFT.ts:347

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

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `cost` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `hiddenMetadataUri` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `maxMintAmountPerTx` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `maxSupply` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `merkleRoot` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `mint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`PayableOverrides`](internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `mintForAddress` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_receiver`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `name` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `owner` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `paused` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `renounceOwnership` | (`overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `revealed` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `setCost` | (`_cost`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `setHiddenMetadataUri` | (`_hiddenMetadataUri`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `setMaxMintAmountPerTx` | (`_maxMintAmountPerTx`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `setMerkleRoot` | (`_merkleRoot`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `setPaused` | (`_state`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `setRevealed` | (`_state`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `setUriPrefix` | (`_uriPrefix`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `setUriSuffix` | (`_uriSuffix`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `setWhitelistMintEnabled` | (`_state`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `symbol` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `tokenURI` | (`_tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `uriPrefix` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `uriSuffix` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `walletOfOwner` | (`_owner`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `whitelistClaimed` | (`arg0`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `whitelistMint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_merkleProof`: [`BytesLike`](../modules/internal_.md#byteslike)[], `overrides?`: [`PayableOverrides`](internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `whitelistMintEnabled` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |
| `withdraw` | (`overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\> |

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[estimateGas](../classes/internal_.BaseContract.md#estimategas)

#### Defined in

src/contracts/types/CBRNFT.ts:909

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `approved?`: ``null`` \| `string`, `tokenId?`: ``null`` \| [`BigNumberish`](../modules/internal_.md#bignumberish)) => [`ApprovalEventFilter`](../modules.md#approvaleventfilter) |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `approved?`: ``null`` \| `string`, `tokenId?`: ``null`` \| [`BigNumberish`](../modules/internal_.md#bignumberish)) => [`ApprovalEventFilter`](../modules.md#approvaleventfilter) |
| `ApprovalForAll` | (`owner?`: ``null`` \| `string`, `operator?`: ``null`` \| `string`, `approved?`: ``null``) => [`ApprovalForAllEventFilter`](../modules.md#approvalforalleventfilter) |
| `ApprovalForAll(address,address,bool)` | (`owner?`: ``null`` \| `string`, `operator?`: ``null`` \| `string`, `approved?`: ``null``) => [`ApprovalForAllEventFilter`](../modules.md#approvalforalleventfilter) |
| `OwnershipTransferred` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => [`OwnershipTransferredEventFilter`](../modules.md#ownershiptransferredeventfilter) |
| `OwnershipTransferred(address,address)` | (`previousOwner?`: ``null`` \| `string`, `newOwner?`: ``null`` \| `string`) => [`OwnershipTransferredEventFilter`](../modules.md#ownershiptransferredeventfilter) |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `tokenId?`: ``null`` \| [`BigNumberish`](../modules/internal_.md#bignumberish)) => [`TransferEventFilter`](../modules.md#transfereventfilter) |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `tokenId?`: ``null`` \| [`BigNumberish`](../modules/internal_.md#bignumberish)) => [`TransferEventFilter`](../modules.md#transfereventfilter) |

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[filters](../classes/internal_.BaseContract.md#filters)

#### Defined in

src/contracts/types/CBRNFT.ts:865

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](../classes/internal_.BigNumber.md)]\> |
| `cost` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](../classes/internal_.BigNumber.md)]\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `hiddenMetadataUri` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `maxMintAmountPerTx` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](../classes/internal_.BigNumber.md)]\> |
| `maxSupply` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](../classes/internal_.BigNumber.md)]\> |
| `merkleRoot` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `mint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`PayableOverrides`](internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `mintForAddress` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_receiver`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `name` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `owner` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `paused` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `renounceOwnership` | (`overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `revealed` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `setCost` | (`_cost`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `setHiddenMetadataUri` | (`_hiddenMetadataUri`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `setMaxMintAmountPerTx` | (`_maxMintAmountPerTx`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `setMerkleRoot` | (`_merkleRoot`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `setPaused` | (`_state`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `setRevealed` | (`_state`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `setUriPrefix` | (`_uriPrefix`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `setUriSuffix` | (`_uriSuffix`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `setWhitelistMintEnabled` | (`_state`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `symbol` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `tokenURI` | (`_tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](../classes/internal_.BigNumber.md)]\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `uriPrefix` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `uriSuffix` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`string`]\> |
| `walletOfOwner` | (`_owner`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[[`BigNumber`](../classes/internal_.BigNumber.md)[]]\> |
| `whitelistClaimed` | (`arg0`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `whitelistMint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_merkleProof`: [`BytesLike`](../modules/internal_.md#byteslike)[], `overrides?`: [`PayableOverrides`](internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |
| `whitelistMintEnabled` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`boolean`]\> |
| `withdraw` | (`overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\> |

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[functions](../classes/internal_.BaseContract.md#functions)

#### Defined in

src/contracts/types/CBRNFT.ts:373

___

### interface

• **interface**: [`CBRNFTInterface`](CBRNFTInterface.md)

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[interface](../classes/internal_.BaseContract.md#interface)

#### Defined in

src/contracts/types/CBRNFT.ts:352

___

### off

• **off**: [`OnEvent`](OnEvent.md)<[`CBRNFT`](CBRNFT.md)\>

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[off](../classes/internal_.BaseContract.md#off)

#### Defined in

src/contracts/types/CBRNFT.ts:368

___

### on

• **on**: [`OnEvent`](OnEvent.md)<[`CBRNFT`](CBRNFT.md)\>

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[on](../classes/internal_.BaseContract.md#on)

#### Defined in

src/contracts/types/CBRNFT.ts:369

___

### once

• **once**: [`OnEvent`](OnEvent.md)<[`CBRNFT`](CBRNFT.md)\>

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[once](../classes/internal_.BaseContract.md#once)

#### Defined in

src/contracts/types/CBRNFT.ts:370

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `cost` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `getApproved` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `hiddenMetadataUri` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `maxMintAmountPerTx` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `maxSupply` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `merkleRoot` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `mint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`PayableOverrides`](internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `mintForAddress` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_receiver`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `name` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `owner` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `ownerOf` | (`tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `paused` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `renounceOwnership` | (`overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `revealed` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_data`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `setApprovalForAll` | (`operator`: `string`, `approved`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `setCost` | (`_cost`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `setHiddenMetadataUri` | (`_hiddenMetadataUri`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `setMaxMintAmountPerTx` | (`_maxMintAmountPerTx`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `setMerkleRoot` | (`_merkleRoot`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `setPaused` | (`_state`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `setRevealed` | (`_state`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `setUriPrefix` | (`_uriPrefix`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `setUriSuffix` | (`_uriSuffix`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `setWhitelistMintEnabled` | (`_state`: `boolean`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `supportsInterface` | (`interfaceId`: [`BytesLike`](../modules/internal_.md#byteslike), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `symbol` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `tokenURI` | (`_tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `totalSupply` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: [`BigNumberish`](../modules/internal_.md#bignumberish), `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `transferOwnership` | (`newOwner`: `string`, `overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `uriPrefix` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `uriSuffix` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `walletOfOwner` | (`_owner`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `whitelistClaimed` | (`arg0`: `string`, `overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `whitelistMint` | (`_mintAmount`: [`BigNumberish`](../modules/internal_.md#bignumberish), `_merkleProof`: [`BytesLike`](../modules/internal_.md#byteslike)[], `overrides?`: [`PayableOverrides`](internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `whitelistMintEnabled` | (`overrides?`: [`CallOverrides`](internal_.CallOverrides.md)) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |
| `withdraw` | (`overrides?`: [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<[`PopulatedTransaction`](internal_.PopulatedTransaction.md)\> |

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[populateTransaction](../classes/internal_.BaseContract.md#populatetransaction)

#### Defined in

src/contracts/types/CBRNFT.ts:1086

___

### provider

• `Readonly` **provider**: [`Provider`](../classes/internal_.Provider.md)

#### Inherited from

[BaseContract](../classes/internal_.BaseContract.md).[provider](../classes/internal_.BaseContract.md#provider)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: [`OnEvent`](OnEvent.md)<[`CBRNFT`](CBRNFT.md)\>

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[removeListener](../classes/internal_.BaseContract.md#removelistener)

#### Defined in

src/contracts/types/CBRNFT.ts:371

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

### approve

▸ **approve**(`to`, `tokenId`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:550

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

[BaseContract](../classes/internal_.BaseContract.md).[attach](../classes/internal_.BaseContract.md#attach)

#### Defined in

src/contracts/types/CBRNFT.ts:349

___

### balanceOf

▸ **balanceOf**(`owner`, `overrides?`): `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:556

___

### connect

▸ **connect**(`signerOrProvider`): [`CBRNFT`](CBRNFT.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| [`Provider`](../classes/internal_.Provider.md) \| [`Signer`](../classes/internal_.Signer.md) |

#### Returns

[`CBRNFT`](CBRNFT.md)

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[connect](../classes/internal_.BaseContract.md#connect)

#### Defined in

src/contracts/types/CBRNFT.ts:348

___

### cost

▸ **cost**(`overrides?`): `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:558

___

### deployed

▸ **deployed**(): `Promise`<[`CBRNFT`](CBRNFT.md)\>

#### Returns

`Promise`<[`CBRNFT`](CBRNFT.md)\>

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[deployed](../classes/internal_.BaseContract.md#deployed)

#### Defined in

src/contracts/types/CBRNFT.ts:350

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

### getApproved

▸ **getApproved**(`tokenId`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/types/CBRNFT.ts:560

___

### hiddenMetadataUri

▸ **hiddenMetadataUri**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/types/CBRNFT.ts:565

___

### isApprovedForAll

▸ **isApprovedForAll**(`owner`, `operator`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `operator` | `string` |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/types/CBRNFT.ts:567

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

src/contracts/types/CBRNFT.ts:360

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

src/contracts/types/CBRNFT.ts:363

___

### maxMintAmountPerTx

▸ **maxMintAmountPerTx**(`overrides?`): `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:573

___

### maxSupply

▸ **maxSupply**(`overrides?`): `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:575

___

### merkleRoot

▸ **merkleRoot**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/types/CBRNFT.ts:577

___

### mint

▸ **mint**(`_mintAmount`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mintAmount` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`PayableOverrides`](internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:579

___

### mintForAddress

▸ **mintForAddress**(`_mintAmount`, `_receiver`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mintAmount` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `_receiver` | `string` |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:584

___

### name

▸ **name**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/types/CBRNFT.ts:590

___

### owner

▸ **owner**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/types/CBRNFT.ts:592

___

### ownerOf

▸ **ownerOf**(`tokenId`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/types/CBRNFT.ts:594

___

### paused

▸ **paused**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/types/CBRNFT.ts:596

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

src/contracts/types/CBRNFT.ts:354

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`CBRNFT`](CBRNFT.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends [`TypedEvent`](TypedEvent.md)<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](TypedEventFilter.md)<`TEvent`\> |

#### Returns

[`CBRNFT`](CBRNFT.md)

#### Overrides

[BaseContract](../classes/internal_.BaseContract.md).[removeAllListeners](../classes/internal_.BaseContract.md#removealllisteners)

#### Defined in

src/contracts/types/CBRNFT.ts:364

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

src/contracts/types/CBRNFT.ts:367

___

### renounceOwnership

▸ **renounceOwnership**(`overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:598

___

### revealed

▸ **revealed**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/types/CBRNFT.ts:602

___

### safeTransferFrom(address,address,uint256)

▸ **safeTransferFrom(address,address,uint256)**(`from`, `to`, `tokenId`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:604

___

### safeTransferFrom(address,address,uint256,bytes)

▸ **safeTransferFrom(address,address,uint256,bytes)**(`from`, `to`, `tokenId`, `_data`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `_data` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:611

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `approved`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `approved` | `boolean` |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:619

___

### setCost

▸ **setCost**(`_cost`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_cost` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:625

___

### setHiddenMetadataUri

▸ **setHiddenMetadataUri**(`_hiddenMetadataUri`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_hiddenMetadataUri` | `string` |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:630

___

### setMaxMintAmountPerTx

▸ **setMaxMintAmountPerTx**(`_maxMintAmountPerTx`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_maxMintAmountPerTx` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:635

___

### setMerkleRoot

▸ **setMerkleRoot**(`_merkleRoot`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_merkleRoot` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:640

___

### setPaused

▸ **setPaused**(`_state`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_state` | `boolean` |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:645

___

### setRevealed

▸ **setRevealed**(`_state`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_state` | `boolean` |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:650

___

### setUriPrefix

▸ **setUriPrefix**(`_uriPrefix`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_uriPrefix` | `string` |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:655

___

### setUriSuffix

▸ **setUriSuffix**(`_uriSuffix`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_uriSuffix` | `string` |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:660

___

### setWhitelistMintEnabled

▸ **setWhitelistMintEnabled**(`_state`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_state` | `boolean` |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:665

___

### supportsInterface

▸ **supportsInterface**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/types/CBRNFT.ts:670

___

### symbol

▸ **symbol**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/types/CBRNFT.ts:675

___

### tokenURI

▸ **tokenURI**(`_tokenId`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/types/CBRNFT.ts:677

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:679

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `tokenId`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:681

___

### transferOwnership

▸ **transferOwnership**(`newOwner`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOwner` | `string` |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:688

___

### uriPrefix

▸ **uriPrefix**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/types/CBRNFT.ts:693

___

### uriSuffix

▸ **uriSuffix**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

src/contracts/types/CBRNFT.ts:695

___

### walletOfOwner

▸ **walletOfOwner**(`_owner`, `overrides?`): `Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_owner` | `string` |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<[`BigNumber`](../classes/internal_.BigNumber.md)[]\>

#### Defined in

src/contracts/types/CBRNFT.ts:697

___

### whitelistClaimed

▸ **whitelistClaimed**(`arg0`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/types/CBRNFT.ts:702

___

### whitelistMint

▸ **whitelistMint**(`_mintAmount`, `_merkleProof`, `overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_mintAmount` | [`BigNumberish`](../modules/internal_.md#bignumberish) |
| `_merkleProof` | [`BytesLike`](../modules/internal_.md#byteslike)[] |
| `overrides?` | [`PayableOverrides`](internal_.PayableOverrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:704

___

### whitelistMintEnabled

▸ **whitelistMintEnabled**(`overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`CallOverrides`](internal_.CallOverrides.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/contracts/types/CBRNFT.ts:710

___

### withdraw

▸ **withdraw**(`overrides?`): `Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | [`Overrides`](internal_.Overrides.md) & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<[`ContractTransaction`](internal_.ContractTransaction.md)\>

#### Defined in

src/contracts/types/CBRNFT.ts:712
