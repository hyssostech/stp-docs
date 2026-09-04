# StpConnectionErrorEventArgs

Namespace: StpSDK

```csharp
public class StpConnectionErrorEventArgs
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpConnectionErrorEventArgs](./stpsdk.stpconnectionerroreventargs)

## Properties

### **Message**

```csharp
public string Message { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **StpDisabled**

```csharp
public bool StpDisabled { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **Exception**

```csharp
public Exception Exception { get; }
```

#### Property Value

[Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception)<br>

## Constructors

### **StpConnectionErrorEventArgs(String, Boolean, Exception)**

```csharp
public StpConnectionErrorEventArgs(string message, bool stpDisabled, Exception exception)
```

#### Parameters

`message` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`stpDisabled` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

`exception` [Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception)<br>
