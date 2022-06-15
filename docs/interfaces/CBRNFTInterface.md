[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / CBRNFTInterface

# Interface: CBRNFTInterface

## Hierarchy

- [`Interface`](../classes/internal_.Interface.md)

  ↳ **`CBRNFTInterface`**

## Table of contents

### Properties

- [\_abiCoder](CBRNFTInterface.md#_abicoder-1)
- [\_isInterface](CBRNFTInterface.md#_isinterface-1)
- [contractName](CBRNFTInterface.md#contractname)
- [deploy](CBRNFTInterface.md#deploy-1)
- [errors](CBRNFTInterface.md#errors-1)
- [events](CBRNFTInterface.md#events-1)
- [fragments](CBRNFTInterface.md#fragments-1)
- [functions](CBRNFTInterface.md#functions-1)
- [structs](CBRNFTInterface.md#structs-1)

### Methods

- [\_decodeParams](CBRNFTInterface.md#_decodeparams-1)
- [\_encodeParams](CBRNFTInterface.md#_encodeparams-1)
- [decodeErrorResult](CBRNFTInterface.md#decodeerrorresult-1)
- [decodeEventLog](CBRNFTInterface.md#decodeeventlog-1)
- [decodeFunctionData](CBRNFTInterface.md#decodefunctiondata-1)
- [decodeFunctionResult](CBRNFTInterface.md#decodefunctionresult-1)
- [encodeDeploy](CBRNFTInterface.md#encodedeploy-1)
- [encodeErrorResult](CBRNFTInterface.md#encodeerrorresult-1)
- [encodeEventLog](CBRNFTInterface.md#encodeeventlog-1)
- [encodeFilterTopics](CBRNFTInterface.md#encodefiltertopics-1)
- [encodeFunctionData](CBRNFTInterface.md#encodefunctiondata-1)
- [encodeFunctionResult](CBRNFTInterface.md#encodefunctionresult-1)
- [format](CBRNFTInterface.md#format-1)
- [getError](CBRNFTInterface.md#geterror-1)
- [getEvent](CBRNFTInterface.md#getevent-1)
- [getEventTopic](CBRNFTInterface.md#geteventtopic-1)
- [getFunction](CBRNFTInterface.md#getfunction-1)
- [getSighash](CBRNFTInterface.md#getsighash-1)
- [parseError](CBRNFTInterface.md#parseerror-1)
- [parseLog](CBRNFTInterface.md#parselog-1)
- [parseTransaction](CBRNFTInterface.md#parsetransaction-1)

## Properties

### \_abiCoder

• `Readonly` **\_abiCoder**: [`AbiCoder`](../classes/internal_.AbiCoder.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[_abiCoder](../classes/internal_.Interface.md#_abicoder)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:50

___

### \_isInterface

• `Readonly` **\_isInterface**: `boolean`

#### Inherited from

[Interface](../classes/internal_.Interface.md).[_isInterface](../classes/internal_.Interface.md#_isinterface)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:51

___

### contractName

• **contractName**: ``"CBRNFT"``

#### Defined in

src/contracts/types/CBRNFT.ts:22

___

### deploy

• `Readonly` **deploy**: [`ConstructorFragment`](../classes/internal_.ConstructorFragment.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[deploy](../classes/internal_.Interface.md#deploy)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:49

___

### errors

• `Readonly` **errors**: `Object`

#### Index signature

▪ [name: `string`]: [`ErrorFragment`](../classes/internal_.ErrorFragment.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[errors](../classes/internal_.Interface.md#errors)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:37

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval(address,address,uint256)` | [`EventFragment`](../classes/internal_.EventFragment.md) |
| `ApprovalForAll(address,address,bool)` | [`EventFragment`](../classes/internal_.EventFragment.md) |
| `OwnershipTransferred(address,address)` | [`EventFragment`](../classes/internal_.EventFragment.md) |
| `Transfer(address,address,uint256)` | [`EventFragment`](../classes/internal_.EventFragment.md) |

#### Overrides

[Interface](../classes/internal_.Interface.md).[events](../classes/internal_.Interface.md#events)

#### Defined in

src/contracts/types/CBRNFT.ts:304

___

### fragments

• `Readonly` **fragments**: readonly [`Fragment`](../classes/internal_.Fragment.md)[]

#### Inherited from

[Interface](../classes/internal_.Interface.md).[fragments](../classes/internal_.Interface.md#fragments)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:36

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve(address,uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `balanceOf(address)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `cost()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `getApproved(uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `hiddenMetadataUri()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `isApprovedForAll(address,address)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `maxMintAmountPerTx()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `maxSupply()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `merkleRoot()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `mint(uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `mintForAddress(uint256,address)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `name()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `owner()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `ownerOf(uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `paused()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `renounceOwnership()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `revealed()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `safeTransferFrom(address,address,uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `setApprovalForAll(address,bool)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `setCost(uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `setHiddenMetadataUri(string)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `setMaxMintAmountPerTx(uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `setMerkleRoot(bytes32)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `setPaused(bool)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `setRevealed(bool)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `setUriPrefix(string)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `setUriSuffix(string)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `setWhitelistMintEnabled(bool)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `supportsInterface(bytes4)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `symbol()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `tokenURI(uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `totalSupply()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `transferFrom(address,address,uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `transferOwnership(address)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `uriPrefix()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `uriSuffix()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `walletOfOwner(address)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `whitelistClaimed(address)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `whitelistMint(uint256,bytes32[])` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `whitelistMintEnabled()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `withdraw()` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |

#### Overrides

[Interface](../classes/internal_.Interface.md).[functions](../classes/internal_.Interface.md#functions)

#### Defined in

src/contracts/types/CBRNFT.ts:23

___

### structs

• `Readonly` **structs**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[Interface](../classes/internal_.Interface.md).[structs](../classes/internal_.Interface.md#structs)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:46

## Methods

### \_decodeParams

▸ **_decodeParams**(`params`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly [`ParamType`](../classes/internal_.ParamType.md)[] |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[_decodeParams](../classes/internal_.Interface.md#_decodeparams)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:63

___

### \_encodeParams

▸ **_encodeParams**(`params`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | readonly [`ParamType`](../classes/internal_.ParamType.md)[] |
| `values` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

[Interface](../classes/internal_.Interface.md).[_encodeParams](../classes/internal_.Interface.md#_encodeparams)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:64

___

### decodeErrorResult

▸ **decodeErrorResult**(`fragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`ErrorFragment`](../classes/internal_.ErrorFragment.md) |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[decodeErrorResult](../classes/internal_.Interface.md#decodeerrorresult)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:66

___

### decodeEventLog

▸ **decodeEventLog**(`eventFragment`, `data`, `topics?`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| [`EventFragment`](../classes/internal_.EventFragment.md) |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |
| `topics?` | readonly `string`[] |

#### Returns

[`Result`](internal_.Result.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[decodeEventLog](../classes/internal_.Interface.md#decodeeventlog)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:77

___

### decodeFunctionData

▸ **decodeFunctionData**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[decodeFunctionData](../classes/internal_.Interface.md#decodefunctiondata)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:68

___

### decodeFunctionResult

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"approve"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

[Interface](../classes/internal_.Interface.md).[decodeFunctionResult](../classes/internal_.Interface.md#decodefunctionresult)

#### Defined in

src/contracts/types/CBRNFT.ts:193

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:194

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cost"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:195

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getApproved"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:196

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"hiddenMetadataUri"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:200

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isApprovedForAll"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:204

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"maxMintAmountPerTx"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:208

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"maxSupply"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:212

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"merkleRoot"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:213

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"mint"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:214

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"mintForAddress"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:215

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"name"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:219

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"owner"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:220

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"ownerOf"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:221

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"paused"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:222

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"renounceOwnership"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:223

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"revealed"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:227

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeTransferFrom"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:228

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setApprovalForAll"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:232

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setCost"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:236

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setHiddenMetadataUri"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:237

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setMaxMintAmountPerTx"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:241

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setMerkleRoot"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:245

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setPaused"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:249

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setRevealed"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:250

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setUriPrefix"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:254

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setUriSuffix"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:258

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setWhitelistMintEnabled"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:262

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"supportsInterface"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:266

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"symbol"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:270

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"tokenURI"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:271

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupply"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:272

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferFrom"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:276

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferOwnership"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:280

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"uriPrefix"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:284

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"uriSuffix"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:285

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"walletOfOwner"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:286

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"whitelistClaimed"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:290

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"whitelistMint"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:294

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"whitelistMintEnabled"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:298

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdraw"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/types/CBRNFT.ts:302

___

### encodeDeploy

▸ **encodeDeploy**(`values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

[Interface](../classes/internal_.Interface.md).[encodeDeploy](../classes/internal_.Interface.md#encodedeploy)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:65

___

### encodeErrorResult

▸ **encodeErrorResult**(`fragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`ErrorFragment`](../classes/internal_.ErrorFragment.md) |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

[Interface](../classes/internal_.Interface.md).[encodeErrorResult](../classes/internal_.Interface.md#encodeerrorresult)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:67

___

### encodeEventLog

▸ **encodeEventLog**(`eventFragment`, `values`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | [`EventFragment`](../classes/internal_.EventFragment.md) |
| `values` | readonly `any`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `topics` | `string`[] |

#### Inherited from

[Interface](../classes/internal_.Interface.md).[encodeEventLog](../classes/internal_.Interface.md#encodeeventlog)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:73

___

### encodeFilterTopics

▸ **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | [`EventFragment`](../classes/internal_.EventFragment.md) |
| `values` | readonly `any`[] |

#### Returns

(`string` \| `string`[])[]

#### Inherited from

[Interface](../classes/internal_.Interface.md).[encodeFilterTopics](../classes/internal_.Interface.md#encodefiltertopics)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:72

___

### encodeFunctionData

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"approve"`` |
| `values` | [`string`, [`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

[Interface](../classes/internal_.Interface.md).[encodeFunctionData](../classes/internal_.Interface.md#encodefunctiondata)

#### Defined in

src/contracts/types/CBRNFT.ts:67

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:71

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"cost"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:72

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getApproved"`` |
| `values` | [[`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:73

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"hiddenMetadataUri"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:77

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isApprovedForAll"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:81

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"maxMintAmountPerTx"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:85

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"maxSupply"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:89

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"merkleRoot"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:90

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"mint"`` |
| `values` | [[`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:94

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"mintForAddress"`` |
| `values` | [[`BigNumberish`](../modules/internal_.md#bignumberish), `string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:95

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"name"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:99

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"owner"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:100

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"ownerOf"`` |
| `values` | [[`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:101

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"paused"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:105

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"renounceOwnership"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:106

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"revealed"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:110

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeTransferFrom"`` |
| `values` | [`string`, `string`, [`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:111

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setApprovalForAll"`` |
| `values` | [`string`, `boolean`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:115

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setCost"`` |
| `values` | [[`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:119

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setHiddenMetadataUri"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:123

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setMaxMintAmountPerTx"`` |
| `values` | [[`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:127

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setMerkleRoot"`` |
| `values` | [[`BytesLike`](../modules/internal_.md#byteslike)] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:131

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setPaused"`` |
| `values` | [`boolean`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:135

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setRevealed"`` |
| `values` | [`boolean`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:136

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setUriPrefix"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:140

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setUriSuffix"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:144

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setWhitelistMintEnabled"`` |
| `values` | [`boolean`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:148

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"supportsInterface"`` |
| `values` | [[`BytesLike`](../modules/internal_.md#byteslike)] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:152

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"symbol"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:156

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"tokenURI"`` |
| `values` | [[`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:157

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"totalSupply"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:161

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferFrom"`` |
| `values` | [`string`, `string`, [`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:165

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferOwnership"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:169

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"uriPrefix"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:173

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"uriSuffix"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:174

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"walletOfOwner"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:175

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"whitelistClaimed"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:179

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"whitelistMint"`` |
| `values` | [[`BigNumberish`](../modules/internal_.md#bignumberish), [`BytesLike`](../modules/internal_.md#byteslike)[]] |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:183

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"whitelistMintEnabled"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:187

▸ **encodeFunctionData**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"withdraw"`` |
| `values?` | `undefined` |

#### Returns

`string`

#### Overrides

utils.Interface.encodeFunctionData

#### Defined in

src/contracts/types/CBRNFT.ts:191

___

### encodeFunctionResult

▸ **encodeFunctionResult**(`functionFragment`, `values?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | `string` \| [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `values?` | readonly `any`[] |

#### Returns

`string`

#### Inherited from

[Interface](../classes/internal_.Interface.md).[encodeFunctionResult](../classes/internal_.Interface.md#encodefunctionresult)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:71

___

### format

▸ **format**(`format?`): `string` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | `string` |

#### Returns

`string` \| `string`[]

#### Inherited from

[Interface](../classes/internal_.Interface.md).[format](../classes/internal_.Interface.md#format)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:53

___

### getError

▸ **getError**(`nameOrSignatureOrSighash`): [`ErrorFragment`](../classes/internal_.ErrorFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

[`ErrorFragment`](../classes/internal_.ErrorFragment.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[getError](../classes/internal_.Interface.md#geterror)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:60

___

### getEvent

▸ **getEvent**(`nameOrSignatureOrTopic`): [`EventFragment`](../classes/internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Approval"`` |

#### Returns

[`EventFragment`](../classes/internal_.EventFragment.md)

#### Overrides

[Interface](../classes/internal_.Interface.md).[getEvent](../classes/internal_.Interface.md#getevent)

#### Defined in

src/contracts/types/CBRNFT.ts:311

▸ **getEvent**(`nameOrSignatureOrTopic`): [`EventFragment`](../classes/internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ApprovalForAll"`` |

#### Returns

[`EventFragment`](../classes/internal_.EventFragment.md)

#### Overrides

utils.Interface.getEvent

#### Defined in

src/contracts/types/CBRNFT.ts:312

▸ **getEvent**(`nameOrSignatureOrTopic`): [`EventFragment`](../classes/internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"OwnershipTransferred"`` |

#### Returns

[`EventFragment`](../classes/internal_.EventFragment.md)

#### Overrides

utils.Interface.getEvent

#### Defined in

src/contracts/types/CBRNFT.ts:313

▸ **getEvent**(`nameOrSignatureOrTopic`): [`EventFragment`](../classes/internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Transfer"`` |

#### Returns

[`EventFragment`](../classes/internal_.EventFragment.md)

#### Overrides

utils.Interface.getEvent

#### Defined in

src/contracts/types/CBRNFT.ts:314

___

### getEventTopic

▸ **getEventTopic**(`eventFragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFragment` | `string` \| [`EventFragment`](../classes/internal_.EventFragment.md) |

#### Returns

`string`

#### Inherited from

[Interface](../classes/internal_.Interface.md).[getEventTopic](../classes/internal_.Interface.md#geteventtopic)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:62

___

### getFunction

▸ **getFunction**(`nameOrSignatureOrSighash`): [`FunctionFragment`](../classes/internal_.FunctionFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrSighash` | `string` |

#### Returns

[`FunctionFragment`](../classes/internal_.FunctionFragment.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[getFunction](../classes/internal_.Interface.md#getfunction)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:58

___

### getSighash

▸ **getSighash**(`fragment`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` \| [`FunctionFragment`](../classes/internal_.FunctionFragment.md) \| [`ErrorFragment`](../classes/internal_.ErrorFragment.md) |

#### Returns

`string`

#### Inherited from

[Interface](../classes/internal_.Interface.md).[getSighash](../classes/internal_.Interface.md#getsighash)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:61

___

### parseError

▸ **parseError**(`data`): [`ErrorDescription`](../classes/internal_.ErrorDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`ErrorDescription`](../classes/internal_.ErrorDescription.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[parseError](../classes/internal_.Interface.md#parseerror)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:86

___

### parseLog

▸ **parseLog**(`log`): [`LogDescription`](../classes/internal_.LogDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `log` | `Object` |
| `log.data` | `string` |
| `log.topics` | `string`[] |

#### Returns

[`LogDescription`](../classes/internal_.LogDescription.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[parseLog](../classes/internal_.Interface.md#parselog)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:82

___

### parseTransaction

▸ **parseTransaction**(`tx`): [`TransactionDescription`](../classes/internal_.TransactionDescription.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.data` | `string` |
| `tx.value?` | [`BigNumberish`](../modules/internal_.md#bignumberish) |

#### Returns

[`TransactionDescription`](../classes/internal_.TransactionDescription.md)

#### Inherited from

[Interface](../classes/internal_.Interface.md).[parseTransaction](../classes/internal_.Interface.md#parsetransaction)

#### Defined in

node_modules/@ethersproject/abi/lib/interface.d.ts:78
