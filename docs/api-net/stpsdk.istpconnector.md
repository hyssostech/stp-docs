# IStpConnector

Namespace: StpSDK

```csharp
public interface IStpConnector : System.IDisposable
```

Implements [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)

## Properties

### **Connected**

```csharp
bool Connected { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **Name**

```csharp
string Name { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **BaseName**

```csharp
string BaseName { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Logger**

```csharp
ILogger Logger { get; }
```

#### Property Value

[ILogger](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.ilogger)<br>

## Methods

### **ConnectAsync(String, Int32, CancellationToken)**

```csharp
Task<bool> ConnectAsync(string url, int secondsToRetry = 0, CancellationToken ct = null)
```

#### Parameters

`url` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`secondsToRetry` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

`ct` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;Boolean&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **RegisterAsync(String, List&lt;String&gt;, String, String, CancellationToken)**

```csharp
Task<string> RegisterAsync(string serviceName, List<string> solvables, string machineId = null, string sessionId = null, CancellationToken ct = null)
```

#### Parameters

`serviceName` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`solvables` [List&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

`machineId` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`sessionId` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`ct` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **Disconnect()**

```csharp
void Disconnect()
```

### **Send(String)**

```csharp
void Send(string jsonMessage)
```

#### Parameters

`jsonMessage` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **SendRequestAsync(String, Int32, Int32, CancellationToken)**

```csharp
Task<string> SendRequestAsync(string jsonMessage, int cookie, int timeoutMs = 30000, CancellationToken ct = null)
```

#### Parameters

`jsonMessage` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cookie` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

`timeoutMs` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

`ct` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

## Events

### **OnMessage**

```csharp
event StpMessageReceivedDelegate OnMessage;
```

### **OnConnectionError**

```csharp
event StpConnectionErrorDelegate OnConnectionError;
```
