[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / IERC721Interface

# Interface: IERC721Interface

## Hierarchy

- [`Interface`](../classes/internal_.Interface.md)

  ↳ **`IERC721Interface`**

## Table of contents

### Properties

- [\_abiCoder](IERC721Interface.md#_abicoder)
- [\_isInterface](IERC721Interface.md#_isinterface)
- [deploy](IERC721Interface.md#deploy)
- [errors](IERC721Interface.md#errors)
- [events](IERC721Interface.md#events)
- [fragments](IERC721Interface.md#fragments)
- [functions](IERC721Interface.md#functions)
- [structs](IERC721Interface.md#structs)

### Methods

- [\_decodeParams](IERC721Interface.md#_decodeparams)
- [\_encodeParams](IERC721Interface.md#_encodeparams)
- [decodeErrorResult](IERC721Interface.md#decodeerrorresult)
- [decodeEventLog](IERC721Interface.md#decodeeventlog)
- [decodeFunctionData](IERC721Interface.md#decodefunctiondata)
- [decodeFunctionResult](IERC721Interface.md#decodefunctionresult)
- [encodeDeploy](IERC721Interface.md#encodedeploy)
- [encodeErrorResult](IERC721Interface.md#encodeerrorresult)
- [encodeEventLog](IERC721Interface.md#encodeeventlog)
- [encodeFilterTopics](IERC721Interface.md#encodefiltertopics)
- [encodeFunctionData](IERC721Interface.md#encodefunctiondata)
- [encodeFunctionResult](IERC721Interface.md#encodefunctionresult)
- [format](IERC721Interface.md#format)
- [getError](IERC721Interface.md#geterror)
- [getEvent](IERC721Interface.md#getevent)
- [getEventTopic](IERC721Interface.md#geteventtopic)
- [getFunction](IERC721Interface.md#getfunction)
- [getSighash](IERC721Interface.md#getsighash)
- [parseError](IERC721Interface.md#parseerror)
- [parseLog](IERC721Interface.md#parselog)
- [parseTransaction](IERC721Interface.md#parsetransaction)

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
| `Transfer(address,address,uint256)` | [`EventFragment`](../classes/internal_.EventFragment.md) |

#### Overrides

[Interface](../classes/internal_.Interface.md).[events](../classes/internal_.Interface.md#events)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:97

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
| `getApproved(uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `isApprovedForAll(address,address)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `ownerOf(uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `safeTransferFrom(address,address,uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `setApprovalForAll(address,bool)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `supportsInterface(bytes4)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |
| `transferFrom(address,address,uint256)` | [`FunctionFragment`](../classes/internal_.FunctionFragment.md) |

#### Overrides

[Interface](../classes/internal_.Interface.md).[functions](../classes/internal_.Interface.md#functions)

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:23

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

src/contracts/nftTypes/typechain/IERC721.d.ts:69

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:70

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getApproved"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:71

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isApprovedForAll"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:75

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"ownerOf"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:79

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeTransferFrom"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:80

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setApprovalForAll"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:84

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"supportsInterface"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:88

▸ **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](internal_.Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferFrom"`` |
| `data` | [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

[`Result`](internal_.Result.md)

#### Overrides

ethers.utils.Interface.decodeFunctionResult

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:92

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

src/contracts/nftTypes/typechain/IERC721.d.ts:35

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"balanceOf"`` |
| `values` | [`string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:39

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"getApproved"`` |
| `values` | [[`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:40

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"isApprovedForAll"`` |
| `values` | [`string`, `string`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:44

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"ownerOf"`` |
| `values` | [[`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:48

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"safeTransferFrom"`` |
| `values` | [`string`, `string`, [`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:52

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"setApprovalForAll"`` |
| `values` | [`string`, `boolean`] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:56

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"supportsInterface"`` |
| `values` | [[`BytesLike`](../modules/internal_.md#byteslike)] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:60

▸ **encodeFunctionData**(`functionFragment`, `values`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `functionFragment` | ``"transferFrom"`` |
| `values` | [`string`, `string`, [`BigNumberish`](../modules/internal_.md#bignumberish)] |

#### Returns

`string`

#### Overrides

ethers.utils.Interface.encodeFunctionData

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:64

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

src/contracts/nftTypes/typechain/IERC721.d.ts:103

▸ **getEvent**(`nameOrSignatureOrTopic`): [`EventFragment`](../classes/internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"ApprovalForAll"`` |

#### Returns

[`EventFragment`](../classes/internal_.EventFragment.md)

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:104

▸ **getEvent**(`nameOrSignatureOrTopic`): [`EventFragment`](../classes/internal_.EventFragment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrSignatureOrTopic` | ``"Transfer"`` |

#### Returns

[`EventFragment`](../classes/internal_.EventFragment.md)

#### Overrides

ethers.utils.Interface.getEvent

#### Defined in

src/contracts/nftTypes/typechain/IERC721.d.ts:105

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
