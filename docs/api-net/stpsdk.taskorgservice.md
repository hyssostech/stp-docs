# TaskOrgService

Namespace: StpSDK

```csharp
public class TaskOrgService : StpService, System.IDisposable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpService](./stpsdk.stpservice) -> [TaskOrgService](./stpsdk.taskorgservice)<br>
Implements [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)

## Fields

### **_nodes**

```csharp
protected IObservableCache<StpTaskOrgUnit, string> _nodes;
```

### **_tree**

```csharp
protected IObservableCache<Node<StpTaskOrgUnit, string>, string> _tree;
```

### **_pairs**

```csharp
protected IObservableCache<UnitRelationshipPair, string> _pairs;
```

### **_stpRelationshipsCache**

```csharp
protected SourceCache<StpTaskOrgRelationship, string> _stpRelationshipsCache;
```

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
public IObservableCache<StpTaskOrgUnit, string> All { get; }
```

#### Property Value

IObservableCache&lt;StpTaskOrgUnit, String&gt;<br>

### **Nodes**

```csharp
public IObservableCache<StpTaskOrgUnit, string> Nodes { get; }
```

#### Property Value

IObservableCache&lt;StpTaskOrgUnit, String&gt;<br>

### **Tree**

```csharp
public IObservableCache<Node<StpTaskOrgUnit, string>, string> Tree { get; }
```

#### Property Value

IObservableCache&lt;Node&lt;StpTaskOrgUnit, String&gt;, String&gt;<br>

### **Pairs**

```csharp
public IObservableCache<UnitRelationshipPair, string> Pairs { get; }
```

#### Property Value

IObservableCache&lt;UnitRelationshipPair, String&gt;<br>

### **Items**

```csharp
protected IObservableCache<IStpObject, string> Items { get; }
```

#### Property Value

IObservableCache&lt;IStpObject, String&gt;<br>

## Constructors

### **TaskOrgService(StpRecognizer)**

```csharp
public TaskOrgService(StpRecognizer stpRecognizer)
```

#### Parameters

`stpRecognizer` [StpRecognizer](./stpsdk.stprecognizer)<br>

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
