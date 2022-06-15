[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / IERC721\_\_factory

# Class: IERC721\_\_factory

## Table of contents

### Constructors

- [constructor](IERC721__factory.md#constructor)

### Properties

- [abi](IERC721__factory.md#abi)

### Methods

- [connect](IERC721__factory.md#connect)
- [createInterface](IERC721__factory.md#createinterface)

## Constructors

### constructor

• **new IERC721__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs`: `undefined` = []; `stateMutability`: `undefined` = "nonpayable"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "balanceOf"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "balance"; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC721__factory.ts:298

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC721`](IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | [`Provider`](internal_.Provider.md) \| [`Signer`](internal_.Signer.md) |

#### Returns

[`IERC721`](IERC721.md)

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC721__factory.ts:302

___

### createInterface

▸ `Static` **createInterface**(): [`IERC721Interface`](../interfaces/IERC721Interface.md)

#### Returns

[`IERC721Interface`](../interfaces/IERC721Interface.md)

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC721__factory.ts:299
