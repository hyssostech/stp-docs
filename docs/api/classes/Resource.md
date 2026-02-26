# Class: Resource

## Constructors

### Constructor

> **new Resource**(`name`, `operationalQuantity`, `disCode`, `onHandQuantity`, `requiredOnHandQuantity`): `Resource`

Constructor

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `operationalQuantity` | `number` |
| `disCode` | [`DISCode`](DISCode.md) |
| `onHandQuantity` | `number` \| `undefined` |
| `requiredOnHandQuantity` | `number` \| `undefined` |

#### Returns

`Resource`

## Properties

### disCode

> **disCode**: [`DISCode`](DISCode.md) \| `undefined`

SISOEntityType - DIS code

***

### name

> **name**: `string` \| `undefined`

Resource name

***

### onHandQuantity

> **onHandQuantity**: `number` \| `undefined`

Optional on hand quantity

***

### operationalQuantity

> **operationalQuantity**: `number` \| `undefined`

Operational quantity

***

### requiredOnHandQuantity

> **requiredOnHandQuantity**: `number` \| `undefined`

Optional required on hand quantity

## Methods

### equals()

> **equals**(`rhs`): `boolean`

Compares this content to another object's

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rhs` | `Resource` | Object to compare to this |

#### Returns

`boolean`

True if rhs' contents are the same as this
