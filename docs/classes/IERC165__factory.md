[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / IERC165\_\_factory

# Class: IERC165\_\_factory

## Table of contents

### Constructors

- [constructor](IERC165__factory.md#constructor)

### Properties

- [abi](IERC165__factory.md#abi)

### Methods

- [connect](IERC165__factory.md#connect)
- [createInterface](IERC165__factory.md#createinterface)

## Constructors

### constructor

• **new IERC165__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "bytes4"; `name`: `string` = "interfaceId"; `type`: `string` = "bytes4" }[] ; `name`: `string` = "supportsInterface"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC165__factory.ts:32

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC165`](IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | [`Provider`](internal_.Provider.md) \| [`Signer`](internal_.Signer.md) |

#### Returns

[`IERC165`](IERC165.md)

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC165__factory.ts:36

___

### createInterface

▸ `Static` **createInterface**(): [`IERC165Interface`](../interfaces/IERC165Interface.md)

#### Returns

[`IERC165Interface`](../interfaces/IERC165Interface.md)

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC165__factory.ts:33
