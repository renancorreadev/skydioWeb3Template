[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / IERC721Receiver\_\_factory

# Class: IERC721Receiver\_\_factory

## Table of contents

### Constructors

- [constructor](IERC721Receiver__factory.md#constructor)

### Properties

- [abi](IERC721Receiver__factory.md#abi)

### Methods

- [connect](IERC721Receiver__factory.md#connect)
- [createInterface](IERC721Receiver__factory.md#createinterface)

## Constructors

### constructor

• **new IERC721Receiver__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "operator"; `type`: `string` = "address" }[] ; `name`: `string` = "onERC721Received"; `outputs`: { `internalType`: `string` = "bytes4"; `name`: `string` = ""; `type`: `string` = "bytes4" }[] ; `stateMutability`: `string` = "nonpayable"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC721Receiver__factory.ts:50

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC721Receiver`](IERC721Receiver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | [`Provider`](internal_.Provider.md) \| [`Signer`](internal_.Signer.md) |

#### Returns

[`IERC721Receiver`](IERC721Receiver.md)

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC721Receiver__factory.ts:54

___

### createInterface

▸ `Static` **createInterface**(): [`IERC721ReceiverInterface`](../interfaces/IERC721ReceiverInterface.md)

#### Returns

[`IERC721ReceiverInterface`](../interfaces/IERC721ReceiverInterface.md)

#### Defined in

src/contracts/nftTypes/typechain/factories/IERC721Receiver__factory.ts:51
