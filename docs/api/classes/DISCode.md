# Class: DISCode

DIS Code

## Constructors

### Constructor

> **new DISCode**(`category`, `country`, `domain`, `extra`, `kind`, `specific`, `subcategory`): `DISCode`

Constructor

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `category` | `number` | - |
| `country` | `string` | - |
| `domain` | `number` | - |
| `extra` | `number` | - |
| `kind` | `number` | - |
| `specific` | `number` | - |
| `subcategory` | `number` | - |

#### Returns

`DISCode`

## Properties

### category

> **category**: `number` \| `undefined`

DIS category

***

### country

> **country**: `string` \| `undefined`

DIS country code

***

### domain

> **domain**: `number` \| `undefined`

DIS domain

***

### extra

> **extra**: `number` \| `undefined`

DIS "extra" code

***

### kind

> **kind**: `number` \| `undefined`

DIS kind

***

### specific

> **specific**: `number` \| `undefined`

DIS "specific" code

***

### subcategory

> **subcategory**: `number` \| `undefined`

DIS subcategory

## Methods

### equals()

> **equals**(`rhs`): `boolean`

Compares this content to another object's

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `rhs` | `DISCode` | Object to compare to this |

#### Returns

`boolean`

True if rhs' contents are the same as this
