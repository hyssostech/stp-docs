# ObjectSet

Namespace: StpSDK

```csharp
public class ObjectSet : System.Collections.Generic.IEnumerable`1[[StpSDK.StpObject, StpSDK, Version=0.4.1.0, Culture=neutral, PublicKeyToken=null]], System.Collections.IEnumerable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [ObjectSet](./stpsdk.objectset)<br>
Implements [IEnumerable&lt;StpObject&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1), [IEnumerable](https://learn.microsoft.com/en-us/dotnet/api/system.collections.ienumerable)<br>
Attributes JsonObjectAttribute

## Properties

### **Objects**

```csharp
public List<StpObject> Objects { get; set; }
```

#### Property Value

[List&lt;StpObject&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

### **Count**

```csharp
public int Count { get; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

## Constructors

### **ObjectSet()**

```csharp
public ObjectSet()
```

### **ObjectSet(List&lt;StpObject&gt;)**

```csharp
public ObjectSet(List<StpObject> objects)
```

#### Parameters

`objects` [List&lt;StpObject&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

## Methods

### **GetEnumerator()**

```csharp
public IEnumerator<StpObject> GetEnumerator()
```

#### Returns

[IEnumerator&lt;StpObject&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerator-1)<br>

### **GetTypedObjects()**

```csharp
public List<StpObject> GetTypedObjects()
```

#### Returns

[List&lt;StpObject&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>
