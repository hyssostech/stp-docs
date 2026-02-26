# Class: StpC2SIMOptions

C2SIM generation options

## Constructors

### Constructor

> **new StpC2SIMOptions**(): `StpC2SIMOptions`

#### Returns

`StpC2SIMOptions`

## Properties

### addOrphanTgToInitialization

> **addOrphanTgToInitialization**: `boolean` \| `undefined`

Add TGs that are not included in any Task as MapGraphicID elements in the Initialization document

***

### entityNameCharLimit

> **entityNameCharLimit**: `number` \| `undefined`

Maximum number of character for generate entitiy names - VRF Interface restriction - 0 for none

***

### exportFileDir

> **exportFileDir**: `string` \| `undefined`

Folder to write export json file to.

***

### friendFstName

> **friendFstName**: `string` \| `undefined`

Friendly forces name

***

### friendFstUUID

> **friendFstUUID**: `string` \| `undefined`

Friendly forces unique id - defaults to "00000000-0000-0001-0000-000000000000"

***

### fromSenderUUID

> **fromSenderUUID**: `string` \| `undefined`

Sender unique id - defaults to "00000000-0000-0001-0001-000000000000"

***

### fullTO

> **fullTO**: `boolean` \| `undefined`

Include the full TO (and all TG) in the Initialization and Order document. If false, just the elements that are placed in the map (and their subordinates) are included

***

### hostileFstName

> **hostileFstName**: `string` \| `undefined`

Hostile forces name

***

### hostileFstUUID

> **hostileFstUUID**: `string` \| `undefined`

Hostile forces unique id - defaults to "00000000-0000-0002-0000-000000000000"

***

### includeMapGraphicId

> **includeMapGraphicId**: `boolean` \| `undefined`

Place Task TGs  MapGraphicID elements in the Initialization documents, rather than the Orders

***

### neutralFstName

> **neutralFstName**: `string` \| `undefined`

Neutral forces name

***

### neutralFstUUID

> **neutralFstUUID**: `string` \| `undefined`

Neutral forces unique id - defaults to "00000000-0000-0003-0000-000000000000"

***

### phaseDuration

> **phaseDuration**: `number` \| `undefined`

Amount of minutes each STP phase takes

***

### placeAllTgInInitialization

> **placeAllTgInInitialization**: `boolean` \| `undefined`

Place Task TGs  MapGraphicID elements in the Initialization documents, rather than the Orders

***

### resetBeforeInitialize

> **resetBeforeInitialize**: `boolean` \| `undefined`

Force a C2SIM server state transition to Uninitialized before pushing Initialization.
Used to clear up the state to clear previous initializations - if not used, Initialization 
may be merged with previous ones

***

### restPassword

> **restPassword**: `string` \| `undefined`

C2SIM REST endpoint password

***

### restUrl

> **restUrl**: `string` \| `undefined`

Full C2SIM server endpoint, including host:port/path, e.g. "http://10.2.10.30:8080/C2SIMServer</param>

***

### rulesOfEngagement

> **rulesOfEngagement**: `"ROEHold"` \| `"ROEFree"` \| `"ROETight"` \| `undefined`

Rules of Engagement

***

### runAfterInitialize

> **runAfterInitialize**: `boolean` \| `undefined`

Force a C2SIM server state transition to Running right after pushing Initialization
This is just required if interfaces that can only be started after the Initialization is shared are used
One example is the VRF interface 2.16

***

### schemaVersion

> **schemaVersion**: `string` \| `undefined`

Use the older version of the C2SIM schema - v1.0.0 - for compatibility with existing tooling

***

### serverProtocol

> **serverProtocol**: `string` \| `undefined`

Server protocol version: "1.0.0", "1.0.1", "1.0.2"

***

### startDate

> **startDate**: `Date` \| `undefined`

Amount of minutes each STP phase takes

***

### stompUrl

> **stompUrl**: `string` \| `undefined`

Full STOMP service endpoint, including host:port/destination, e.g. "http://10.2.10.30:61613/topic/C2SIM"</param>

***

### systemName

> **systemName**: `string` \| `undefined`

value of the <SystemEntityList>/<SystemName> element included in the C2SIM Initialization document

***

### toReceiverUUID

> **toReceiverUUID**: `string` \| `undefined`

Receiver unique id - defaults to "00000000-0007-0001-0000-000000000000"

***

### unknownFstName

> **unknownFstName**: `string` \| `undefined`

Unknown forces name

***

### unknownFstUUID

> **unknownFstUUID**: `string` \| `undefined`

Unknown forces unique id - defaults to "00000000-0000-0004-0000-000000000000"

***

### updateUnitPositions

> **updateUnitPositions**: `boolean` \| `undefined`

Amount of minutes each STP phase takes
