[TypeDoc Pages Plugin](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / AbstractConnector

# Class: AbstractConnector

[<internal>](../modules/internal_.md).AbstractConnector

## Hierarchy

- [`EventEmitter`](internal_.EventEmitter-1.md)

  ↳ **`AbstractConnector`**

  ↳↳ [`InjectedConnector`](internal_.InjectedConnector.md)

## Table of contents

### Constructors

- [constructor](internal_.AbstractConnector.md#constructor)

### Properties

- [supportedChainIds](internal_.AbstractConnector.md#supportedchainids)
- [captureRejectionSymbol](internal_.AbstractConnector.md#capturerejectionsymbol)
- [captureRejections](internal_.AbstractConnector.md#capturerejections)
- [defaultMaxListeners](internal_.AbstractConnector.md#defaultmaxlisteners)
- [errorMonitor](internal_.AbstractConnector.md#errormonitor)

### Methods

- [activate](internal_.AbstractConnector.md#activate)
- [addListener](internal_.AbstractConnector.md#addlistener)
- [deactivate](internal_.AbstractConnector.md#deactivate)
- [emit](internal_.AbstractConnector.md#emit)
- [eventNames](internal_.AbstractConnector.md#eventnames)
- [getAccount](internal_.AbstractConnector.md#getaccount)
- [getChainId](internal_.AbstractConnector.md#getchainid)
- [getMaxListeners](internal_.AbstractConnector.md#getmaxlisteners)
- [getProvider](internal_.AbstractConnector.md#getprovider)
- [listenerCount](internal_.AbstractConnector.md#listenercount)
- [listeners](internal_.AbstractConnector.md#listeners)
- [off](internal_.AbstractConnector.md#off)
- [on](internal_.AbstractConnector.md#on)
- [once](internal_.AbstractConnector.md#once)
- [prependListener](internal_.AbstractConnector.md#prependlistener)
- [prependOnceListener](internal_.AbstractConnector.md#prependoncelistener)
- [rawListeners](internal_.AbstractConnector.md#rawlisteners)
- [removeAllListeners](internal_.AbstractConnector.md#removealllisteners)
- [removeListener](internal_.AbstractConnector.md#removelistener)
- [setMaxListeners](internal_.AbstractConnector.md#setmaxlisteners)
- [getEventListeners](internal_.AbstractConnector.md#geteventlisteners)
- [listenerCount](internal_.AbstractConnector.md#listenercount-1)
- [on](internal_.AbstractConnector.md#on-1)
- [once](internal_.AbstractConnector.md#once-1)
- [setMaxListeners](internal_.AbstractConnector.md#setmaxlisteners-1)

## Constructors

### constructor

• **new AbstractConnector**(`__namedParameters?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters?` | [`AbstractConnectorArguments`](../interfaces/internal_.AbstractConnectorArguments.md) |

#### Overrides

[EventEmitter](internal_.EventEmitter-1.md).[constructor](internal_.EventEmitter-1.md#constructor)

#### Defined in

node_modules/@web3-react/abstract-connector/dist/index.d.ts:6

## Properties

### supportedChainIds

• `Optional` `Readonly` **supportedChainIds**: `number`[]

#### Defined in

node_modules/@web3-react/abstract-connector/dist/index.d.ts:5

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](internal_.InjectedConnector.md#capturerejectionsymbol)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[captureRejectionSymbol](internal_.EventEmitter-1.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:301

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[captureRejections](internal_.EventEmitter-1.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:306

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[defaultMaxListeners](internal_.EventEmitter-1.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:307

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](internal_.InjectedConnector.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[errorMonitor](internal_.EventEmitter-1.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:300

## Methods

### activate

▸ `Abstract` **activate**(): `Promise`<[`ConnectorUpdate`](../interfaces/internal_.ConnectorUpdate.md)<`string` \| `number`\>\>

#### Returns

`Promise`<[`ConnectorUpdate`](../interfaces/internal_.ConnectorUpdate.md)<`string` \| `number`\>\>

#### Defined in

node_modules/@web3-react/abstract-connector/dist/index.d.ts:7

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`AbstractConnector`](internal_.AbstractConnector.md)

Alias for `emitter.on(eventName, listener)`.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`AbstractConnector`](internal_.AbstractConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[addListener](internal_.EventEmitter-1.md#addlistener)

#### Defined in

node_modules/@types/node/events.d.ts:327

___

### deactivate

▸ `Abstract` **deactivate**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@web3-react/abstract-connector/dist/index.d.ts:11

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[emit](internal_.EventEmitter-1.md#emit)

#### Defined in

node_modules/@types/node/events.d.ts:583

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[eventNames](internal_.EventEmitter-1.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:642

___

### getAccount

▸ `Abstract` **getAccount**(): `Promise`<``null`` \| `string`\>

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@web3-react/abstract-connector/dist/index.d.ts:10

___

### getChainId

▸ `Abstract` **getChainId**(): `Promise`<`string` \| `number`\>

#### Returns

`Promise`<`string` \| `number`\>

#### Defined in

node_modules/@web3-react/abstract-connector/dist/index.d.ts:9

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](internal_.AbstractConnector.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[getMaxListeners](internal_.EventEmitter-1.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:499

___

### getProvider

▸ `Abstract` **getProvider**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/@web3-react/abstract-connector/dist/index.d.ts:8

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[listenerCount](internal_.EventEmitter-1.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:589

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[listeners](internal_.EventEmitter-1.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### off

▸ **off**(`eventName`, `listener`): [`AbstractConnector`](internal_.AbstractConnector.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`AbstractConnector`](internal_.AbstractConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[off](internal_.EventEmitter-1.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:472

___

### on

▸ **on**(`eventName`, `listener`): [`AbstractConnector`](internal_.AbstractConnector.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`AbstractConnector`](internal_.AbstractConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[on](internal_.EventEmitter-1.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:358

___

### once

▸ **once**(`eventName`, `listener`): [`AbstractConnector`](internal_.AbstractConnector.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`since`** v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`AbstractConnector`](internal_.AbstractConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[once](internal_.EventEmitter-1.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:387

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`AbstractConnector`](internal_.AbstractConnector.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`AbstractConnector`](internal_.AbstractConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[prependListener](internal_.EventEmitter-1.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:607

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`AbstractConnector`](internal_.AbstractConnector.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`AbstractConnector`](internal_.AbstractConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[prependOnceListener](internal_.EventEmitter-1.md#prependoncelistener)

#### Defined in

node_modules/@types/node/events.d.ts:623

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[rawListeners](internal_.EventEmitter-1.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:542

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`AbstractConnector`](internal_.AbstractConnector.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`AbstractConnector`](internal_.AbstractConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[removeAllListeners](internal_.EventEmitter-1.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`AbstractConnector`](internal_.AbstractConnector.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`AbstractConnector`](internal_.AbstractConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[removeListener](internal_.EventEmitter-1.md#removelistener)

#### Defined in

node_modules/@types/node/events.d.ts:467

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`AbstractConnector`](internal_.AbstractConnector.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`AbstractConnector`](internal_.AbstractConnector.md)

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[setMaxListeners](internal_.EventEmitter-1.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`since`** v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md) \| [`DOMEventTarget`](../interfaces/internal_.DOMEventTarget.md) |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[getEventListeners](internal_.EventEmitter-1.md#geteventlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:270

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md) | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[listenerCount](internal_.EventEmitter-1.md#listenercount-1)

#### Defined in

node_modules/@types/node/events.d.ts:242

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): [`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](../interfaces/internal_.EventEmitter-2.md) | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) | - |

#### Returns

[`AsyncIterableIterator`](../interfaces/internal_.AsyncIterableIterator.md)<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[on](internal_.EventEmitter-1.md#on-1)

#### Defined in

node_modules/@types/node/events.d.ts:221

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`NodeEventTarget`](../interfaces/internal_.NodeEventTarget.md) |
| `eventName` | `string` \| `symbol` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[once](internal_.EventEmitter-1.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`DOMEventTarget`](../interfaces/internal_.DOMEventTarget.md) |
| `eventName` | `string` |
| `options?` | [`StaticEventEmitterOptions`](../interfaces/internal_.StaticEventEmitterOptions.md) |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[once](internal_.EventEmitter-1.md#once-1)

#### Defined in

node_modules/@types/node/events.d.ts:162

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `EventEmitter.setMaxListeners()` method allows the default limit to be
modified (if eventTargets is empty) or modify the limit specified in every `EventTarget` | `EventEmitter` passed as arguments.
The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

```js
EventEmitter.setMaxListeners(20);
// Equivalent to
EventEmitter.defaultMaxListeners = 20;

const eventTarget = new EventTarget();
// Only way to increase limit for `EventTarget` instances
// as these doesn't expose its own `setMaxListeners` method
EventEmitter.setMaxListeners(20, eventTarget);
```

**`since`** v15.3.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `n?` | `number` |
| `...eventTargets` | ([`EventEmitter`](../interfaces/internal_.EventEmitter-2.md) \| [`DOMEventTarget`](../interfaces/internal_.DOMEventTarget.md))[] |

#### Returns

`void`

#### Inherited from

[EventEmitter](internal_.EventEmitter-1.md).[setMaxListeners](internal_.EventEmitter-1.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:290