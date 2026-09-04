# UnitTaskPair

Namespace: StpSDK

```csharp
public class UnitTaskPair : System.ComponentModel.INotifyPropertyChanged
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [UnitTaskPair](./stpsdk.unittaskpair)<br>
Implements [INotifyPropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged)

## Fields

### **Task**

```csharp
public StpTask Task;
```

## Properties

### **Symbol**

```csharp
public StpSymbol Symbol { get; set; }
```

#### Property Value

[StpSymbol](./stpsdk.stpsymbol)<br>

## Constructors

### **UnitTaskPair(StpSymbol, Optional&lt;StpTask&gt;)**

```csharp
public UnitTaskPair(StpSymbol symbol, Optional<StpTask> task)
```

#### Parameters

`symbol` [StpSymbol](./stpsdk.stpsymbol)<br>

`task` Optional&lt;StpTask&gt;<br>

## Methods

### **&lt;&gt;OnPropertyChanged(PropertyChangedEventArgs)**

```csharp
protected void <>OnPropertyChanged(PropertyChangedEventArgs eventArgs)
```

#### Parameters

`eventArgs` [PropertyChangedEventArgs](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.propertychangedeventargs)<br>

## Events

### **PropertyChanged**

```csharp
public event PropertyChangedEventHandler PropertyChanged;
```
