# StpService

Namespace: StpSDK

```csharp
public abstract class StpService : System.IDisposable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpService](./stpsdk.stpservice)<br>
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

### **Items**

```csharp
protected IObservableCache<IStpObject, string> Items { get; }
```

#### Property Value

IObservableCache&lt;IStpObject, String&gt;<br>

## Methods

### **SubscribetoEvents()**

```csharp
protected abstract void SubscribetoEvents()
```

### **AddOrUpdate(IStpObject)**

```csharp
protected void AddOrUpdate(IStpObject item)
```

#### Parameters

`item` [IStpObject](./stpsdk.istpobject)<br>

### **RemoveKey(String)**

```csharp
protected void RemoveKey(string poid)
```

#### Parameters

`poid` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Dispose(Boolean)**

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **Dispose()**

```csharp
public void Dispose()
```
