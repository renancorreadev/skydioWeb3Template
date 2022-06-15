[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / ProviderExoticComponent

# Interface: ProviderExoticComponent<P\>

[<internal>](../modules/internal_.md).ProviderExoticComponent

## Type parameters

| Name |
| :------ |
| `P` |

## Hierarchy

- [`ExoticComponent`](internal_.ExoticComponent.md)<`P`\>

  ↳ **`ProviderExoticComponent`**

## Callable

### ProviderExoticComponent

▸ **ProviderExoticComponent**(`props`): ``null`` \| [`ReactElement`](internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](../modules/internal_.md#jsxelementconstructor)<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `P` |

#### Returns

``null`` \| [`ReactElement`](internal_.ReactElement.md)<`any`, `string` \| [`JSXElementConstructor`](../modules/internal_.md#jsxelementconstructor)<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:350

## Table of contents

### Properties

- [$$typeof](internal_.ProviderExoticComponent.md#$$typeof)
- [propTypes](internal_.ProviderExoticComponent.md#proptypes)

## Properties

### $$typeof

• `Readonly` **$$typeof**: `symbol`

#### Inherited from

[ExoticComponent](internal_.ExoticComponent.md).[$$typeof](internal_.ExoticComponent.md#$$typeof)

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### propTypes

• `Optional` **propTypes**: [`WeakValidationMap`](../modules/internal_.md#weakvalidationmap)<`P`\>

#### Defined in

node_modules/@types/react/index.d.ts:359
