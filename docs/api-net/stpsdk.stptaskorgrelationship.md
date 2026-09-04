# StpTaskOrgRelationship

Namespace: StpSDK

```csharp
public class StpTaskOrgRelationship : StpObject, IStpObject, System.ComponentModel.INotifyPropertyChanged
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpObject](./stpsdk.stpobject) -> [StpTaskOrgRelationship](./stpsdk.stptaskorgrelationship)<br>
Implements [IStpObject](./stpsdk.istpobject), [INotifyPropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged)

## Properties

### **Type**

```csharp
public override string Type { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Parent**

```csharp
public string Parent { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Child**

```csharp
public string Child { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Relationship**

```csharp
public CommandRelationship Relationship { get; set; }
```

#### Property Value

[CommandRelationship](./stpsdk.commandrelationship)<br>

### **IsMTOE**

```csharp
public bool IsMTOE { get; set; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **ParentTO**

```csharp
public string ParentTO { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Description**

```csharp
public override string Description { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Poid**

```csharp
public virtual string Poid { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **UpdateTimestamp**

```csharp
public virtual string UpdateTimestamp { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **CreationTimestamp**

```csharp
public virtual string CreationTimestamp { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **DbVersion**

```csharp
public virtual string DbVersion { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Extensions**

```csharp
public Dictionary<string, object> Extensions { get; set; }
```

#### Property Value

[Dictionary&lt;String, Object&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br>

## Constructors

### **StpTaskOrgRelationship()**

```csharp
public StpTaskOrgRelationship()
```

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
