# StpTask

Namespace: StpSDK

```csharp
public class StpTask : StpItem, IStpObject, System.ComponentModel.INotifyPropertyChanged
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpObject](./stpsdk.stpobject) -> [StpItem](./stpsdk.stpitem) -> [StpTask](./stpsdk.stptask)<br>
Implements [IStpObject](./stpsdk.istpobject), [INotifyPropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged)

## Properties

### **Type**

```csharp
public override string Type { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Name**

```csharp
public string Name { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **How**

```csharp
public TaskHow How { get; set; }
```

#### Property Value

[TaskHow](./stpsdk.taskhow)<br>

### **What**

```csharp
public TaskWhat What { get; set; }
```

#### Property Value

[TaskWhat](./stpsdk.taskwhat)<br>

### **Why**

```csharp
public TaskWhy Why { get; set; }
```

#### Property Value

[TaskWhy](./stpsdk.taskwhy)<br>

### **Roe**

```csharp
public ROE Roe { get; set; }
```

#### Property Value

[ROE](./stpsdk.roe)<br>

### **Prob**

```csharp
public double Prob { get; set; }
```

#### Property Value

[Double](https://learn.microsoft.com/en-us/dotnet/api/system.double)<br>

### **MovementFeatures**

```csharp
public MovementFeatures MovementFeatures { get; set; }
```

#### Property Value

[MovementFeatures](./stpsdk.movementfeatures)<br>

### **TaskStatus**

```csharp
public string TaskStatus { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **UiStatus**

```csharp
public string UiStatus { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **StartTime**

```csharp
public int StartTime { get; set; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **EndTime**

```csharp
public int EndTime { get; set; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **Speech**

```csharp
public string Speech { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Language**

```csharp
public string Language { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Who**

```csharp
public string Who { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Supported**

```csharp
public string Supported { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Tgs**

```csharp
public List<string> Tgs { get; set; }
```

#### Property Value

[List&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

### **FullDescription**

```csharp
public override string FullDescription { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **IsConfirmed**

```csharp
public bool IsConfirmed { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **Description**

```csharp
public override string Description { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

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

### **Alternates**

```csharp
public List<StpItem> Alternates { get; set; }
```

#### Property Value

[List&lt;StpItem&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

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

### **StpTask()**

```csharp
public StpTask()
```

## Events

### **PropertyChanged**

```csharp
public event PropertyChangedEventHandler PropertyChanged;
```
