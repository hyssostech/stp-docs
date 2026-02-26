# Sketch-thru-Plan SDK v0.0.0

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [CommandRelationship](enumerations/CommandRelationship.md) | Command relationship |
| [StpMessageLevel](enumerations/StpMessageLevel.md) | Level of messages raised from STP |
| [StpRole](enumerations/StpRole.md) | STP roles |
| [TaskHow](enumerations/TaskHow.md) | Task How |
| [TaskROE](enumerations/TaskROE.md) | Task Rules of Engagement |
| [TaskWhat](enumerations/TaskWhat.md) | Task What |
| [TaskWhy](enumerations/TaskWhy.md) | Task Why |

## Classes

| Class | Description |
| ------ | ------ |
| [DISCode](classes/DISCode.md) | DIS Code |
| [Interval](classes/Interval.md) | Time interval |
| [LatLon](classes/LatLon.md) | Latitude and longitude coordinates |
| [Location](classes/Location.md) | Location properties |
| [MovementFeatures](classes/MovementFeatures.md) | Task movement features |
| [Resource](classes/Resource.md) | - |
| [Sidc](classes/Sidc.md) | 2525D and C military codes |
| [Size](classes/Size.md) | Size (width, height) |
| [StpC2SIMOptions](classes/StpC2SIMOptions.md) | C2SIM generation options |
| [StpCoa](classes/StpCoa.md) | COA properties |
| [StpItem](classes/StpItem.md) | Common STP properties |
| [StpRecognizer](classes/StpRecognizer.md) | Commands and events to interact with STP |
| [StpSymbol](classes/StpSymbol.md) | STP military symbol |
| [StpTask](classes/StpTask.md) | STP military task |
| [StpTaskOrg](classes/StpTaskOrg.md) | STP Task Org (ORBAT) definition - TO units and relationships make reference to this object |
| [StpTaskOrgRelationship](classes/StpTaskOrgRelationship.md) | Task Org (ORBAT) relationships |
| [StpTaskOrgUnit](classes/StpTaskOrgUnit.md) | STP Task Org (ORBAT) Unit |
| [StpWebSocketsConnector](classes/StpWebSocketsConnector.md) | Implements a connector to STP's native OAA pub/sub service via WebSockets |
| [TaskOrgState](classes/TaskOrgState.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [IC2SIMProxy](interfaces/IC2SIMProxy.md) | Stp interface to C2SIM |
| [ISpeechRecoItem](interfaces/ISpeechRecoItem.md) | Recognition hypotheses |
| [ISpeechRecoResult](interfaces/ISpeechRecoResult.md) | Speech recognition results |
| [IStpConnector](interfaces/IStpConnector.md) | STP connection interface |
| [IStpConnectorConstructor](interfaces/IStpConnectorConstructor.md) | STP connection construction interface |
| [OnSpeechRecognizedEvent](interfaces/OnSpeechRecognizedEvent.md) | Speech has been recognized |
| [OnStpMessageEvent](interfaces/OnStpMessageEvent.md) | Stp raised message to deliver to user |
| [StpMessage](interfaces/StpMessage.md) | Stp message JSON-RPC envelope |
| [SymbolAddedEvent](interfaces/SymbolAddedEvent.md) | Parameters received along a SymbolAdded event |
