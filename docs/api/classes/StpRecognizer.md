# Class: StpRecognizer

Commands and events to interact with STP

## Constructors

### Constructor

> **new StpRecognizer**(`stpConnector`): `StpRecognizer`

Construct STP SDK object

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `stpConnector` | [`IStpConnector`](../interfaces/IStpConnector.md) | Connector object through which the SDK communicates with STP |

#### Returns

`StpRecognizer`

## Properties

### onCoaAdded

> **onCoaAdded**: (`poid`, `coa`, `isUndo`) => `void` \| `undefined`

A new COA has been added

#### Param

Unique identifier of the added COA

#### Param

Definition of COA to add

#### Param

True if this is the result of an undo operation (of a to COA delete)

***

### onCoaDeleted

> **onCoaDeleted**: (`poid`, `isUndo`) => `void` \| `undefined`

A COA has been deleted

#### Param

Unique identifier of the added COA

#### Param

True if this is the result of an undo operation (of a to COA add)

***

### onCoaModified

> **onCoaModified**: (`poid`, `coa`, `isUndo`) => `void` \| `undefined`

A COA has been modified

#### Param

Unique identifier of the added COA

#### Param

Modified COA definition

#### Param

True if this is the result of an undo operation (of a to COA modify)

***

### onCommand

> **onCommand**: (`operation`, `location`) => `void` \| `undefined`

Custom operation has been detected

#### Param

as defined in the Edits configuration table

#### Param

associated gesture (point, line, area)

***

### onInkProcessed

> **onInkProcessed**: () => `void` \| `undefined`

Sketched gestures have either been processed, or failed to process and can be cleared of the UI

***

### onMapOperation

> **onMapOperation**: (`operation`, `location`) => `void` \| `undefined`

Map operation (such as pan, zoom) has been detected

#### Param

'pan' | 'zoom'| ...

#### Param

associated gesture (point, line, area)

***

### onPenDown

> **onPenDown**: (`time`, `coord`) => `void` \| `undefined`

A pen down action was performed by a user

#### Param

Pen down time

#### Param

Pen down map coordinate

***

### onRoleSwitched

> **onRoleSwitched**: (`role`) => `void` \| `undefined`

A new role has become current/active

#### Param

***

### onSpeechRecognized

> **onSpeechRecognized**: (`phrases`) => `void` \| `undefined`

User speech was successfully transcribed

#### Param

Phrases that were recognized

***

### onStpMessage

> **onStpMessage**: (`msg`, `level`) => `void` \| `undefined`

Message indicating an STP issue or event to be displayed to the user

#### Param

Message describing the issue

#### Param

Type of message (see the corresponding enum)

***

### onSymbolAdded

> **onSymbolAdded**: (`alternates`, `isUndo`) => `void` \| `undefined`

A new symbol has been added

#### Param

One or more symbol interpretations, ranked by likelihood

#### Param

True if this is the result of an undo operation (of a symbol delete)

***

### onSymbolDeleted

> **onSymbolDeleted**: (`poid`, `isUndo`) => `void` \| `undefined`

A symbol has been deleted

#### Param

Unique symbol identifier of the deleted symbol

#### Param

True if this is the result of an undo operation (of a symbol add)

***

### onSymbolEdited

> **onSymbolEdited**: (`operation`, `location`) => `void` \| `undefined`

A symbol edit operation (such as select) has been detected
Notice that Delete, Move and attribute editing operations are automatically handled by STP
These are just events tht require action from the client UI

#### Param

'select' | other custom operations

#### Param

associated gesture (point, line, area)

***

### onSymbolModified

> **onSymbolModified**: (`poid`, `symbol`, `isUndo`) => `void` \| `undefined`

A symbol has been modified

#### Param

Unique symbol identifier of the modified symbol

#### Param

Symbol added

#### Param

True if this is the result of an undo operation (of a symbol modify)

***

### onSymbolReport

> **onSymbolReport**: (`poid`, `symbol`) => `void` \| `undefined`

An update report for a symbol has been received, e.g from C2SIM

#### Param

Unique symbol identifier of the updated symbol

#### Param

Updated symbol properties

***

### onTaskAdded

> **onTaskAdded**: (`poid`, `alternates`, `taskPoids`, `isUndo`) => `void` \| `undefined`

A new task has been added

#### Param

Unique identifier of the added task

#### Param

Ranked collection of alternate task interpretations

#### Param

True if this is the result of an undo operation (of a to unit add)

***

### onTaskDeleted

> **onTaskDeleted**: (`poid`, `isUndo`) => `void` \| `undefined`

A task has been deleted

#### Param

Unique identifier of the deleted task

#### Param

True if this is the result of an undo operation (of a to unit add)

***

### onTaskModified

> **onTaskModified**: (`poid`, `alternates`, `taskPoids`, `isUndo`) => `void` \| `undefined`

A task has been modified

#### Param

Unique identifier of the modified task

#### Param

Ranked collection of alternate task interpretations

#### Param

True if this is the result of an undo operation (of a to unit add)

***

### onTaskOrgAdded

> **onTaskOrgAdded**: (`taskOrg`, `isUndo`) => `void` \| `undefined`

A new task org  has been added

#### Param

Added TO

#### Param

True if this is the result of an undo operation (of a TO delete)

***

### onTaskOrgDeleted

> **onTaskOrgDeleted**: (`poid`, `isUndo`) => `void` \| `undefined`

A task org  has been deleted

#### Param

Unique identifier of the deleted TO

#### Param

True if this is the result of an undo operation (of a TO add)

***

### onTaskOrgModified

> **onTaskOrgModified**: (`poid`, `taskOrg`, `isUndo`) => `void` \| `undefined`

A task org  has been modified

#### Param

Unique symbol identifier of the modified symbol

#### Param

Modified TO

#### Param

True if this is the result of an undo operation (of a TO modify)

***

### onTaskOrgRelationshipAdded

> **onTaskOrgRelationshipAdded**: (`rel`, `isUndo`) => `void` \| `undefined`

A new task org relationship has been added

#### Param

Relationship added

#### Param

True if this is the result of an undo operation (of a to unit delete)

***

### onTaskOrgRelationshipDeleted

> **onTaskOrgRelationshipDeleted**: (`poid`, `isUndo`) => `void` \| `undefined`

A task org relationship has been deleted

#### Param

Unique identifier of the deleted to relationship

#### Param

True if this is the result of an undo operation (of a to unit add)

***

### onTaskOrgRelationshipModified

> **onTaskOrgRelationshipModified**: (`poid`, `rel`, `isUndo`) => `void` \| `undefined`

A task org relationship has been modified

#### Param

Unique identifier of the modified to relationship

#### Param

Relationship added

#### Param

True if this is the result of an undo operation (of a to unit modify)

***

### onTaskOrgSwitched

> **onTaskOrgSwitched**: (`taskOrg`) => `void` \| `undefined`

A new task org has become current/active

#### Param

***

### onTaskOrgUnitAdded

> **onTaskOrgUnitAdded**: (`unit`, `isUndo`) => `void` \| `undefined`

A new task org unit has been added

#### Param

Unit added

#### Param

True if this is the result of an undo operation (of a to unit delete)

***

### onTaskOrgUnitDeleted

> **onTaskOrgUnitDeleted**: (`poid`, `isUndo`) => `void` \| `undefined`

A task org unit has been deleted

#### Param

Unique identifier of the deleted to unit

#### Param

True if this is the result of an undo operation (of a to unit add)

***

### onTaskOrgUnitModified

> **onTaskOrgUnitModified**: (`poid`, `unit`, `isUndo`) => `void` \| `undefined`

A task org unit has been modified

#### Param

Unique symbol identifier of the modified symbol

#### Param

Unit added

#### Param

True if this is the result of an undo operation (of a to unit modify)

***

### serviceName

> **serviceName**: `string`

***

### stpConnector

> **stpConnector**: [`IStpConnector`](../interfaces/IStpConnector.md)

## Methods

### addCoa()

> **addCoa**(`coa`): `void`

Add a new COA to the scenario

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `coa` | [`StpCoa`](StpCoa.md) | COA to add |

#### Returns

`void`

***

### addSymbol()

> **addSymbol**(`symbol`): `void`

Request that a symbol be added by STP. The actual addition should only happen when STP responds with SymbolAdded

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `symbol` | [`StpSymbol`](StpSymbol.md) | Symbol to be added |

#### Returns

`void`

***

### addTask()

> **addTask**(`task`): `void`

Request that a task be added by STP. The actual addition should only happen when STP responds with TaskAdded

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `task` | [`StpTask`](StpTask.md) | Task to add |

#### Returns

`void`

***

### addTaskOrg()

> **addTaskOrg**(`taskOrg`): `void`

Add a new TO to the scenario

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `taskOrg` | [`StpTaskOrg`](StpTaskOrg.md) | TO to add |

#### Returns

`void`

TO's unique id

***

### addTaskOrgRelationship()

> **addTaskOrgRelationship**(`toUnit`): `void`

Request that a Task Org Relationship be added by STP. The actual addition should only happen when STP responds with TaskOrgRelationshipAdded

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toUnit` | [`StpTaskOrgRelationship`](StpTaskOrgRelationship.md) |

#### Returns

`void`

***

### addTaskOrgUnit()

> **addTaskOrgUnit**(`toUnit`): `void`

Request that a Task Org Unit be added by STP. The actual addition should only happen when STP responds with TaskOrgUnitAdded

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toUnit` | [`StpTaskOrgUnit`](StpTaskOrgUnit.md) | Task Org Unit to be added |

#### Returns

`void`

***

### chooseAlternate()

> **chooseAlternate**(`poid`, `nBestIndex`): `void`

Pick an alternate recognition for a symbol/task. The STP runtime responds with an object chosen notification

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | Unique identifier of the symbol for which an alternate is being picked |
| `nBestIndex` | `number` | Index indicating which of the current alternates is selected |

#### Returns

`void`

***

### confirmTask()

> **confirmTask**(`poid`, `nBestIndex`, `isConfirmed?`): `void`

Pick an alternate as the confirmed task. The STP runtime responds with a task update notification
in which uiStatus is set to 'confirmed'

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `poid` | `string` | `undefined` | Unique identifier of the task for which an alternate is being confirmed |
| `nBestIndex` | `number` | `undefined` | Index indicating which of the current alternates is selected for confirmation |
| `isConfirmed?` | `boolean` | `true` | True (default) if swithing task to confirmed status, false back to confirming |

#### Returns

`void`

***

### connect()

> **connect**(`serviceName`, `timeout`, `machineId?`, `sessionId?`): `Promise`\<`string` \| `undefined`\>

Connect to the STP engine
Important: the event function properties need to be assigned to handlers _before_ this method is called

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `serviceName` | `string` | Name of this component / service |
| `timeout` | `number` | Number fo seconds to wait for a connection before failing |
| `machineId?` | `string` | Optional machine Id to use. If not provided, it is set to some unique Id. |
| `sessionId?` | `string` | Optional session Id to use. If not provided: 1. the suffix to the WebSocket connection string is used 2. if no WebSocket suffix was provided, the machineId is used. |

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### createC2SIMProxy()

> **createC2SIMProxy**(`options?`): [`IC2SIMProxy`](../interfaces/IC2SIMProxy.md)

C2SIM proxy factory

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`StpC2SIMOptions`](StpC2SIMOptions.md) | Optional C2SIM generation options overriding the server's defaults |

#### Returns

[`IC2SIMProxy`](../interfaces/IC2SIMProxy.md)

Object to be used to interact with C2SIM

***

### createNewScenario()

> **createNewScenario**(`name`, `timeout?`): `Promise`\<`void`\>

Create and load a new scenario, replacing any previous content that might have been loaded into STP

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | - |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### deleteCoa()

> **deleteCoa**(`poid`): `void`

Delete COA from scenario

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | - |

#### Returns

`void`

***

### deleteSymbol()

> **deleteSymbol**(`poid`): `void`

Request a symbol deletion from STP. The actual removal should only happen when STP responds with SymbolDeleted

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | Unique identifier of the symbol to delete |

#### Returns

`void`

***

### deleteTask()

> **deleteTask**(`poid`): `void`

Request a task deletion from STP. The actual removal should only happen when STP responds with TaskDeleted

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | Unique identifier of the task to delete |

#### Returns

`void`

***

### deleteTaskOrg()

> **deleteTaskOrg**(`poid`): `void`

Delete TO from scenario

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | - |

#### Returns

`void`

***

### deleteTaskOrgRelationship()

> **deleteTaskOrgRelationship**(`poid`): `void`

Request a Task Org Relationship deletion from STP. The actual removal should only happen when STP responds with TaskOrgRelationshipDeleted

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | Unique identifier of the Task Org Relationship to delete |

#### Returns

`void`

***

### deleteTaskOrgUnit()

> **deleteTaskOrgUnit**(`poid`): `void`

Request a Task Org Unit deletion from STP. The actual removal should only happen when STP responds with TaskOrgUnitDeleted

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | Unique identifier of the Task Org Unit to delete |

#### Returns

`void`

***

### getCoaContent()

> **getCoaContent**(`poid`, `timeout?`): `Promise`\<`string`\>

Get a COA content as a multiline string ready to be persisted

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | COA's unique id |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`string`\>

***

### getCoaObjectSet()

> **getCoaObjectSet**(`poid`, `timeout?`): `Promise`\<[`StpItem`](StpItem.md)[]\>

Get COA content as an array of typed objects

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | COA's unique id |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<[`StpItem`](StpItem.md)[]\>

Array of COA objects

***

### getScenarioContent()

> **getScenarioContent**(`timeout?`): `Promise`\<`string`\>

Get the current scenario content as a multiline string ready to be persisted

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`string`\>

Scenario content, formatted as object_set([[element1], [element2], ...])

***

### getScenarioObjectSet()

> **getScenarioObjectSet**(`timeout?`): `Promise`\<[`StpItem`](StpItem.md)[]\>

Get the current scenario content as an array of typed objects

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<[`StpItem`](StpItem.md)[]\>

Array of STP objects in the current scenario

***

### getTaskOrgContent()

> **getTaskOrgContent**(`poid`, `timeout?`): `Promise`\<`string`\>

Get TO content as a multiline string ready to be persisted

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | TO's unique id |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`string`\>

- TO content, formatted as object_set([[element1], [element2], ...])

***

### getTaskOrgObjectSet()

> **getTaskOrgObjectSet**(`poid`, `timeout?`): `Promise`\<[`StpItem`](StpItem.md)[]\>

Get Task Org content as an array of typed objects

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | TO's unique id |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<[`StpItem`](StpItem.md)[]\>

Array of task org objects

***

### hasActiveScenario()

> **hasActiveScenario**(`timeout?`): `Promise`\<`boolean`\>

Checks STP for a loaded scenario

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`boolean`\>

True if a scenario is active

***

### importCoaContent()

> **importCoaContent**(`toContent`, `timeout?`): `Promise`\<`string`\>

Import a new COA into the scenario
The COA is imported with a new unique Ids, i.e., the content is used as a template
That includes the Id of the COA definition as well as the individual symbols's

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toContent` | `string` | - |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`string`\>

New COA's unique id

***

### importCoaFromObjectSet()

> **importCoaFromObjectSet**(`objects`, `timeout?`): `Promise`\<`string`\>

Import a COA from typed objects

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `objects` | [`StpItem`](StpItem.md)[] | Array of COA objects (StpCoa + symbols) |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`string`\>

New COA's unique id

***

### importPlanData()

> **importPlanData**(`content`, `timeout?`): `Promise`\<`void`\>

Load additional data into an existing scenario

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | Content to load, formatted as object_set([[element1], [element2], ...]) |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### importPlanDataFromObjectSet()

> **importPlanDataFromObjectSet**(`objects`, `timeout?`): `Promise`\<`void`\>

Import typed objects into the current scenario (merge, no clear)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `objects` | [`StpItem`](StpItem.md)[] | Array of STP objects to merge into the active scenario |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### importTaskOrgContent()

> **importTaskOrgContent**(`content`, `timeout?`): `Promise`\<`string`\>

Import TO into the scenario
The TO is imported with a new unique Ids, i.e., the content is used as a template
The individual task org units retain their original unique Ids

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | Content to load, formatted as object_set([[element1], [element2], ...]) |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`string`\>

TO's unique id

***

### importTaskOrgFromObjectSet()

> **importTaskOrgFromObjectSet**(`objects`, `timeout?`): `Promise`\<`string`\>

Import a Task Org from typed objects

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `objects` | [`StpItem`](StpItem.md)[] | Array of task org objects (StpTaskOrg, StpTaskOrgUnit, StpTaskOrgRelationship) |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`string`\>

TO's unique id

***

### informStp()

> **informStp**(`name`, `parms`): `void`

Generic method that handles the actual sending of a message over to STP

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the event / method to inform |
| `parms` | `any` | parameter object |

#### Returns

`void`

***

### joinScenarioSession()

> **joinScenarioSession**(`timeout?`): `Promise`\<`void`\>

Load all current STP objects into a project - this emulates receiving the STP events to create objects

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### loadNewScenario()

> **loadNewScenario**(`content`, `timeout?`): `Promise`\<`void`\>

Load a new scenario, replacing any previous content that might have been loaded into STP

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | Content to load, formatted as object_set([[element1], [element2], ...]) |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### loadNewScenarioFromObjectSet()

> **loadNewScenarioFromObjectSet**(`objects`, `timeout?`): `Promise`\<`void`\>

Load a new scenario from typed objects, replacing any previous content

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `objects` | [`StpItem`](StpItem.md)[] | Array of STP objects to load as the new scenario |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### requestStp()

> **requestStp**(`name`, `parms`, `timeout?`): `Promise`\<`any`\>

Generic method that handles the STP requests - messages for which results are expected

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the event / method to request |
| `parms` | `any` | parameter object |
| `timeout?` | `number` | Optional timeout for this request |

#### Returns

`Promise`\<`any`\>

***

### resetCoaTaskOrg()

> **resetCoaTaskOrg**(`coaPoid?`, `timeout?`): `Promise`\<`void`\>

Remove TO association from a particular COA

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `coaPoid?` | `string` | Unique Id of the COA in which the TO should be reset - global default if undefined |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### resetDefaultTaskOrg()

> **resetDefaultTaskOrg**(`affiliation`, `timeout?`): `Promise`\<`void`\>

Reset TO as the default - TO is not deleted, but is no longer active

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `affiliation` | `"friend"` \| `"hostile"` | affiliation of the TO to reset as the default |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### sendInk()

> **sendInk**(`pixelBoundsWindow`, `topLeftGeoMap`, `bottomRightGeoMap`, `strokePoints`, `timeStrokeStart`, `timeStrokeEnd`, `intersectedPoids`): `void`

Send sketched gesture to STP

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pixelBoundsWindow` | [`Size`](Size.md) | Map region screen bounds in pixels |
| `topLeftGeoMap` | [`LatLon`](LatLon.md) | Map top, left coordinates |
| `bottomRightGeoMap` | [`LatLon`](LatLon.md) | Map bottom, right coordinates |
| `strokePoints` | [`LatLon`](LatLon.md)[] | Coordinates of the sketched gesture |
| `timeStrokeStart` | `string` | Time the first point was placed |
| `timeStrokeEnd` | `string` | Time the last point was placed |
| `intersectedPoids` | `string`[] | Symbol Ids of all the symbols that were intersected by the sketched gesture - used for editing operations, e.g. when user sketches over a symbol and says "delete this" |

#### Returns

`void`

***

### sendPenDown()

> **sendPenDown**(`location`, `timestamp`): `void`

Advertise that the user has started a sketched gesture

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `location` | [`LatLon`](LatLon.md) | Map coordinate of the first point |
| `timestamp` | `string` | Time the first point was placed - ISO 8601 |

#### Returns

`void`

***

### sendSimulatedSpeechRecognition()

> **sendSimulatedSpeechRecognition**(`text`, `startTime?`): `void`

Send a text string to STP that will be treated as if it came from speech recognition.
Numbers and letters are converted server-side to equivalent words as they would appear
if transcribed by a speech recognizer (e.g. "A 3 1" becomes "alpha three one").

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | Text to be converted and sent as speech |
| `startTime?` | `Date` | Optional time the speech occurred - ISO 8601. Defaults to current time if not provided. |

#### Returns

`void`

***

### sendSpeechRecognition()

> **sendSpeechRecognition**(`recoList`, `startTime`, `endTime`): `void`

Send to STP the transcribed speech results, as obtained by a speech recognizer, or typed by the user

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `recoList` | [`ISpeechRecoItem`](../interfaces/ISpeechRecoItem.md)[] | List of recognition hypothesis |
| `startTime` | `Date` | Time speech started - ISO 8601 |
| `endTime` | `Date` | Time speech ended- ISO 8601 |

#### Returns

`void`

***

### setCoaTaskOrg()

> **setCoaTaskOrg**(`toPoid`, `coaPoid?`, `timeout?`): `Promise`\<`void`\>

Set TO to use when a particular COA is selected, or globally, when any COA (of the corresponding affiliation)
is selected

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `toPoid` | `string` | Unique id of the TO to set |
| `coaPoid?` | `string` | Unique Id of the COA the TO should be associated with - global default if undefined |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### setCurrentCoa()

> **setCurrentCoa**(`poid`, `timeout?`): `Promise`\<`void`\>

Select the current COA - edits and data imports are made into this COA henceforth

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | COA's unique id |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### setCurrentRole()

> **setCurrentRole**(`role`, `createIfNone?`, `timeout?`): `Promise`\<`void`\>

Switch the role associated with the current COA

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `role` | [`StpRole`](../enumerations/StpRole.md) | `undefined` | - |
| `createIfNone` | `boolean` | `true` | true causes a default COA to be created for the desired role if none exists yet |
| `timeout?` | `number` | `undefined` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### setDefaultTaskOrg()

> **setDefaultTaskOrg**(`poid`, `timeout?`): `Promise`\<`void`\>

Set TO to use when a particular COA is selected, or globally, when any COA (of the corresponding affiliation)
is selected

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | Unique id of the TO to set |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### syncScenarioSession()

> **syncScenarioSession**(`content`, `timeout?`): `Promise`\<`void`\>

Load a scenario, updating a session content with detected differences

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | Content to load, formatted as object_set([[element1], [element2], ...]) |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### syncScenarioSessionFromObjectSet()

> **syncScenarioSessionFromObjectSet**(`objects`, `timeout?`): `Promise`\<`void`\>

Sync a session using typed objects, updating with detected differences

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `objects` | [`StpItem`](StpItem.md)[] | Array of local STP objects to sync against the server state |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### updateCoa()

> **updateCoa**(`poid`, `coa`): `void`

Update COA definition

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | - |
| `coa` | [`StpCoa`](StpCoa.md) | updated COA |

#### Returns

`void`

***

### updateSymbol()

> **updateSymbol**(`poid`, `symbol`): `void`

Request that a symbol be updated by STP. The actual update should only happen when STP responds with SymbolModified

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | Unique identifier of the symbol to update |
| `symbol` | [`StpSymbol`](StpSymbol.md) | Symbol to be updated |

#### Returns

`void`

***

### updateTask()

> **updateTask**(`poid`, `alternates`): `void`

Request that a task be updated by STP. The actual update should only happen when STP responds with TaskModified

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | Unique identifier of the task to update |
| `alternates` | [`StpTask`](StpTask.md)[] | Alternates of the task to update - normally only one of the alternates will have been modified |

#### Returns

`void`

***

### updateTaskOrg()

> **updateTaskOrg**(`poid`, `taskOrg`): `void`

Update TO definition

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | - |
| `taskOrg` | [`StpTaskOrg`](StpTaskOrg.md) | updated TO |

#### Returns

`void`

***

### updateTaskOrgRelationship()

> **updateTaskOrgRelationship**(`poid`, `toUnit`): `void`

Request that a Task Org Relationship be updated by STP. The actual update should only happen when STP responds with TaskOrgRelationshipModified

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | Unique identifier of the Task Org Relationship to update |
| `toUnit` | [`StpTaskOrgRelationship`](StpTaskOrgRelationship.md) | - |

#### Returns

`void`

***

### updateTaskOrgUnit()

> **updateTaskOrgUnit**(`poid`, `toUnit`): `void`

Request that a Task Org Unit be updated by STP. The actual update should only happen when STP responds with TaskOrgUnitModified

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `poid` | `string` | Unique identifier of the Task Org Unit to update |
| `toUnit` | [`StpTaskOrgUnit`](StpTaskOrgUnit.md) | Task Org Unit to be updated |

#### Returns

`void`
