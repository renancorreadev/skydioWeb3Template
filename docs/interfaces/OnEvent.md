[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / OnEvent

# Interface: OnEvent<TRes\>

## Type parameters

| Name |
| :------ |
| `TRes` |

## Callable

### OnEvent

▸ **OnEvent**<`TEvent`\>(`eventFilter`, `listener`): `TRes`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends [`TypedEvent`](TypedEvent.md)<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | [`TypedEventFilter`](TypedEventFilter.md)<`TEvent`\> |
| `listener` | [`TypedListener`](TypedListener.md)<`TEvent`\> |

#### Returns

`TRes`

#### Defined in

src/contracts/types/common.ts:24

### OnEvent

▸ **OnEvent**(`eventName`, `listener`): `TRes`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `listener` | [`Listener`](../modules/internal_.md#listener) |

#### Returns

`TRes`

#### Defined in

src/contracts/types/common.ts:28
