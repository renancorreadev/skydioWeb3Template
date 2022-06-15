[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / ERC165\_\_factory

# Class: ERC165\_\_factory

## Table of contents

### Constructors

- [constructor](ERC165__factory.md#constructor)

### Properties

- [abi](ERC165__factory.md#abi)

### Methods

- [connect](ERC165__factory.md#connect)
- [createInterface](ERC165__factory.md#createinterface)

## Constructors

### constructor

• **new ERC165__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "bytes4"; `name`: `string` = "interfaceId"; `type`: `string` = "bytes4" }[] ; `name`: `string` = "supportsInterface"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/contracts/nftTypes/typechain/factories/ERC165__factory.ts:32

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`ERC165`](ERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | [`Provider`](internal_.Provider.md) \| [`Signer`](internal_.Signer.md) |

#### Returns

[`ERC165`](ERC165.md)

#### Defined in

src/contracts/nftTypes/typechain/factories/ERC165__factory.ts:36

___

### createInterface

▸ `Static` **createInterface**(): [`ERC165Interface`](../interfaces/ERC165Interface.md)

#### Returns

[`ERC165Interface`](../interfaces/ERC165Interface.md)

#### Defined in

src/contracts/nftTypes/typechain/factories/ERC165__factory.ts:33
