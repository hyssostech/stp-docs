# Class: StpTaskOrgUnit

STP Task Org (ORBAT) Unit

## Extends

- [`StpSymbol`](StpSymbol.md)

## Constructors

### Constructor

> **new StpTaskOrgUnit**(): `StpTaskOrgUnit`

#### Returns

`StpTaskOrgUnit`

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`constructor`](StpSymbol.md#constructor)

## Properties

### affiliation

> **affiliation**: `"pending"` \| `"unknown"` \| `"assumedfriend"` \| `"friend"` \| `"neutral"` \| `"suspected"` \| `"hostile"` \| `undefined`

Symbol affiliation

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`affiliation`](StpSymbol.md#affiliation)

***

### alt

> **alt**: `number` \| `undefined`

Alternate index - rank of this symbol interpretation amongst the interpretation hypothesis

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`alt`](StpSymbol.md#alt)

***

### altitude

> **altitude**: `number` \| `undefined`

Symbol altitude

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`altitude`](StpSymbol.md#altitude)

***

### branch

> **branch**: `"installation"` \| `"weapon"` \| `"ground_unit"` \| `"civilian_air"` \| `"special_operations"` \| `"vstol"` \| `"equipment"` \| `"military_air"` \| `"military_sea"` \| `"military_submarine"` \| `undefined`

Branch: equipment, ground_unit, ...

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`branch`](StpSymbol.md#branch)

***

### confidence

> **confidence**: `number` \| `undefined`

Confidence score of the recognition

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`confidence`](StpSymbol.md#confidence)

***

### creatorRole

> **creatorRole**: `string` \| `undefined`

Role that created the symbol: S2, S3, S4, Eng, FSO

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`creatorRole`](StpSymbol.md#creatorrole)

***

### description

> **description**: `string` \| `undefined`

Regular symbol description - name/type of the symbol plus designators, but may omit "friendly", "present" and other assumed decorators

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`description`](StpSymbol.md#description)

***

### designator1

> **designator1**: `string` \| `undefined`

Symbol designator

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`designator1`](StpSymbol.md#designator1)

***

### designator2

> **designator2**: `string` \| `undefined`

Additional designator, e.g. in a company boundary, indicating the designator of the company to the S or E

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`designator2`](StpSymbol.md#designator2)

***

### disCode

> **disCode**: [`DISCode`](DISCode.md) \| `undefined`

C2SIM SISIEntityType - DIS code

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`disCode`](StpSymbol.md#discode)

***

### echelon

> **echelon**: `"none"` \| `"team"` \| `"squad"` \| `"section"` \| `"platoon"` \| `"company"` \| `"battalion"` \| `"regiment"` \| `"brigade"` \| `"division"` \| `"corps"` \| `"army"` \| `"armygroup"` \| `"region"` \| `"command"` \| `undefined`

Symbol echelon if applicable

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`echelon`](StpSymbol.md#echelon)

***

### extensions?

> `optional` **extensions**: `Record`\<`string`, `unknown`\>

Open-ended client-defined extension properties.
Extensions are roundtripped through STP: set on addSymbol/addTask/etc.,
persisted in the STP feature structure layer, and returned on events like
onSymbolAdded/onSymbolModified/etc.
Values can be primitives, arrays, or nested objects.

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`extensions`](StpSymbol.md#extensions)

***

### federate

> **federate**: `string` \| `undefined`

C2SIM federate this entity is assigned to

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`federate`](StpSymbol.md#federate)

***

### fsTYPE

> **fsTYPE**: `"task_org_unit"` \| `undefined`

Item type

#### Overrides

[`StpSymbol`](StpSymbol.md).[`fsTYPE`](StpSymbol.md#fstype)

***

### fullDescription

> **fullDescription**: `string` \| `undefined`

Full description of the symbol

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`fullDescription`](StpSymbol.md#fulldescription)

***

### info

> **info**: `string` \| `undefined`

Additional information

***

### interval

> **interval**: [`Interval`](Interval.md) \| `undefined`

Symbol time interval, if any

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`interval`](StpSymbol.md#interval)

***

### location

> **location**: [`Location`](Location.md) \| `undefined`

Location of the symbol

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`location`](StpSymbol.md#location)

***

### maxAltitude

> **maxAltitude**: `number` \| `undefined`

Symbol maximal altitude if a range is supported

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`maxAltitude`](StpSymbol.md#maxaltitude)

***

### minAltitude

> **minAltitude**: `number` \| `undefined`

Symbol minimal altitude if a range is supported

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`minAltitude`](StpSymbol.md#minaltitude)

***

### modifier

> **modifier**: `"none"` \| `"dummy"` \| `"hq"` \| `"dummy_hq"` \| `"task_force "` \| `"dummy_task_force"` \| `"task_force_hq"` \| `"dummytask_force_hq"` \| `"installation"` \| `undefined`

HQ and Task Force modifier

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`modifier`](StpSymbol.md#modifier)

***

### name

> **name**: `string` \| `undefined`

Unit name - can be different that the designators, for example "Triple Nickel" for 5/5-5
Name can be an expression with grouping (parenthesis) alternatives (pipe symbol) and optional (square brackets).
Example: (ONE | FIRST) [ROYAL] IRISH [GUARDS] [REGIMENT]	
Accepts these names, amongst others:
  ONE IRISH
  FIRST IRISH
  ONE ROYAL IRISH
  FIRST ROYAL IRISH REGIMENT
  ONE ROYAL ISISH GUARDS REGIMENT

***

### parent

> **parent**: `string` \| `undefined`

Parent unit designator

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`parent`](StpSymbol.md#parent)

***

### parentCoa

> **parentCoa**: `string` \| `undefined`

Unique id of the COA this symbol belongs to

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`parentCoa`](StpSymbol.md#parentcoa)

***

### parentTO

> **parentTO**: `string` \| `undefined`

Unique Id of the StpTaskOrg this element belongs to

***

### poid

> **poid**: `string` \| `undefined`

STP unique identifier

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`poid`](StpSymbol.md#poid)

***

### resources

> **resources**: [`Resource`](Resource.md)[] \| `undefined`

C2SIM resources

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`resources`](StpSymbol.md#resources)

***

### shortDescription

> **shortDescription**: `string` \| `undefined`

Short symbol description - just the essential distinguishing elements, e.g. designators

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`shortDescription`](StpSymbol.md#shortdescription)

***

### sidc

> **sidc**: [`Sidc`](Sidc.md) \| `undefined`

2525D and C military ids of this symbol

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`sidc`](StpSymbol.md#sidc)

***

### speechPhrases

> **speechPhrases**: `string`[] \| `undefined`

Speech phrases that can be used to place this TO unit - generated from `name`

***

### status

> **status**: `"present"` \| `"anticipated"` \| `undefined`

Symbol status

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`status`](StpSymbol.md#status)

***

### strength

> **strength**: `"none"` \| `"reduced"` \| `"reinforced"` \| `"reduced_reinforced"` \| `undefined`

Strength modifier

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`strength`](StpSymbol.md#strength)

***

### timeFrom

> **timeFrom**: `Date` \| `undefined`

Start time, e.g. of a Restricted Operations Zone

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`timeFrom`](StpSymbol.md#timefrom)

***

### timeTo

> **timeTo**: `Date` \| `undefined`

End time, e.g. of a Restricted Operations Zone

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`timeTo`](StpSymbol.md#timeto)

***

### toUnitPoid

> **toUnitPoid**: `string` \| `undefined`

For symbols created from a TO, unique id of the Task Org Unit that this symbol was created from

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`toUnitPoid`](StpSymbol.md#tounitpoid)

***

### unitType

> **unitType**: `string` \| `undefined`

Function description, such as 'MECHANIZED INFANTRY'

## Accessors

### charlieSIDC

#### Get Signature

> **get** **charlieSIDC**(): `string` \| `undefined`

Computed 2525C symbol identifier: legacy if available

##### Returns

`string` \| `undefined`

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`charlieSIDC`](StpSymbol.md#charliesidc)

***

### deltaSIDC

#### Get Signature

> **get** **deltaSIDC**(): `string` \| `undefined`

Computed 2525D symbol identifier: partA+partB when available

##### Returns

`string` \| `undefined`

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`deltaSIDC`](StpSymbol.md#deltasidc)

## Methods

### asGeoJSON()

> **asGeoJSON**(): `Feature`\<`any`\>

Symbol's GeoJSON representation

#### Returns

`Feature`\<`any`\>

#### Inherited from

[`StpSymbol`](StpSymbol.md).[`asGeoJSON`](StpSymbol.md#asgeojson)
