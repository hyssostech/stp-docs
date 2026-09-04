# TaskService

Namespace: StpSDK

```csharp
public class TaskService : StpService, System.IDisposable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpService](./stpsdk.stpservice) -> [TaskService](./stpsdk.taskservice)<br>
Implements [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)

## Fields

### **_stpRecognizer**

```csharp
protected StpRecognizer _stpRecognizer;
```

### **disposedValue**

```csharp
protected bool disposedValue;
```

## Properties

### **All**

```csharp
public IObservableCache<StpTask, string> All { get; }
```

#### Property Value

IObservableCache&lt;StpTask, String&gt;<br>

### **Nodes**

```csharp
public IObservableCache<StpNode<StpTask>, string> Nodes { get; }
```

#### Property Value

IObservableCache&lt;StpNode&lt;StpTask&gt;, String&gt;<br>

### **Tree**

```csharp
public IObservableCache<Node<StpNode<StpTask>, string>, string> Tree { get; }
```

#### Property Value

IObservableCache&lt;Node&lt;StpNode&lt;StpTask&gt;, String&gt;, String&gt;<br>

### **Items**

```csharp
protected IObservableCache<IStpObject, string> Items { get; }
```

#### Property Value

IObservableCache&lt;IStpObject, String&gt;<br>

## Constructors

### **TaskService(StpRecognizer, SymbolService)**

```csharp
public TaskService(StpRecognizer stpRecognizer, SymbolService symbolService)
```

#### Parameters

`stpRecognizer` [StpRecognizer](./stpsdk.stprecognizer)<br>

`symbolService` [SymbolService](./stpsdk.symbolservice)<br>

## Methods

### **Dispose(Boolean)**

```csharp
protected override void Dispose(bool disposing)
```

#### Parameters

`disposing` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **SubscribetoEvents()**

```csharp
protected override void SubscribetoEvents()
```
