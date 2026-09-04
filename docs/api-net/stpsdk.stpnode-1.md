# StpNode&lt;T&gt;

Namespace: StpSDK

```csharp
public class StpNode<T> where T : StpItem, INotifyPropertyChanged
```

#### Type Parameters

`T`<br>

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpNode&lt;T&gt;](./stpsdk.stpnode-1)

## Properties

### **Item**

```csharp
public T Item { get; set; }
```

#### Property Value

T<br>

### **Key**

```csharp
public string Key { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **ParentKey**

```csharp
public string ParentKey { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Description**

```csharp
public string Description { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Depth**

```csharp
public int Depth { get; set; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **ChildrenCount**

```csharp
public int ChildrenCount { get; set; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **IsExpanded**

```csharp
public bool IsExpanded { get; set; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **IsSelected**

```csharp
public bool IsSelected { get; set; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

## Constructors

### **StpNode()**

```csharp
public StpNode()
```

### **StpNode(T, String, String, String)**

```csharp
public StpNode(T item, string uniqueKey, string parentId, string description = null)
```

#### Parameters

`item` T<br>

`uniqueKey` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`parentId` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`description` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

## Methods

### **Equals(Object)**

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)<br>

#### Returns

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **GetHashCode()**

```csharp
public override int GetHashCode()
```

#### Returns

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>
