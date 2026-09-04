# StpItem

Namespace: StpSDK

```csharp
public class StpItem : StpObject, IStpObject, System.ComponentModel.INotifyPropertyChanged
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpObject](./stpsdk.stpobject) -> [StpItem](./stpsdk.stpitem)<br>
Implements [IStpObject](./stpsdk.istpobject), [INotifyPropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged)

## Properties

### **SymbolId**

```csharp
public virtual string SymbolId { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **CreatorRole**

```csharp
public string CreatorRole { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Confidence**

```csharp
public double Confidence { get; set; }
```

#### Property Value

[Double](https://learn.microsoft.com/en-us/dotnet/api/system.double)<br>

### **Order**

```csharp
public int Order { get; set; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **ParentCoa**

```csharp
public string ParentCoa { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Interval**

```csharp
public object Interval { get; set; }
```

#### Property Value

[Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)<br>

### **FullDescription**

```csharp
public virtual string FullDescription { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Alternates**

```csharp
public List<StpItem> Alternates { get; set; }
```

#### Property Value

[List&lt;StpItem&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

### **Type**

```csharp
public virtual string Type { get; set; }
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

### **Description**

```csharp
public virtual string Description { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

## Constructors

### **StpItem()**

```csharp
public StpItem()
```

### **StpItem(String)**

```csharp
public StpItem(string fsType)
```

#### Parameters

`fsType` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

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
