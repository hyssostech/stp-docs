# StpObject

Namespace: StpSDK

```csharp
public class StpObject : IStpObject
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpObject](./stpsdk.stpobject)<br>
Implements [IStpObject](./stpsdk.istpobject)

## Properties

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

### **StpObject()**

```csharp
public StpObject()
```

## Methods

### **AsTypedObject()**

```csharp
public StpObject AsTypedObject()
```

#### Returns

[StpObject](./stpsdk.stpobject)<br>
