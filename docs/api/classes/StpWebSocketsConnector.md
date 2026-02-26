# Class: StpWebSocketsConnector

Implements a connector to STP's native OAA pub/sub service via WebSockets

## Implements

IStpConnector - [IStpConnector](../interfaces/IStpConnector.md)

## Implements

- [`IStpConnector`](../interfaces/IStpConnector.md)

## Constructors

### Constructor

> **new StpWebSocketsConnector**(`connstring`): `StpWebSocketsConnector`

Construct a connection object

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `connstring` | `string` | Websocket connection string - "ws://server.com:port" |

#### Returns

`StpWebSocketsConnector`

## Properties

### connstring

> **connstring**: `string`

***

### DEFAULT\_TIMEOUT

> `readonly` **DEFAULT\_TIMEOUT**: `number` = `30`

***

### machineId

> **machineId**: `string` \| `undefined`

***

### name

> **name**: `string` \| `undefined`

Unique service instance name, different if there are concurrent instances running

#### Implementation of

[`IStpConnector`](../interfaces/IStpConnector.md).[`name`](../interfaces/IStpConnector.md#name)

***

### onError

> **onError**: (`error`) => `void` \| `undefined`

Event handler invoked when a connection error occurs

#### Param

Error description

#### Implementation of

[`IStpConnector`](../interfaces/IStpConnector.md).[`onError`](../interfaces/IStpConnector.md#onerror)

***

### onInform

> **onInform**: (`message`) => `void` \| `undefined`

Event handler invoked by STP when a message matching one of the Solvables is posted by some service

#### Param

STP API message to handle

#### Implementation of

[`IStpConnector`](../interfaces/IStpConnector.md).[`onInform`](../interfaces/IStpConnector.md#oninform)

***

### onRequest

> **onRequest**: (`message`) => `string`[] \| `undefined`

Event handler invoked by STP when a service makes a request matching one of the Solvables

#### Param

STP API message to handle

#### Returns

STP API response

#### Implementation of

[`IStpConnector`](../interfaces/IStpConnector.md).[`onRequest`](../interfaces/IStpConnector.md#onrequest)

***

### serviceName

> **serviceName**: `string` \| `undefined`

***

### sessionId

> **sessionId**: `string` \| `undefined`

***

### socket

> **socket**: `WebSocket` \| `null`

***

### solvables

> **solvables**: `string`[] \| `undefined`

***

### timeout

> **timeout**: `number` \| `undefined`

## Accessors

### connState

#### Get Signature

> **get** **connState**(): `string`

##### Returns

`string`

***

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

True if the connection is open and capable of sending and receiving messages

##### Returns

`boolean`

True if the connection is open and capable of sending and receiving messages

#### Implementation of

[`IStpConnector`](../interfaces/IStpConnector.md).[`isConnected`](../interfaces/IStpConnector.md#isconnected)

***

### isConnecting

#### Get Signature

> **get** **isConnecting**(): `boolean`

##### Returns

`boolean`

## Methods

### connect()

> **connect**(`serviceName`, `solvables`, `timeout?`, `machineId?`, `sessionId?`): `Promise`\<`string` \| `undefined`\>

Connect and register the service, informing of the subscriptions it handles / consumes

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `serviceName` | `string` | `undefined` | Name of the service that is connecting |
| `solvables` | `string`[] | `undefined` | Array of messages that this service handles |
| `timeout` | `number` | `...` | Optional number of seconds to wait for a connection before failing |
| `machineId` | `string` \| `null` | `null` | Optional machine Id to use. If not provided, it is set to some unique Id. |
| `sessionId` | `string` \| `null` | `null` | Optional session Id to use. If not provided: 1. the suffix to the WebSocket connection string is used 2. if no WebSocket suffix was provided, the machineId is used 3. If machineId is not provided, a unique random Id is used. |

#### Returns

`Promise`\<`string` \| `undefined`\>

The actual sessionId used - the one provided here or a default set by STP

#### Implementation of

[`IStpConnector`](../interfaces/IStpConnector.md).[`connect`](../interfaces/IStpConnector.md#connect)

***

### disconnect()

> **disconnect**(`timeout?`): `Promise`\<`void`\>

Disconnect from STP

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `timeout` | `number` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStpConnector`](../interfaces/IStpConnector.md).[`disconnect`](../interfaces/IStpConnector.md#disconnect)

***

### inform()

> **inform**(`message`, `timeout?`): `Promise`\<`void`\>

Send a message/command to STP

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | STP API message to send |
| `timeout` | `number` | - |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStpConnector`](../interfaces/IStpConnector.md).[`inform`](../interfaces/IStpConnector.md#inform)

***

### request()

> **request**(`message`, `timeout?`): `Promise`\<`any`\>

Make a STP request - equivalent to an RPC call

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | STP API message to send |
| `timeout` | `number` | - |

#### Returns

`Promise`\<`any`\>

STP API responses

#### Implementation of

[`IStpConnector`](../interfaces/IStpConnector.md).[`request`](../interfaces/IStpConnector.md#request)
