# StpRecognizer

Namespace: StpSDK

```csharp
public class StpRecognizer : System.IDisposable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpRecognizer](./stpsdk.stprecognizer)<br>
Implements [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)

## Properties

### **IsConnected**

```csharp
public bool IsConnected { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **IsStandAloneEngine**

```csharp
public bool IsStandAloneEngine { get; private set; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **JMSSVGPath**

```csharp
public static string JMSSVGPath { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **WhenStpMessage**

```csharp
public IObservable<StpMessageEventArgs> WhenStpMessage { get; }
```

#### Property Value

[IObservable&lt;StpMessageEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenSymbolReport**

```csharp
public IObservable<SymboReportEventArgs> WhenSymbolReport { get; }
```

#### Property Value

[IObservable&lt;SymboReportEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenSymbolEdit**

```csharp
public IObservable<SymbolEditEventArgs> WhenSymbolEdit { get; }
```

#### Property Value

[IObservable&lt;SymbolEditEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenSymbolEditExt**

```csharp
public IObservable<SymbolEditExtEventArgs> WhenSymbolEditExt { get; }
```

#### Property Value

[IObservable&lt;SymbolEditExtEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenCommand**

```csharp
public IObservable<CommandEventArgs> WhenCommand { get; }
```

#### Property Value

[IObservable&lt;CommandEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenCommandExt**

```csharp
public IObservable<CommandExtEventArgs> WhenCommandExt { get; }
```

#### Property Value

[IObservable&lt;CommandExtEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenMapOperation**

```csharp
public IObservable<MapOperationEventArgs> WhenMapOperation { get; }
```

#### Property Value

[IObservable&lt;MapOperationEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenMapOperationExt**

```csharp
public IObservable<MapOperationExtEventArgs> WhenMapOperationExt { get; }
```

#### Property Value

[IObservable&lt;MapOperationExtEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenNewScenario**

```csharp
public IObservable<NewScenarioEventArgs> WhenNewScenario { get; }
```

#### Property Value

[IObservable&lt;NewScenarioEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenCoaSwitched**

```csharp
public IObservable<CoaSwitchedEventArgs> WhenCoaSwitched { get; }
```

#### Property Value

[IObservable&lt;CoaSwitchedEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenRoleSwitched**

```csharp
public IObservable<RoleSwitchEventArgs> WhenRoleSwitched { get; }
```

#### Property Value

[IObservable&lt;RoleSwitchEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenTaskOrgSwitched**

```csharp
public IObservable<TaskOrgSwitchEventArgs> WhenTaskOrgSwitched { get; }
```

#### Property Value

[IObservable&lt;TaskOrgSwitchEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenAutoTaskingSwitched**

```csharp
public IObservable<AutoTaskingSwitchEventArgs> WhenAutoTaskingSwitched { get; }
```

#### Property Value

[IObservable&lt;AutoTaskingSwitchEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenSpeechRecognized**

```csharp
public IObservable<SpeechRecognitionEventArgs> WhenSpeechRecognized { get; }
```

#### Property Value

[IObservable&lt;SpeechRecognitionEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenSpeechParsed**

```csharp
public IObservable<SpeechParsedEventArgs> WhenSpeechParsed { get; }
```

#### Property Value

[IObservable&lt;SpeechParsedEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenListeningStateChanged**

```csharp
public IObservable<ListeningStateChangedEventArgs> WhenListeningStateChanged { get; }
```

#### Property Value

[IObservable&lt;ListeningStateChangedEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenListenRaised**

```csharp
public IObservable<ListenEventArgs> WhenListenRaised { get; }
```

#### Property Value

[IObservable&lt;ListenEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenSketchRecognized**

```csharp
public IObservable<SketchRecognitionEventArgs> WhenSketchRecognized { get; }
```

#### Property Value

[IObservable&lt;SketchRecognitionEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenSketchIntegrated**

```csharp
public IObservable<Unit> WhenSketchIntegrated { get; }
```

#### Property Value

[IObservable&lt;Unit&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenSketchDiscarded**

```csharp
public IObservable<Unit> WhenSketchDiscarded { get; }
```

#### Property Value

[IObservable&lt;Unit&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenSpeechIntegrated**

```csharp
public IObservable<Unit> WhenSpeechIntegrated { get; }
```

#### Property Value

[IObservable&lt;Unit&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenSpeechDiscarded**

```csharp
public IObservable<Unit> WhenSpeechDiscarded { get; }
```

#### Property Value

[IObservable&lt;Unit&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenPenDown**

```csharp
public IObservable<PenDownUpEventArgs> WhenPenDown { get; }
```

#### Property Value

[IObservable&lt;PenDownUpEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenPenUp**

```csharp
public IObservable<PenDownUpEventArgs> WhenPenUp { get; }
```

#### Property Value

[IObservable&lt;PenDownUpEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenConnectionError**

```csharp
public IObservable<StpConnectionErrorEventArgs> WhenConnectionError { get; }
```

#### Property Value

[IObservable&lt;StpConnectionErrorEventArgs&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

### **WhenShutingdown**

```csharp
public IObservable<Unit> WhenShutingdown { get; }
```

#### Property Value

[IObservable&lt;Unit&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.iobservable-1)<br>

## Constructors

### **StpRecognizer(IStpConnector)**

```csharp
public StpRecognizer(IStpConnector stpConnector)
```

#### Parameters

`stpConnector` [IStpConnector](./stpsdk.istpconnector)<br>

## Methods

### **ConnectAndRegisterAsync(String, String, String, Boolean, Int32, String, CancellationToken)**

```csharp
public async Task<string> ConnectAndRegisterAsync(string agentName, string machineId = null, string session = null, bool exitAppIfNoConnection = true, int secondsToRetry = 0, string url = null, CancellationToken cancellationToken = null)
```

#### Parameters

`agentName` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`machineId` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`session` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`exitAppIfNoConnection` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

`secondsToRetry` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

`url` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **ConnectAsync(Int32, String, CancellationToken)**

```csharp
public Task<bool> ConnectAsync(int secondsToRetry = 0, string url = null, CancellationToken cancellationToken = null)
```

#### Parameters

`secondsToRetry` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

`url` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;Boolean&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **RegisterAsync(String, String, String, CancellationToken)**

```csharp
public async Task<string> RegisterAsync(string appName, string machineId = null, string session = null, CancellationToken cancellationToken = null)
```

#### Parameters

`appName` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`machineId` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`session` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **RegisterEventsAsync(String, List&lt;String&gt;, String, String, CancellationToken)**

```csharp
public async Task<string> RegisterEventsAsync(string appName, List<string> events, string machineId = null, string session = null, CancellationToken cancellationToken = null)
```

#### Parameters

`appName` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`events` [List&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

`machineId` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`session` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **Disconnect()**

```csharp
public void Disconnect()
```

### **Stop()**

```csharp
public void Stop()
```

### **ConvertToTranscription(String)**

```csharp
public List<SpeechRecoItem> ConvertToTranscription(string typedInput)
```

#### Parameters

`typedInput` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

#### Returns

[List&lt;SpeechRecoItem&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

### **Dispose()**

```csharp
public void Dispose()
```

### **SendPenDown(LatLon, DateTime)**

```csharp
public void SendPenDown(LatLon location, DateTime timestamp)
```

#### Parameters

`location` [LatLon](./stpsdk.latlon)<br>

`timestamp` [DateTime](https://learn.microsoft.com/en-us/dotnet/api/system.datetime)<br>

### **SendInk(Size, LatLon, LatLon, List&lt;LatLon&gt;, DateTime, DateTime, List&lt;String&gt;)**

```csharp
public void SendInk(Size pixelBoundsWindow, LatLon topLeftGeoMap, LatLon bottomRightGeoMap, List<LatLon> strokePoints, DateTime timeStrokeStart, DateTime timeStrokeEnd, List<string> intersectedPoids)
```

#### Parameters

`pixelBoundsWindow` [Size](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.size)<br>

`topLeftGeoMap` [LatLon](./stpsdk.latlon)<br>

`bottomRightGeoMap` [LatLon](./stpsdk.latlon)<br>

`strokePoints` [List&lt;LatLon&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

`timeStrokeStart` [DateTime](https://learn.microsoft.com/en-us/dotnet/api/system.datetime)<br>

`timeStrokeEnd` [DateTime](https://learn.microsoft.com/en-us/dotnet/api/system.datetime)<br>

`intersectedPoids` [List&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

### **SendSimulatedSpeechRecognition(String, DateTime?)**

```csharp
public void SendSimulatedSpeechRecognition(string typedInput, DateTime? startTime = null)
```

#### Parameters

`typedInput` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`startTime` [DateTime?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **SendSpeechRecognition(List&lt;SpeechRecoItem&gt;, DateTime?, DateTime?)**

```csharp
public void SendSpeechRecognition(List<SpeechRecoItem> recoList, DateTime? startTime = null, DateTime? endTime = null)
```

#### Parameters

`recoList` [List&lt;SpeechRecoItem&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

`startTime` [DateTime?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

`endTime` [DateTime?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **SendSpeechRecognitionExt(Auth, List&lt;SpeechRecoItem&gt;, DateTime?, DateTime?)**

```csharp
public void SendSpeechRecognitionExt(Auth auth, List<SpeechRecoItem> recoList, DateTime? startTime = null, DateTime? endTime = null)
```

#### Parameters

`auth` [Auth](./stpsdk.auth)<br>

`recoList` [List&lt;SpeechRecoItem&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

`startTime` [DateTime?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

`endTime` [DateTime?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **SetSpeechListening(Boolean, Auth)**

```csharp
public void SetSpeechListening(bool listen, Auth auth = null)
```

#### Parameters

`listen` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

`auth` [Auth](./stpsdk.auth)<br>

### **RecognizeNow(Auth)**

```csharp
public void RecognizeNow(Auth auth = null)
```

#### Parameters

`auth` [Auth](./stpsdk.auth)<br>

### **ChangeTimeOut(Double)**

```csharp
public void ChangeTimeOut(double timeout)
```

#### Parameters

`timeout` [Double](https://learn.microsoft.com/en-us/dotnet/api/system.double)<br>

### **ResetSegmentationTimeout(Auth)**

```csharp
public void ResetSegmentationTimeout(Auth auth = null)
```

#### Parameters

`auth` [Auth](./stpsdk.auth)<br>

### **SendListen(ListenMode, DateTime?)**

```csharp
public void SendListen(ListenMode mode, DateTime? time = null)
```

#### Parameters

`mode` [ListenMode](./stpsdk.listenmode)<br>

`time` [DateTime?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **SendAudioCaptureState(Boolean, Auth)**

```csharp
public void SendAudioCaptureState(bool isListening, Auth auth = null)
```

#### Parameters

`isListening` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

`auth` [Auth](./stpsdk.auth)<br>

### **AdvertiseViewport(LatLon, LatLon)**

```csharp
public void AdvertiseViewport(LatLon topLeft, LatLon botRight)
```

#### Parameters

`topLeft` [LatLon](./stpsdk.latlon)<br>

`botRight` [LatLon](./stpsdk.latlon)<br>

### **SetAutoTasking(Boolean, Auth)**

```csharp
public void SetAutoTasking(bool isEnabled, Auth auth = null)
```

#### Parameters

`isEnabled` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

`auth` [Auth](./stpsdk.auth)<br>

### **AddSymbol(StpItem)**

```csharp
public void AddSymbol(StpItem stpSymbol)
```

#### Parameters

`stpSymbol` [StpItem](./stpsdk.stpitem)<br>

### **UpdateSymbol(String, StpItem)**

```csharp
public void UpdateSymbol(string poid, StpItem stpSymbol)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`stpSymbol` [StpItem](./stpsdk.stpitem)<br>

### **ChooseAlternate(String, Int32)**

```csharp
public void ChooseAlternate(string poid, int nbestIndex)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`nbestIndex` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **DeleteSymbol(String)**

```csharp
public void DeleteSymbol(string poid)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **AddTask(StpTask)**

```csharp
public void AddTask(StpTask stpTask)
```

#### Parameters

`stpTask` [StpTask](./stpsdk.stptask)<br>

### **UpdateTask(String, StpTask)**

```csharp
public void UpdateTask(string poid, StpTask stpTask)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`stpTask` [StpTask](./stpsdk.stptask)<br>

### **UpdateTask(String, List&lt;StpTask&gt;)**

```csharp
public void UpdateTask(string poid, List<StpTask> stpTaskAlternates)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`stpTaskAlternates` [List&lt;StpTask&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

### **DeleteTask(String)**

```csharp
public void DeleteTask(string poid)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **AddTaskOrg(StpTaskOrg)**

```csharp
public void AddTaskOrg(StpTaskOrg stpTo)
```

#### Parameters

`stpTo` [StpTaskOrg](./stpsdk.stptaskorg)<br>

### **UpdateTaskOrg(String, StpTaskOrg)**

```csharp
public void UpdateTaskOrg(string poid, StpTaskOrg stpTo)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`stpTo` [StpTaskOrg](./stpsdk.stptaskorg)<br>

### **DeleteTaskOrg(String)**

```csharp
public void DeleteTaskOrg(string poid)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **AddTaskOrgUnit(StpTaskOrgUnit)**

```csharp
public void AddTaskOrgUnit(StpTaskOrgUnit stpToUnit)
```

#### Parameters

`stpToUnit` [StpTaskOrgUnit](./stpsdk.stptaskorgunit)<br>

### **UpdateTaskOrgUnit(String, StpTaskOrgUnit)**

```csharp
public void UpdateTaskOrgUnit(string poid, StpTaskOrgUnit stpToUnit)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`stpToUnit` [StpTaskOrgUnit](./stpsdk.stptaskorgunit)<br>

### **DeleteTaskOrgUnit(String)**

```csharp
public void DeleteTaskOrgUnit(string poid)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **AddTaskOrgRelationship(StpTaskOrgRelationship)**

```csharp
public void AddTaskOrgRelationship(StpTaskOrgRelationship stpToRelationship)
```

#### Parameters

`stpToRelationship` [StpTaskOrgRelationship](./stpsdk.stptaskorgrelationship)<br>

### **UpdateTaskOrgRelationship(String, StpTaskOrgRelationship)**

```csharp
public void UpdateTaskOrgRelationship(string poid, StpTaskOrgRelationship stpToRelationship)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`stpToRelationship` [StpTaskOrgRelationship](./stpsdk.stptaskorgrelationship)<br>

### **DeleteTaskOrgRelationship(String)**

```csharp
public void DeleteTaskOrgRelationship(string poid)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **AddCoa(StpCoa)**

```csharp
public void AddCoa(StpCoa stpCoa)
```

#### Parameters

`stpCoa` [StpCoa](./stpsdk.stpcoa)<br>

### **UpdateCoa(String, StpCoa)**

```csharp
public void UpdateCoa(string poid, StpCoa stpCoa)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`stpCoa` [StpCoa](./stpsdk.stpcoa)<br>

### **DeleteCoa(String)**

```csharp
public void DeleteCoa(string poid)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **SwitchRoleAndCoa(String, String)**

```csharp
public void SwitchRoleAndCoa(string newRole, string newCoaPoid)
```

#### Parameters

`newRole` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`newCoaPoid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **ResetRole()**

```csharp
public void ResetRole()
```

### **UndoLastOp(String)**

```csharp
public void UndoLastOp(string poid)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **CreateNewScenarioAsync(String, CancellationToken)**

```csharp
public async Task<string> CreateNewScenarioAsync(string name, CancellationToken cancellationToken = null)
```

#### Parameters

`name` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **CreateCoaAsync(String, String, String, CancellationToken)**

```csharp
public async Task<string> CreateCoaAsync(string name, string affiliation, string role, CancellationToken cancellationToken = null)
```

#### Parameters

`name` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`affiliation` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`role` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **LoadNewScenarioAsync(String, CancellationToken)**

```csharp
public async Task LoadNewScenarioAsync(string content, CancellationToken cancellationToken = null)
```

#### Parameters

`content` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **LoadNewScenarioAsync(ObjectSet, CancellationToken)**

```csharp
public async Task LoadNewScenarioAsync(ObjectSet os, CancellationToken cancellationToken = null)
```

#### Parameters

`os` [ObjectSet](./stpsdk.objectset)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **ResetStpScenarioAsync(CancellationToken)**

```csharp
public async Task ResetStpScenarioAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **GetScenarioContentAsync(CancellationToken)**

```csharp
public async Task<string> GetScenarioContentAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetScenarioObjectSetContentAsync(CancellationToken)**

```csharp
public async Task<ObjectSet> GetScenarioObjectSetContentAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;ObjectSet&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **JoinScenarioSessionAsync(CancellationToken)**

```csharp
public async Task JoinScenarioSessionAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **SyncScenarioSessionAsync(String, CancellationToken)**

```csharp
public async Task SyncScenarioSessionAsync(string content, CancellationToken cancellationToken = null)
```

#### Parameters

`content` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **SyncScenarioSessionAsync(ObjectSet, CancellationToken)**

```csharp
public async Task SyncScenarioSessionAsync(ObjectSet localObjects, CancellationToken cancellationToken = null)
```

#### Parameters

`localObjects` [ObjectSet](./stpsdk.objectset)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **ImportSTPDataAsync(String, CancellationToken)**

```csharp
public async Task<bool> ImportSTPDataAsync(string content, CancellationToken cancellationToken = null)
```

#### Parameters

`content` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;Boolean&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **ImportSTPDataAsync(ObjectSet, CancellationToken)**

```csharp
public async Task<bool> ImportSTPDataAsync(ObjectSet stpObjects, CancellationToken cancellationToken = null)
```

#### Parameters

`stpObjects` [ObjectSet](./stpsdk.objectset)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;Boolean&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **HasActiveScenarioAsync(CancellationToken)**

```csharp
public async Task<bool> HasActiveScenarioAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;Boolean&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetActiveScenarioDescriptionAsync(CancellationToken)**

```csharp
public async Task<PlanningScenario> GetActiveScenarioDescriptionAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;PlanningScenario&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **ImportTaskOrgContentAsync(String, CancellationToken)**

```csharp
public async Task<string> ImportTaskOrgContentAsync(string content, CancellationToken cancellationToken = null)
```

#### Parameters

`content` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **ImportTaskOrgAsync(ObjectSet, CancellationToken)**

```csharp
public async Task<string> ImportTaskOrgAsync(ObjectSet os, CancellationToken cancellationToken = null)
```

#### Parameters

`os` [ObjectSet](./stpsdk.objectset)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetTaskOrgContentAsync(String, CancellationToken)**

```csharp
public async Task<object> GetTaskOrgContentAsync(string poid, CancellationToken cancellationToken)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;Object&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetTaskOrgObjectSetAsync(String, CancellationToken)**

```csharp
public async Task<ObjectSet> GetTaskOrgObjectSetAsync(string poid, CancellationToken cancellationToken = null)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;ObjectSet&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **SetDefaultTaskOrgAsync(String, CancellationToken)**

```csharp
public async Task SetDefaultTaskOrgAsync(string poid, CancellationToken cancellationToken = null)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **ResetDefaultTaskOrgAsync(String, CancellationToken)**

```csharp
public async Task ResetDefaultTaskOrgAsync(string affiliation, CancellationToken cancellationToken)
```

#### Parameters

`affiliation` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **ImportCoaContentAsync(String, CancellationToken)**

```csharp
public async Task<string> ImportCoaContentAsync(string content, CancellationToken cancellationToken = null)
```

#### Parameters

`content` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **ImportCoaAsync(ObjectSet, CancellationToken)**

```csharp
public async Task<string> ImportCoaAsync(ObjectSet os, CancellationToken cancellationToken = null)
```

#### Parameters

`os` [ObjectSet](./stpsdk.objectset)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetCoaContentAsync(String, CancellationToken)**

```csharp
public async Task<object> GetCoaContentAsync(string poid, CancellationToken cancellationToken = null)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;Object&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetCoaObjectSetAsync(String, CancellationToken)**

```csharp
public async Task<ObjectSet> GetCoaObjectSetAsync(string poid, CancellationToken cancellationToken = null)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;ObjectSet&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **DeleteCoaAsync(String, CancellationToken)**

```csharp
public async Task DeleteCoaAsync(string poid, CancellationToken cancellationToken = null)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **SetRoleAsync(String, CancellationToken)**

```csharp
public async Task SetRoleAsync(string newRole, CancellationToken cancellationToken = null)
```

#### Parameters

`newRole` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **SetCoaAsync(String, CancellationToken)**

```csharp
public async Task SetCoaAsync(string newCoaPoid, CancellationToken cancellationToken = null)
```

#### Parameters

`newCoaPoid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **GetCurrentCoaPoidAsync(String, CancellationToken)**

```csharp
public async Task<string> GetCurrentCoaPoidAsync(string role, CancellationToken cancellationToken = null)
```

#### Parameters

`role` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **CreateDefaultCoaAsync(String)**

```csharp
public async Task<string> CreateDefaultCoaAsync(string role)
```

#### Parameters

`role` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **SwitchRoleAndCoaAsync(String, String, CancellationToken)**

```csharp
public async Task SwitchRoleAndCoaAsync(string newRole, string newCoaPoid, CancellationToken cancellationToken = null)
```

#### Parameters

`newRole` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`newCoaPoid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **SwitchTaskConfirmationAsync(String, Int32, Boolean)**

```csharp
public async Task SwitchTaskConfirmationAsync(string poid, int index, bool isConfirmed)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`index` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

`isConfirmed` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **RequestActiveCoasAsync(CancellationToken)**

```csharp
public async Task<List<StpCoa>> RequestActiveCoasAsync(CancellationToken cancellationToken)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;List&lt;StpCoa&gt;&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **RequestAllStpObjectsAsync(CancellationToken)**

```csharp
public async Task<List<StpObject>> RequestAllStpObjectsAsync(CancellationToken cancellationToken)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;List&lt;StpObject&gt;&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetScenarioCoasAsync(CancellationToken)**

```csharp
public async Task<List<StpCoa>> GetScenarioCoasAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;List&lt;StpCoa&gt;&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetScenarioTaskOrgsAsync(CancellationToken)**

```csharp
public async Task<List<StpTaskOrg>> GetScenarioTaskOrgsAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;List&lt;StpTaskOrg&gt;&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetTaskOrgObjectsAsync(String, CancellationToken)**

```csharp
public async Task<List<StpObject>> GetTaskOrgObjectsAsync(string poid, CancellationToken cancellationToken = null)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;List&lt;StpObject&gt;&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetCoaObjectsAsync(String, CancellationToken)**

```csharp
public async Task<List<StpObject>> GetCoaObjectsAsync(string poid, CancellationToken cancellationToken = null)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;List&lt;StpObject&gt;&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **RequestPoidObjectAsync(String, CancellationToken)**

```csharp
public async Task<StpObject> RequestPoidObjectAsync(string poid, CancellationToken cancellationToken = null)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;StpObject&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **RequestDeletedStpObjectsAsync(CancellationToken)**

```csharp
public async Task<List<StpObject>> RequestDeletedStpObjectsAsync(CancellationToken cancellationToken = null)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;List&lt;StpObject&gt;&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetC2SIMContentAsync(String, C2CIMDataType, String, List&lt;String&gt;, Dictionary&lt;String, Object&gt;, CancellationToken)**

```csharp
public async Task<string> GetC2SIMContentAsync(string name, C2CIMDataType dataType, string affiliation, List<string> coaPoids, Dictionary<string, object> options, CancellationToken cancellationToken)
```

#### Parameters

`name` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`dataType` [C2CIMDataType](./stpsdk.c2cimdatatype)<br>

`affiliation` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`coaPoids` [List&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

`options` [Dictionary&lt;String, Object&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **PushC2SIMContentAsync(String, C2CIMDataType, Dictionary&lt;String, Object&gt;, CancellationToken)**

```csharp
public async Task PushC2SIMContentAsync(string content, C2CIMDataType dataType, Dictionary<string, object> options, CancellationToken cancellationToken)
```

#### Parameters

`content` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`dataType` [C2CIMDataType](./stpsdk.c2cimdatatype)<br>

`options` [Dictionary&lt;String, Object&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

### **PullC2SIMInitializationAsync(Dictionary&lt;String, Object&gt;, CancellationToken)**

```csharp
public async Task<(string Content, string ServerStatus)> PullC2SIMInitializationAsync(Dictionary<string, object> options = null, CancellationToken cancellationToken = null)
```

#### Parameters

`options` [Dictionary&lt;String, Object&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;(String, String)&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **CreateSymbolService()**

```csharp
public SymbolService CreateSymbolService()
```

#### Returns

[SymbolService](./stpsdk.symbolservice)<br>

### **CreateTaskService(SymbolService)**

```csharp
public TaskService CreateTaskService(SymbolService symbolService)
```

#### Parameters

`symbolService` [SymbolService](./stpsdk.symbolservice)<br>

#### Returns

[TaskService](./stpsdk.taskservice)<br>

### **CreateTaskOrgService()**

```csharp
public TaskOrgService CreateTaskOrgService()
```

#### Returns

[TaskOrgService](./stpsdk.taskorgservice)<br>

## Events

### **OnSymbolAdded**

```csharp
public event SymbolAddedDelegate OnSymbolAdded;
```

### **OnSymbolModified**

```csharp
public event SymbolModifiedDelegate OnSymbolModified;
```

### **OnSymbolDeleted**

```csharp
public event SymbolDeletedDelegate OnSymbolDeleted;
```

### **OnSymbolReport**

```csharp
public event SymboReportDelegate OnSymbolReport;
```

### **OnSymbolEdited**

```csharp
public event SymbolEditDelegate OnSymbolEdited;
```

### **OnSymbolEditedExt**

```csharp
public event SymbolEditExtDelegate OnSymbolEditedExt;
```

### **OnTaskAdded**

```csharp
public event TaskAddeddDelegate OnTaskAdded;
```

### **OnTaskModified**

```csharp
public event TaskModifiedDelegate OnTaskModified;
```

### **OnTaskDeleted**

```csharp
public event TaskDeletedDelegate OnTaskDeleted;
```

### **OnTaskOrgAdded**

```csharp
public event TaskOrgAddeddDelegate OnTaskOrgAdded;
```

### **OnTaskOrgModified**

```csharp
public event TaskOrgModifiedDelegate OnTaskOrgModified;
```

### **OnTaskOrgDeleted**

```csharp
public event TaskOrgDeletedDelegate OnTaskOrgDeleted;
```

### **OnTaskOrgUnitAdded**

```csharp
public event TaskOrgUnitAddeddDelegate OnTaskOrgUnitAdded;
```

### **OnTaskOrgUnitModified**

```csharp
public event TaskOrgUnitModifiedDelegate OnTaskOrgUnitModified;
```

### **OnTaskOrgUnitDeleted**

```csharp
public event TaskOrgUnitDeletedDelegate OnTaskOrgUnitDeleted;
```

### **OnTaskOrgRelationshipAdded**

```csharp
public event TaskOrgRelationshipAddeddDelegate OnTaskOrgRelationshipAdded;
```

### **OnTaskOrgRelationshipModified**

```csharp
public event TaskOrgRelationshipModifiedDelegate OnTaskOrgRelationshipModified;
```

### **OnTaskOrgRelationshipDeleted**

```csharp
public event TaskOrgRelationshipDeletedDelegate OnTaskOrgRelationshipDeleted;
```

### **OnStpMessage**

```csharp
public event StpMessageDelegate OnStpMessage;
```

### **OnCommand**

```csharp
public event CommandDelegate OnCommand;
```

### **OnCommandExt**

```csharp
public event CommandExtDelegate OnCommandExt;
```

### **OnMapOperation**

```csharp
public event MapOperationDelegate OnMapOperation;
```

### **OnMapOperationExt**

```csharp
public event MapOperationExtDelegate OnMapOperationExt;
```

### **OnCoaAdded**

```csharp
public event CoaAddedDelegate OnCoaAdded;
```

### **OnCoaModified**

```csharp
public event CoaModifiedDelegate OnCoaModified;
```

### **OnCoaDeleted**

```csharp
public event CoaDeletedDelegate OnCoaDeleted;
```

### **OnCoaSwitched**

```csharp
public event CoaSwitchDelegate OnCoaSwitched;
```

### **OnRoleSwitched**

```csharp
public event RoleSwitchDelegate OnRoleSwitched;
```

### **OnTaskOrgSwitched**

```csharp
public event TaskOrgSwitchDelegate OnTaskOrgSwitched;
```

### **OnAutoTaskingSwitched**

```csharp
public event AutoTaskingSwitchedDelegate OnAutoTaskingSwitched;
```

### **OnSpeechRecognized**

```csharp
public event SpeechRecognitionDelegate OnSpeechRecognized;
```

### **OnSpeechParsed**

```csharp
public event SpeechParsedDelegate OnSpeechParsed;
```

### **OnListeningStateChanged**

```csharp
public event ListeningStateChangedDelegate OnListeningStateChanged;
```

### **OnListen**

```csharp
public event ListenDelegate OnListen;
```

### **OnSketchRecognized**

```csharp
public event SketchRecognizedDelegate OnSketchRecognized;
```

### **OnSketchIntegrated**

```csharp
public event SketchIntegratedDelegate OnSketchIntegrated;
```

### **OnSketchDiscarded**

```csharp
public event SketchDiscardedDelegate OnSketchDiscarded;
```

### **OnSpeechIntegrated**

```csharp
public event SpeechIntegratedDelegate OnSpeechIntegrated;
```

### **OnSpeechDiscarded**

```csharp
public event SpeechDiscardedDelegate OnSpeechDiscarded;
```

### **OnPenDown**

```csharp
public event PenDownUpDelegate OnPenDown;
```

### **OnPenUp**

```csharp
public event PenDownUpDelegate OnPenUp;
```

### **OnNewScenario**

```csharp
public event NewScenarioDelegate OnNewScenario;
```

### **OnInkProcessed**

```csharp
public event InkProcessedDelegate OnInkProcessed;
```

### **OnShutdown**

```csharp
public event ShutdownDelegate OnShutdown;
```

### **OnConnectionError**

```csharp
public event StpConnectionErrorDelegate OnConnectionError;
```
