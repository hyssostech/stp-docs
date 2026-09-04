# StpCommunicationException

Namespace: StpSDK

```csharp
public class StpCommunicationException : System.Exception, System.Runtime.Serialization.ISerializable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception) -> [StpCommunicationException](./stpsdk.stpcommunicationexception)<br>
Implements [ISerializable](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.serialization.iserializable)

## Properties

### **TargetSite**

```csharp
public MethodBase? TargetSite { get; }
```

#### Property Value

[MethodBase](https://learn.microsoft.com/en-us/dotnet/api/system.reflection.methodbase)<br>

### **Message**

```csharp
public virtual string Message { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Data**

```csharp
public virtual IDictionary Data { get; }
```

#### Property Value

[IDictionary](https://learn.microsoft.com/en-us/dotnet/api/system.collections.idictionary)<br>

### **InnerException**

```csharp
public Exception? InnerException { get; }
```

#### Property Value

[Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception)<br>

### **HelpLink**

```csharp
public virtual string? HelpLink { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Source**

```csharp
public virtual string? Source { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **HResult**

```csharp
public int HResult { get; set; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **StackTrace**

```csharp
public virtual string? StackTrace { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

## Constructors

### **StpCommunicationException(String)**

```csharp
public StpCommunicationException(string message)
```

#### Parameters

`message` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **StpCommunicationException(String, Exception)**

```csharp
public StpCommunicationException(string message, Exception inner)
```

#### Parameters

`message` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`inner` [Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception)<br>

## Events

### **SerializeObjectState**

#### Caution

BinaryFormatter serialization is obsolete and should not be used. See https://aka.ms/binaryformatter for more information.

---

```csharp
protected event EventHandler<SafeSerializationEventArgs>? SerializeObjectState;
```
