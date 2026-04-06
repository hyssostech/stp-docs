# Class: StpSymbol

STP military symbol

## Extends

- [`StpItem`](StpItem.md)

## Extended by

- [`StpTaskOrgUnit`](StpTaskOrgUnit.md)

## Constructors

### Constructor

> **new StpSymbol**(): `StpSymbol`

#### Returns

`StpSymbol`

#### Inherited from

[`StpItem`](StpItem.md).[`constructor`](StpItem.md#constructor)

## Properties

### affiliation

> **affiliation**: `"pending"` \| `"unknown"` \| `"assumedfriend"` \| `"friend"` \| `"neutral"` \| `"suspected"` \| `"hostile"` \| `undefined`

Symbol affiliation

***

### alt

> **alt**: `number` \| `undefined`

Alternate index - rank of this symbol interpretation amongst the interpretation hypothesis

#### Inherited from

[`StpItem`](StpItem.md).[`alt`](StpItem.md#alt)

***

### altitude

> **altitude**: `number` \| `undefined`

Symbol altitude

***

### branch

> **branch**: `"installation"` \| `"weapon"` \| `"ground_unit"` \| `"civilian_air"` \| `"special_operations"` \| `"vstol"` \| `"equipment"` \| `"military_air"` \| `"military_sea"` \| `"military_submarine"` \| `undefined`

Branch: equipment, ground_unit, ...

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

Regular symbol description - name/type of the symbol plus designators, but may omit "friendly", "present" and other assumed decorators

***

### designator1

> **designator1**: `string` \| `undefined`

Symbol designator

***

### designator2

> **designator2**: `string` \| `undefined`

Additional designator, e.g. in a company boundary, indicating the designator of the company to the S or E

***

### disCode

> **disCode**: [`DISCode`](DISCode.md) \| `undefined`

C2SIM SISIEntityType - DIS code

***

### echelon

> **echelon**: `"none"` \| `"team"` \| `"squad"` \| `"section"` \| `"platoon"` \| `"company"` \| `"battalion"` \| `"regiment"` \| `"brigade"` \| `"division"` \| `"corps"` \| `"army"` \| `"armygroup"` \| `"region"` \| `"command"` \| `undefined`

Symbol echelon if applicable

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

### federate

> **federate**: `string` \| `undefined`

C2SIM federate this entity is assigned to

***

### fsTYPE

> **fsTYPE**: `string` \| `undefined`

Type of item: unit | mootw | equipment | tg | task |

#### Inherited from

[`StpItem`](StpItem.md).[`fsTYPE`](StpItem.md#fstype)

***

### fullDescription

> **fullDescription**: `string` \| `undefined`

Full description of the symbol

***

### interval

> **interval**: [`Interval`](Interval.md) \| `undefined`

Symbol time interval, if any

#### Inherited from

[`StpItem`](StpItem.md).[`interval`](StpItem.md#interval)

***

### location

> **location**: [`Location`](Location.md) \| `undefined`

Location of the symbol

***

### maxAltitude

> **maxAltitude**: `number` \| `undefined`

Symbol maximal altitude if a range is supported

***

### minAltitude

> **minAltitude**: `number` \| `undefined`

Symbol minimal altitude if a range is supported

***

### modifier

> **modifier**: `"none"` \| `"dummy"` \| `"hq"` \| `"dummy_hq"` \| `"task_force "` \| `"dummy_task_force"` \| `"task_force_hq"` \| `"dummytask_force_hq"` \| `"installation"` \| `undefined`

HQ and Task Force modifier

***

### parent

> **parent**: `string` \| `undefined`

Parent unit designator

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

### resources

> **resources**: [`Resource`](Resource.md)[] \| `undefined`

C2SIM resources

***

### shortDescription

> **shortDescription**: `string` \| `undefined`

Short symbol description - just the essential distinguishing elements, e.g. designators

***

### sidc

> **sidc**: [`Sidc`](Sidc.md) \| `undefined`

2525D and C military ids of this symbol

***

### status

> **status**: `"present"` \| `"anticipated"` \| `undefined`

Symbol status

***

### strength

> **strength**: `"none"` \| `"reduced"` \| `"reinforced"` \| `"reduced_reinforced"` \| `undefined`

Strength modifier

***

### timeFrom

> **timeFrom**: `Date` \| `undefined`

Start time, e.g. of a Restricted Operations Zone

***

### timeTo

> **timeTo**: `Date` \| `undefined`

End time, e.g. of a Restricted Operations Zone

***

### toUnitPoid

> **toUnitPoid**: `string` \| `undefined`

For symbols created from a TO, unique id of the Task Org Unit that this symbol was created from

## Accessors

### charlieSIDC

#### Get Signature

> **get** **charlieSIDC**(): `string` \| `undefined`

Computed 2525C symbol identifier: legacy if available

##### Returns

`string` \| `undefined`

***

### deltaSIDC

#### Get Signature

> **get** **deltaSIDC**(): `string` \| `undefined`

Computed 2525D symbol identifier: partA+partB when available

##### Returns

`string` \| `undefined`

## Methods

### asGeoJSON()

> **asGeoJSON**(): `Feature`\<`any`\>

Symbol's GeoJSON representation

#### Returns

`Feature`\<`any`\>
