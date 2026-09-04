# UnitRelationshipPair

Namespace: StpSDK

```csharp
internal class UnitRelationshipPair : System.ComponentModel.INotifyPropertyChanged
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [UnitRelationshipPair](./stpsdk.taskorgservice.unitrelationshippair)<br>
Implements [INotifyPropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged)

## Properties

### **Unit**

```csharp
public StpTaskOrgUnit Unit { get; set; }
```

#### Property Value

[StpTaskOrgUnit](./stpsdk.stptaskorgunit)<br>

### **Rel**

```csharp
public Optional<StpTaskOrgRelationship> Rel { get; set; }
```

#### Property Value

Optional&lt;StpTaskOrgRelationship&gt;<br>

## Constructors

### **UnitRelationshipPair(StpTaskOrgUnit, Optional&lt;StpTaskOrgRelationship&gt;)**

```csharp
public UnitRelationshipPair(StpTaskOrgUnit unit, Optional<StpTaskOrgRelationship> rel)
```

#### Parameters

`unit` [StpTaskOrgUnit](./stpsdk.stptaskorgunit)<br>

`rel` Optional&lt;StpTaskOrgRelationship&gt;<br>

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
