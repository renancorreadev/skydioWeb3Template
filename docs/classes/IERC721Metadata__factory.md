[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / IERC721Metadata\_\_factory

# Class: IERC721Metadata\_\_factory

## Table of contents

### Constructors

- [constructor](IERC721Metadata__factory.md#constructor)

### Properties

- [abi](IERC721Metadata__factory.md#abi)

### Methods

- [connect](IERC721Metadata__factory.md#connect)
- [createInterface](IERC721Metadata__factory.md#createinterface)

## Constructors

### constructor

• **new IERC721Metadata__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs`: `undefined` = []; `stateMutability`: `undefined` = "nonpayable"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "balanceOf"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "balance"; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC721Metadata__factory.ts:346

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC721Metadata`](IERC721Metadata.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | [`Provider`](internal_.Provider.md) \| [`Signer`](internal_.Signer.md) |

#### Returns

[`IERC721Metadata`](IERC721Metadata.md)

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC721Metadata__factory.ts:350

___

### createInterface

▸ `Static` **createInterface**(): [`IERC721MetadataInterface`](../interfaces/IERC721MetadataInterface.md)

#### Returns

[`IERC721MetadataInterface`](../interfaces/IERC721MetadataInterface.md)

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC721Metadata__factory.ts:347
