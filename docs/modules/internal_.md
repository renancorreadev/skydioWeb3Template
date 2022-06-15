[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / <internal\>

# Namespace: <internal\>

## Table of contents

### Classes

- [BaseProvider](../classes/internal_.BaseProvider.md)
- [Event](../classes/internal_.Event.md)
- [Formatter](../classes/internal_.Formatter.md)
- [JsonRpcProvider](../classes/internal_.JsonRpcProvider.md)
- [JsonRpcSigner](../classes/internal_.JsonRpcSigner.md)
- [Resolver](../classes/internal_.Resolver.md)
- [UncheckedJsonRpcSigner](../classes/internal_.UncheckedJsonRpcSigner.md)
- [Web3Provider](../classes/internal_.Web3Provider.md)

### Interfaces

- [Avatar](../interfaces/internal_.Avatar.md)
- [EnsProvider](../interfaces/internal_.EnsProvider.md)
- [EnsResolver](../interfaces/internal_.EnsResolver.md)
- [FilterByBlockHash](../interfaces/internal_.FilterByBlockHash.md)
- [RefCounted](../interfaces/internal_.RefCounted.md)
- [Timer](../interfaces/internal_.Timer.md)
- [TypedDataDomain](../interfaces/internal_.TypedDataDomain.md)
- [TypedDataField](../interfaces/internal_.TypedDataField.md)
- [TypedDataSigner](../interfaces/internal_.TypedDataSigner.md)

### Type Aliases

- [ConnectionInfo](internal_.md#connectioninfo)
- [ExternalProvider](internal_.md#externalprovider)
- [FormatFunc](internal_.md#formatfunc)
- [FormatFuncs](internal_.md#formatfuncs)
- [Formats](internal_.md#formats)
- [JsonRpcFetchFunc](internal_.md#jsonrpcfetchfunc)
- [Networkish](internal_.md#networkish)

## Type Aliases

### ConnectionInfo

Ƭ **ConnectionInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowGzip?` | `boolean` |
| `allowInsecureAuthentication?` | `boolean` |
| `errorPassThrough?` | `boolean` |
| `headers?` | { `[key: string]`: `string` \| `number`;  } |
| `password?` | `string` |
| `skipFetchSetup?` | `boolean` |
| `throttleLimit?` | `number` |
| `throttleSlotInterval?` | `number` |
| `timeout?` | `number` |
| `url` | `string` |
| `user?` | `string` |
| `throttleCallback?` | (`attempt`: `number`, `url`: `string`) => `Promise`<`boolean`\> |

#### Defined in

node_modules/@ethersproject/web/lib/index.d.ts:1

___

### ExternalProvider

Ƭ **ExternalProvider**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `host?` | `string` |
| `isMetaMask?` | `boolean` |
| `isStatus?` | `boolean` |
| `path?` | `string` |
| `request?` | (`request`: { `method`: `string` ; `params?`: `any`[]  }) => `Promise`<`any`\> |
| `send?` | (`request`: { `method`: `string` ; `params?`: `any`[]  }, `callback`: (`error`: `any`, `response`: `any`) => `void`) => `void` |
| `sendAsync?` | (`request`: { `method`: `string` ; `params?`: `any`[]  }, `callback`: (`error`: `any`, `response`: `any`) => `void`) => `void` |

#### Defined in

node_modules/@ethersproject/providers/lib/web3-provider.d.ts:3

___

### FormatFunc

Ƭ **FormatFunc**: (`value`: `any`) => `any`

#### Type declaration

▸ (`value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

##### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:4

___

### FormatFuncs

Ƭ **FormatFuncs**: `Object`

#### Index signature

▪ [key: `string`]: [`FormatFunc`](internal_.md#formatfunc)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:5

___

### Formats

Ƭ **Formats**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `block` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `blockWithTransactions` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `filter` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `filterLog` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `receipt` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `receiptLog` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `transaction` | [`FormatFuncs`](internal_.md#formatfuncs) |
| `transactionRequest` | [`FormatFuncs`](internal_.md#formatfuncs) |

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:8

___

### JsonRpcFetchFunc

Ƭ **JsonRpcFetchFunc**: (`method`: `string`, `params?`: `any`[]) => `Promise`<`any`\>

#### Type declaration

▸ (`method`, `params?`): `Promise`<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `any`[] |

##### Returns

`Promise`<`any`\>

#### Defined in

node_modules/@ethersproject/providers/lib/web3-provider.d.ts:21

___

### Networkish

Ƭ **Networkish**: [`Network`](internal_.md#network) \| `string` \| `number`

#### Defined in

node_modules/@ethersproject/networks/lib/types.d.ts:7
