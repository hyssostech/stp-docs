# Interface: IC2SIMProxy

Stp  interface to C2SIM

## Properties

### onSymbolReport

> **onSymbolReport**: (`poid`, `symbol`) => `void` \| `undefined`

A new C2SIM symbol report has been received

#### Param

Unique symbol identifier of the symbol updated by the report

#### Param

Updated symbol properies (e.g. new location)

## Methods

### convertC2SIMContent()

> **convertC2SIMContent**(`content`, `timeout?`): `Promise`\<`string`\>

Convert C2SIM content to native STP

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | C2SIM-formatted content |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`string`\>

Stp native content, formatted as object_set([[element1], [element2], ...])

***

### exportPlanDataToC2SIMServer()

> **exportPlanDataToC2SIMServer**(`name`, `dataType`, `affiliation?`, `coaPoids?`, `timeout?`): `Promise`\<`void`\>

Export current scenario initialization or orders to C2SIM

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Scenario name - used by some systems to label the data |
| `dataType` | `"initialization"` \| `"order"` | Type of content: 'initialization' or 'order' |
| `affiliation?` | `"friend"` \| `"hostile"` \| `"all"` | Optional 'friend' or 'hostile' affiliation - all if omitted/null |
| `coaPoids?` | `string`[] | optional Ids of the COAs to export - all if omitted/null |
| `timeout?` | `number` | Optional timeout in seconds, 30s default |

#### Returns

`Promise`\<`void`\>

Formatted transfer data (e.g. C2SIM)

***

### getC2SIMContent()

> **getC2SIMContent**(`name`, `dataType`, `affiliation?`, `coaPoids?`, `timeout?`): `Promise`\<`string`\>

Get plan data formatted for transfer to C2SIM

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Scenario name - used by some systems to label the data |
| `dataType` | `"initialization"` \| `"order"` | Type of content: 'initialization' or 'order' |
| `affiliation?` | `"friend"` \| `"hostile"` \| `"all"` | Optional 'friend' or 'hostile' affiliation - all if omitted/null |
| `coaPoids?` | `string`[] | optional Ids of the COAs to export - all if omitted/null |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`string`\>

Formatted transfer data (e.g. C2SIM)

***

### importInitializationFromC2SIMServer()

> **importInitializationFromC2SIMServer**(`timeout?`): `Promise`\<`void`\>

Import initialization data from C2SIM

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>

***

### pullC2SIMInitialization()

> **pullC2SIMInitialization**(`timeout?`): `Promise`\<`string`\>

Pull initialization data from a connected C2SIM server, converting and 
loading it into the current STP scenario
The actual system is determined by the active export/import Connector/bridge that 
is running as part of the STP Engine in use

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`string`\>

***

### pushC2SIMContent()

> **pushC2SIMContent**(`content`, `dataType`, `timeout?`): `Promise`\<`void`\>

Push plan data formatted for transfer to C2SIM server
The actual system is determined by the active export/inmport Connector/bridge that 
is running as part of the STP Engine in use

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `content` | `string` | Content to load, formatted as object_set([[element1], [element2], ...]) |
| `dataType` | `"initialization"` \| `"order"` | Type of content: 'initialization' or 'order' |
| `timeout?` | `number` | Optional timeout in seconds |

#### Returns

`Promise`\<`void`\>
