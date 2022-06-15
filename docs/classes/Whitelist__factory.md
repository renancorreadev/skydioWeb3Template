[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / Whitelist\_\_factory

# Class: Whitelist\_\_factory

## Table of contents

### Constructors

- [constructor](Whitelist__factory.md#constructor)

### Properties

- [abi](Whitelist__factory.md#abi)

### Methods

- [connect](Whitelist__factory.md#connect)
- [createInterface](Whitelist__factory.md#createinterface)

## Constructors

### constructor

• **new Whitelist__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: `string`[] = `_abi`

#### Defined in

src/contracts/types/factories/Whitelist__factory.ts:31

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Whitelist`](../interfaces/Whitelist.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | [`Provider`](internal_.Provider.md) \| [`Signer`](internal_.Signer.md) |

#### Returns

[`Whitelist`](../interfaces/Whitelist.md)

#### Defined in

src/contracts/types/factories/Whitelist__factory.ts:35

___

### createInterface

▸ `Static` **createInterface**(): [`WhitelistInterface`](../interfaces/WhitelistInterface.md)

#### Returns

[`WhitelistInterface`](../interfaces/WhitelistInterface.md)

#### Defined in

src/contracts/types/factories/Whitelist__factory.ts:32
