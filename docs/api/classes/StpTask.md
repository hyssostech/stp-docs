# Class: StpTask

STP military task

## Extends

- [`StpItem`](StpItem.md)

## Constructors

### Constructor

> **new StpTask**(): `StpTask`

#### Returns

`StpTask`

#### Inherited from

[`StpItem`](StpItem.md).[`constructor`](StpItem.md#constructor)

## Properties

### alt

> **alt**: `number` \| `undefined`

Alternate index - rank of this symbol interpretation amongst the interpretation hypothesis

#### Inherited from

[`StpItem`](StpItem.md).[`alt`](StpItem.md#alt)

***

### confidence

> **confidence**: `number` \| `undefined`

Confidence score of the recognition

#### Inherited from

[`StpItem`](StpItem.md).[`confidence`](StpItem.md#confidence)

***

### creatorRole

> **creatorRole**: `string` \| `undefined`

Role that created the symbol: S2, S3, S4, Eng, FSO

#### Inherited from

[`StpItem`](StpItem.md).[`creatorRole`](StpItem.md#creatorrole)

***

### description

> **description**: `string` \| `undefined`

Task description

***

### endTime

> **endTime**: `number` \| `undefined`

End time slot

***

### extensions?

> `optional` **extensions**: `Record`\<`string`, `unknown`\>

Open-ended client-defined extension properties.
Extensions are roundtripped through STP: set on addSymbol/addTask/etc.,
persisted in the STP feature structure layer, and returned on events like
onSymbolAdded/onSymbolModified/etc.
Values can be primitives, arrays, or nested objects.

#### Inherited from

[`StpItem`](StpItem.md).[`extensions`](StpItem.md#extensions)

***

### fsTYPE

> **fsTYPE**: `string` \| `undefined`

Type of item: unit | mootw | equipment | tg | task |

#### Inherited from

[`StpItem`](StpItem.md).[`fsTYPE`](StpItem.md#fstype)

***

### how

> **how**: [`TaskHow`](../enumerations/TaskHow.md) \| `undefined`

Task How

***

### interval

> **interval**: [`Interval`](Interval.md) \| `undefined`

Symbol time interval, if any

#### Inherited from

[`StpItem`](StpItem.md).[`interval`](StpItem.md#interval)

***

### language

> **language**: `string` \| `undefined`

Language describing the task

***

### movementFeatures

> **movementFeatures**: [`MovementFeatures`](MovementFeatures.md) \| `undefined`

Movement features

***

### name

> **name**: `string` \| `undefined`

Task name, such as 'AssaultObjectiveOnAxis'

***

### parentCoa

> **parentCoa**: `string` \| `undefined`

Unique id of the COA this symbol belongs to

#### Inherited from

[`StpItem`](StpItem.md).[`parentCoa`](StpItem.md#parentcoa)

***

### poid

> **poid**: `string` \| `undefined`

STP unique identifier

#### Inherited from

[`StpItem`](StpItem.md).[`poid`](StpItem.md#poid)

***

### prob

> **prob**: `number` \| `undefined`

Task interpretation likelihood

***

### rulesOfEngagement

> **rulesOfEngagement**: [`TaskROE`](../enumerations/TaskROE.md) \| `undefined`

Task Rules of Engagement

***

### speech

> **speech**: `string` \| `undefined`

Associated speech, if applicabel

***

### startTime

> **startTime**: `number` \| `undefined`

Start time slot

***

### supported

> **supported**: `string` \| `undefined`

Unique id of the supported unit, if applicable

***

### taskStatus

> **taskStatus**: `"implicit"` \| `"explicit"` \| `undefined`

Automatic or manual creation status

***

### tgs

> **tgs**: `string`[] \| `undefined`

Task's Tactical Graphics unique ids

***

### uiStatus

> **uiStatus**: `"confirming"` \| `"confirmed"` \| `undefined`

Confirmation status

***

### what

> **what**: [`TaskWhat`](../enumerations/TaskWhat.md) \| `undefined`

Task What

***

### who

> **who**: `string` \| `undefined`

Unique id of the unit executing the task

***

### why

> **why**: [`TaskWhy`](../enumerations/TaskWhy.md) \| `undefined`

Task Why
