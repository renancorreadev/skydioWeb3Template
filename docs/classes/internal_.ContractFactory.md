[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ContractFactory

# Class: ContractFactory

[<internal>](../modules/internal_.md).ContractFactory

## Hierarchy

- **`ContractFactory`**

  ↳ [`CBRNFT__factory`](CBRNFT__factory.md)

  ↳ [`ERC721A__factory`](ERC721A__factory.md)

  ↳ [`CBRNFT__factory`](CBRNFT__factory.md)

## Table of contents

### Constructors

- [constructor](internal_.ContractFactory.md#constructor)

### Properties

- [bytecode](internal_.ContractFactory.md#bytecode)
- [interface](internal_.ContractFactory.md#interface)
- [signer](internal_.ContractFactory.md#signer)

### Methods

- [attach](internal_.ContractFactory.md#attach)
- [connect](internal_.ContractFactory.md#connect)
- [deploy](internal_.ContractFactory.md#deploy)
- [getDeployTransaction](internal_.ContractFactory.md#getdeploytransaction)
- [fromSolidity](internal_.ContractFactory.md#fromsolidity)
- [getContract](internal_.ContractFactory.md#getcontract)
- [getContractAddress](internal_.ContractFactory.md#getcontractaddress)
- [getInterface](internal_.ContractFactory.md#getinterface)

## Constructors

### constructor

• **new ContractFactory**(`contractInterface`, `bytecode`, `signer?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) |
| `bytecode` | [`BytesLike`](../modules/internal_.md#byteslike) \| { `object`: `string`  } |
| `signer?` | [`Signer`](internal_.Signer.md) |

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:141

## Properties

### bytecode

• `Readonly` **bytecode**: `string`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:139

___

### interface

• `Readonly` **interface**: [`Interface`](internal_.Interface.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:138

___

### signer

• `Readonly` **signer**: [`Signer`](internal_.Signer.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:140

## Methods

### attach

▸ **attach**(`address`): [`Contract`](internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Contract`](internal_.Contract.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:146

___

### connect

▸ **connect**(`signer`): [`ContractFactory`](internal_.ContractFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | [`Signer`](internal_.Signer.md) |

#### Returns

[`ContractFactory`](internal_.ContractFactory.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:147

___

### deploy

▸ **deploy**(...`args`): `Promise`<[`Contract`](internal_.Contract.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Promise`<[`Contract`](internal_.Contract.md)\>

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:145

___

### getDeployTransaction

▸ **getDeployTransaction**(...`args`): [`TransactionRequest`](../modules/internal_.md#transactionrequest)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

[`TransactionRequest`](../modules/internal_.md#transactionrequest)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:144

___

### fromSolidity

▸ `Static` **fromSolidity**(`compilerOutput`, `signer?`): [`ContractFactory`](internal_.ContractFactory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `compilerOutput` | `any` |
| `signer?` | [`Signer`](internal_.Signer.md) |

#### Returns

[`ContractFactory`](internal_.ContractFactory.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:148

___

### getContract

▸ `Static` **getContract**(`address`, `contractInterface`, `signer?`): [`Contract`](internal_.Contract.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) |
| `signer?` | [`Signer`](internal_.Signer.md) |

#### Returns

[`Contract`](internal_.Contract.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:154

___

### getContractAddress

▸ `Static` **getContractAddress**(`tx`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Object` |
| `tx.from` | `string` |
| `tx.nonce` | `number` \| [`BigNumber`](internal_.BigNumber.md) \| [`BytesLike`](../modules/internal_.md#byteslike) |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:150

___

### getInterface

▸ `Static` **getInterface**(`contractInterface`): [`Interface`](internal_.Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractInterface` | [`ContractInterface`](../modules/internal_.md#contractinterface) |

#### Returns

[`Interface`](internal_.Interface.md)

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:149
