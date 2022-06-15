[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NewLifecycle

# Interface: NewLifecycle<P, S, SS\>

[<internal>](../modules/internal_.md).NewLifecycle

## Type parameters

| Name |
| :------ |
| `P` |
| `S` |
| `SS` |

## Hierarchy

- **`NewLifecycle`**

  ↳ [`ComponentLifecycle`](internal_.ComponentLifecycle.md)

## Table of contents

### Methods

- [componentDidUpdate](internal_.NewLifecycle.md#componentdidupdate)
- [getSnapshotBeforeUpdate](internal_.NewLifecycle.md#getsnapshotbeforeupdate)

## Methods

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | [`Readonly`](../modules/internal_.md#readonly)<`P`\> |
| `prevState` | [`Readonly`](../modules/internal_.md#readonly)<`S`\> |
| `snapshot?` | `SS` |

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:658

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): ``null`` \| `SS`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | [`Readonly`](../modules/internal_.md#readonly)<`P`\> |
| `prevState` | [`Readonly`](../modules/internal_.md#readonly)<`S`\> |

#### Returns

``null`` \| `SS`

#### Defined in

node_modules/@types/react/index.d.ts:652
