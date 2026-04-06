# Class: Sidc

2525D and C military codes

## Constructors

### Constructor

> **new Sidc**(): `Sidc`

#### Returns

`Sidc`

## Properties

### delta

> **delta**: `string` \| `undefined`

2525D 20 or 30 character code

***

### legacy

> **legacy**: `string` \| `undefined`

2525C legacy SIDC

***

### symbolSet

> **symbolSet**: `string` \| `undefined`

2525D symbol set

## Accessors

### charlie

#### Get Signature

> **get** **charlie**(): `string` \| `undefined`

Computed 2525C symbol identifier - just the legacy code when available

##### Returns

`string` \| `undefined`

***

### partA

#### Get Signature

> **get** **partA**(): `string` \| `undefined`

Part A of the 2525D id

##### Returns

`string` \| `undefined`

***

### partB

#### Get Signature

> **get** **partB**(): `string` \| `undefined`

Part B of the 2525D id

##### Returns

`string` \| `undefined`

***

### partC

#### Get Signature

> **get** **partC**(): `string` \| `undefined`

Part C of the 2525D id

##### Returns

`string` \| `undefined`

## Methods

### fromPlain()

> `static` **fromPlain**(`obj`): `Sidc`

Hydrate from a plain object, reconstructing delta from parts if needed.
Object.assign cannot set getter-only properties (partA/B/C), so we
must rebuild delta from the raw values the engine sends.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `any` |

#### Returns

`Sidc`
