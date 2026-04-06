# Class: StpItem

Common STP properties

## Extended by

- [`StpSymbol`](StpSymbol.md)
- [`StpTask`](StpTask.md)

## Constructors

### Constructor

> **new StpItem**(): `StpItem`

#### Returns

`StpItem`

## Properties

### alt

> **alt**: `number` \| `undefined`

Alternate index - rank of this symbol interpretation amongst the interpretation hypothesis

***

### confidence

> **confidence**: `number` \| `undefined`

Confidence score of the recognition

***

### creatorRole

> **creatorRole**: `string` \| `undefined`

Role that created the symbol: S2, S3, S4, Eng, FSO

***

### extensions?

> `optional` **extensions**: `Record`\<`string`, `unknown`\>

Open-ended client-defined extension properties.
Extensions are roundtripped through STP: set on addSymbol/addTask/etc.,
persisted in the STP feature structure layer, and returned on events like
onSymbolAdded/onSymbolModified/etc.
Values can be primitives, arrays, or nested objects.

***

### fsTYPE

> **fsTYPE**: `string` \| `undefined`

Type of item: unit | mootw | equipment | tg | task |

***

### interval

> **interval**: [`Interval`](Interval.md) \| `undefined`

Symbol time interval, if any

***

### parentCoa

> **parentCoa**: `string` \| `undefined`

Unique id of the COA this symbol belongs to

***

### poid

> **poid**: `string` \| `undefined`

STP unique identifier
