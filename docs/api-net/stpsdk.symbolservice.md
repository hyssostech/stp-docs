# SymbolService

Namespace: StpSDK

```csharp
public class SymbolService : StpService, System.IDisposable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpService](./stpsdk.stpservice) -> [SymbolService](./stpsdk.symbolservice)<br>
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
public IObservableCache<StpSymbol, string> All { get; }
```

#### Property Value

IObservableCache&lt;StpSymbol, String&gt;<br>

### **Units**

```csharp
public IObservableCache<StpSymbol, string> Units { get; }
```

#### Property Value

IObservableCache&lt;StpSymbol, String&gt;<br>

### **TacticalGraphics**

```csharp
public IObservableCache<StpSymbol, string> TacticalGraphics { get; }
```

#### Property Value

IObservableCache&lt;StpSymbol, String&gt;<br>

### **Mootw**

```csharp
public IObservableCache<StpSymbol, string> Mootw { get; }
```

#### Property Value

IObservableCache&lt;StpSymbol, String&gt;<br>

### **Items**

```csharp
protected IObservableCache<IStpObject, string> Items { get; }
```

#### Property Value

IObservableCache&lt;IStpObject, String&gt;<br>

## Constructors

### **SymbolService(StpRecognizer)**

```csharp
public SymbolService(StpRecognizer stpRecognizer)
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
